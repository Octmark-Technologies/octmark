import { NextRequest, NextResponse } from "next/server";
import { createTicket } from "@/lib/zoho/desk";
import { isZohoConfigured } from "@/lib/zoho/auth";
import { generateOctReference } from "@/lib/forms/reference";
import { screenSpam, getClientIp } from "@/lib/forms/spam";
import { rateLimit } from "@/lib/forms/rateLimit";

interface TicketPayload {
  name: string;
  email: string;
  topic: string;
  message: string;
  // anti-spam signals
  company_url?: string;
  elapsedMs?: number;
  turnstileToken?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let data: TicketPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, topic, message } = data;

  // 1. Validation
  if (!name?.trim() || !email?.trim() || !topic?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // 2. Rate limiting (best-effort, per-IP, tighter than Start to limit dup tickets)
  const ip = getClientIp(request);
  const rl = rateLimit(`support:${ip}`, { limit: 3, windowMs: 10 * 60 * 1000 });
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  // 3. Spam screening
  const spam = await screenSpam({
    honeypot: data.company_url,
    elapsedMs: data.elapsedMs,
    turnstileToken: data.turnstileToken,
    ip,
  });
  if (!spam.ok) {
    console.warn(`[/api/support] Rejected submission (${spam.reason}) ip=${ip}`);
    return NextResponse.json({ error: "Could not submit the form." }, { status: 400 });
  }

  // Customer-facing reference (kept stable regardless of Zoho's own number).
  const ticketId = generateOctReference();

  // 4. Zoho Desk
  if (!isZohoConfigured()) {
    // Fail loud in production so a misconfiguration never silently drops a ticket.
    if (process.env.NODE_ENV === "production") {
      console.error("[/api/support] Zoho NOT configured in production, submission rejected:", {
        email,
        topic,
        receivedAt: new Date().toISOString(),
      });
      return NextResponse.json(
        { error: "We couldn't submit your ticket right now. Please try again shortly." },
        { status: 503 }
      );
    }
    // Dev/preview convenience: accept but do not persist.
    console.warn("[/api/support] Zoho not configured (dev), ticket not persisted:", {
      ticketId,
      name,
      email,
      topic,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ success: true, ticketId, degraded: true }, { status: 200 });
  }

  try {
    const { zohoTicketId, zohoTicketNumber } = await createTicket({
      name,
      email,
      topic,
      message,
      octRef: ticketId,
    });
    // Mapping is durable inside the Zoho ticket (octRef embedded in description);
    // this log records the OCT↔Zoho link for internal lookups.
    console.log(
      `[/api/support] Ticket created octRef=${ticketId} zohoTicketNumber=${zohoTicketNumber} zohoTicketId=${zohoTicketId} ip=${ip}`
    );
    return NextResponse.json({ success: true, ticketId }, { status: 200 });
  } catch (err) {
    console.error("[/api/support] Desk ticket creation failed:", {
      error: (err as Error).message,
      ticketId,
      name,
      email,
      topic,
      messagePreview: message.substring(0, 200),
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: "We couldn't submit your ticket right now. Please try again shortly." },
      { status: 502 }
    );
  }
}
