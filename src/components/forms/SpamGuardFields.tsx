"use client";

/**
 * Renders the anti-spam fields shared by public forms:
 *  - a visually-hidden honeypot input (bots fill it; humans never see it)
 *  - the Cloudflare Turnstile widget (only when a site key is configured)
 *
 * Turnstile auto-injects a hidden `cf-turnstile-response` input into the form,
 * which is read at submit time by collectSpamPayload().
 */
import Script from "next/script";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

export default function SpamGuardFields() {
  return (
    <>
      {/* Honeypot, off-screen, not focusable, ignored by autofill */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_url">Leave this field empty</label>
        <input
          id="company_url"
          name="company_url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Cloudflare Turnstile (implicit rendering) */}
      {SITE_KEY && (
        <>
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="lazyOnload"
          />
          <div className="cf-turnstile mt-2 mb-4" data-sitekey={SITE_KEY} data-theme="light" />
        </>
      )}
    </>
  );
}
