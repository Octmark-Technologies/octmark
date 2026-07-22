import { NextRequest, NextResponse } from "next/server";
import { createLead } from "@/lib/zoho/crm";
import { isZohoConfigured } from "@/lib/zoho/auth";
import { screenSpam, getClientIp } from "@/lib/forms/spam";
import { rateLimit } from "@/lib/forms/rateLimit";

interface StartPayload {
  name: string;
  email: string;
  website: string;
  challenge: string;
  budget?: string;
  // anti-spam signals
  company_url?: string;
  elapsedMs?: number;
  turnstileToken?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let data: StartPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, website, challenge, budget } = data;

  // 1. Validation
  if (!name?.trim() || !email?.trim() || !website?.trim() || !challenge?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // 2. Rate limiting (best-effort, per-IP)
  const ip = getClientIp(request);
  const rl = rateLimit(`start:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 });
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rl.retryAfterSec) } }
    );
  }

  // 3. Spam screening (honeypot + time-trap + Turnstile)
  const spam = await screenSpam({
    honeypot: data.company_url,
    elapsedMs: data.elapsedMs,
    turnstileToken: data.turnstileToken,
    ip,
  });
  if (!spam.ok) {
    console.warn(`[/api/start] Rejected submission (${spam.reason}) ip=${ip}`);
    return NextResponse.json({ error: "Could not submit the form." }, { status: 400 });
  }

  // 4. Zoho CRM
  if (!isZohoConfigured()) {
    // Fail loud in production so a misconfiguration never silently drops a lead.
    if (process.env.NODE_ENV === "production") {
      console.error("[/api/start] Zoho NOT configured in production, submission rejected:", {
        email,
        receivedAt: new Date().toISOString(),
      });
      return NextResponse.json(
        { error: "We couldn't submit your brief right now. Please try again shortly." },
        { status: 503 }
      );
    }
    // Dev/preview convenience: accept but do not persist.
    console.warn("[/api/start] Zoho not configured (dev), lead not persisted:", {
      name,
      email,
      website,
      budget: budget || "not specified",
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ success: true, degraded: true }, { status: 200 });
  }

  try {
    const { leadId } = await createLead({ name, email, website, challenge, budget });
    console.log(`[/api/start] Lead created leadId=${leadId} ip=${ip}`);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    // Lead must not be silently lost, log full context for manual recovery.
    console.error("[/api/start] CRM lead creation failed:", {
      error: (err as Error).message,
      name,
      email,
      website,
      budget: budget || "not specified",
      challengePreview: challenge.substring(0, 200),
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: "We couldn't submit your brief right now. Please try again shortly." },
      { status: 502 }
    );
  }
}
