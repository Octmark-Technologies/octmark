import Link from "next/link";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import GrowthEngine from "@/components/sections/GrowthEngine";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Parallax from "@/components/motion/Parallax";
import GradientOrb from "@/components/graphics/GradientOrb";
import FeatureIcon from "@/components/graphics/FeatureIcon";
import {
  Crosshair as Radar,
  Users,
  Lightning as Zap,
  Package as PackageCheck,
  TrendUp as TrendingUp,
  Brain,
} from "@phosphor-icons/react/dist/ssr";
import { getAllCaseStudies } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/", type: "website" },
};

export default function HomePage() {
  const cases = getAllCaseStudies().slice(0, 3);

  return (
    <>
      <GlobalHeader darkHero />
      <main id="main" className="flex-1">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section
          className="relative min-h-screen overflow-hidden"
          style={{
            background: "#070D1A",
            backgroundImage: [
              "radial-gradient(ellipse 700px 500px at 78% 18%, rgba(1,69,132,0.10) 0%, transparent 60%)",
              "radial-gradient(ellipse 300px 300px at 25% 75%, rgba(1,69,132,0.05) 0%, transparent 60%)",
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
            ].join(", "),
            backgroundSize: "auto, auto, 32px 32px",
          }}
        >
          {/* Scroll-responsive ambient glow */}
          <Parallax distance={80} className="absolute inset-0 z-0">
            <GradientOrb tone="blue" size={640} intensity={0.16} className="top-[6%] right-[4%]" />
            <GradientOrb tone="coral" size={380} intensity={0.08} className="bottom-[12%] left-[8%]" />
          </Parallax>

          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 pt-[160px] pb-24
            grid grid-cols-1 lg:grid-cols-[7fr_5fr] gap-20 items-start">

            {/* Left */}
            <div className="flex flex-col">
              <span className="text-[#FEA781]/88 text-[12px] tracking-[0.08em] mb-4 font-sans">
                Fewer guesses. More growth.
              </span>
              <h1 className="font-display text-[56px] lg:text-[72px] leading-[1.05] tracking-[-1px] text-[#EEF1F7] mb-7">
                Marketing.<br />
                Rewired with{" "}
                <span
                  className="text-[#FEA781]"
                  style={{ textShadow: "0 0 24px rgba(254,167,129,0.35)" }}
                >
                  AI.
                </span>
              </h1>
              <ScrollReveal className="flex mb-9 max-w-[560px]">
                <div className="w-[1.5px] flex-shrink-0 bg-[rgba(75,155,220,0.55)]" />
                <p className="text-[18px] text-[#8A96A8] leading-[1.65] pl-[18px] font-sans">
                  From first click to retained client, AI-powered systems across your entire growth engine, built and run by Octmark.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={1} className="flex items-center gap-5 mb-3.5">
                <Link
                  href="/start"
                  className="inline-flex items-center h-11 px-7 bg-[#014584] text-white
                    font-display text-[15px] tracking-[0.04em] rounded-lg border-0 cursor-pointer
                    transition-all duration-150 whitespace-nowrap
                    hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.60),0_4px_20px_rgba(1,69,132,0.40)]"
                >
                  Get a free growth audit
                </Link>
                <Link href="/results" className="text-[13px] text-[#4E5A6C] hover:text-[#8A96A8] hover:underline transition-colors duration-150 font-sans">
                  See our results →
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <p className="text-[13px] text-[#4E5A6C] leading-[1.6] max-w-[420px] font-sans">
                  We review your growth stack and tell you exactly what we see, including if your growth challenge needs something we don't offer. Response within 2 business days.
                </p>
              </ScrollReveal>
            </div>

            {/* Right, Growth Engine */}
            <ScrollReveal delay={1} className="mt-2 lg:mt-8">
              <Parallax distance={28}>
                <GrowthEngine />
              </Parallax>
            </ScrollReveal>
          </div>
        </section>

        {/* ── PROOF ─────────────────────────────────────────────── */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <ScrollReveal className="max-w-[460px]">
              <span className="stag">PROOF</span>
              <div className="font-mono text-[64px] font-medium text-[#3E3E3E] tracking-[-1.5px] leading-none mt-2.5 mb-1.5">
                2.8×
              </div>
              <div className="w-[52px] h-px bg-[#E0E5EC] my-2.5" />
              <p className="text-[18px] text-[#3E3E3E] mb-2">Qualified pipeline growth</p>
              <p className="text-[13px] text-[#9AA3B2] font-sans">Growth-stage B2B SaaS · 90 days</p>
            </ScrollReveal>
          </div>
        </section>

        {/* ── RESULTS PREVIEW ───────────────────────────────────── */}
        <section className="bg-white pb-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <ScrollReveal className="mb-2.5">
              <span className="stag">RESULTS</span>
              <h2 className="font-display text-[32px] font-normal text-[#3E3E3E] tracking-[-0.5px] leading-[1.2]">
                What we've delivered
              </h2>
            </ScrollReveal>
            <hr className="border-none border-t border-[#E0E5EC] mb-0" />

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7">
              {cases.map((cs, i) => (
                <ScrollReveal key={cs.slug} delay={(i as 0 | 1 | 2)}>
                  <Link
                    href={`/results/${cs.slug}`}
                    className="group flex flex-col rounded-lg border border-[#E0E5EC] bg-[#F8F9FC] relative overflow-hidden
                      transition-all duration-150
                      hover:border-[#014584] hover:bg-white hover:-translate-y-0.5
                      hover:shadow-[0_0_0_1px_#014584,0_4px_20px_rgba(1,69,132,0.10)]"
                  >
                    <div className="h-[3px] bg-[#014584] flex-shrink-0" />
                    <div className="p-5 pb-6 flex flex-col flex-1">
                      <span className="absolute top-4 right-4 text-[10px] tracking-[0.06em] uppercase text-[#014584] bg-[rgba(1,69,132,0.07)] border border-[rgba(1,69,132,0.20)] rounded px-2 py-0.5">
                        {cs.category}
                      </span>
                      <div className="font-mono text-[40px] font-medium text-[#3E3E3E] tracking-[-1px] mt-2.5">
                        {cs.primaryMetric}
                      </div>
                      <div className="w-full h-px bg-[#E0E5EC] my-2.5" />
                      <h3 className="font-display text-[18px] text-[#3E3E3E] leading-[1.4] mb-2 flex-1">
                        {cs.title}
                      </h3>
                      <p className="text-[12px] text-[#52525B] leading-[1.5] mb-3 px-2.5 py-2
                        bg-[rgba(1,69,132,0.04)] border-l-2 border-[rgba(1,69,132,0.18)] rounded-r-[3px] font-sans">
                        {cs.mechanism}
                      </p>
                      <p className="text-[11px] text-[#9AA3B2] uppercase tracking-[0.04em] mb-4 font-sans">
                        {cs.industry} · {cs.stage}
                      </p>
                      <span className="text-[13px] text-[#014584] font-sans">How we built this →</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="flex items-center gap-6 mt-9">
              <Link href="/results" className="text-[13px] text-[#9AA3B2] hover:text-[#52525B] transition-colors font-sans">
                See all results →
              </Link>
              <Link
                href="/start"
                className="inline-flex items-center h-11 px-7 bg-[#014584] text-white
                  font-display text-[15px] tracking-[0.04em] rounded-lg border-0
                  transition-all duration-150
                  hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_16px_rgba(1,69,132,0.35)]"
              >
                Start building your growth system
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ── EDITORIAL CTA BAND ────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-12">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20
            flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <ScrollReveal className="flex-shrink-0">
              <h3 className="font-display text-[20px] text-[#3E3E3E]">Let&rsquo;s look at your growth system.</h3>
              <p className="text-[14px] text-[#52525B] font-sans mt-1">A specific, useful read on where yours stands, no pitch.</p>
            </ScrollReveal>
            <Link
              href="/start"
              className="inline-flex items-center h-11 px-7 bg-[#014584] text-white
                font-display text-[15px] tracking-[0.04em] rounded-lg border-0
                transition-all duration-150
                hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_16px_rgba(1,69,132,0.35)]"
            >
              Start a conversation →
            </Link>
          </div>
        </section>

        {/* ── WHAT WE BUILD / LIFECYCLE ─────────────────────────── */}
        <section
          className="py-24 relative overflow-hidden"
          style={{
            background: "#070D1A",
            backgroundImage: [
              "radial-gradient(ellipse 600px 400px at 8% 85%, rgba(1,69,132,0.07) 0%, transparent 65%)",
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
            ].join(", "),
            backgroundSize: "auto, 32px 32px",
          }}
        >
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <ScrollReveal className="mb-14">
              <span className="stag stag-on-dark">SYSTEM</span>
              <h2 className="font-display text-[40px] lg:text-[48px] font-normal text-[#EEF1F7] tracking-[-0.75px] leading-[1.1] max-w-[600px] mt-1">
                Five stages. One connected engine.
              </h2>
              <p className="text-[16px] text-[#8A96A8] mt-3 max-w-[480px] leading-[1.6] font-sans">
                What produced those results isn't a campaign. It's a system, one that runs through acquisition, conversion, delivery, and retention. Most growth work stops halfway.
              </p>
            </ScrollReveal>

            {/* Stage blocks, each reveals on scroll so no stage is skimmed past */}
            <div className="flex items-start gap-0 mb-16 flex-col lg:flex-row">
              {[
                { name: "Attract", icon: Radar, desc: "Reach the right people at the moment they need you." },
                { name: "Engage", icon: Users, desc: "Turn attention into interest and interest into intent." },
                { name: "Convert", icon: Zap, desc: "Move intent to decision without friction." },
                { name: "Deliver", icon: PackageCheck, desc: "We build the delivery operations that fulfil the promise, the stage most growth agencies don't reach." },
                { name: "Retain", icon: TrendingUp, desc: "We build lifetime value architecture, health scoring, renewal triggers, referral systems, after the first win." },
              ].map((stage, i, arr) => (
                <ScrollReveal
                  key={stage.name}
                  delay={i as 0 | 1 | 2 | 3 | 4}
                  className="flex items-start lg:flex-1 w-full"
                >
                  <div
                    className="flex-1 rounded-lg p-[22px] relative transition-all duration-150
                      hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(1,69,132,0.40)]"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <div className="h-[3px] bg-[#014584] rounded-t-sm absolute top-[-1px] left-[-1px] right-[-1px]" />
                    <FeatureIcon icon={stage.icon} tone="dark" size={36} className="mt-1 mb-3" />
                    <span className="block text-[10px] uppercase tracking-[0.10em] text-[#4D9FE0] mb-2.5 font-sans">
                      {stage.name}
                    </span>
                    <p className="text-[13px] text-[#8A96A8] leading-[1.6] mb-3.5 font-sans">{stage.desc}</p>
                    <Link href={`/how-we-work#${stage.name.toLowerCase()}`} className="text-[12px] text-[#4D9FE0] hover:underline font-sans">
                      See services →
                    </Link>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="hidden lg:flex items-start justify-center w-7 flex-shrink-0 pt-9">
                      <svg className="w-3.5 h-3.5 stroke-[rgba(1,69,132,0.42)]" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" aria-hidden="true">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>
                  )}
                </ScrollReveal>
              ))}
            </div>

            {/* Founder quote */}
            <div className="h-px bg-[rgba(255,255,255,0.08)] mb-12" />
            <ScrollReveal>
              <div className="max-w-[760px] mx-auto rounded-lg p-8 lg:p-10"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderLeft: "3px solid #014584",
                }}
              >
              <p className="text-[18px] text-[#EEF1F7] leading-[1.7] mb-6 font-sans">
                "This system wasn't built in a presentation. It was built across years of client work in growth-stage businesses across 12 sectors."
              </p>
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[rgba(1,69,132,0.07)] border border-[rgba(1,69,132,0.20)] flex items-center justify-center text-[#4D9FE0] text-[16px] flex-shrink-0 font-display">
                  R
                </div>
                <div>
                  <span className="text-[15px] text-[#EEF1F7] font-display block">Rahul</span>
                  <span className="text-[10px] uppercase tracking-[0.08em] text-[#4E5A6C] mt-0.5 block font-sans">Founder · Octmark</span>
                </div>
                <Link href="/team" className="ml-auto text-[13px] text-[#4D9FE0] hover:underline font-sans">Meet the team →</Link>
              </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CORTEX (mini highlight) ──────────────────────── */}
        <section className="bg-[#F2F5F9] py-14 border-y border-[#E5E8EE]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <ScrollReveal className="flex items-start gap-4 max-w-[660px]">
              <FeatureIcon icon={Brain} tone="light" size={52} />
              <div>
                <span className="stag !mb-1.5">OCTRACKIT CORTEX</span>
                <h3 className="font-display text-[22px] lg:text-[24px] text-[#3E3E3E] leading-snug mb-1.5">
                  Cortex tells a real lead from noise
                </h3>
                <p className="text-[14px] text-[#52525B] font-sans leading-[1.6]">
                  Octrackit&rsquo;s AI scores every signal and filters the junk, so your pipeline is real. It learns per brand, and tells you why.
                </p>
              </div>
            </ScrollReveal>
            <Link
              href="/octrackit/cortex"
              className="inline-flex items-center gap-1.5 h-11 px-6 shrink-0 bg-[#014584] text-white font-display text-[15px] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_4px_16px_rgba(1,69,132,0.35)]"
            >
              Meet Octrackit Cortex →
            </Link>
          </div>
        </section>

        {/* ── CLIENTS / TRUST METRICS ───────────────────────────── */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <ScrollReveal>
              <span className="stag">CLIENTS</span>
              <p className="text-[16px] text-[#3E3E3E] max-w-[600px] leading-[1.6] mb-6 font-sans">
                Growth-stage businesses across SaaS, professional services, e-commerce, and healthcare trust Octmark to operate their growth systems.
              </p>
              <div className="w-full h-px bg-[#E0E5EC] mb-6" />
              <div className="flex flex-wrap gap-x-12 gap-y-4">
                {[
                  { value: "40+", label: "growth engagements delivered" },
                  { value: "12", label: "sectors covered" },
                  { value: "₹18Cr+", label: "revenue attributed" },
                ].map((m) => (
                  <div key={m.label} className="flex items-baseline gap-3">
                    <span className="font-mono text-[40px] text-[#3E3E3E] leading-none">{m.value}</span>
                    <span className="text-[14px] text-[#9AA3B2] font-sans">{m.label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── FOOTER CTA ────────────────────────────────────────── */}
        <section
          className="relative py-24 overflow-hidden border-t border-[rgba(255,255,255,0.06)]"
          style={{
            background: "#070D1A",
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "radial-gradient(ellipse 600px 400px at 50% 50%, rgba(1,69,132,0.08) 0%, transparent 70%)" }}
          />
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 text-center">
            <ScrollReveal>
              <span className="stag stag-on-dark inline-block mb-4">START</span>
              <h2 className="font-display text-[40px] text-[#EEF1F7] tracking-[-0.5px] mb-5">
                Ready to build your growth system?
              </h2>
              <p className="text-[17px] text-[#8A96A8] max-w-[480px] mx-auto mb-9 leading-[1.65] font-sans">
                The audit is free. The findings are real. We tell you exactly what we see, including if the answer is something we can't help with.
              </p>
              <Link
                href="/start"
                className="inline-flex items-center h-12 px-7 bg-[#014584] text-white
                  font-display text-[15px] tracking-[0.02em] rounded-lg border-0 cursor-pointer
                  transition-all duration-150
                  hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.50),0_4px_20px_rgba(1,69,132,0.35)]"
              >
                Get a free growth audit
              </Link>
              <div className="mt-4 flex items-center justify-center gap-6">
                <Link href="/how-we-work" className="text-[13px] text-[#4D9FE0] hover:underline font-sans">Book a 30-minute call</Link>
                <span className="text-[#4E5A6C] text-sm">·</span>
                <a href="mailto:hello@octmarktechnologies.com" className="text-[13px] text-[#4D9FE0] hover:underline font-sans">
                  hello@octmarktechnologies.com
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
