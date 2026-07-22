/**
 * Zoho Desk integration, creates a support Ticket from the Support form.
 * API base: {ZOHO_DESK_DOMAIN}/api/v1 (India DC: desk.zoho.in).
 * Every Desk call requires the `orgId` header.
 *
 * Flow (per approved plan):
 *   1. Search contact by email
 *   2. Create contact if missing
 *   3. Create ticket
 *
 * Ticket reference: the customer-facing Octmark reference (OCT-XXXXXX-XX) is
 * embedded in the ticket description so the mapping to the Zoho ticket lives in
 * Zoho itself (searchable), no separate database needed. The Zoho ticket
 * number is returned to the caller for internal logging.
 */
import { zohoFetch, withRetry, ZohoApiError } from "./auth";
import { splitName, clampText } from "../forms/text";

export interface TicketInput {
  name: string;
  email: string;
  topic: string;
  message: string;
  octRef: string; // customer-facing Octmark reference
}

export interface TicketResult {
  zohoTicketId: string;
  zohoTicketNumber: string;
}

function deskBase(): string {
  return `${process.env.ZOHO_DESK_DOMAIN!}/api/v1`;
}

function deskHeaders(): Record<string, string> {
  return {
    "Content-Type": "application/json",
    orgId: process.env.ZOHO_DESK_ORG_ID!,
  };
}

/** Maps form topics to a reasonable default priority. */
function priorityForTopic(topic: string): string {
  return topic.toLowerCase().includes("billing") ? "High" : "Medium";
}

/**
 * Resolves a Desk contactId for the given email, searching first, creating if
 * absent. Search is idempotent and safe to retry.
 */
export async function resolveContact(
  email: string,
  name: string
): Promise<string> {
  const normalisedEmail = email.trim().toLowerCase();
  const { firstName, lastName } = splitName(name);

  // 1. Search by email
  const found = await withRetry(
    async () => {
      const res = await zohoFetch(
        `${deskBase()}/contacts/search?email=${encodeURIComponent(normalisedEmail)}`,
        { method: "GET" },
        { headers: deskHeaders() }
      );
      // 204 No Content => no match
      if (res.status === 204) return null;
      const text = await res.text();
      if (!res.ok) {
        throw new ZohoApiError(
          `Desk contact search failed (${res.status})`,
          res.status,
          text,
          res.status === 429 || res.status >= 500
        );
      }
      const json = JSON.parse(text) as { data?: Array<{ id: string }> };
      return json.data?.[0]?.id ?? null;
    },
    { retries: 2 }
  );

  if (found) return found;

  // 2. Create contact (retryable: guarded by the preceding search)
  return withRetry(
    async () => {
      const res = await zohoFetch(
        `${deskBase()}/contacts`,
        {
          method: "POST",
          body: JSON.stringify({
            lastName,
            ...(firstName ? { firstName } : {}),
            email: normalisedEmail,
          }),
        },
        { headers: deskHeaders() }
      );
      const text = await res.text();
      if (!res.ok) {
        throw new ZohoApiError(
          `Desk contact create failed (${res.status})`,
          res.status,
          text,
          res.status === 429 || res.status >= 500
        );
      }
      const json = JSON.parse(text) as { id?: string };
      if (!json.id) throw new ZohoApiError("Desk contact create: no id", res.status, text, false);
      return json.id;
    },
    { retries: 1 }
  );
}

/**
 * Creates a Desk ticket. NOT retried, a retry could create a duplicate ticket
 * (no idempotency store in V1). Returns the Zoho ticket id + number.
 */
export async function createTicket(input: TicketInput): Promise<TicketResult> {
  const contactId = await resolveContact(input.email, input.name);

  const description = [
    clampText(input.message, 8000),
    "",
    `[Octmark Reference: ${input.octRef}]`,
  ].join("\n");

  const payload = {
    subject: clampText(`${input.topic}, ${input.name}`, 250),
    description,
    departmentId: process.env.ZOHO_DESK_DEPARTMENT_ID!,
    contactId,
    channel: "Web",
    priority: priorityForTopic(input.topic),
  };

  const res = await zohoFetch(
    `${deskBase()}/tickets`,
    { method: "POST", body: JSON.stringify(payload) },
    { headers: deskHeaders() }
  );

  const text = await res.text();
  if (!res.ok) {
    throw new ZohoApiError(
      `Desk createTicket failed (${res.status})`,
      res.status,
      text,
      res.status === 429 || res.status >= 500
    );
  }

  const json = JSON.parse(text) as { id?: string; ticketNumber?: string };
  if (!json.id) throw new ZohoApiError("Desk createTicket: no id", res.status, text, false);

  return { zohoTicketId: json.id, zohoTicketNumber: json.ticketNumber ?? "" };
}
