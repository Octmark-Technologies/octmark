import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import {
  Brain as BrainCircuit,
  Graph as Network,
  Pulse as Activity,
  Plug,
  ShieldCheck,
  Sparkle as Sparkles,
  Buildings as Building2,
  TrendUp as TrendingUp,
  RocketLaunch as Rocket,
  Target,
} from "@phosphor-icons/react/dist/ssr";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import FeatureIcon from "@/components/graphics/FeatureIcon";
import GradientOrb from "@/components/graphics/GradientOrb";
import DotGrid from "@/components/graphics/DotGrid";
import OctrackitHero from "@/components/graphics/OctrackitHero";
import CortexDecisionStream from "@/components/graphics/dash/CortexDecisionStream";
import CortexDefinition from "@/components/sections/CortexDefinition";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const PAGE_DESC =
  "Octrackit is an AI marketing attribution platform that scores every signal for quality with its Cortex AI and attributes ROI by channel in real time. Multi-channel attribution, lead quality scoring, and agency ROI reporting in one platform.";

export const metadata: Metadata = {
  title: "Octrackit, AI Marketing Attribution Platform",
  description: PAGE_DESC,
  alternates: { canonical: "/octrackit" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Octrackit, AI Marketing Attribution Platform",
    description: PAGE_DESC,
    url: "/octrackit",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Octrackit, AI Marketing Attribution Platform",
    description: PAGE_DESC,
  },
};

const APP_URL = "https://track.octmarktechnologies.com/";

const FEATURES = [
  {
    icon: BrainCircuit,
    title: "Cortex AI engine",
    desc: "An AI engine that predicts and scores the quality of every signal and lead, then allows or filters it through an AI Decision Matrix. It learns continuously from your feedback.",
  },
  {
    icon: Network,
    title: "Multi-Channel ROI Attribution",
    desc: "Revenue attributed back to the source channel that earned it, across Meta Paid, Google Paid, Google Organic, Social Organic, and Direct.",
  },
  {
    icon: Activity,
    title: "Real-Time Activity Stream",
    desc: "Every event as it happens: platform, decision, and timestamp, with live allowed versus blocked counts so nothing is a black box.",
  },
  {
    icon: Plug,
    title: "Native Integrations",
    desc: "Connect your stack through secure OAuth, including Meta, Google, and Trello, with no brittle scripts to maintain.",
  },
  {
    icon: ShieldCheck,
    title: "Multi-Client Portfolio & RBAC",
    desc: "Manage many clients from one place with role-based access control and user invites, built for how agencies actually operate.",
  },
  {
    icon: Sparkles,
    title: "AI Suggestions & Insights",
    desc: "Actionable recommendations on where to shift budget and what to prioritise next, grounded in signal quality, not guesswork.",
  },
];

const STEPS = [
  { n: "01", title: "Connect channels", desc: "Link Meta, Google, and the rest of your stack through secure OAuth in minutes." },
  { n: "02", title: "Capture every signal", desc: "Octrackit ingests marketing events across paid, organic, and direct in real time." },
  { n: "03", title: "Score with Cortex", desc: "The AI engine scores each signal for quality and allows or filters it through the Decision Matrix." },
  { n: "04", title: "See ROI by channel", desc: "Revenue is attributed to the source that earned it, so you fund what actually works." },
];

const AUDIENCES = [
  { icon: Building2, title: "Marketing agencies", desc: "Run attribution and ROI reporting for a full client portfolio with role-based access." },
  { icon: TrendingUp, title: "Growth & performance marketers", desc: "Move budget toward the channels producing revenue, not the ones producing clicks." },
  { icon: Rocket, title: "Founders & SMBs", desc: "See where growth actually comes from without standing up a data team." },
  { icon: Target, title: "Sales teams", desc: "Work the leads Cortex scores highest, and skip the noise." },
];

const WHY = [
  { title: "Attribution, not analytics", desc: "Most tools count traffic. Octrackit ties revenue to the channel that earned it." },
  { title: "AI quality scoring built in", desc: "Cortex scores and filters signal quality, so volume never masquerades as value." },
  { title: "Channel ROI out of the box", desc: "ROI by source is the default view, not a report you have to assemble by hand." },
  { title: "Agency-ready by design", desc: "Multi-client portfolio, RBAC, and invites are core, not an enterprise upsell." },
  { title: "Real-time, not next-day", desc: "The activity stream shows decisions as they happen, allowed versus blocked, live." },
];

const FAQS = [
  {
    q: "What is Octrackit?",
    a: "Octrackit is an AI marketing attribution platform by Octmark Technologies. It ingests marketing signals across channels in real time, scores their quality with an AI engine called Cortex, and attributes revenue to the channels that actually drive it.",
  },
  {
    q: "How does Octrackit attribute ROI?",
    a: "Octrackit attributes ROI by capturing every marketing signal by source channel (Meta Paid, Google Paid, Google Organic, Social Organic, and Direct), scoring each signal for quality, and tying revenue back to the channel that produced it. The result is ROI by channel rather than raw click counts.",
  },
  {
    q: "What is Cortex?",
    a: "Cortex is Octrackit's AI engine. It predicts and scores the quality of each incoming signal or lead, then allows or filters it through an AI Decision Matrix. It learns continuously from your feedback, so scoring sharpens over time.",
  },
  {
    q: "Is Octrackit suitable for agencies?",
    a: "Yes. Octrackit is agency-ready. It supports a multi-client portfolio, role-based access control (RBAC), and user invites, so an agency can manage attribution and ROI reporting for many clients from a single account.",
  },
  {
    q: "Which channels does Octrackit support?",
    a: "Octrackit tracks Meta Paid, Google Paid, Google Organic, Social Organic, and Direct, and connects to platforms such as Meta, Google, and Trello through secure OAuth integrations.",
  },
  {
    q: "How is Octrackit different from Google Analytics?",
    a: "Google Analytics reports traffic and behaviour, while Octrackit attributes revenue. Instead of counting sessions and clicks, Octrackit scores signal quality with AI, filters low-quality signals, and shows ROI by channel, which is built for revenue decisions rather than web analytics.",
  },
];

const ONE_PARAGRAPH =
  "Octrackit is an AI marketing attribution platform built by Octmark Technologies. It ingests marketing signals and events across channels in real time (Meta Paid, Google Paid, Google Organic, Social Organic, and Direct), runs every signal through an AI engine called Cortex that predicts and scores lead and signal quality and then allows or filters it through an AI Decision Matrix, and attributes ROI and revenue back to the source channel that earned it. It includes a real-time activity stream, native OAuth integrations, a multi-client portfolio with role-based access control, and AI suggestions for budget and prioritisation, which makes it suited to marketing agencies, growth and performance marketers, founders and SMBs, and sales teams.";

export default function OctrackitPage() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://octmarktechnologies.com";

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Octrackit",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${baseUrl}/octrackit`,
    description: PAGE_DESC,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: {
      "@type": "Organization",
      name: "Octmark Technologies",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/images/OCTMARK_LOGO.png` },
    },
    featureList: [
      "Real-time multi-channel signal ingestion",
      "AI lead and signal quality scoring (Cortex)",
      "AI Decision Matrix (allow or filter)",
      "Multi-channel ROI attribution by source",
      "Real-time activity stream",
      "Native OAuth integrations (Meta, Google, Trello)",
      "Multi-client portfolio with role-based access control",
      "AI budget and prioritisation suggestions",
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
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/octrackit-dark.png"
                  alt="Octrackit"
                  width={220}
                  height={110}
                  priority
                  className="h-14 w-auto"
                />
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#4E5A6C] font-sans">by Octmark</span>
              </div>
              <h1 className="font-display text-[42px] lg:text-[58px] leading-[1.05] tracking-[-1px] text-[#EEF1F7] mb-6">
                Know exactly which channel drives revenue,{" "}
                <span className="text-[#FEA781]" style={{ textShadow: "0 0 24px rgba(254,167,129,0.30)" }}>
                  not just clicks.
                </span>
              </h1>
              <p className="text-[18px] lg:text-[19px] text-[#8A96A8] leading-[1.65] font-sans max-w-[540px] mb-8">
                Octrackit is the AI marketing attribution platform that scores every signal for quality
                with its Cortex AI and shows you ROI by channel, in real time. Stop optimising for
                clicks and start funding what actually drives revenue.
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-9">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-7 bg-[#014584] text-white font-display text-[15px] tracking-[0.02em] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.6),0_4px_20px_rgba(1,69,132,0.45)]"
                >
                  Start tracking ROI <ArrowRight size={16} />
                </a>
                <Link href="/octrackit/cortex" className="text-[14px] text-[#8A96A8] hover:text-[#EEF1F7] hover:underline font-sans transition-colors">
                  See how Cortex works →
                </Link>
              </div>
              {/* Trust strip */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-[#4E5A6C] font-mono uppercase tracking-[0.06em]">
                <span>Real-time attribution</span>
                <span>Secure OAuth</span>
                <span>Multi-client + RBAC</span>
                <span>[INSERT METRIC] signals scored</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Parallax distance={22}>
                <OctrackitHero />
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
                Your dashboards are full of clicks. Your bank account wants revenue.
              </h2>
              <p className="text-[17px] text-[#52525B] font-sans leading-[1.7]">
                Most analytics tools measure activity, not outcomes. You can see what was clicked,
                but not what earned money, so budget keeps flowing to whatever looks busy.
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12" stagger={0.1}>
              {[
                "Clicks and sessions go up while revenue stays flat, and no one can say why.",
                "Low-quality leads drain spend and sales time because nothing scores signal quality.",
                "Attribution lives in spreadsheets, assembled by hand, always a step behind.",
              ].map((p) => (
                <StaggerItem key={p}>
                  <div className="h-full rounded-xl border border-[#E5E8EE] bg-[#F8F9FC] p-6">
                    <span className="block w-9 h-1 rounded bg-[#FEA781] mb-4" />
                    <p className="text-[15px] text-[#52525B] font-sans leading-[1.6]">{p}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── 3. CORE FEATURES ──────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12 max-w-[640px]">
              <span className="stag">CAPABILITIES</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-3">
                Everything you need to attribute revenue, in one platform
              </h2>
              <p className="text-[16px] text-[#52525B] font-sans leading-[1.6]">
                Real-time multi-channel attribution, AI lead quality scoring, and agency ROI reporting,
                working together rather than bolted on.
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
              {FEATURES.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="h-full bg-white rounded-xl border border-[#E5E8EE] p-6 transition-all duration-150 hover:border-[#014584] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(1,69,132,0.08)]">
                    <FeatureIcon icon={f.icon} tone="light" size={46} className="mb-4" />
                    <h3 className="font-display text-[18px] text-[#3E3E3E] leading-snug mb-2">{f.title}</h3>
                    <p className="text-[14px] text-[#52525B] font-sans leading-[1.6]">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── CORTEX HIGHLIGHT ─────────────────────────────── */}
        <section className="relative overflow-hidden py-20 lg:py-24" style={{ background: "#070D1A" }}>
          <DotGrid />
          <Parallax distance={56} className="absolute inset-0 z-0">
            <GradientOrb tone="blue" size={560} intensity={0.16} className="top-[10%] right-[-60px]" />
            <GradientOrb tone="coral" size={300} intensity={0.07} className="bottom-[6%] left-[4%]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-12 lg:gap-16 items-center">
            <Reveal>
              <span className="stag stag-on-dark">OCTRACKIT CORTEX</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#EEF1F7] tracking-[-0.5px] leading-[1.15] mt-1 mb-4">
                The AI that knows a real lead from noise
              </h2>
              <p className="text-[17px] text-[#8A96A8] font-sans leading-[1.7] mb-6 max-w-[520px]">
                Octrackit&rsquo;s quality engine scores every signal, decides to dispatch or suppress it
                with a confidence score and risk level, and learns per brand from your real outcomes.
                Most tools count clicks. Cortex separates intent from noise, and tells you why.
              </p>
              <Link
                href="/octrackit/cortex"
                className="inline-flex items-center gap-2 h-11 px-6 bg-[#014584] text-white font-display text-[15px] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_16px_rgba(1,69,132,0.35)]"
              >
                Explore Cortex <ArrowRight size={16} />
              </Link>
            </Reveal>

            <Reveal delay={0.12}>
              <Parallax distance={20}>
                <CortexDecisionStream />
              </Parallax>
            </Reveal>
          </div>
        </section>

        {/* ── CORTEX DEFINITION (GEO, shared) ──────────────── */}
        <section className="bg-[#F2F5F9] py-16 lg:py-20">
          <div className="mx-auto max-w-[920px] px-6 md:px-10 lg:px-20">
            <Reveal>
              <CortexDefinition />
            </Reveal>
          </div>
        </section>

        {/* ── 4. HOW IT WORKS ───────────────────────────────────── */}
        <section
          id="how-it-works"
          className="relative overflow-hidden py-20 lg:py-28"
          style={{ background: "#070D1A" }}
        >
          <DotGrid />
          <Parallax distance={60} className="absolute inset-0 z-0">
            <GradientOrb tone="blue" size={560} intensity={0.16} className="top-[14%] left-[-60px]" />
          </Parallax>

          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-14 max-w-[640px]">
              <span className="stag stag-on-dark">HOW IT WORKS</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#EEF1F7] tracking-[-0.5px] leading-[1.15] mt-1 mb-3">
                From connected channels to ROI by source, in four steps
              </h2>
              <p className="text-[16px] text-[#8A96A8] font-sans leading-[1.6]">
                Octrackit turns scattered marketing signals into a clear answer: which channel drives revenue.
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.12}>
              {STEPS.map((s) => (
                <StaggerItem key={s.n}>
                  <div className="h-full rounded-xl p-6 relative" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
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

        {/* ── 5. WHO IT'S FOR ───────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12 max-w-[640px]">
              <span className="stag">WHO IT&rsquo;S FOR</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1">
                Built for the people who answer for the budget
              </h2>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.09}>
              {AUDIENCES.map((a) => (
                <StaggerItem key={a.title}>
                  <div className="h-full rounded-xl border border-[#E5E8EE] p-6">
                    <FeatureIcon icon={a.icon} tone="light" size={44} className="mb-4" />
                    <h3 className="font-display text-[17px] text-[#3E3E3E] mb-2 leading-snug">{a.title}</h3>
                    <p className="text-[14px] text-[#52525B] font-sans leading-[1.6]">{a.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── 6. WHY OCTRACKIT ──────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16">
            <Reveal>
              <span className="stag">WHY OCTRACKIT</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-4">
                Attribution, not just another analytics dashboard
              </h2>
              <p className="text-[16px] text-[#52525B] font-sans leading-[1.7]">
                Generic analytics tells you what happened on your site. Octrackit tells you what earned
                revenue, scores the quality behind it, and shows it by channel in real time.
              </p>
            </Reveal>

            <Stagger className="space-y-3" stagger={0.08}>
              {WHY.map((w) => (
                <StaggerItem key={w.title}>
                  <div className="flex items-start gap-4 bg-white rounded-xl border border-[#E5E8EE] p-5">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-[rgba(1,69,132,0.08)] text-[#014584]">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="font-display text-[16px] text-[#3E3E3E] leading-snug">{w.title}</h3>
                      <p className="text-[14px] text-[#52525B] font-sans leading-[1.6] mt-1">{w.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── 7. FAQ (crawlable, answers visible on load) ───────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[860px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12">
              <span className="stag">FAQ</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1">
                Octrackit, answered
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

        {/* ── GEO: self-contained definition block ──────────────── */}
        <section className="bg-[#F2F5F9] py-16">
          <div className="mx-auto max-w-[860px] px-6 md:px-10 lg:px-20">
            <Reveal>
              <div className="rounded-xl bg-white border border-[#E5E8EE] border-l-[3px] border-l-[#FEA781] p-7 lg:p-9">
                <Image
                  src="/images/octrackit-light.png"
                  alt="Octrackit"
                  width={200}
                  height={100}
                  className="h-11 w-auto mb-4"
                />
                <span className="block text-[11px] uppercase tracking-[0.12em] text-[#9AA3B2] font-semibold mb-3">
                  Octrackit in one paragraph
                </span>
                <p className="text-[16px] text-[#3E3E3E] font-sans leading-[1.8]">{ONE_PARAGRAPH}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 8. FINAL CTA ──────────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 lg:py-24 border-t border-[rgba(255,255,255,0.06)]" style={{ background: "#070D1A" }}>
          <DotGrid />
          <Parallax distance={50} className="absolute inset-0 z-0">
            <GradientOrb tone="coral" size={420} intensity={0.10} className="bottom-[-80px] right-[8%]" />
            <GradientOrb tone="blue" size={460} intensity={0.14} className="top-[-60px] left-[10%]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[760px] px-6 md:px-10 text-center">
            <Reveal>
              <h2 className="font-display text-[32px] lg:text-[46px] text-[#EEF1F7] tracking-[-0.75px] leading-[1.1] mb-4">
                Stop guessing which marketing works.
              </h2>
              <p className="text-[17px] text-[#8A96A8] font-sans leading-[1.65] mb-9 max-w-[540px] mx-auto">
                Connect your channels, let Cortex score the signal, and see ROI by channel from day one.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-7 bg-[#014584] text-white font-display text-[15px] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_20px_rgba(1,69,132,0.45)]"
                >
                  Get started free <ArrowRight size={16} />
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
