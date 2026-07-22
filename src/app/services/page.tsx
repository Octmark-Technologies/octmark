import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import FeatureIcon from "@/components/graphics/FeatureIcon";
import GradientOrb from "@/components/graphics/GradientOrb";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import { Stagger, StaggerItem } from "@/components/motion/Stagger";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Marketing Execution Services",
  description:
    "SEO, paid advertising, social media, content marketing, and web & e-commerce, run on the Octmark system and measured against revenue.",
  alternates: { canonical: "/services" },
  openGraph: { url: "/services", type: "website" },
};

export default function ServicesHubPage() {
  return (
    <>
      <GlobalHeader darkHero={false} />
      <main id="main" className="flex-1">
        <section className="relative overflow-hidden bg-[#F9F8F5] pt-[128px] pb-16 border-b border-[#E0E5EC]">
          <Parallax distance={70} className="absolute inset-0 z-0">
            <GradientOrb tone="blue" size={560} intensity={0.11} className="top-[-90px] right-[-40px]" />
            <GradientOrb tone="coral" size={300} intensity={0.06} className="bottom-[-40px] left-[4%]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal>
              <span className="stag">SERVICES</span>
              <h1 className="font-display text-[48px] lg:text-[58px] text-[#014584] tracking-[-1px] leading-[1.08] mt-2 mb-4 max-w-[760px]">
                Execution that earns its budget
              </h1>
              <p className="text-[18px] lg:text-[20px] text-[#3E3E3E] font-sans max-w-[620px] leading-[1.6]">
                The hands-on work that drives growth, SEO, paid, social, content, and web,
                run on the Octmark system so every rupee is measured against revenue, not vanity metrics.
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
          </div>
        </section>

        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.09}>
              {SERVICES.map((s) => (
                <StaggerItem key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group flex flex-col h-full bg-white rounded-xl border border-[#E5E8EE] p-6 transition-all duration-150 hover:border-[#014584] hover:-translate-y-0.5 hover:shadow-[0_4px_24px_rgba(1,69,132,0.10)]"
                  >
                    <FeatureIcon icon={s.icon} tone="light" size={48} className="mb-5" />
                    <h2 className="font-display text-[20px] text-[#3E3E3E] leading-snug mb-2">{s.name}</h2>
                    <p className="text-[14px] text-[#52525B] font-sans leading-[1.6] flex-1">{s.subhead}</p>
                    <span className="inline-flex items-center gap-1.5 text-[14px] text-[#014584] font-display mt-5 group-hover:gap-2.5 transition-all">
                      Explore {s.navLabel} <ArrowRight size={15} />
                    </span>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
