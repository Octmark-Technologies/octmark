import Link from "next/link";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import ResultsClient from "@/components/sections/ResultsClient";
import { getAllCaseStudies } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results",
  description: "Real outcomes for growth-stage businesses. The work, not just the numbers.",
  alternates: { canonical: "/results" },
  openGraph: {
    title: "Results",
    description: "Real outcomes for growth-stage businesses. The work, not just the numbers.",
    url: "/results",
    type: "website",
  },
};

export default function ResultsPage() {
  const allCases = getAllCaseStudies();
  const categories = Array.from(new Set(allCases.map((c) => c.category)));

  return (
    <>
      <GlobalHeader darkHero />
      <main id="main">

        {/* Hero */}
        <section
          className="relative pt-[148px] pb-16 overflow-hidden"
          style={{
            background: "#070D1A",
            backgroundImage: [
              "radial-gradient(ellipse 800px 500px at 70% 0%, rgba(1,69,132,0.09) 0%, transparent 65%)",
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
            ].join(", "),
            backgroundSize: "auto, 32px 32px",
          }}
        >
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <span className="stag stag-on-dark">RESULTS</span>
            <h1 className="font-display text-[48px] lg:text-[64px] text-[#EEF1F7] tracking-[-1px] leading-[1.08] mt-2 mb-5">
              Real growth.<br />Documented.
            </h1>
            <p className="text-[18px] text-[#8A96A8] max-w-[520px] leading-[1.65] font-sans">
              Every result below comes with the mechanism, exactly what we built, how it worked, and the numbers it produced.
            </p>
          </div>
        </section>

        {/* Filter + cards, client component (needs useState for category filter) */}
        <ResultsClient cases={allCases} categories={categories} />

        {/* CTA */}
        <section className="bg-[#070D1A] py-20 text-center border-t border-[rgba(255,255,255,0.06)]">
          <div className="mx-auto max-w-[560px] px-6">
            <h2 className="font-display text-[32px] text-[#EEF1F7] mb-4">
              Want a result like these?
            </h2>
            <p className="text-[16px] text-[#8A96A8] mb-8 font-sans">
              Tell us about your growth challenge. We'll tell you if we can help, and what that would look like.
            </p>
            <Link
              href="/start"
              className="inline-flex items-center h-11 px-7 bg-[#014584] text-white
                font-display text-[15px] tracking-[0.04em] rounded-lg border-0
                transition-all duration-150
                hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_20px_rgba(1,69,132,0.35)]"
            >
              Get a free growth audit
            </Link>
          </div>
        </section>

      </main>
      <GlobalFooter />
    </>
  );
}
