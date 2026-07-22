"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { CaseStudy } from "@/types/content";

interface Props {
  cases: CaseStudy[];
  categories: string[];
}

export default function ResultsClient({ cases, categories }: Props) {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? cases : cases.filter((c) => c.category === active);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      {/* Filter strip */}
      <div className="bg-white border-b border-[#E0E5EC] sticky top-[72px] z-[100]">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 h-20 flex items-center gap-3">
          <span className="text-[11px] text-[#9AA3B2] uppercase tracking-[0.08em] whitespace-nowrap mr-1 font-sans">
            Filter by
          </span>
          <div className="flex gap-2 flex-wrap" role="group" aria-label="Filter case studies">
            {["All", ...categories].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                className={[
                  "font-display text-[13px] tracking-[0.02em] h-9 px-3.5",
                  "border-[1.5px] rounded-[6px] cursor-pointer",
                  "transition-all duration-150 whitespace-nowrap",
                  active === cat
                    ? "bg-[#014584] border-[#014584] text-white"
                    : "bg-transparent border-[#E0E5EC] text-[#52525B] hover:border-[#014584] hover:text-[#014584] hover:bg-[rgba(1,69,132,0.04)]",
                ].join(" ")}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">

          {featured && (
            <ScrollReveal className="mb-10">
              <Link
                href={`/results/${featured.slug}`}
                className="group block rounded-xl border border-[#E0E5EC] bg-[#F8F9FC] overflow-hidden
                  transition-all duration-150
                  hover:border-[#014584] hover:shadow-[0_0_0_1px_#014584,0_8px_32px_rgba(1,69,132,0.12)]"
              >
                <div className="h-[4px] bg-[#014584]" />
                <div className="p-8 grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-start">
                  <div>
                    <div className="flex gap-2 mb-4 flex-wrap">
                      <span className="inline-block px-2.5 py-0.5 bg-[rgba(1,69,132,0.07)] border border-[rgba(1,69,132,0.20)] rounded text-[10px] text-[#014584] uppercase tracking-[0.06em] font-sans">
                        Featured
                      </span>
                      <span className="inline-block px-2.5 py-0.5 bg-transparent border border-[#E0E5EC] rounded text-[10px] text-[#52525B] uppercase tracking-[0.06em] font-sans">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="font-display text-[28px] lg:text-[36px] text-[#3E3E3E] leading-[1.2] mb-3">
                      {featured.title}
                    </h2>
                    <p className="text-[15px] text-[#52525B] leading-[1.65] mb-5 font-sans max-w-[580px]">
                      {featured.summary}
                    </p>
                    <p className="text-[12px] text-[#52525B] leading-[1.5] px-3 py-2.5 bg-[rgba(1,69,132,0.04)] border-l-2 border-[rgba(1,69,132,0.22)] rounded-r-[3px] mb-5 font-sans">
                      {featured.mechanism}
                    </p>
                    <div className="flex items-center gap-5 flex-wrap text-[12px] text-[#9AA3B2] font-sans">
                      <span>{featured.industry}</span>
                      <span>·</span>
                      <span>{featured.stage}</span>
                      {featured.techStack.slice(0, 3).map((t) => (
                        <span key={t} className="font-mono text-[11px] bg-white border border-[#E0E5EC] rounded px-2 py-0.5">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-5">
                    <div className="font-mono text-[64px] text-[#3E3E3E] leading-none">{featured.primaryMetric}</div>
                    <div className="flex flex-wrap gap-1.5">
                      {featured.stages.map((s) => (
                        <span key={s} className="text-[11px] bg-white border border-[#E0E5EC] rounded px-2 py-0.5 font-sans text-[#52525B]">{s}</span>
                      ))}
                    </div>
                    <span className="text-[14px] text-[#014584] font-sans group-hover:underline">Read case study →</span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((cs, i) => (
                <ScrollReveal key={cs.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <Link
                    href={`/results/${cs.slug}`}
                    className="group flex flex-col rounded-lg border border-[#E0E5EC] bg-[#F8F9FC] relative overflow-hidden h-full
                      transition-all duration-150
                      hover:border-[#014584] hover:bg-white hover:-translate-y-0.5
                      hover:shadow-[0_0_0_1px_#014584,0_4px_20px_rgba(1,69,132,0.10)]"
                  >
                    <div className="h-[3px] bg-[#014584] flex-shrink-0" />
                    <div className="p-5 pb-6 flex flex-col flex-1">
                      <span className="absolute top-4 right-4 text-[10px] tracking-[0.06em] uppercase text-[#014584] bg-[rgba(1,69,132,0.07)] border border-[rgba(1,69,132,0.20)] rounded px-2 py-0.5 font-sans">
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
                      <span className="text-[13px] text-[#014584] font-sans group-hover:underline">How we built this →</span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <div className="py-20 text-center text-[#9AA3B2] font-sans text-[16px]">
              No results in this category yet.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
