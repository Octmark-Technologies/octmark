import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import GradientOrb from "@/components/graphics/GradientOrb";
import DotGrid from "@/components/graphics/DotGrid";
import Reveal from "@/components/motion/Reveal";
import Parallax from "@/components/motion/Parallax";
import IndustryBento from "@/components/sections/IndustryBento";

const INDUSTRY_LINKS = [
  { slug: "healthcare", name: "Healthcare" },
  { slug: "education", name: "Education" },
  { slug: "real-estate", name: "Real Estate" },
  { slug: "ecommerce", name: "E-Commerce" },
  { slug: "manufacturing", name: "Manufacturing" },
  { slug: "hospitality", name: "Hospitality" },
];

const PAGE_DESC =
  "Octmark builds AI-driven growth systems tuned to your industry: healthcare, education, real estate, e-commerce, manufacturing, and hospitality. One system, adapted per sector.";

export const metadata: Metadata = {
  title: "Industries We Serve, Growth Systems by Sector",
  description: PAGE_DESC,
  keywords: [
    "industry marketing solutions",
    "healthcare marketing",
    "real estate lead generation",
    "ecommerce growth",
    "b2b manufacturing marketing",
  ],
  alternates: { canonical: "/industries" },
  robots: { index: true, follow: true },
  openGraph: { title: "Industries We Serve", description: PAGE_DESC, url: "/industries", type: "website" },
  twitter: { card: "summary_large_image", title: "Industries We Serve", description: PAGE_DESC },
};

const FAQS = [
  {
    q: "What industries does Octmark work with?",
    a: "Octmark works with growth-stage businesses across many sectors, with focused experience in healthcare, education, real estate, e-commerce, manufacturing, and hospitality. The same growth system is adapted to how each industry actually buys.",
  },
  {
    q: "Do you specialise by industry, or use one approach?",
    a: "Both. Octmark runs one connected growth system, attract, engage, convert, deliver, and retain, and tunes it to each industry's buying cycle, decision-makers, and channels. The method is consistent; the application is sector-specific.",
  },
  {
    q: "How do you adapt the system to a specific industry?",
    a: "We start from how that industry's buyers actually decide, the cycle length, the people involved, and the channels they trust, then configure acquisition, nurture, and retention around it, all measured with Octrackit attribution.",
  },
  {
    q: "Can you work in regulated industries like healthcare?",
    a: "Yes. In sectors like healthcare, trust and compliance shape the work, so messaging and content are built to be trust-first and compliance-aware while still driving real appointments and outcomes.",
  },
  {
    q: "My industry is not listed. Can you still help?",
    a: "Likely yes. Octmark has run growth for businesses across 12 sectors, and the underlying system applies broadly. Get a free growth audit and we will tell you honestly whether we are the right fit.",
  },
  {
    q: "How is industry performance measured?",
    a: "On revenue and qualified pipeline, not vanity metrics. Octrackit attributes results to the channels that earned them, so you see what works in your specific market.",
  },
];

const GEO =
  "Octmark serves multiple industries by adapting one AI-driven growth system to each sector's buying behaviour. It works with growth-stage businesses in healthcare, education, real estate, e-commerce, manufacturing, and hospitality, among 12 sectors in total, tuning acquisition, engagement, conversion, delivery, and retention to how each industry actually buys, and measuring outcomes with Octrackit attribution so every sector sees which channels drive real revenue.";

export default function IndustriesPage() {
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
              <span className="stag stag-on-dark">INDUSTRIES</span>
              <h1 className="font-display text-[42px] lg:text-[58px] leading-[1.05] tracking-[-1px] text-[#EEF1F7] mt-1 mb-6">
                Growth systems, tuned to your industry
              </h1>
              <p className="text-[18px] lg:text-[20px] text-[#8A96A8] leading-[1.6] font-sans max-w-[620px]">
                Octmark runs one connected growth system and adapts it to how your sector actually buys,
                so the work fits your market instead of a generic template.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/start" className="inline-flex items-center gap-2 h-12 px-7 bg-[#014584] text-white font-display text-[15px] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.6),0_4px_20px_rgba(1,69,132,0.45)]">
                  Get a free growth audit <ArrowRight size={16} />
                </Link>
                <Link href="/demo" className="inline-flex items-center h-12 px-7 border border-[rgba(255,255,255,0.18)] text-[#EEF1F7] font-display text-[15px] rounded-lg hover:border-[rgba(255,255,255,0.4)] transition-colors">
                  Book a demo
                </Link>
              </div>
              {/* Quick jump */}
              <div className="mt-9 flex flex-wrap gap-2.5">
                {INDUSTRY_LINKS.map((ind) => (
                  <a
                    key={ind.slug}
                    href={`#${ind.slug}`}
                    className="inline-flex items-center gap-2 px-4 h-9 rounded-full border border-[rgba(255,255,255,0.12)] text-[13px] text-[#8A96A8] font-sans hover:text-[#EEF1F7] hover:border-[rgba(77,159,224,0.5)] transition-colors"
                  >
                    {ind.name}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── APPROACH ──────────────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="max-w-[760px]">
              <span className="stag">THE APPROACH</span>
              <h2 className="font-display text-[30px] lg:text-[38px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.18] mt-1 mb-5">
                One system, adapted to how your sector buys
              </h2>
              <p className="text-[17px] text-[#52525B] font-sans leading-[1.7]">
                The fundamentals of growth do not change between industries: attract the right people,
                turn interest into pipeline, convert, deliver, and retain. What changes is the buying
                cycle, the decision-makers, and the channels that earn trust. Octmark keeps the system
                and tunes those variables to your market, all measured with Octrackit attribution.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── INDUSTRY SECTIONS ─────────────────────────────────── */}
        <section className="bg-[#F2F5F9] py-20 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12 max-w-[720px]">
              <span className="stag">THE TUNING BOARD</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1 mb-4">
                Same system, different settings
              </h2>
              <p className="text-[16px] text-[#52525B] font-sans leading-[1.7]">
                Every sector is tuned on the same dials, who decides, which channels earn trust,
                and how long the cycle runs. Here is how those settings shift across the industries we serve.
              </p>
            </Reveal>

            <IndustryBento />
          </div>
        </section>

        {/* ── WHY OCTMARK ACROSS INDUSTRIES ─────────────────────── */}
        <section className="relative overflow-hidden py-20 lg:py-24" style={{ background: "#070D1A" }}>
          <DotGrid />
          <Parallax distance={56} className="absolute inset-0 z-0">
            <GradientOrb tone="blue" size={560} intensity={0.16} className="top-[12%] left-[-60px]" />
          </Parallax>
          <div className="relative z-10 mx-auto max-w-[860px] px-6 md:px-10 lg:px-20 text-center">
            <Reveal>
              <span className="stag stag-on-dark">CROSS-SECTOR</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#EEF1F7] tracking-[-0.5px] leading-[1.15] mt-1 mb-4">
                One method, proven across sectors
              </h2>
              <p className="text-[17px] text-[#8A96A8] font-sans leading-[1.7]">
                Octmark has run growth for businesses across 12 sectors. That range is the point: patterns
                that work in one industry inform the next, while the system stays grounded in your market&rsquo;s
                specifics. You get a method that has been tested widely and tuned narrowly to you.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── FAQ (crawlable) ───────────────────────────────────── */}
        <section className="bg-white py-20 lg:py-24">
          <div className="mx-auto max-w-[860px] px-6 md:px-10 lg:px-20">
            <Reveal className="mb-12">
              <span className="stag">FAQ</span>
              <h2 className="font-display text-[30px] lg:text-[40px] text-[#3E3E3E] tracking-[-0.5px] leading-[1.15] mt-1">
                Industries, answered
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
                  Octmark across industries in one paragraph
                </span>
                <p className="text-[16px] text-[#3E3E3E] font-sans leading-[1.8]">{GEO}</p>
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
                Let&rsquo;s talk about your industry
              </h2>
              <p className="text-[17px] text-[#8A96A8] font-sans leading-[1.65] mb-9 max-w-[540px] mx-auto">
                Tell us your sector and where growth is stuck, and we will show you how the system applies to your market.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/start" className="inline-flex items-center gap-2 h-12 px-7 bg-[#014584] text-white font-display text-[15px] rounded-lg transition-all hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_20px_rgba(1,69,132,0.45)]">
                  Get a free growth audit <ArrowRight size={16} />
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
