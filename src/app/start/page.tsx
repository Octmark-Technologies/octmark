import type { Metadata } from "next";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import BriefForm from "@/components/sections/BriefForm";
import StepStrip from "@/components/sections/StepStrip";
import HonestAuditCallout from "@/components/sections/HonestAuditCallout";
import FAQAccordion from "@/components/sections/FAQAccordion";

export const metadata: Metadata = {
  title: "Get a Free Growth Audit",
  description:
    "Tell us about your business and growth challenge. We'll tell you honestly if we can help, and if you're ready.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/start" },
  openGraph: {
    title: "Get a Free Growth Audit | Octmark",
    description:
      "Tell us about your business and growth challenge. We'll tell you honestly if we can help, and if you're ready.",
    url: "/start",
    type: "website",
  },
};

const STEPS = [
  {
    number: "01",
    title: "We review your website and brief",
    body: "Within one business day of receiving your brief, a senior member of the team reviews your website, your challenge description, and the context you've shared. No junior account manager. No automated triage.",
  },
  {
    number: "02",
    title: "We prepare specific observations",
    body: "We identify the 2–3 highest-leverage changes in your growth system, based on what we actually see, not what we assume. If the answer is something outside our scope, we'll say so and tell you what you need instead.",
  },
  {
    number: "03",
    title: "We send your audit",
    body: "You receive a growth audit, specific to your business, your challenge, and your current setup. This is a genuine deliverable, not a discovery call script. We'd rather send something useful than schedule a call you don't need.",
  },
];

const FAQS = [
  {
    question: "Is the growth audit really free?",
    answer:
      "Yes. You receive a genuine audit of your growth situation, specific observations, not a discovery call script or a marketing brochure. We produce it because it's the fastest way to demonstrate how we think. If we're not the right fit, we'll say so in the audit itself.",
  },
  {
    question: "What happens if we're not a good fit?",
    answer:
      "We'll tell you clearly and early, in the audit, before any call. We'll explain what we think you actually need and, if we can, point you toward the right kind of help. We don't pitch engagements we're not confident about. It costs us both time we don't have.",
  },
  {
    question: "How long does the audit take?",
    answer:
      "We aim to respond within one business day of receiving your brief. The quality of the audit depends on the detail you share, the more specific you are about what's not working, the more specific we can be in response.",
  },
  {
    question: "Do I need a brief prepared before filling this in?",
    answer:
      "No. A few sentences describing what's not working, or what you want to build, is enough to start. The quality of what you receive back is not proportional to the length of what you send us. It's proportional to the honesty of it.",
  },
  {
    question: "What's your minimum engagement size?",
    answer:
      "We work with growth-stage businesses. We don't have a fixed minimum, but we do work with a focused number of clients at a time. The audit helps us both understand whether the timing, scope, and ambition are the right match.",
  },
  {
    question: "I'd rather talk to someone first. Is that possible?",
    answer:
      "Yes. Below the brief form there is a link to book a 30-minute call. That conversation is not a sales call, it's a diagnostic conversation. You can also email directly at hello@octmark.io if you'd prefer.",
  },
];

const WHAT_WE_LOOK_AT = [
  "Your current growth channels and where they're breaking down",
  "Your CRM and automation setup (or absence of one)",
  "The gap between what you're spending and what you're attributing",
];

const TRUST_SIGNALS = [
  "40+ growth systems built",
  "CRM Architecture Authorised Partner",
  "Based in India · Working globally",
];

export default function StartPage() {
  return (
    <>
      <GlobalHeader darkHero={false} hideCta />
      <main id="main" className="flex-1">

        {/* Hero + Form */}
        <section className="bg-white pt-[120px] pb-20">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Context column, desktop: left, mobile: below form */}
              <div className="order-2 lg:order-1">
                <span className="stag">START</span>
                <h1 className="font-display text-[36px] text-[#3E3E3E] leading-[1.2] tracking-[-0.3px] mt-2">
                  Tell us what you&rsquo;re working on.
                </h1>
                <p className="text-[16px] text-[#52525B] font-sans leading-[1.65] mt-4 mb-8 max-w-[460px]">
                  We&rsquo;ll review your growth situation and respond with specific observations,
                  including if what you need is something we don&rsquo;t offer.
                </p>

                <hr className="w-10 border-t border-[#E0E5EC] mb-8" />

                <div className="mb-8">
                  <span className="block font-sans text-[11px] uppercase tracking-[0.10em] text-[#014584] mb-3">
                    What we look at:
                  </span>
                  <ul className="space-y-2.5">
                    {WHAT_WE_LOOK_AT.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] text-[#52525B] font-sans leading-[1.6]">
                        <span className="text-[#014584] flex-shrink-0 mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-1.5">
                  {TRUST_SIGNALS.map((signal) => (
                    <span key={signal} className="font-mono text-[12px] text-[#9AA3B2]">
                      {signal}
                    </span>
                  ))}
                </div>
              </div>

              {/* Form column, desktop: right, mobile: top */}
              <div className="order-1 lg:order-2">
                <BriefForm />
              </div>

            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <StepStrip
          heading="A human reviews your brief. Then we respond."
          steps={STEPS}
        />

        {/* Honest-audit callout */}
        <HonestAuditCallout />

        {/* FAQ */}
        <FAQAccordion heading="What you might be wondering" items={FAQS} />

        {/* Footer CTA */}
        <section
          className="py-20 border-t border-[rgba(255,255,255,0.06)]"
          style={{ background: "#070D1A" }}
          aria-label="Direct contact"
        >
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 text-center">
            <ScrollReveal>
              <span className="stag stag-on-dark">START</span>
              <h2 className="font-display text-[40px] text-[#EEF1F7] leading-[1.2] mt-1 mb-4">
                Ready to talk?
              </h2>
              <p className="text-[17px] text-[#8A96A8] font-sans mb-9">
                No brief required. Fifteen minutes is enough.
              </p>
              <a
                href="https://calendly.com/octmark"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-13 px-10
                  border border-[rgba(238,241,247,0.28)] text-[#EEF1F7]
                  font-display text-[16px] tracking-[0.03em] rounded-[4px]
                  transition-all duration-150
                  hover:border-[rgba(238,241,247,0.55)] hover:bg-[rgba(255,255,255,0.05)]"
              >
                Book a 30-minute call
              </a>
              <div className="flex items-center justify-center gap-5 mt-6 flex-wrap">
                <a
                  href="mailto:hello@octmark.io"
                  className="text-[16px] text-[#EEF1F7] font-sans hover:text-[#4D9FE0] transition-colors"
                >
                  hello@octmark.io
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <GlobalFooter />
    </>
  );
}
