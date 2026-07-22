import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import FeatureIcon from "@/components/graphics/FeatureIcon";
import GradientOrb from "@/components/graphics/GradientOrb";
import DotGrid from "@/components/graphics/DotGrid";
import Reveal from "@/components/motion/Reveal";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import Parallax from "@/components/motion/Parallax";
import DrawPath from "@/components/motion/DrawPath";
import { ServiceHero, hasServiceHero } from "@/components/graphics/services";
import { SERVICES, getService } from "@/data/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: "website",
    },
  };
}

const LIFECYCLE = ["Attract", "Engage", "Convert", "Deliver", "Retain"];

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <GlobalHeader darkHero={false} />
      <main id="main" className="flex-1">

        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#F9F8F5] pt-[128px] pb-20 border-b border-[#E0E5EC]">
          <Parallax distance={70} className="absolute inset-0 z-0">
            <GradientOrb tone="blue" size={560} intensity={0.12} className="top-[-100px] right-[-40px]" />
            <GradientOrb tone="coral" size={320} intensity={0.07} className="bottom-[-60px] left-[2%]" />
          </Parallax>

          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-[6fr_5fr] gap-12 lg:gap-16 items-center">
            <Reveal>
              <Link href="/services" className="inline-flex items-center gap-1.5 text-[13px] text-[#52525B] hover:text-[#014584] font-sans mb-7 transition-colors">
                <ArrowRight size={13} className="rotate-180" /> All services
              </Link>
              <div className="flex items-center gap-3 mb-5">
                <FeatureIcon icon={service.icon} tone="light" size={48} />
                <span className="stag !mb-0">{service.eyebrow}</span>
              </div>
              <h1 className="font-display text-[44px] lg:text-[56px] text-[#014584] tracking-[-1px] leading-[1.08] mb-5">
                {service.h1}
              </h1>
              <p className="text-[18px] lg:text-[20px] text-[#3E3E3E] font-sans max-w-[560px] leading-[1.6]">
                {service.subhead}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/start" className="inline-flex items-center h-11 px-6 bg-[#014584] text-white font-display text-[15px] rounded-lg hover:bg-[#0157A8] transition-all hover:shadow-[0_4px_16px_rgba(1,69,132,0.35)]">
                  Get a free growth audit
                </Link>
                <Link href="/demo" className="inline-flex items-center h-11 px-6 border border-[#D6DBE3] text-[#014584] font-display text-[15px] rounded-lg hover:border-[#014584] transition-colors">
                  Book a demo
                </Link>
              </div>
            </Reveal>

            {hasServiceHero(service.slug) && (
              <Reveal delay={0.15}>
                <Parallax distance={22}>
                  <ServiceHero slug={service.slug} />
                </Parallax>
              </Reveal>
            )}
          </div>
        </section>

        {/* ── PROBLEM ───────────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="max-w-[760px]">
              <h2 className="font-display text-[30px] lg:text-[36px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.2] mb-6">
                {service.problemHeading}
              </h2>
              <div className="pl-5 border-l-2 border-[#FEA781] space-y-4">
                {service.problemBody.map((p, i) => (
                  <p key={i} className="text-[17px] text-[#52525B] font-sans leading-[1.7]">
                    {p}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── WHAT WE DO ────────────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12 max-w-[640px]">
              <span className="stag">WHAT WE DO</span>
              <h2 className="font-display text-[30px] lg:text-[36px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.2] mt-1 mb-3">
                {service.whatWeDoHeading}
              </h2>
              <p className="text-[16px] text-[#52525B] font-sans leading-[1.6]">{service.whatWeDoIntro}</p>
            </Reveal>

            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.09}>
              {service.deliverables.map((d) => (
                <StaggerItem key={d.title}>
                  <div className="h-full bg-white rounded-xl border border-[#E5E8EE] p-6 transition-all duration-150 hover:border-[#014584] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(1,69,132,0.08)]">
                    <FeatureIcon icon={d.icon} tone="light" size={44} className="mb-4" />
                    <h3 className="font-display text-[18px] text-[#3E3E3E] leading-snug mb-2">{d.title}</h3>
                    <p className="text-[14px] text-[#52525B] font-sans leading-[1.6]">{d.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* ── HOW IT CONNECTS (dark, scroll-draw lifecycle) ─────── */}
        <section
          className="relative overflow-hidden py-20 lg:py-28"
          style={{ background: "#070D1A" }}
        >
          <DotGrid />
          <Parallax distance={60} className="absolute inset-0 z-0">
            <GradientOrb tone="blue" size={620} intensity={0.18} className="top-[10%] left-[-80px]" />
          </Parallax>

          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="max-w-[680px] mb-14">
              <span className="stag stag-on-dark">THE SYSTEM</span>
              <h2 className="font-display text-[30px] lg:text-[38px] text-[#EEF1F7] tracking-[-0.5px] leading-[1.15] mt-1 mb-4">
                {service.connectHeading}
              </h2>
              <p className="text-[17px] text-[#8A96A8] font-sans leading-[1.7]">{service.connectBody}</p>
            </Reveal>

            {/* Lifecycle strip with a line that draws itself on scroll */}
            <Reveal>
              <div className="relative">
                <svg
                  viewBox="0 0 1000 8"
                  preserveAspectRatio="none"
                  className="absolute top-[13px] left-0 w-full h-2 hidden md:block"
                  aria-hidden="true"
                >
                  <DrawPath
                    d="M 10 4 L 990 4"
                    stroke="rgba(77,159,224,0.45)"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    duration={1.4}
                  />
                </svg>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
                  {LIFECYCLE.map((stage) => (
                    <div key={stage} className="flex flex-col items-center text-center">
                      <span
                        className="w-[10px] h-[10px] rounded-full mb-3"
                        style={{ background: "#4D9FE0", boxShadow: "0 0 10px rgba(77,159,224,0.9)" }}
                      />
                      <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-[#8A96A8]">
                        {stage}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── PROOF ─────────────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="max-w-[720px]">
              <span className="stag">PROOF</span>
              <h2 className="font-display text-[28px] lg:text-[34px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.2] mt-1 mb-4">
                {service.proofHeading}
              </h2>
              <p className="text-[17px] text-[#52525B] font-sans leading-[1.7] mb-6">{service.proofBody}</p>
              <Link href="/results" className="inline-flex items-center gap-1.5 text-[15px] text-[#014584] font-display hover:gap-2.5 transition-all">
                See the work <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* ── FINAL CTA (dark) ──────────────────────────────────── */}
        <section className="relative overflow-hidden py-20 lg:py-24 border-t border-[rgba(255,255,255,0.06)]" style={{ background: "#070D1A" }}>
          <DotGrid />
          <Parallax distance={50} className="absolute inset-0 z-0">
            <GradientOrb tone="coral" size={420} intensity={0.10} className="bottom-[-80px] right-[6%]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[760px] px-6 md:px-10 text-center">
            <Reveal>
              <h2 className="font-display text-[32px] lg:text-[42px] text-[#EEF1F7] tracking-[-0.75px] leading-[1.12] mb-4">
                {service.finalCtaHeading}
              </h2>
              <p className="text-[17px] text-[#8A96A8] font-sans leading-[1.65] mb-8 max-w-[540px] mx-auto">
                {service.finalCtaBody}
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/start" className="inline-flex items-center h-12 px-7 bg-[#014584] text-white font-display text-[15px] rounded-lg hover:bg-[#0157A8] transition-all hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_20px_rgba(1,69,132,0.45)]">
                  Get a free growth audit
                </Link>
                <Link href="/demo" className="inline-flex items-center h-12 px-7 border border-[rgba(255,255,255,0.18)] text-[#EEF1F7] font-display text-[15px] rounded-lg hover:border-[rgba(255,255,255,0.4)] transition-colors">
                  Book a demo
                </Link>
              </div>
            </Reveal>

            {/* Other services */}
            <Reveal className="mt-14 pt-10 border-t border-[rgba(255,255,255,0.06)]">
              <span className="block text-[11px] uppercase tracking-[0.12em] text-[#4E5A6C] font-sans mb-5">
                Explore other services
              </span>
              <div className="flex flex-wrap gap-2.5 justify-center">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={`/services/${o.slug}`}
                    className="inline-flex items-center gap-2 px-4 h-9 rounded-full border border-[rgba(255,255,255,0.12)] text-[13px] text-[#8A96A8] font-sans hover:text-[#EEF1F7] hover:border-[rgba(77,159,224,0.5)] transition-colors"
                  >
                    <o.icon size={14} className="text-[#4D9FE0]" />
                    {o.navLabel}
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
