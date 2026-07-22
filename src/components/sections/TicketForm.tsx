"use client";

import { useState, useRef } from "react";
import SpamGuardFields from "@/components/forms/SpamGuardFields";
import { collectSpamPayload } from "@/lib/forms/spamClient";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  topic?: string;
  message?: string;
}

const TOPICS = [
  "CRM & Automation",
  "Growth Strategy",
  "Reporting & Analytics",
  "Billing",
  "Onboarding",
  "Other",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(f: { name: string; email: string; topic: string; message: string }): FieldErrors {
  const e: FieldErrors = {};
  if (!f.name.trim()) e.name = "Please add your name.";
  if (!EMAIL_RE.test(f.email.trim())) e.email = "Please add a valid email address.";
  if (!f.topic) e.topic = "Please select a topic.";
  if (!f.message.trim()) e.message = "Please describe your issue so we can help.";
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

export default function TicketForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [ticketId, setTicketId] = useState<string | null>(null);
  const mountedAt = useRef(Date.now());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = {
      name: (form.elements.namedItem("t-name") as HTMLInputElement).value,
      email: (form.elements.namedItem("t-email") as HTMLInputElement).value,
      topic: (form.elements.namedItem("t-topic") as HTMLSelectElement).value,
      message: (form.elements.namedItem("t-message") as HTMLTextAreaElement).value,
    };

    const errs = validate(fields);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, ...collectSpamPayload(form, mountedAt.current) }),
      });

      if (res.ok) {
        const json = await res.json();
        setTicketId(json.ticketId ?? null);
        setStatus("success");
      } else {
        setStatus("error");
      }
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
        <h3 className="font-display text-[22px] text-[#3E3E3E] mb-2">Ticket received.</h3>
        <p className="text-[15px] text-[#52525B] font-sans leading-[1.65] mb-5 max-w-[400px] mx-auto">
          We&rsquo;ve got your request. A team member will review it and respond to your email
          directly, usually within four business hours.
        </p>
        {ticketId && (
          <div className="inline-block bg-white border border-[#E0E5EC] rounded-[4px] px-4 py-2">
            <span className="text-[11px] uppercase tracking-[0.08em] text-[#9AA3B2] font-sans block mb-0.5">
              Ticket reference
            </span>
            <span className="font-mono text-[16px] text-[#014584]">{ticketId}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-xl border border-[#E0E5EC] bg-white p-8"
    >
      <h3 className="font-display text-[22px] text-[#3E3E3E] mb-6">Raise a support ticket</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="t-name" className="block text-[13px] text-[#3E3E3E] font-sans mb-1.5">
            Your name
          </label>
          <input
            id="t-name"
            name="t-name"
            type="text"
            autoComplete="name"
            className={`${INPUT_BASE} ${errors.name ? INPUT_ERROR : INPUT_IDLE}`}
            aria-invalid={!!errors.name}
          />
          <FieldError msg={errors.name} />
        </div>
        <div>
          <label htmlFor="t-email" className="block text-[13px] text-[#3E3E3E] font-sans mb-1.5">
            Email address
          </label>
          <input
            id="t-email"
            name="t-email"
            type="email"
            autoComplete="email"
            className={`${INPUT_BASE} ${errors.email ? INPUT_ERROR : INPUT_IDLE}`}
            aria-invalid={!!errors.email}
          />
          <FieldError msg={errors.email} />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="t-topic" className="block text-[13px] text-[#3E3E3E] font-sans mb-1.5">
          Topic
        </label>
        <select
          id="t-topic"
          name="t-topic"
          className={`${INPUT_BASE} ${errors.topic ? INPUT_ERROR : INPUT_IDLE}`}
          aria-invalid={!!errors.topic}
          defaultValue=""
        >
          <option value="" disabled>Select a topic</option>
          {TOPICS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        <FieldError msg={errors.topic} />
      </div>

      <div className="mb-6">
        <label htmlFor="t-message" className="block text-[13px] text-[#3E3E3E] font-sans mb-1.5">
          Describe your issue
        </label>
        <textarea
          id="t-message"
          name="t-message"
          rows={5}
          className={`${INPUT_BASE} resize-none ${errors.message ? INPUT_ERROR : INPUT_IDLE}`}
          aria-invalid={!!errors.message}
        />
        <FieldError msg={errors.message} />
      </div>

      <SpamGuardFields />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full h-11 bg-[#014584] text-white font-display text-[15px] tracking-[0.03em]
          rounded-lg border-0 transition-colors duration-150
          hover:bg-[#0157A8] disabled:bg-[#E0E5EC] disabled:text-[#9AA3B2] disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Submit ticket"}
      </button>

      {status === "error" && (
        <div
          className="mt-3 px-3.5 py-3 rounded-[4px] text-[13px] font-sans"
          style={{
            background: "rgba(212,79,79,0.06)",
            border: "1px solid rgba(212,79,79,0.20)",
            color: "#A33030",
          }}
        >
          Something went wrong, please try again or email{" "}
          <a href="mailto:hello@octmark.io" className="underline">hello@octmark.io</a>
        </div>
      )}
    </form>
  );
}
