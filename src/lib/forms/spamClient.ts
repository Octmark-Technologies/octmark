/** Client-side helper to collect anti-spam signals from a form at submit time. */

export interface SpamPayload {
  company_url: string; // honeypot value
  elapsedMs: number; // time since the form mounted
  turnstileToken: string; // Cloudflare Turnstile response token (empty if not configured)
}

/**
 * Reads the honeypot, computes fill time, and grabs the Turnstile token that
 * the widget injected into the form as `cf-turnstile-response`.
 */
export function collectSpamPayload(form: HTMLFormElement, mountedAtMs: number): SpamPayload {
  const honeypot = (form.elements.namedItem("company_url") as HTMLInputElement | null)?.value ?? "";
  const turnstile = (form.elements.namedItem("cf-turnstile-response") as HTMLInputElement | null)?.value ?? "";
  return {
    company_url: honeypot,
    elapsedMs: Date.now() - mountedAtMs,
    turnstileToken: turnstile,
  };
}
