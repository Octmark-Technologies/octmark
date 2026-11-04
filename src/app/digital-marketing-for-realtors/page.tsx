import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import {
  Megaphone,
  Target,
  Browser,
  Database,
  WhatsappLogo,
  Robot,
} from "@phosphor-icons/react/dist/ssr";
import GlobalFooter from "@/components/global/GlobalFooter";
import FeatureIcon from "@/components/graphics/FeatureIcon";
import FlagIcon from "@/components/graphics/FlagIcon";
import GradientOrb from "@/components/graphics/GradientOrb";
import DotGrid from "@/components/graphics/DotGrid";
import BookingEmbed from "@/components/sections/BookingEmbed";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";

const PAGE_TITLE = "Digital Marketing for Realtors";
const PAGE_DESC =
  "Digital marketing for realtors: Meta & Google ads, lead generation, CRM, WhatsApp automation, and Octrackit lead-quality tracking. Book a free 30-minute strategy call.";
const PAGE_URL = "/digital-marketing-for-realtors";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  keywords: [
    "digital marketing for realtors",
    "digital marketing agency for realtors",
    "real estate marketing agency",
    "lead generation for realtors",
    "real estate CRM",
    "WhatsApp automation for real estate",
    "AI calling for realtors",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${PAGE_TITLE} | Octmark`,
    description: PAGE_DESC,
    url: PAGE_URL,
    type: "website",
  },
};

const ONE_PARAGRAPH =
  "Octmark provides digital marketing for realtors, including Meta & Google advertising, lead generation, landing pages, CRM setup, WhatsApp automation, optional AI calling, and Octrackit lead-quality tracking, for real estate agents across the United States, Canada, United Kingdom, UAE, and India.";

const TRUST_FACTS = ["Free 30-minute call", "No pitch deck", "Real estate only"];

const PROBLEM_POINTS = [
  "Not because their listings are better.",
  "Not because their service is better.",
  "Just because they're more visible online, and that's the gap we close.",
];

const WHAT_WE_DO = [
  {
    icon: Megaphone,
    label: "Meta & Google Advertising",
    desc: "Paid campaigns built to reach active buyers, not just impressions.",
  },
  {
    icon: Target,
    label: "Lead Generation",
    desc: "Forms, offers, and funnels engineered to capture real buyer intent.",
  },
  {
    icon: Browser,
    label: "Landing Pages",
    desc: "Fast, conversion-focused pages built for each campaign and listing.",
  },
  {
    icon: Database,
    label: "CRM Setup",
    desc: "Every lead organised and tracked from first click to closed deal.",
  },
  {
    icon: WhatsappLogo,
    label: "WhatsApp Automation",
    desc: "Instant replies and follow-ups so no enquiry goes cold.",
  },
  {
    icon: Robot,
    label: "AI Calling (optional)",
    desc: "AI-handled calls that qualify leads and follow up around the clock.",
  },
];

const MARKETS = [
  { name: "India", country: "IN" as const },
  { name: "United States", country: "US" as const },
  { name: "Canada", country: "CA" as const },
  { name: "United Kingdom", country: "GB" as const },
  { name: "UAE", country: "AE" as const },
];

const WHY_OCTMARK = [
  {
    title: "One connected system",
    desc: "Every channel and tool works together, not as disconnected pieces you have to stitch together yourself.",
  },
  {
    title: "We manage it, not just build it",
    desc: "Ongoing management and optimisation are included, not a one-time setup and goodbye.",
  },
  {
    title: "You focus on deals, not on marketing",
    desc: "Less time chasing leads and juggling tools, more time closing.",
  },
];

const FAQS = [
  {
    q: "What does digital marketing for realtors include?",
    a: "A connected system, not a bundle of disconnected tools: Meta and Google advertising, lead generation, landing pages, CRM setup, WhatsApp automation, optional AI calling, and Octrackit, which blocks fake leads and shows you exactly what's working.",
  },
  {
    q: "How is this priced?",
    a: "Most real estate marketing runs on a monthly retainer rather than performance-based pricing, since an agency can control lead quality and volume but not your close rate. We size a scope and number specific to your market on the call, not before it.",
  },
  {
    q: "Which markets do you work in?",
    a: "Realtors across the United States, Canada, United Kingdom, UAE, and India.",
  },
  {
    q: "What happens on the free strategy call?",
    a: "Thirty minutes, no pitch deck. We look at your current channels and listings, tell you honestly what we see, and recommend one clear next step.",
  },
  {
    q: "Is Octrackit a separate product, or part of the service?",
    a: "Octrackit is built into the system we run for you. It blocks fake leads, cuts wasted ad spend, and shows exactly which channels are producing real buyers.",
  },
];

export default function DigitalMarketingForRealtorsPage() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://www.octmark.com";

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Digital Marketing for Realtors",
    name: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${baseUrl}${PAGE_URL}`,
    provider: {
      "@type": "Organization",
      name: "Octmark Technologies",
      legalName: "Octmark Technologies India Private Limited",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: `${baseUrl}/images/OCTMARK_LOGO.png` },
    },
    areaServed: ["United States", "Canada", "United Kingdom", "United Arab Emirates", "India"],
    audience: { "@type": "Audience", audienceType: "Real estate agents" },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      {/* Minimal landing-page nav: logo + single CTA, no mega-menu, nothing to click away to */}
      <header className="relative z-20" style={{ background: "#070D1A" }}>
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-6 md:px-10 lg:px-20">
          <Link href="/" aria-label="Octmark, Home">
            <Image
              src="/images/OCTMARK_LOGO_WHITE.png"
              alt="Octmark"
              height={34}
              width={136}
              priority
              className="h-[28px] w-auto md:h-[32px]"
            />
          </Link>
          <a
            href="#booking"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#014584] px-5 font-display text-[14px] tracking-[0.02em] text-white transition-colors hover:bg-[#0157A8]"
          >
            Book Your Free Strategy Call
          </a>
        </div>
      </header>

      <main id="main" className="flex-1">

        {/* ── 1. HERO (asymmetric: copy left, proof panel right) ─── */}
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

          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 pt-6 pb-24 md:pt-10 grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-14 lg:gap-16 items-center">
            <Reveal>
              <span className="stag stag-on-dark">DIGITAL MARKETING AGENCY FOR REALTORS</span>
              <h1 className="font-display text-[38px] lg:text-[52px] leading-[1.08] tracking-[-1px] text-[#EEF1F7] mt-2 mb-6">
                Digital Marketing for Realtors:{" "}
                <span className="text-[#FEA781]" style={{ textShadow: "0 0 24px rgba(254,167,129,0.30)" }}>
                  more buyers, less guesswork.
                </span>
              </h1>
              <p className="text-[18px] lg:text-[19px] text-[#8A96A8] leading-[1.65] font-sans max-w-[480px] mb-8">
                We build the digital system that puts your listings in front of
                the right buyers, and keeps them there.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-2 h-12 px-7 bg-[#014584] text-white font-display text-[15px] tracking-[0.02em] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.6),0_4px_20px_rgba(1,69,132,0.45)]"
                >
                  Book Your Free Strategy Call <ArrowRight size={16} />
                </a>
                <Link href="#what-we-do" className="text-[14px] text-[#8A96A8] hover:text-[#EEF1F7] hover:underline font-sans transition-colors">
                  See what&rsquo;s included →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-6 lg:p-7">
                <span className="block text-[11px] uppercase tracking-[0.12em] text-[#8A96A8] font-semibold mb-4">
                  Where we work
                </span>
                <div className="flex flex-wrap gap-2 mb-6">
                  {MARKETS.map((m) => (
                    <span
                      key={m.name}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.06] pl-1.5 pr-3 py-1.5 text-[12px] text-[#EEF1F7] font-sans"
                    >
                      <FlagIcon country={m.country} size={18} />
                      {m.name}
                    </span>
                  ))}
                </div>
                <div className="space-y-3 border-t border-white/[0.08] pt-5">
                  {TRUST_FACTS.map((t) => (
                    <div key={t} className="flex items-center gap-2.5">
                      <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#4D9FE0]/15 text-[#4D9FE0]">
                        <Check size={11} strokeWidth={3} />
                      </span>
                      <span className="text-[13px] text-[#C4CCD8] font-sans">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 2. THE PROBLEM (text left, point list right) ──────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <span className="stag">THE PROBLEM</span>
              <h2 className="font-display text-[30px] lg:text-[38px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-5">
                It&rsquo;s not about being better. It&rsquo;s about being seen first.
              </h2>
              <p className="text-[17px] text-[#52525B] font-sans leading-[1.7]">
                More realtors are losing buyers to competitors who simply show up online first.
              </p>
            </Reveal>

            <Stagger className="space-y-3" stagger={0.1}>
              {PROBLEM_POINTS.map((p) => (
                <StaggerItem key={p}>
                  <div className="flex items-start gap-4 rounded-xl border border-[#E5E8EE] bg-[#F8F9FC] p-5">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#FEA781]" />
                    <p className="text-[15px] text-[#52525B] font-sans leading-[1.6]">{p}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── 3. WHAT WE DO (Octrackit banner + supporting grid) ─── */}
        <section id="what-we-do" className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-10 max-w-[640px]">
              <span className="stag">WHAT WE DO</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-3">
                One system. Every piece connected.
              </h2>
              <p className="text-[16px] text-[#52525B] font-sans leading-[1.6]">
                A connected system built for realtors, not a bundle of disconnected tools.
              </p>
            </Reveal>

            <Reveal className="mb-6">
              <div className="flex flex-col md:flex-row md:items-center gap-6 rounded-2xl border border-[#4D9FE0]/25 bg-white p-7 lg:p-8">
                <Image
                  src="/images/octrackit-light.png"
                  alt="Octrackit"
                  width={220}
                  height={110}
                  className="h-11 w-auto flex-shrink-0"
                />
                <p className="text-[15px] text-[#52525B] font-sans leading-[1.65]">
                  Our own tool that blocks fake leads, cuts your ad spend, and shows you exactly
                  what&rsquo;s working in your business.
                </p>
              </div>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
              {WHAT_WE_DO.map((item) => (
                <StaggerItem key={item.label}>
                  <div className="h-full bg-white rounded-xl border border-[#E5E8EE] p-6 transition-all duration-150 hover:border-[#014584] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(1,69,132,0.08)]">
                    <FeatureIcon icon={item.icon} tone="light" size={46} className="mb-4" />
                    <h3 className="font-display text-[18px] text-[#3E3E3E] leading-snug mb-2">{item.label}</h3>
                    <p className="text-[14px] text-[#52525B] font-sans leading-[1.6]">{item.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── GEO: self-contained definition block ──────────────── */}
        <section className="relative overflow-hidden py-16 lg:py-20" style={{ background: "#070D1A" }}>
          <DotGrid />
          <div className="relative z-10 mx-auto max-w-[860px] px-6 md:px-10 lg:px-20">
            <Reveal>
              <div className="rounded-xl bg-white border border-[#E5E8EE] border-l-[3px] border-l-[#FEA781] p-7 lg:p-9">
                <span className="block text-[11px] uppercase tracking-[0.12em] text-[#9AA3B2] font-semibold mb-3">
                  Octmark for realtors, in one paragraph
                </span>
                <p className="text-[16px] text-[#3E3E3E] font-sans leading-[1.8]">{ONE_PARAGRAPH}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 5. WHO IT'S FOR (text left, market cluster right) ─── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-center">
            <Reveal>
              <span className="stag">WHO IT&rsquo;S FOR</span>
              <h2 className="font-display text-[30px] lg:text-[38px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-4">
                We work exclusively with realtors.
              </h2>
              <p className="text-[14px] text-[#52525B] font-sans">
                See how this fits our{" "}
                <Link href="/industries#real-estate" className="text-[#014584] hover:underline">
                  real estate industry approach
                </Link>
                .
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-3 sm:grid-cols-5 gap-4" stagger={0.09}>
              {MARKETS.map((market) => (
                <StaggerItem key={market.name}>
                  <div className="h-full rounded-xl border border-[#E5E8EE] p-5 text-center">
                    <FlagIcon country={market.country} size={38} className="mb-3 mx-auto" />
                    <h3 className="font-display text-[14px] text-[#3E3E3E] leading-snug">{market.name}</h3>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── 6. WHY OCTMARK (centered intro + 3-card row) ──────── */}
        <section className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mx-auto mb-12 max-w-[640px] text-center">
              <span className="stag">WHY OCTMARK</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-3">
                We run the system. You run the business.
              </h2>
              <p className="text-[16px] text-[#52525B] font-sans leading-[1.7]">
                We don&rsquo;t hand you a set of tools and leave you to figure it out. We build,
                manage and optimise the entire system for you.
              </p>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.08}>
              {WHY_OCTMARK.map((w) => (
                <StaggerItem key={w.title}>
                  <div className="h-full bg-white rounded-xl border border-[#E5E8EE] p-6">
                    <span className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-[rgba(1,69,132,0.08)] text-[#014584]">
                      <Check size={16} strokeWidth={2.5} />
                    </span>
                    <h3 className="font-display text-[17px] text-[#3E3E3E] leading-snug mb-2">{w.title}</h3>
                    <p className="text-[14px] text-[#52525B] font-sans leading-[1.6]">{w.desc}</p>
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
                Before you book
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

        {/* ── 8. BOOKING (final CTA) ─────────────────────────────── */}
        <section
          id="booking"
          className="relative overflow-hidden py-20 lg:py-24 border-t border-[rgba(255,255,255,0.06)]"
          style={{ background: "#070D1A" }}
        >
          <DotGrid />
          <Parallax distance={50} className="absolute inset-0 z-0">
            <GradientOrb tone="coral" size={420} intensity={0.1} className="bottom-[-80px] right-[8%]" />
            <GradientOrb tone="blue" size={460} intensity={0.14} className="top-[-60px] left-[10%]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[1180px] px-6 md:px-10 text-center">
            <Reveal>
              <h2 className="font-display text-[32px] lg:text-[46px] text-[#EEF1F7] tracking-[-0.75px] leading-[1.1] mb-4">
                See what this looks like for your market.
              </h2>
              <p className="mx-auto mb-9 max-w-[540px] text-[17px] text-[#8A96A8] font-sans leading-[1.65]">
                Free. 30 minutes. No pitch.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <BookingEmbed frame="glow" height="700px" />
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 text-[14px] text-[#8A96A8] font-sans">
                Prefer to reach out directly? Email us at{" "}
                <a href="mailto:info@octmarktechnologies.com" className="text-[#4D9FE0] underline underline-offset-2">
                  info@octmarktechnologies.com
                </a>
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
