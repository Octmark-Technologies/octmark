import Link from "next/link";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How We Work",
  description: "Our operating model: how we attract, engage, convert, deliver, and retain for growth-stage businesses.",
  alternates: { canonical: "/how-we-work" },
  openGraph: {
    title: "How We Work",
    description: "Our operating model: how we attract, engage, convert, deliver, and retain for growth-stage businesses.",
    url: "/how-we-work",
    type: "website",
  },
};

const STAGES = [
  {
    id: "attract",
    label: "Attract",
    headline: "Getting the right people to find you.",
    body: "We map your best acquisition channels against actual lead quality, not just volume. We then build the system that delivers more of your highest-value audience at lower CAC.",
    services: [
      "Channel audit and prioritisation",
      "SEO architecture and content strategy",
      "Paid acquisition setup and optimisation",
      "LinkedIn and outbound architecture",
      "Landing page and conversion infrastructure",
    ],
  },
  {
    id: "engage",
    label: "Engage",
    headline: "Moving interest into intent.",
    body: "We build the CRM architecture, email sequences, and lead nurture systems that keep qualified prospects moving through your pipeline, without manual follow-up.",
    services: [
      "CRM selection and implementation",
      "Lead scoring and qualification models",
      "Email automation and sequences",
      "Lead magnet and content offer strategy",
      "Pipeline visibility and reporting",
    ],
  },
  {
    id: "convert",
    label: "Convert",
    headline: "Closing the gap between intent and decision.",
    body: "We build the sales infrastructure that shortens deal cycles and raises close rates, sales decks, objection frameworks, proposal systems, and follow-up sequences.",
    services: [
      "Sales process mapping and optimisation",
      "Sales enablement material",
      "Proposal and pricing architecture",
      "Deal velocity and win-rate diagnostics",
      "CRM pipeline hygiene and forecasting",
    ],
  },
  {
    id: "deliver",
    label: "Deliver",
    headline: "Fulfilling the promise at scale.",
    body: "Most growth agencies stop at conversion. We don't. We build the delivery operations and client success infrastructure that lets you scale without breaking.",
    services: [
      "Onboarding flow design",
      "Project management system setup",
      "SOP and delivery template library",
      "Client reporting and communication systems",
      "Capacity planning and team handoff design",
    ],
  },
  {
    id: "retain",
    label: "Retain",
    headline: "Building lifetime value, not just first wins.",
    body: "We build the health scoring, renewal systems, upsell triggers, and referral architecture that makes every client relationship compound over time.",
    services: [
      "NPS and health score systems",
      "Renewal and upsell trigger sequences",
      "Referral and advocacy programme design",
      "Churn detection and intervention flows",
      "Loyalty and retention reporting",
    ],
  },
];

const AI_LAYER = [
  { label: "AI content generation", desc: "Scaled content that sounds like you, built on your positioning." },
  { label: "Predictive lead scoring", desc: "Machine-learning models that surface your best prospects automatically." },
  { label: "Automated reporting", desc: "Live dashboards and scheduled insights without analyst overhead." },
  { label: "Workflow automation", desc: "Multi-step processes replaced with trigger-based systems." },
  { label: "AI-augmented outreach", desc: "Personalised outreach at volume, without sounding like a robot." },
];

const FAQS = [
  {
    q: "How long does a typical engagement last?",
    a: "Most engagements run 3–6 months for a defined growth system build, followed by optional ongoing operation. We don't do month-to-month retainers for build phases, the work requires continuity.",
  },
  {
    q: "Do you work with early-stage startups?",
    a: "We work best with businesses that have found some product-market fit and are ready to scale. If you're pre-revenue or still validating, we'll tell you honestly that it's too early, and what you should do first.",
  },
  {
    q: "What does 'growth system' actually mean?",
    a: "A connected set of processes, tools, and automations that produce consistent, predictable business outcomes, not a campaign. A campaign ends. A growth system compounds.",
  },
  {
    q: "Do you handle implementation or just strategy?",
    a: "Both. Every engagement includes implementation. We don't hand you a strategy deck and disappear, we build and run the system.",
  },
  {
    q: "What industries do you work in?",
    a: "We've delivered across SaaS, professional services, e-commerce, healthcare, and consumer brands. We're sector-agnostic but growth-stage specific.",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      <GlobalHeader darkHero />
      <main id="main">

        {/* Hero */}
        <section
          className="relative pt-[148px] pb-20 overflow-hidden"
          style={{
            background: "#070D1A",
            backgroundImage: [
              "radial-gradient(ellipse 900px 500px at 60% 0%, rgba(1,69,132,0.09) 0%, transparent 65%)",
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
            ].join(", "),
            backgroundSize: "auto, 32px 32px",
          }}
        >
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <span className="stag stag-on-dark">HOW WE WORK</span>
            <h1 className="font-display text-[48px] lg:text-[68px] text-[#EEF1F7] tracking-[-1px] leading-[1.05] mt-2 mb-6 max-w-[800px]">
              One system,<br />five stages.
            </h1>
            <p className="text-[18px] text-[#8A96A8] max-w-[540px] leading-[1.65] mb-10 font-sans">
              We build and operate the end-to-end growth engine, from first impression to retained client. Not one part. All of it.
            </p>
            <Link
              href="/start"
              className="inline-flex items-center h-11 px-7 bg-[#014584] text-white
                font-display text-[15px] tracking-[0.04em] rounded-lg border-0
                transition-all duration-150
                hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_20px_rgba(1,69,132,0.35)]"
            >
              Start with a free audit
            </Link>
          </div>
        </section>

        {/* Lifecycle stages */}
        <section className="bg-white">
          {STAGES.map((stage, i) => (
            <div
              key={stage.id}
              id={stage.id}
              className={`border-b border-[#E0E5EC] py-16 ${i % 2 === 1 ? "bg-[#F9F8F5]" : "bg-white"}`}
            >
              <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-14 items-start">
                <ScrollReveal>
                  <span className="stag">{stage.label}</span>
                  <h2 className="font-display text-[36px] lg:text-[42px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-4">
                    {stage.headline}
                  </h2>
                  <p className="text-[16px] text-[#52525B] leading-[1.65] font-sans">
                    {stage.body}
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={1}>
                  <div className="rounded-lg border border-[#E0E5EC] bg-[#F8F9FC] overflow-hidden">
                    <div className="h-[3px] bg-[#014584]" />
                    <div className="p-6">
                      <p className="text-[11px] uppercase tracking-[0.08em] text-[#9AA3B2] mb-4 font-sans">
                        Services at this stage
                      </p>
                      <ul className="space-y-2.5">
                        {stage.services.map((s) => (
                          <li key={s} className="flex items-center gap-3 text-[14px] text-[#3E3E3E] font-sans">
                            <span
                              className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                              style={{ background: "rgba(1,69,132,0.10)" }}
                            >
                              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden="true">
                                <path d="M1.5 4L3.5 6L6.5 2" stroke="#014584" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </section>

        {/* AI layer */}
        <section
          className="py-24 relative overflow-hidden border-t border-[rgba(255,255,255,0.06)]"
          style={{
            background: "#070D1A",
            backgroundImage: [
              "radial-gradient(ellipse 600px 400px at 20% 50%, rgba(1,69,132,0.07) 0%, transparent 65%)",
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
            ].join(", "),
            backgroundSize: "auto, 32px 32px",
          }}
        >
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <ScrollReveal className="mb-14">
              <span className="stag stag-on-dark">AI LAYER</span>
              <h2 className="font-display text-[40px] text-[#EEF1F7] tracking-[-0.5px] leading-[1.1] mt-1 max-w-[560px]">
                AI wired into every stage.
              </h2>
              <p className="text-[16px] text-[#8A96A8] mt-3 max-w-[500px] leading-[1.6] font-sans">
                AI isn't a separate product we offer, it's embedded inside the growth system itself. Every stage is powered by the right models.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AI_LAYER.map((item, i) => (
                <ScrollReveal key={item.label} delay={(i % 3) as 0 | 1 | 2}>
                  <div
                    className="rounded-lg p-6 h-full"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="w-7 h-7 mb-4 rounded flex items-center justify-center"
                      style={{ background: "rgba(1,69,132,0.18)", border: "1px solid rgba(1,69,132,0.30)" }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4D9FE0" strokeWidth="1.5" aria-hidden="true">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                    <h3 className="font-display text-[16px] text-[#EEF1F7] mb-2">{item.label}</h3>
                    <p className="text-[13px] text-[#8A96A8] leading-[1.55] font-sans">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-24 border-t border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-16">
            <ScrollReveal>
              <span className="stag">FAQ</span>
              <h2 className="font-display text-[32px] text-[#3E3E3E] tracking-[-0.4px] leading-[1.2] mt-1 mb-4">
                Questions we hear a lot.
              </h2>
              <p className="text-[15px] text-[#52525B] leading-[1.65] font-sans">
                If you have a question not covered here, the audit is the best place to start.
              </p>
              <Link href="/start" className="block mt-5 text-[14px] text-[#014584] hover:underline font-sans">
                Book your free audit →
              </Link>
            </ScrollReveal>
            <div className="divide-y divide-[#E0E5EC]">
              {FAQS.map((faq, i) => (
                <ScrollReveal key={i} delay={(i % 3) as 0 | 1 | 2} className="py-7 first:pt-0">
                  <h3 className="font-display text-[18px] text-[#3E3E3E] mb-3">{faq.q}</h3>
                  <p className="text-[15px] text-[#52525B] leading-[1.65] font-sans">{faq.a}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#014584] py-20 text-center">
          <div className="mx-auto max-w-[560px] px-6">
            <ScrollReveal>
              <h2 className="font-display text-[32px] text-white mb-4">
                Ready to build this for your business?
              </h2>
              <p className="text-[16px] text-[rgba(255,255,255,0.75)] mb-8 font-sans">
                Start with a free growth audit. We'll review your current stack and tell you exactly what we'd build first.
              </p>
              <Link
                href="/start"
                className="inline-flex items-center h-11 px-7 bg-white text-[#014584]
                  font-display text-[15px] tracking-[0.04em] rounded-lg border-0
                  transition-all duration-150
                  hover:bg-[#F2F5F9] hover:shadow-[0_4px_20px_rgba(0,0,0,0.18)]"
              >
                Get a free growth audit
              </Link>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <GlobalFooter />
    </>
  );
}
