import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import {
  Ghost,
  Robot as Bot,
  Prohibit as FilterX,
  Fingerprint as Dna,
  Coins,
} from "@phosphor-icons/react/dist/ssr";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import FeatureIcon from "@/components/graphics/FeatureIcon";
import GradientOrb from "@/components/graphics/GradientOrb";
import DotGrid from "@/components/graphics/DotGrid";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import CortexDecisionStream from "@/components/graphics/dash/CortexDecisionStream";
import BrainStrengthMeter from "@/components/graphics/dash/BrainStrengthMeter";
import CortexDefinition from "@/components/sections/CortexDefinition";

const PAGE_DESC =
  "Cortex is Octrackit's AI lead quality scoring engine. A per-client machine-learning model that decides which marketing signals to act on and which to filter as junk, then learns from real outcomes.";

export const metadata: Metadata = {
  title: "Octrackit Cortex, AI Lead Quality Scoring",
  description: PAGE_DESC,
  alternates: { canonical: "/octrackit/cortex" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Octrackit Cortex, AI Lead Quality Scoring",
    description: PAGE_DESC,
    url: "/octrackit/cortex",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octrackit Cortex, AI Lead Quality Scoring",
    description: PAGE_DESC,
  },
};

const APP_URL = "https://track.octmarktechnologies.com/";

const STEPS = [
  { n: "01", title: "Ingest the signal", desc: "Every marketing signal and lead arrives in real time, tagged with its platform and value context." },
  { n: "02", title: "Score the quality", desc: "The model scores each signal across multiple dimensions, from ghost identities to bot velocity to poisoned sources." },
  { n: "03", title: "Dispatch or suppress", desc: "It decides to act on the signal or filter it as junk, each decision carrying a confidence score and a risk level." },
  { n: "04", title: "Learn from outcomes", desc: "When a deal is won or lost, that final business truth becomes a label that retrains the model, so accuracy compounds." },
];

const SIGNALS = [
  { icon: Ghost, title: "Ghost score", desc: "Detects fake or ghost identities and paid clicks with no real behaviour behind them." },
  { icon: Bot, title: "Velocity / bot detection", desc: "Flags bot and suspicious activity by comparing behaviour against normal human patterns." },
  { icon: FilterX, title: "Source poisoning & junk rate", desc: "Detects polluted, low-quality lead sources before they flood your pipeline." },
  { icon: Dna, title: "DNA risk score", desc: "Builds an overall risk profile for each lead from the full set of quality signals." },
  { icon: Coins, title: "Platform & deal value", desc: "Weighs the channel (Meta, Google, organic, CRM, direct) and the value context of the lead." },
];

const WHY = [
  { title: "Stop chasing junk", desc: "Your team works real intent instead of burning hours on fake and low-quality leads." },
  { title: "Trust your pipeline", desc: "What reaches your CRM has been scored and filtered, so the numbers mean something." },
  { title: "Fund what sends real intent", desc: "Channel and decision data shows which sources send signal, not noise, so budget follows quality." },
];

const FAQS = [
  {
    q: "What is Cortex?",
    a: "Cortex is Octrackit's per-client AI engine for lead quality scoring. It is a machine-learning model that decides which incoming marketing signals are real and worth acting on and which to filter out as junk or fake, then learns continuously from real business outcomes.",
  },
  {
    q: "How does Cortex decide which leads to keep?",
    a: "For each signal it makes a clear decision, DISPATCH (act on it) or SUPPRESS (filter it), each with a confidence score and a risk level of low, medium, or high. The decision is based on quality dimensions including ghost score, bot or suspicious velocity, source poisoning, an overall DNA risk score, and the platform and deal value.",
  },
  {
    q: "Does each client get its own AI model?",
    a: "Yes. A dedicated machine-learning model is trained per client, so every brand gets its own Cortex rather than a shared model. That means scoring reflects your specific audience, channels, and what a good lead looks like for you.",
  },
  {
    q: "Will Cortex suppress good leads?",
    a: "No. Cortex is fail-open. For a brand-new client with no model yet, or whenever the model is not confident, it always dispatches the signal. It never suppresses good leads when it is unsure.",
  },
  {
    q: "What is the Cortex Strength Score?",
    a: "The Cortex Strength Score is a 0 to 100 measure of how mature and trustworthy your Cortex is, with labels Initializing, Learning, Stabilizing, and Strong. It reflects training data volume, model accuracy (AUC), feature richness, and class balance, so you can see how far the model has come.",
  },
  {
    q: "How does Cortex improve over time?",
    a: "It learns from real business outcomes. When a deal is won or lost, that final business truth becomes a label that retrains the per-client model, so accuracy improves the longer it runs on your data.",
  },
];

export default function CortexPage() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://octmarktechnologies.com";

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Octrackit",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${baseUrl}/octrackit`,
    description:
      "Octrackit is an AI marketing attribution platform with Cortex AI lead quality scoring engine, by Octmark Technologies.",
    publisher: {
      "@type": "Organization",
      name: "Octmark Technologies",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/images/OCTMARK_LOGO.png` },
    },
    featureList: [
      "Per-client AI lead quality scoring (Cortex)",
      "DISPATCH or SUPPRESS decisions with confidence and risk level",
      "Fake lead and ghost identity detection",
      "Bot and suspicious velocity detection",
      "Source poisoning and junk-rate detection",
      "Cortex Strength Score (0 to 100)",
      "Continuous learning from real business outcomes",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
    about: { "@type": "SoftwareApplication", name: "Octrackit", url: `${baseUrl}/octrackit` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <GlobalHeader darkHero />
      <main id="main" className="flex-1">

        {/* ── 1. HERO ───────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "#070D1A",
            backgroundImage:
              "radial-gradient(ellipse 700px 500px at 80% 16%, rgba(1,69,132,0.10) 0%, transparent 60%)",
          }}
        >
          <DotGrid />
          <Parallax distance={80} className="absolute inset-0 z-0">
            <GradientOrb tone="blue" size={620} intensity={0.16} className="top-[4%] right-[2%]" />
            <GradientOrb tone="coral" size={360} intensity={0.07} className="bottom-[8%] left-[6%]" />
          </Parallax>

          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 pt-[150px] pb-24 grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-14 lg:gap-16 items-center">
            <Reveal>
              <Link href="/octrackit" className="inline-flex items-center gap-2 mb-6 group">
                <ArrowRight size={13} className="rotate-180 text-[#8A96A8] group-hover:text-[#EEF1F7] transition-colors" />
                <Image src="/images/octrackit-dark.png" alt="Octrackit" width={150} height={75} className="h-7 w-auto" />
              </Link>
              <h1 className="font-display text-[40px] lg:text-[54px] leading-[1.06] tracking-[-1px] text-[#EEF1F7] mb-6">
                Cortex: AI that knows a real lead from{" "}
                <span className="text-[#FEA781]" style={{ textShadow: "0 0 24px rgba(254,167,129,0.30)" }}>
                  noise.
                </span>
              </h1>
              <p className="text-[18px] lg:text-[19px] text-[#8A96A8] leading-[1.65] font-sans max-w-[540px] mb-6">
                Octrackit Cortex is the AI lead quality scoring engine inside the platform. A dedicated
                model trained per brand that decides which marketing signals are real and worth acting
                on, filters out the junk, and tells you exactly why.
              </p>
              {/* what it does, at a glance */}
              <div className="flex flex-wrap gap-2.5 mb-8">
                {["Scores lead quality", "Dispatches or suppresses", "Trained on your data", "Explains every call"].map((c) => (
                  <span
                    key={c}
                    className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12.5px] font-sans text-[#C4CCD8]"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.10)" }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4D9FE0]" style={{ boxShadow: "0 0 6px #4D9FE0" }} />
                    {c}
                  </span>
                ))}
              </div>
              <a
                href={APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-7 bg-[#014584] text-white font-display text-[15px] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.6),0_4px_20px_rgba(1,69,132,0.45)]"
              >
                See your Cortex Strength Score <ArrowRight size={16} />
              </a>
            </Reveal>

            <Reveal delay={0.15}>
              <Parallax distance={22}>
                <CortexDecisionStream />
              </Parallax>
            </Reveal>
          </div>
        </section>

        {/* ── 2. PROBLEM ────────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="max-w-[760px]">
              <span className="stag">THE PROBLEM</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-5">
                Every analytics tool counts every click as equal
              </h2>
              <p className="text-[17px] text-[#52525B] font-sans leading-[1.7]">
                A bot, a ghost click, and a serious buyer all land in the same report, weighted the same.
                So teams chase junk leads, sales time leaks, and budget flows to whatever produced the
                most noise. Nothing in a standard dashboard separates real intent from the rest.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 3. HOW IT WORKS ───────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: "#070D1A" }}>
          <DotGrid />
          <Parallax distance={60} className="absolute inset-0 z-0">
            <GradientOrb tone="blue" size={560} intensity={0.16} className="top-[14%] left-[-60px]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-14 max-w-[640px]">
              <span className="stag stag-on-dark">HOW IT WORKS</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#EEF1F7] tracking-[-0.5px] leading-[1.15] mt-1 mb-3">
                Score, decide, and get smarter every time
              </h2>
              <p className="text-[16px] text-[#8A96A8] font-sans leading-[1.6]">
                Cortex turns each raw signal into a confident, explainable decision.
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.12}>
              {STEPS.map((s) => (
                <StaggerItem key={s.n}>
                  <div className="h-full rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="h-[3px] w-10 bg-[#014584] rounded mb-5" />
                    <span className="font-mono text-[28px] text-[#4D9FE0] block mb-3">{s.n}</span>
                    <h3 className="font-display text-[18px] text-[#EEF1F7] mb-2">{s.title}</h3>
                    <p className="text-[14px] text-[#8A96A8] font-sans leading-[1.6]">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── 4. QUALITY SIGNALS ────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12 max-w-[640px]">
              <span className="stag">QUALITY SIGNALS</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-3">
                The quality signals it reads
              </h2>
              <p className="text-[16px] text-[#52525B] font-sans leading-[1.6]">
                Each lead is scored across several dimensions, in plain terms:
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
              {SIGNALS.map((s) => (
                <StaggerItem key={s.title}>
                  <div className="h-full bg-white rounded-xl border border-[#E5E8EE] p-6 transition-all duration-150 hover:border-[#014584] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(1,69,132,0.08)]">
                    <FeatureIcon icon={s.icon} tone="light" size={46} className="mb-4" />
                    <h3 className="font-display text-[18px] text-[#3E3E3E] leading-snug mb-2">{s.title}</h3>
                    <p className="text-[14px] text-[#52525B] font-sans leading-[1.6]">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── 5. BUILT PER BRAND ────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 lg:py-24" style={{ background: "#070D1A" }}>
          <DotGrid />
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <Reveal>
              <span className="stag stag-on-dark">BUILT PER BRAND</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#EEF1F7] tracking-[-0.5px] leading-[1.15] mt-1 mb-4">
                Every brand gets its own Cortex
              </h2>
              <p className="text-[16px] text-[#8A96A8] font-sans leading-[1.7] mb-5">
                A dedicated model is trained per client, not a shared one, so scoring reflects your
                audience, your channels, and what a good lead looks like for you. The longer it runs on
                your data, the sharper it gets.
              </p>
              <p className="text-[15px] text-[#8A96A8] font-sans leading-[1.7]">
                The Cortex Strength Score shows how mature your Cortex is, moving from Initializing to
                Learning to Stabilizing to Strong as training data, accuracy, and balance improve.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-xl p-6 lg:p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <BrainStrengthMeter />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 6. INSIGHTS ───────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-center">
            <Reveal>
              <span className="stag">INSIGHTS</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-4">
                It tells you why, not just yes or no
              </h2>
              <p className="text-[16px] text-[#52525B] font-sans leading-[1.7]">
                Cortex surfaces the top risk factors and the main reasons signals were
                suppressed, so a filtered lead is never a black box. You see the reasoning behind every
                call.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-xl border border-[#E5E8EE] bg-[#F8F9FC] p-6 lg:p-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.10em] text-[#9AA3B2] block mb-5">
                  Top suppression reasons
                </span>
                {[
                  { reason: "High ghost score", pct: "78%" },
                  { reason: "Bot / suspicious velocity", pct: "61%" },
                  { reason: "Poisoned paid source", pct: "44%" },
                ].map((r) => (
                  <div key={r.reason} className="mb-4 last:mb-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[14px] text-[#3E3E3E] font-sans">{r.reason}</span>
                      <span className="font-mono text-[11px] text-[#9AA3B2]">[METRIC]</span>
                    </div>
                    <span className="block h-2 rounded-full bg-[#E5E8EE] overflow-hidden">
                      <span
                        className="block h-full rounded-full"
                        style={{ width: r.pct, background: "linear-gradient(90deg,#c2693f,#FEA781)" }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 7. WHY IT MATTERS ─────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12 max-w-[640px]">
              <span className="stag">WHY IT MATTERS</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1">
                A cleaner pipeline you can actually trust
              </h2>
            </Reveal>
            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.1}>
              {WHY.map((w) => (
                <StaggerItem key={w.title}>
                  <div className="h-full bg-white rounded-xl border border-[#E5E8EE] p-6">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(1,69,132,0.08)] text-[#014584] mb-4">
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                    <h3 className="font-display text-[17px] text-[#3E3E3E] mb-2 leading-snug">{w.title}</h3>
                    <p className="text-[14px] text-[#52525B] font-sans leading-[1.6]">{w.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── GEO: self-contained definition ────────────────────── */}
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-[920px] px-6 md:px-10 lg:px-20">
            <Reveal>
              <CortexDefinition />
            </Reveal>
          </div>
        </section>

        {/* ── 8. FAQ (crawlable) ────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[860px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12">
              <span className="stag">FAQ</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1">
                Cortex, answered
              </h2>
            </Reveal>
            <div className="divide-y divide-[#E5E8EE] border-t border-[#E5E8EE]">
              {FAQS.map((f) => (
                <Reveal key={f.q}>
                  <div className="py-7">
                    <h3 className="font-display text-[19px] text-[#3E3E3E] mb-2.5 leading-snug">{f.q}</h3>
                    <p className="text-[15px] text-[#52525B] font-sans leading-[1.7]">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 9. FINAL CTA ──────────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 lg:py-24 border-t border-[rgba(255,255,255,0.06)]" style={{ background: "#070D1A" }}>
          <DotGrid />
          <Parallax distance={50} className="absolute inset-0 z-0">
            <GradientOrb tone="coral" size={420} intensity={0.10} className="bottom-[-80px] right-[8%]" />
            <GradientOrb tone="blue" size={460} intensity={0.14} className="top-[-60px] left-[10%]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[760px] px-6 md:px-10 text-center">
            <Reveal>
              <h2 className="font-display text-[32px] lg:text-[46px] text-[#EEF1F7] tracking-[-0.75px] leading-[1.1] mb-4">
                See what your Cortex is filtering.
              </h2>
              <p className="text-[17px] text-[#8A96A8] font-sans leading-[1.65] mb-9 max-w-[540px] mx-auto">
                Spin up a Cortex for your brand and watch it separate real intent from noise, with the reasoning behind every call.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-7 bg-[#014584] text-white font-display text-[15px] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_20px_rgba(1,69,132,0.45)]"
                >
                  See your Cortex Strength Score <ArrowRight size={16} />
                </a>
                <Link
                  href="/demo"
                  className="inline-flex items-center h-12 px-7 border border-[rgba(255,255,255,0.18)] text-[#EEF1F7] font-display text-[15px] rounded-lg hover:border-[rgba(255,255,255,0.4)] transition-colors"
                >
                  Book a demo
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
