import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Icon as LucideIcon } from "@phosphor-icons/react";
import { Crosshair as Radar, Brain } from "@phosphor-icons/react/dist/ssr";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import FeatureIcon from "@/components/graphics/FeatureIcon";
import GradientOrb from "@/components/graphics/GradientOrb";
import DotGrid from "@/components/graphics/DotGrid";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { PLATFORM_PAGES } from "@/data/platform";

const PAGE_DESC =
  "One platform for AI-driven marketing: attribution, autonomous agents, automation, and unified CRM. See how Octmark products work together across your stack.";

export const metadata: Metadata = {
  title: "The Octmark Platform, AI Marketing, Automation, and CRM",
  description: PAGE_DESC,
  keywords: ["marketing technology platform", "martech platform", "AI marketing platform"],
  alternates: { canonical: "/products" },
  robots: { index: true, follow: true },
  openGraph: { title: "The Octmark Platform", description: PAGE_DESC, url: "/products", type: "website" },
  twitter: { card: "summary_large_image", title: "The Octmark Platform", description: PAGE_DESC },
};

const PRODUCTS: { name: string; desc: string; href: string; icon: LucideIcon }[] = [
  { name: "Octrackit", desc: "AI marketing attribution that shows what actually drives revenue.", href: "/octrackit", icon: Radar },
  { name: "Cortex", desc: "AI lead quality scoring that tells real leads from noise.", href: "/octrackit/cortex", icon: Brain },
  ...PLATFORM_PAGES.map((p) => ({
    name: p.name,
    desc:
      p.slug === "ai-agents"
        ? "Autonomous workflows that run marketing work for you."
        : p.slug === "marketing-automation"
          ? "Campaigns and journeys that run themselves."
          : "Unified customer data and pipeline in one record.",
    href: `/products/${p.slug}`,
    icon: p.icon,
  })),
];

const FITS = [
  "One source of customer data across every product.",
  "Work that moves between products automatically.",
  "Built on tools you already run, including your CRM and WhatsApp.",
];

const FAQS = [
  { q: "What is the Octmark platform?", a: "The Octmark platform is a connected set of products for AI-driven marketing: attribution, AI agents, automation, and CRM, designed to work together on one customer data foundation." },
  { q: "Do I have to use all the products?", a: "No. Each product works on its own, and they connect when you use more than one, so you can start with what you need and add later." },
  { q: "What does it integrate with?", a: "Octmark works with tools you already run, including leading CRM platforms and WhatsApp through Gallabox. The full integration list is confirmed for your setup." },
  { q: "How is this different from buying separate tools?", a: "Separate tools rarely share data. The Octmark platform connects attribution, agents, automation, and CRM on one customer record, so work and data move between them." },
];

const GEO =
  "The Octmark platform is a connected set of marketing technology products covering attribution, autonomous AI agents, marketing automation, and CRM. Octmark unifies these so a team's marketing data, automated workflows, and customer records work from the same place, built on and connected to tools such as your CRM and WhatsApp, rather than running as separate, disconnected systems.";

export default function PlatformHubPage() {
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <GlobalHeader darkHero />
      <main id="main" className="flex-1">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden"
          style={{
            background: "#070D1A",
            backgroundImage: "radial-gradient(ellipse 700px 500px at 80% 16%, rgba(1,69,132,0.10) 0%, transparent 60%)",
          }}
        >
          <DotGrid />
          <Parallax distance={80} className="absolute inset-0 z-0">
            <GradientOrb tone="blue" size={620} intensity={0.16} className="top-[6%] right-[4%]" />
            <GradientOrb tone="coral" size={360} intensity={0.07} className="bottom-[10%] left-[6%]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 pt-[150px] pb-20">
            <Reveal className="max-w-[760px]">
              <span className="stag stag-on-dark">PRODUCTS</span>
              <h1 className="font-display text-[42px] lg:text-[58px] leading-[1.05] tracking-[-1px] text-[#EEF1F7] mt-1 mb-6">
                One platform for AI-driven marketing
              </h1>
              <p className="text-[18px] lg:text-[20px] text-[#8A96A8] leading-[1.6] font-sans max-w-[600px]">
                Octmark brings attribution, autonomous agents, automation, and CRM into one connected
                platform, so your marketing data, work, and customers live in the same place.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/demo" className="inline-flex items-center gap-2 h-12 px-7 bg-[#014584] text-white font-display text-[15px] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.6),0_4px_20px_rgba(1,69,132,0.45)]">
                  Book a demo <ArrowRight size={16} />
                </Link>
                <Link href="/start" className="inline-flex items-center h-12 px-7 border border-[rgba(255,255,255,0.18)] text-[#EEF1F7] font-display text-[15px] rounded-lg hover:border-[rgba(255,255,255,0.4)] transition-colors">
                  Get a growth audit
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── PRODUCT GRID ──────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12 max-w-[640px]">
              <span className="stag">EXPLORE PRODUCTS</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1">
                Products that work as one system
              </h2>
            </Reveal>
            <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-5" stagger={0.08}>
              {PRODUCTS.map((p) => (
                <StaggerItem key={p.name}>
                  <Link
                    href={p.href}
                    className="group flex items-start gap-4 h-full bg-white rounded-xl border border-[#E5E8EE] p-6 transition-all duration-150 hover:border-[#014584] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(1,69,132,0.10)]"
                  >
                    <FeatureIcon icon={p.icon} tone="light" size={48} />
                    <div>
                      <h3 className="font-display text-[20px] text-[#3E3E3E] leading-snug mb-1.5">{p.name}</h3>
                      <p className="text-[14px] text-[#52525B] font-sans leading-[1.6] mb-3">{p.desc}</p>
                      <span className="inline-flex items-center gap-1.5 text-[14px] text-[#014584] font-display group-hover:gap-2.5 transition-all">
                        Learn more <ArrowRight size={15} />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── HOW IT FITS ───────────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12 max-w-[640px]">
              <span className="stag">HOW IT FITS TOGETHER</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-3">
                Connected, not just collected
              </h2>
              <p className="text-[16px] text-[#52525B] font-sans leading-[1.6]">
                Most teams run marketing across tools that do not talk to each other. Octmark closes the
                gaps, so data, workflows, and customer records connect.
              </p>
            </Reveal>
            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5" stagger={0.1}>
              {FITS.map((f, i) => (
                <StaggerItem key={f}>
                  <div className="h-full bg-white rounded-xl border border-[#E5E8EE] p-6">
                    <span className="font-mono text-[20px] text-[#4D9FE0] block mb-3">{`0${i + 1}`}</span>
                    <p className="text-[15px] text-[#3E3E3E] font-sans leading-[1.6]">{f}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── FAQ (crawlable) ───────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[860px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12">
              <span className="stag">FAQ</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1">
                The platform, answered
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

        {/* ── GEO ───────────────────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-16">
          <div className="mx-auto max-w-[860px] px-6 md:px-10 lg:px-20">
            <Reveal>
              <div className="rounded-xl bg-white border border-[#E5E8EE] border-l-[3px] border-l-[#FEA781] p-7 lg:p-9">
                <span className="block text-[11px] uppercase tracking-[0.12em] text-[#9AA3B2] font-semibold mb-3">
                  The Octmark platform in one paragraph
                </span>
                <p className="text-[16px] text-[#3E3E3E] font-sans leading-[1.8]">{GEO}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 lg:py-24 border-t border-[rgba(255,255,255,0.06)]" style={{ background: "#070D1A" }}>
          <DotGrid />
          <Parallax distance={50} className="absolute inset-0 z-0">
            <GradientOrb tone="coral" size={420} intensity={0.10} className="bottom-[-80px] right-[8%]" />
            <GradientOrb tone="blue" size={460} intensity={0.14} className="top-[-60px] left-[10%]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[760px] px-6 md:px-10 text-center">
            <Reveal>
              <h2 className="font-display text-[32px] lg:text-[44px] text-[#EEF1F7] tracking-[-0.75px] leading-[1.12] mb-4">
                See the platform on your stack
              </h2>
              <p className="text-[17px] text-[#8A96A8] font-sans leading-[1.65] mb-9 max-w-[540px] mx-auto">
                Tell us what you run today, and we will show you how the pieces connect.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/start" className="inline-flex items-center gap-2 h-12 px-7 bg-[#014584] text-white font-display text-[15px] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_20px_rgba(1,69,132,0.45)]">
                  Talk to Octmark <ArrowRight size={16} />
                </Link>
                <Link href="/demo" className="inline-flex items-center h-12 px-7 border border-[rgba(255,255,255,0.18)] text-[#EEF1F7] font-display text-[15px] rounded-lg hover:border-[rgba(255,255,255,0.4)] transition-colors">
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
