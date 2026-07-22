/**
 * Server-side spam screening for public forms.
 * Layers: honeypot field, time-trap, and Cloudflare Turnstile verification.
 *
 * Graceful degradation: if TURNSTILE_SECRET_KEY is not configured, Turnstile
 * verification is skipped (honeypot + time-trap still apply). This keeps local
 * dev and builds working before keys are provisioned.
 */

const TURNSTILE_VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const MIN_FILL_MS = 2000; // submissions faster than this are almost certainly bots

export interface SpamSignals {
  honeypot?: string; // must be empty for humans
  elapsedMs?: number; // time between form render and submit
  turnstileToken?: string;
  ip?: string;
}

export interface SpamResult {
  ok: boolean;
  reason?: "honeypot" | "too_fast" | "turnstile";
}

/** Extracts the client IP from common proxy headers. */
export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

async function verifyTurnstile(token: string | undefined, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) return true; // not configured → skip (see module docstring)
  if (!token) return false;

  const body = new URLSearchParams({ secret, response: token });
  if (ip && ip !== "unknown") body.set("remoteip", ip);

  try {
    const res = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const json = (await res.json()) as { success?: boolean };
    return json.success === true;
  } catch {
    // If Cloudflare is unreachable, fail closed for safety.
    return false;
  }
}

/** Runs all spam checks. Cheap checks first, network (Turnstile) last. */
export async function screenSpam(signals: SpamSignals): Promise<SpamResult> {
  if (signals.honeypot && signals.honeypot.trim() !== "") {
    return { ok: false, reason: "honeypot" };
  }
  if (typeof signals.elapsedMs === "number" && signals.elapsedMs < MIN_FILL_MS) {
    return { ok: false, reason: "too_fast" };
  }
  const turnstileOk = await verifyTurnstile(signals.turnstileToken, signals.ip);
  if (!turnstileOk) return { ok: false, reason: "turnstile" };

  return { ok: true };
}
