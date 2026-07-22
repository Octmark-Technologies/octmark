import { NextRequest, NextResponse } from "next/server";
import { createLead } from "@/lib/zoho/crm";
import { isZohoConfigured } from "@/lib/zoho/auth";
import { screenSpam, getClientIp } from "@/lib/forms/spam";
import { rateLimit } from "@/lib/forms/rateLimit";

interface DemoPayload {
  name: string;
  email: string;
  company: string;
  interest: string; // what they want to see / which product
  // anti-spam signals
  company_url?: string;
  elapsedMs?: number;
  turnstileToken?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  let data: DemoPayload;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, company, interest } = data;

  // 1. Validation
  if (!name?.trim() || !email?.trim() || !company?.trim() || !interest?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // 2. Rate limiting (best-effort, per-IP)
  const ip = getClientIp(request);
  const rl = rateLimit(`demo:${ip}`, { limit: 5, windowMs: 10 * 60 * 1000 });
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
    console.warn(`[/api/demo] Rejected submission (${spam.reason}) ip=${ip}`);
    return NextResponse.json({ error: "Could not submit the form." }, { status: 400 });
  }

  // 4. Zoho CRM (demo lead)
  if (!isZohoConfigured()) {
    if (process.env.NODE_ENV === "production") {
      console.error("[/api/demo] Zoho NOT configured in production, submission rejected:", {
        email,
        receivedAt: new Date().toISOString(),
      });
      return NextResponse.json(
        { error: "We couldn't submit your request right now. Please try again shortly." },
        { status: 503 }
      );
    }
    console.warn("[/api/demo] Zoho not configured (dev), demo request not persisted:", {
      name,
      email,
      company,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ success: true, degraded: true }, { status: 200 });
  }

  try {
    const { leadId } = await createLead({
      name,
      email,
      website: company,
      challenge: `Demo request, interested in: ${interest}`,
      source: "Website, Demo Request",
    });
    console.log(`[/api/demo] Demo lead created leadId=${leadId} ip=${ip}`);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("[/api/demo] Demo lead creation failed:", {
      error: (err as Error).message,
      name,
      email,
      company,
      interestPreview: interest.substring(0, 200),
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: "We couldn't submit your request right now. Please try again shortly." },
      { status: 502 }
    );
  }
}
