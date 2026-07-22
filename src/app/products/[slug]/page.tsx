import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import FeatureIcon from "@/components/graphics/FeatureIcon";
import GradientOrb from "@/components/graphics/GradientOrb";
import DotGrid from "@/components/graphics/DotGrid";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import PlatformMockup from "@/components/graphics/dash/PlatformMockup";
import { PLATFORM_PAGES, getPlatformPage } from "@/data/platform";

export function generateStaticParams() {
  return PLATFORM_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getPlatformPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    alternates: { canonical: `/products/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/products/${page.slug}`,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: page.metaTitle, description: page.metaDescription },
  };
}

export default async function PlatformProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getPlatformPage(slug);
  if (!page) notFound();

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://octmarktechnologies.com";
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
    about: { "@type": "SoftwareApplication", name: page.name, url: `${baseUrl}/products/${page.slug}` },
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
            <GradientOrb tone="blue" size={620} intensity={0.16} className="top-[4%] right-[2%]" />
            <GradientOrb tone="coral" size={360} intensity={0.07} className="bottom-[8%] left-[6%]" />
          </Parallax>

          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 pt-[150px] pb-24 grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-14 lg:gap-16 items-center">
            <Reveal>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-[13px] text-[#8A96A8] hover:text-[#EEF1F7] font-sans mb-6 transition-colors">
                <ArrowRight size={13} className="rotate-180" /> Products
              </Link>
              <div className="flex items-center gap-3 mb-5">
                <FeatureIcon icon={page.icon} tone="dark" size={46} />
                <span className="stag stag-on-dark !mb-0">{page.eyebrow}</span>
              </div>
              <h1 className="font-display text-[40px] lg:text-[54px] leading-[1.06] tracking-[-1px] text-[#EEF1F7] mb-6">
                {page.h1}
              </h1>
              <p className="text-[18px] lg:text-[19px] text-[#8A96A8] leading-[1.65] font-sans max-w-[540px] mb-8">
                {page.subhead}
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/demo" className="inline-flex items-center gap-2 h-12 px-7 bg-[#014584] text-white font-display text-[15px] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.6),0_4px_20px_rgba(1,69,132,0.45)]">
                  Book a demo <ArrowRight size={16} />
                </Link>
                <Link href="/start" className="text-[14px] text-[#8A96A8] hover:text-[#EEF1F7] hover:underline font-sans transition-colors">
                  Talk to us →
                </Link>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Parallax distance={22}>
                <PlatformMockup mockup={page.mockup} />
              </Parallax>
            </Reveal>
          </div>
        </section>

        {/* ── PROBLEM ───────────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="max-w-[760px]">
              <span className="stag">THE PROBLEM</span>
              <h2 className="font-display text-[30px] lg:text-[38px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.18] mt-1 mb-6">
                {page.problemHeading}
              </h2>
              <p className="pl-5 border-l-2 border-[#FEA781] text-[17px] text-[#52525B] font-sans leading-[1.7]">
                {page.problemBody}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12 max-w-[640px]">
              <span className="stag">CAPABILITIES</span>
              <h2 className="font-display text-[30px] lg:text-[38px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.18] mt-1">
                {page.featuresHeading}
              </h2>
            </Reveal>
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
              {page.features.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="h-full bg-white rounded-xl border border-[#E5E8EE] p-6 transition-all duration-150 hover:border-[#014584] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(1,69,132,0.08)]">
                    <FeatureIcon icon={f.icon} tone="light" size={46} className="mb-4" />
                    <h3 className="font-display text-[18px] text-[#3E3E3E] leading-snug mb-2">{f.title}</h3>
                    <p className="text-[14px] text-[#52525B] font-sans leading-[1.6]">{f.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── HOW IT WORKS ──────────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 lg:py-28" style={{ background: "#070D1A" }}>
          <DotGrid />
          <Parallax distance={60} className="absolute inset-0 z-0">
            <GradientOrb tone="blue" size={560} intensity={0.16} className="top-[14%] left-[-60px]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-14 max-w-[640px]">
              <span className="stag stag-on-dark">{page.howHeading.toUpperCase()}</span>
            </Reveal>
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.12}>
              {page.steps.map((s) => (
                <StaggerItem key={s.n}>
                  <div className="h-full rounded-xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="h-[3px] w-10 bg-[#014584] rounded mb-5" />
                    <span className="font-mono text-[28px] text-[#4D9FE0] block mb-3">{s.n}</span>
                    <h3 className="font-display text-[18px] text-[#EEF1F7] mb-2">{s.title}</h3>
                    <p className="text-[14px] text-[#8A96A8] font-sans leading-[1.6]">{s.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── WHO IT IS FOR ─────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-12 lg:gap-16">
            <Reveal>
              <span className="stag">{page.whoHeading.toUpperCase()}</span>
              <h2 className="font-display text-[30px] lg:text-[38px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.18] mt-1">
                Built for the way your team works
              </h2>
            </Reveal>
            <Stagger className="space-y-3" stagger={0.08}>
              {page.whoPoints.map((p) => (
                <StaggerItem key={p}>
                  <div className="flex items-start gap-4 bg-[#F8F9FC] rounded-xl border border-[#E5E8EE] p-5">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full bg-[rgba(1,69,132,0.08)] text-[#014584]">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <p className="text-[15px] text-[#3E3E3E] font-sans leading-[1.6]">{p}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── FAQ (crawlable) ───────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[860px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12">
              <span className="stag">FAQ</span>
              <h2 className="font-display text-[30px] lg:text-[38px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.18] mt-1">
                {page.name}, answered
              </h2>
            </Reveal>
            <div className="divide-y divide-[#E5E8EE] border-t border-[#E5E8EE]">
              {page.faq.map((f) => (
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

        {/* ── GEO definition ────────────────────────────────────── */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[860px] px-6 md:px-10 lg:px-20">
            <Reveal>
              <div className="rounded-xl bg-[#F8F9FC] border border-[#E5E8EE] border-l-[3px] border-l-[#FEA781] p-7 lg:p-9">
                <span className="block text-[11px] uppercase tracking-[0.12em] text-[#9AA3B2] font-semibold mb-3">
                  {page.name} in one paragraph
                </span>
                <p className="text-[16px] text-[#3E3E3E] font-sans leading-[1.8]">{page.geo}</p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 lg:py-24 border-t border-[rgba(255,255,255,0.06)]" style={{ background: "#070D1A" }}>
          <DotGrid />
          <Parallax distance={50} className="absolute inset-0 z-0">
            <GradientOrb tone="coral" size={420} intensity={0.10} className="bottom-[-80px] right-[8%]" />
            <GradientOrb tone="blue" size={460} intensity={0.14} className="top-[-60px] left-[10%]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[760px] px-6 md:px-10 text-center">
            <Reveal>
              <h2 className="font-display text-[32px] lg:text-[44px] text-[#EEF1F7] tracking-[-0.75px] leading-[1.12] mb-4">
                {page.ctaHeading}
              </h2>
              <p className="text-[17px] text-[#8A96A8] font-sans leading-[1.65] mb-9 max-w-[540px] mx-auto">{page.ctaBody}</p>
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
