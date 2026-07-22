"use client";

import { useState, useRef } from "react";
import SpamGuardFields from "@/components/forms/SpamGuardFields";
import { collectSpamPayload } from "@/lib/forms/spamClient";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
}

const INTERESTS = [
  "Octrackit",
  "AI Agents",
  "Marketing Automation",
  "CRM Solutions",
  "Attribution / Server-Side Tracking",
  "Lead Quality Intelligence",
  "Not sure, show me the platform",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: { name: string; email: string; company: string; interest: string }): FieldErrors {
  const e: FieldErrors = {};
  if (!f.name.trim()) e.name = "Please add your name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Please add a valid work email.";
  if (!f.company.trim()) e.company = "Please add your company or website.";
  if (!f.interest) e.interest = "Tell us what you'd like to see.";
  return e;
}

const INPUT_BASE =
  "w-full px-3.5 py-3 text-[15px] font-sans text-[#3E3E3E] bg-[#F8F9FC] border rounded-[6px] outline-none transition-colors duration-150";
const INPUT_IDLE = "border-[#E0E5EC] focus:border-[#014584] focus:bg-white";
const INPUT_ERROR = "border-[#D44F4F]";

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <span role="alert" className="block text-[12px] text-[#D44F4F] mt-1 font-sans">
      {msg}
    </span>
  );
}

export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const mountedAt = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = {
      name: (form.elements.namedItem("d-name") as HTMLInputElement).value,
      email: (form.elements.namedItem("d-email") as HTMLInputElement).value,
      company: (form.elements.namedItem("d-company") as HTMLInputElement).value,
      interest: (form.elements.namedItem("d-interest") as HTMLSelectElement).value,
    };

    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, ...collectSpamPayload(form, mountedAt.current) }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-[#E0E5EC] bg-[#F8F9FC] p-8 text-center">
        <div className="mx-auto mb-4 w-10 h-10 rounded-full border-2 border-[#014584] flex items-center justify-center">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <polyline points="3 9 7 13 15 5" stroke="#014584" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-display text-[22px] text-[#3E3E3E] mb-2">Demo requested.</h3>
        <p className="text-[15px] text-[#52525B] font-sans leading-[1.65] max-w-[400px] mx-auto">
          We&rsquo;ll be in touch to schedule a walkthrough, usually within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-[#E0E5EC] bg-white p-8">
      <h3 className="font-display text-[22px] text-[#3E3E3E] mb-6">Book a platform demo</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="d-name" className="block text-[13px] text-[#3E3E3E] font-sans mb-1.5">
            Your name
          </label>
          <input id="d-name" name="d-name" type="text" autoComplete="name"
            className={`${INPUT_BASE} ${errors.name ? INPUT_ERROR : INPUT_IDLE}`} aria-invalid={!!errors.name} />
          <FieldError msg={errors.name} />
        </div>
        <div>
          <label htmlFor="d-email" className="block text-[13px] text-[#3E3E3E] font-sans mb-1.5">
            Work email
          </label>
          <input id="d-email" name="d-email" type="email" autoComplete="email"
            className={`${INPUT_BASE} ${errors.email ? INPUT_ERROR : INPUT_IDLE}`} aria-invalid={!!errors.email} />
          <FieldError msg={errors.email} />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="d-company" className="block text-[13px] text-[#3E3E3E] font-sans mb-1.5">
          Company or website
        </label>
        <input id="d-company" name="d-company" type="text" autoComplete="organization"
          className={`${INPUT_BASE} ${errors.company ? INPUT_ERROR : INPUT_IDLE}`} aria-invalid={!!errors.company} />
        <FieldError msg={errors.company} />
      </div>

      <div className="mb-6">
        <label htmlFor="d-interest" className="block text-[13px] text-[#3E3E3E] font-sans mb-1.5">
          What would you like to see?
        </label>
        <select id="d-interest" name="d-interest" defaultValue=""
          className={`${INPUT_BASE} ${errors.interest ? INPUT_ERROR : INPUT_IDLE}`} aria-invalid={!!errors.interest}>
          <option value="" disabled>Select a product or capability</option>
          {INTERESTS.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
        <FieldError msg={errors.interest} />
      </div>

      <SpamGuardFields />

      <button type="submit" disabled={status === "submitting"}
        className="w-full h-11 bg-[#014584] text-white font-display text-[15px] tracking-[0.03em]
          rounded-lg border-0 transition-colors duration-150
          hover:bg-[#0157A8] disabled:bg-[#E0E5EC] disabled:text-[#9AA3B2] disabled:cursor-not-allowed">
        {status === "submitting" ? "Sending..." : "Request demo"}
      </button>

      {status === "error" && (
        <div className="mt-3 px-3.5 py-3 rounded-[4px] text-[13px] font-sans"
          style={{ background: "rgba(212,79,79,0.06)", border: "1px solid rgba(212,79,79,0.20)", color: "#A33030" }}>
          Something went wrong, please try again or email{" "}
          <a href="mailto:hello@octmark.io" className="underline">hello@octmark.io</a>
        </div>
      )}
    </form>
  );
}
