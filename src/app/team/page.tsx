import Link from "next/link";
import Image from "next/image";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getFounder, specialistNetwork } from "@/data/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Team",
  description: "The people behind Octmark, built to go deep, not wide.",
  alternates: { canonical: "/team" },
  openGraph: {
    title: "The Team",
    description: "The people behind Octmark, built to go deep, not wide.",
    url: "/team",
    type: "website",
  },
};

const PRINCIPLES = [
  {
    title: "Deep over wide",
    body: "We work with a small number of clients at a time. This is not scalable in the traditional sense, and that's the point. You get senior attention throughout, not during onboarding and at review calls.",
  },
  {
    title: "Outcomes over activity",
    body: "We are not a reporting agency. Every engagement starts with the outcomes we're accountable to, pipeline, revenue, retention, and works backwards to the systems that produce them.",
  },
  {
    title: "Honest over optimistic",
    body: "If we can't help you, we'll tell you. If your plan needs adjusting, we'll say so. The best client relationships we've had started with uncomfortable honesty.",
  },
  {
    title: "Systems over campaigns",
    body: "A campaign ends. A system compounds. We build infrastructure, processes, automations, architectures, not one-off pushes.",
  },
];

const NOT_US = [
  "A creative agency",
  "A freelancer marketplace",
  "A reporting-only partner",
  "The right fit for pre-PMF startups",
  "An agency that pitches, then disappears",
];

export default function TeamPage() {
  const founder = getFounder();
  const team = specialistNetwork;

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
              "radial-gradient(ellipse 700px 400px at 50% 0%, rgba(1,69,132,0.09) 0%, transparent 65%)",
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
            ].join(", "),
            backgroundSize: "auto, 32px 32px",
          }}
        >
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <span className="stag stag-on-dark">THE TEAM</span>
            <h1 className="font-display text-[48px] lg:text-[68px] text-[#EEF1F7] tracking-[-1px] leading-[1.05] mt-2 mb-6 max-w-[700px]">
              Built to go deep,<br />not wide.
            </h1>
            <p className="text-[18px] text-[#8A96A8] max-w-[520px] leading-[1.65] font-sans">
              Octmark is a small, senior team. We don't grow headcount to grow capacity, we grow capacity by building better systems.
            </p>
          </div>
        </section>

        {/* Founder block */}
        {founder && (
          <section className="bg-white py-20 border-b border-[#E0E5EC]">
            <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
              <ScrollReveal>
                <div
                  className="rounded-xl overflow-hidden border border-[#E0E5EC]"
                >
                  <div className="h-[4px] bg-[#014584]" />
                  <div className="p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 items-start">
                    {/* Avatar */}
                    <div className="flex flex-col items-center gap-3">
                      {founder.profileImage ? (
                        <Image
                          src={founder.profileImage}
                          alt={founder.name}
                          width={96}
                          height={96}
                          className="w-24 h-24 rounded-full object-cover border-2 border-[#E0E5EC]"
                        />
                      ) : (
                        <div className="w-24 h-24 rounded-full bg-[rgba(1,69,132,0.07)] border-2 border-[rgba(1,69,132,0.18)] flex items-center justify-center">
                          <span className="font-display text-[32px] text-[#014584]">{founder.initials}</span>
                        </div>
                      )}
                      {founder.linkedinUrl && (
                        <a
                          href={founder.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12px] text-[#014584] hover:underline font-sans"
                        >
                          LinkedIn →
                        </a>
                      )}
                    </div>
                    {/* Bio */}
                    <div>
                      <div className="flex items-center gap-3 mb-1.5">
                        <h2 className="font-display text-[28px] text-[#3E3E3E]">{founder.name}</h2>
                        <span className="inline-block px-2.5 py-0.5 bg-[rgba(1,69,132,0.07)] border border-[rgba(1,69,132,0.20)] rounded text-[10px] text-[#014584] uppercase tracking-[0.06em] font-sans">
                          Founder
                        </span>
                      </div>
                      <p className="text-[14px] text-[#9AA3B2] mb-4 font-sans uppercase tracking-[0.04em]">{founder.role}</p>
                      <p className="text-[16px] text-[#52525B] leading-[1.7] font-sans max-w-[600px] mb-6">{founder.bio}</p>
                      {founder.expertise && founder.expertise.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {founder.expertise.map((e) => (
                            <span key={e} className="text-[12px] bg-[#F9F8F5] border border-[#E0E5EC] rounded px-2.5 py-0.5 font-sans text-[#52525B]">
                              {e}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Operating principles */}
        <section className="bg-[#F9F8F5] py-20 border-b border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <ScrollReveal className="mb-12">
              <span className="stag">HOW WE OPERATE</span>
              <h2 className="font-display text-[32px] text-[#3E3E3E] tracking-[-0.4px] leading-[1.2] mt-1">
                Four things we hold to.
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PRINCIPLES.map((p, i) => (
                <ScrollReveal key={p.title} delay={(i % 2) as 0 | 1}>
                  <div className="rounded-lg border border-[#E0E5EC] bg-white p-7 h-full">
                    <div className="h-[3px] w-10 bg-[#014584] rounded mb-5" />
                    <h3 className="font-display text-[20px] text-[#3E3E3E] mb-3">{p.title}</h3>
                    <p className="text-[15px] text-[#52525B] leading-[1.65] font-sans">{p.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Specialist network */}
        {team.length > 0 && (
          <section className="bg-white py-20 border-b border-[#E0E5EC]">
            <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
              <ScrollReveal className="mb-12">
                <span className="stag">SPECIALISTS</span>
                <h2 className="font-display text-[32px] text-[#3E3E3E] tracking-[-0.4px] leading-[1.2] mt-1">
                  The specialist network.
                </h2>
                <p className="text-[15px] text-[#52525B] mt-3 max-w-[500px] leading-[1.6] font-sans">
                  For engagements that require deep expertise beyond our core team, we bring in sector specialists who've operated at the top of their domain.
                </p>
              </ScrollReveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {team.map((member, i) => (
                  <ScrollReveal key={member.slug} delay={(i % 4) as 0 | 1 | 2 | 3}>
                    <div
                      className="rounded-lg border border-[#E0E5EC] bg-[#F8F9FC] p-6 flex flex-col gap-3
                        transition-all duration-150
                        hover:border-[rgba(1,69,132,0.30)] hover:bg-white hover:-translate-y-0.5
                        hover:shadow-[0_4px_16px_rgba(1,69,132,0.08)]"
                    >
                      <div className="w-12 h-12 rounded-full bg-[rgba(1,69,132,0.07)] border border-[rgba(1,69,132,0.15)] flex items-center justify-center">
                        <span className="font-display text-[18px] text-[#014584]">{member.initials}</span>
                      </div>
                      <div>
                        <div className="font-display text-[16px] text-[#3E3E3E]">{member.name}</div>
                        <div className="text-[12px] text-[#9AA3B2] font-sans mt-0.5">{member.role}</div>
                      </div>
                      {member.expertise && (
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {member.expertise.slice(0, 2).map((e) => (
                            <span key={e} className="text-[11px] bg-white border border-[#E0E5EC] rounded px-2 py-0.5 font-sans text-[#52525B]">
                              {e}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* What we are not */}
        <section
          className="py-20 border-t border-[rgba(255,255,255,0.06)]"
          style={{
            background: "#070D1A",
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        >
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-center">
            <ScrollReveal>
              <span className="stag stag-on-dark">HONESTY</span>
              <h2 className="font-display text-[32px] text-[#EEF1F7] tracking-[-0.4px] mt-1 mb-6">
                What we're not.
              </h2>
              <ul className="space-y-3">
                {NOT_US.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[15px] text-[#8A96A8] font-sans">
                    <span className="w-5 h-5 rounded border border-[rgba(255,255,255,0.10)] flex items-center justify-center flex-shrink-0">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <line x1="2" y1="2" x2="8" y2="8" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
                        <line x1="8" y1="2" x2="2" y2="8" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <Link
                href="/start"
                className="inline-flex items-center h-11 px-7 bg-[#014584] text-white
                  font-display text-[15px] tracking-[0.04em] rounded-lg border-0
                  transition-all duration-150
                  hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_20px_rgba(1,69,132,0.35)]"
              >
                Start here if we're the right fit
              </Link>
            </ScrollReveal>
          </div>
        </section>

      </main>
      <GlobalFooter />
    </>
  );
}
