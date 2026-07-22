import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import { getCaseStudyBySlug, getAllCaseStudySlugs, getAllCaseStudies } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllCaseStudySlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};
  return {
    title: cs.title,
    description: cs.summary,
    alternates: { canonical: `/results/${cs.slug}` },
    openGraph: {
      title: cs.title,
      description: cs.summary,
      url: `/results/${cs.slug}`,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const related = getAllCaseStudies()
    .filter((c) => c.slug !== cs.slug && c.category === cs.category)
    .slice(0, 2);

  return (
    <>
      <GlobalHeader darkHero />
      <main id="main">

        {/* Hero */}
        <section
          className="relative pt-[148px] pb-20 overflow-hidden"
          style={{
            background: "#070D1A",
            backgroundImage: [
              "radial-gradient(ellipse 800px 400px at 60% 0%, rgba(1,69,132,0.10) 0%, transparent 65%)",
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
            ].join(", "),
            backgroundSize: "auto, 32px 32px",
          }}
        >
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 text-[12px] text-[#4E5A6C] font-sans">
              <Link href="/" className="hover:text-[#8A96A8] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/results" className="hover:text-[#8A96A8] transition-colors">Results</Link>
              <span>/</span>
              <span className="text-[#8A96A8]">{cs.client}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 items-start">
              <div>
                <div className="flex gap-2 flex-wrap mb-4">
                  <span className="inline-block px-2.5 py-0.5 bg-[rgba(1,69,132,0.18)] border border-[rgba(1,69,132,0.30)] rounded text-[10px] text-[#4D9FE0] uppercase tracking-[0.06em] font-sans">
                    {cs.category}
                  </span>
                  <span className="inline-block px-2.5 py-0.5 bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)] rounded text-[10px] text-[#4E5A6C] uppercase tracking-[0.06em] font-sans">
                    {cs.industry}
                  </span>
                </div>
                <h1 className="font-display text-[40px] lg:text-[52px] text-[#EEF1F7] leading-[1.1] tracking-[-0.75px] mb-5">
                  {cs.title}
                </h1>
                <p className="text-[18px] text-[#8A96A8] leading-[1.65] max-w-[540px] font-sans">
                  {cs.summary}
                </p>
              </div>

              {/* Primary metric */}
              <div
                className="rounded-xl p-7"
                style={{
                  background: "rgba(1,69,132,0.07)",
                  border: "1px solid rgba(1,69,132,0.22)",
                }}
              >
                <span className="text-[11px] uppercase tracking-[0.08em] text-[#4E5A6C] font-sans block mb-2.5">
                  Primary outcome
                </span>
                <div className="font-mono text-[56px] font-medium text-[#EEF1F7] leading-none">
                  {cs.primaryMetric}
                </div>
                <p className="text-[14px] text-[#8A96A8] mt-2 font-sans">{cs.mechanism}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics bar */}
        {cs.metrics.length > 0 && (
          <section className="bg-[#16161C] border-y border-[rgba(255,255,255,0.06)]">
            <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 py-8 flex flex-wrap gap-10">
              {cs.metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <div className="font-mono text-[28px] text-[#EEF1F7]">{m.value}</div>
                  {m.was && (
                    <div className="text-[11px] text-[#4E5A6C] font-sans line-through">{m.was}</div>
                  )}
                  <div className="text-[12px] text-[#8A96A8] font-sans">{m.label}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Tags bar */}
        <section className="bg-[#F9F8F5] border-b border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 py-4 flex flex-wrap gap-4 items-center">
            <span className="text-[11px] uppercase tracking-[0.06em] text-[#9AA3B2] font-sans">Lifecycle stages:</span>
            {cs.stages.map((s) => (
              <span key={s} className="text-[12px] text-[#52525B] bg-white border border-[#E0E5EC] rounded px-2.5 py-0.5 font-sans">
                {s}
              </span>
            ))}
            {cs.techStack.length > 0 && (
              <>
                <span className="text-[#E0E5EC]">|</span>
                <span className="text-[11px] uppercase tracking-[0.06em] text-[#9AA3B2] font-sans">Stack:</span>
                {cs.techStack.map((t) => (
                  <span key={t} className="font-mono text-[11px] text-[#52525B] bg-white border border-[#E0E5EC] rounded px-2.5 py-0.5">
                    {t}
                  </span>
                ))}
              </>
            )}
          </div>
        </section>

        {/* MDX Body */}
        <article className="bg-white py-16">
          <div className="mx-auto max-w-[760px] px-6 md:px-10 prose prose-lg prose-headings:font-display prose-headings:font-normal prose-headings:text-[#3E3E3E] prose-p:text-[#52525B] prose-p:leading-relaxed prose-li:text-[#52525B] prose-a:text-[#014584] prose-strong:text-[#3E3E3E]">
            <MDXRemote source={cs.content} />
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-[#F9F8F5] border-t border-[#E0E5EC] py-16">
            <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
              <h2 className="font-display text-[22px] text-[#3E3E3E] mb-7">Related results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/results/${r.slug}`}
                    className="flex flex-col rounded-lg border border-[#E0E5EC] bg-white p-5 gap-2
                      transition-all duration-150
                      hover:border-[#014584] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(1,69,132,0.10)]"
                  >
                    <div className="font-mono text-[32px] text-[#3E3E3E]">{r.primaryMetric}</div>
                    <div className="font-display text-[16px] text-[#3E3E3E]">{r.title}</div>
                    <div className="text-[12px] text-[#9AA3B2] font-sans">{r.industry} · {r.stage}</div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Footer CTA */}
        <section className="bg-[#070D1A] py-20 text-center border-t border-[rgba(255,255,255,0.06)]">
          <div className="mx-auto max-w-[640px] px-6">
            <h2 className="font-display text-[32px] text-[#EEF1F7] mb-4">
              Want a result like this?
            </h2>
            <p className="text-[16px] text-[#8A96A8] mb-8 font-sans">
              Tell us about your growth challenge. The audit is free and we'll tell you exactly what we see.
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
