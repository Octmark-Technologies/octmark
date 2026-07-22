/**
 * Zoho CRM integration, creates a Lead from the Start (growth audit) form.
 * API: POST {ZOHO_API_DOMAIN}/crm/v8/Leads (India DC: www.zohoapis.in).
 *
 * V1 decision: do NOT create custom CRM fields. Budget is folded into the
 * standard Description field rather than a custom picklist.
 */
import { zohoFetch, withRetry, ZohoApiError } from "./auth";
import { splitName } from "../forms/text";

export interface LeadInput {
  name: string;
  email: string;
  website: string;
  challenge: string;
  budget?: string; // value code or "not specified"
  /** Zoho Lead_Source. Defaults to the growth-audit source. */
  source?: string;
}

const BUDGET_LABELS: Record<string, string> = {
  "under-50k": "Under ₹50k / month",
  "50k-1.5l": "₹50k – ₹1.5L / month",
  "1.5l-5l": "₹1.5L – ₹5L / month",
  "5l-plus": "₹5L+ / month",
  unknown: "Not sure yet",
};

function budgetLabel(budget?: string): string {
  if (!budget || budget === "not specified") return "Not specified";
  return BUDGET_LABELS[budget] ?? budget;
}

/** Prepends https:// if the user omitted a scheme. */
function normaliseWebsite(website: string): string {
  const trimmed = website.trim();
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

/** Builds the Lead Description (challenge + budget, since no custom fields in V1). */
function buildDescription(input: LeadInput): string {
  return [
    input.challenge.trim(),
    "",
    "Submitted via Octmark website (Growth Audit form)",
    `Monthly investment range: ${budgetLabel(input.budget)}`,
  ].join("\n");
}

/**
 * Creates a Lead in Zoho CRM. Returns the new Lead id.
 * Retries once on transient errors; not retried on validation errors.
 */
export async function createLead(input: LeadInput): Promise<{ leadId: string }> {
  const apiDomain = process.env.ZOHO_API_DOMAIN!; // presence checked by isZohoConfigured()
  const { firstName, lastName } = splitName(input.name);

  const payload = {
    data: [
      {
        Last_Name: lastName,
        ...(firstName ? { First_Name: firstName } : {}),
        Email: input.email.trim().toLowerCase(),
        Website: normaliseWebsite(input.website),
        Description: buildDescription(input),
        Lead_Source: input.source ?? "Website, Growth Audit",
      },
    ],
    trigger: ["workflow"],
  };

  return withRetry(
    async () => {
      const res = await zohoFetch(`${apiDomain}/crm/v8/Leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const text = await res.text();
      if (!res.ok) {
        throw new ZohoApiError(
          `CRM createLead failed (${res.status})`,
          res.status,
          text,
          res.status === 429 || res.status >= 500
        );
      }

      const json = JSON.parse(text) as {
        data?: Array<{ code?: string; details?: { id?: string }; message?: string }>;
      };
      const record = json.data?.[0];
      if (record?.code !== "SUCCESS" || !record.details?.id) {
        // e.g. DUPLICATE_DATA, MANDATORY_NOT_FOUND, not retryable
        throw new ZohoApiError(
          `CRM createLead rejected: ${record?.code ?? "unknown"} ${record?.message ?? ""}`,
          res.status,
          text,
          false
        );
      }
      return { leadId: record.details.id };
    },
    { retries: 1 }
  );
}
