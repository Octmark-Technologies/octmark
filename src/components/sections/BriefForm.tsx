"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import SpamGuardFields from "@/components/forms/SpamGuardFields";
import { collectSpamPayload } from "@/lib/forms/spamClient";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  website?: string;
  challenge?: string;
}

const BUDGET_OPTIONS = [
  { label: "Under ₹50k", value: "under-50k" },
  { label: "₹50k – ₹1.5L", value: "50k-1.5l" },
  { label: "₹1.5L – ₹5L", value: "1.5l-5l" },
  { label: "₹5L+", value: "5l-plus" },
  { label: "I don't know yet", value: "unknown" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: { name: string; email: string; website: string; challenge: string }): FieldErrors {
  const e: FieldErrors = {};
  if (!f.name.trim()) e.name = "Please add your name so we know who to reply to.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "We need a valid email to respond to you.";
  if (!f.website.trim()) e.website = "Please add your website URL, we'll review it before replying.";
  if (!f.challenge.trim()) e.challenge = "Tell us a bit about your challenge, even a few sentences is fine.";
  return e;
}

const INPUT_BASE =
  "w-full px-3.5 py-3 text-[15px] font-display text-[#3E3E3E] bg-[#F8F9FC] border rounded-[4px] outline-none transition-colors duration-150 placeholder:text-[#9AA3B2]";
const INPUT_IDLE = "border-[#E0E5EC] focus:border-[#014584] focus:bg-white";
const INPUT_ERROR = "border-[#D44F4F] bg-[rgba(212,79,79,0.03)]";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <span role="alert" className="block text-[12px] text-[#D44F4F] mt-1 font-sans">
      {msg}
    </span>
  );
}

export default function BriefForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [budget, setBudget] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<{ email: string; website: string } | null>(null);
  const confirmHeadRef = useRef<HTMLHeadingElement>(null);
  const firstErrorRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const mountedAt = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      website: (form.elements.namedItem("website") as HTMLInputElement).value,
      challenge: (form.elements.namedItem("challenge") as HTMLTextAreaElement).value,
    };

    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      const firstKey = Object.keys(errs)[0] as keyof FieldErrors;
      (form.elements.namedItem(firstKey) as HTMLElement | null)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...fields,
          budget: budget ?? "not specified",
          ...collectSpamPayload(form, mountedAt.current),
        }),
      });

      if (res.ok) {
        setConfirmed({ email: fields.email, website: fields.website });
        setStatus("success");
        setTimeout(() => confirmHeadRef.current?.focus(), 50);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success" && confirmed) {
    return (
      <div
        id="form-card"
        className="border border-[#E0E5EC] rounded-[6px] p-12 text-center"
        style={{ boxShadow: "0 4px 24px rgba(1,69,132,0.06)" }}
      >
        <div className="mx-auto mb-5 w-12 h-12 rounded-full border-2 border-[#014584] flex items-center justify-center">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <polyline points="4 11 9 16 18 7" stroke="#014584" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="block font-sans text-[11px] uppercase tracking-[0.14em] text-[#014584] mb-3">
          Brief received
        </span>
        <h2
          ref={confirmHeadRef}
          tabIndex={-1}
          className="font-display text-[24px] text-[#3E3E3E] mb-3 outline-none"
        >
          We have your brief.
        </h2>
        <p className="text-[15px] text-[#52525B] font-sans leading-[1.65] mb-6 max-w-[420px] mx-auto">
          We&rsquo;ll review your website and challenge description and respond with specific
          observations, usually within one business day.
        </p>
        <div
          className="text-left text-[13px] text-[#52525B] font-sans leading-[1.7] bg-[#F8F9FC] border border-[#E0E5EC] rounded-[4px] px-4 py-3 mb-6"
        >
          <div>
            We&rsquo;ll reply to:{" "}
            <span className="text-[#014584]">{confirmed.email}</span>
          </div>
          <div>
            Your website:{" "}
            <span className="text-[#014584]">{confirmed.website}</span>
          </div>
        </div>
        <Link
          href="/how-we-work"
          className="text-[14px] text-[#014584] font-sans hover:underline"
        >
          While you wait, read how we work →
        </Link>
      </div>
    );
  }

  return (
    <div id="form-card">
      <span className="block font-sans text-[13px] uppercase tracking-[0.08em] text-[#014584] mb-4">
        Your brief
      </span>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="border border-[#E0E5EC] rounded-[6px] px-9 py-9"
        style={{ boxShadow: "0 4px 24px rgba(1,69,132,0.06)" }}
      >
        {/* Name */}
        <div className="mb-5">
          <label htmlFor="name" className="block text-[13px] text-[#3E3E3E] font-sans mb-1.5">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={`${INPUT_BASE} ${errors.name ? INPUT_ERROR : INPUT_IDLE}`}
            aria-describedby={errors.name ? "err-name" : undefined}
            aria-invalid={!!errors.name}
          />
          <FieldError msg={errors.name} />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label htmlFor="email" className="block text-[13px] text-[#3E3E3E] font-sans mb-1">
            Work email
          </label>
          <span className="block text-[12px] text-[#9AA3B2] font-sans mb-1.5">
            We respond to this address, no auto-confirm emails
          </span>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={`${INPUT_BASE} ${errors.email ? INPUT_ERROR : INPUT_IDLE}`}
            aria-invalid={!!errors.email}
          />
          <FieldError msg={errors.email} />
        </div>

        {/* Website */}
        <div className="mb-5">
          <label htmlFor="website" className="block text-[13px] text-[#3E3E3E] font-sans mb-1">
            Your website
          </label>
          <span className="block text-[12px] text-[#9AA3B2] font-sans mb-1.5">
            Before we reply, we&rsquo;ll look at this, it&rsquo;s the fastest way for us to come prepared
          </span>
          <input
            id="website"
            name="website"
            type="url"
            autoComplete="url"
            placeholder="https://"
            className={`${INPUT_BASE} ${errors.website ? INPUT_ERROR : INPUT_IDLE}`}
            aria-invalid={!!errors.website}
          />
          <FieldError msg={errors.website} />
        </div>

        {/* Growth challenge */}
        <div className="mb-6">
          <label htmlFor="challenge" className="block text-[13px] text-[#3E3E3E] font-sans mb-1.5">
            What&rsquo;s not working, or what do you want to build?
          </label>
          <textarea
            id="challenge"
            name="challenge"
            rows={4}
            className={`${INPUT_BASE} resize-none ${errors.challenge ? INPUT_ERROR : INPUT_IDLE}`}
            aria-invalid={!!errors.challenge}
          />
          <span className="block text-[12px] text-[#9AA3B2] font-sans mt-1">
            Tell us enough to be useful.
          </span>
          <FieldError msg={errors.challenge} />
        </div>

        {/* Budget selector */}
        <div className="mb-7">
          <p className="text-[13px] text-[#3E3E3E] font-sans mb-1">
            Monthly investment range{" "}
            <span className="text-[#9AA3B2]">(optional)</span>
          </p>
          <p className="text-[12px] text-[#9AA3B2] font-sans mb-3">
            Helps us come prepared, not a commitment
          </p>
          <div
            className="grid grid-cols-2 gap-2"
            role="group"
            aria-label="Monthly investment range"
          >
            {BUDGET_OPTIONS.map((opt) => {
              const selected = budget === opt.value;
              return (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => setBudget(selected ? null : opt.value)}
                  aria-pressed={selected}
                  className={[
                    "px-3.5 py-2.5 text-left text-[13px] font-display rounded-[4px] border",
                    "transition-all duration-150",
                    selected
                      ? "border-[#014584] bg-[rgba(1,69,132,0.07)] text-[#014584]"
                      : "border-[#E0E5EC] bg-[#F8F9FC] text-[#52525B] hover:border-[#014584] hover:text-[#3E3E3E]",
                  ].join(" ")}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>

        <SpamGuardFields />

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "submitting"}
          aria-busy={status === "submitting"}
          aria-disabled={status === "submitting"}
          className="w-full h-[52px] bg-[#014584] text-white font-display text-[16px]
            rounded-[4px] border-0 transition-colors duration-150
            hover:bg-[#0157A8] disabled:bg-[#E0E5EC] disabled:text-[#9AA3B2] disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending..." : "Send your brief to Octmark →"}
        </button>

        {/* Network error strip */}
        {status === "error" && (
          <div
            className="mt-3 px-3.5 py-3 rounded-[4px] text-[14px] font-sans"
            style={{
              background: "rgba(212,79,79,0.06)",
              border: "1px solid rgba(212,79,79,0.20)",
              color: "#A33030",
            }}
          >
            Something went wrong, please try again, or email us directly at{" "}
            <a href="mailto:hello@octmark.io" className="underline">
              hello@octmark.io
            </a>
          </div>
        )}

        {/* Alternative path */}
        <p className="text-center text-[14px] text-[#52525B] font-sans mt-5">
          Prefer to talk first?{" "}
          <a
            href="https://calendly.com/octmark"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#014584] hover:underline"
          >
            Book a 30-minute call →
          </a>
        </p>
      </form>
    </div>
  );
}
