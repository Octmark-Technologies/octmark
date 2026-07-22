import Link from "next/link";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { getAllArticles, getFeaturedArticle, getAllArticleCategories } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Thinking",
  description: "Positions, not posts. How Octmark thinks about growth operations, systems, and strategy.",
  alternates: { canonical: "/our-thinking" },
  openGraph: {
    title: "Our Thinking",
    description: "Positions, not posts. How Octmark thinks about growth operations, systems, and strategy.",
    url: "/our-thinking",
    type: "website",
  },
};

export default function OurThinkingPage() {
  const featured = getFeaturedArticle();
  const all = getAllArticles();
  const rest = featured ? all.filter((a) => a.slug !== featured.slug) : all;
  const categories = getAllArticleCategories();

  return (
    <>
      <GlobalHeader darkHero={false} />
      <main id="main">

        {/* Hero */}
        <section className="bg-[#F9F8F5] pt-[120px] pb-16 border-b border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <span className="stag">THINKING</span>
            <h1 className="font-display text-[48px] lg:text-[64px] text-[#3E3E3E] tracking-[-1px] leading-[1.08] mt-2 mb-5">
              Positions,<br />not posts.
            </h1>
            <p className="text-[18px] text-[#52525B] max-w-[520px] leading-[1.65] font-sans">
              We write when we have something to say, not to fill a calendar. What you'll find here is how we actually think about growth operations, systems, and the decisions that compound.
            </p>
          </div>
        </section>

        {/* Featured article */}
        {featured && (
          <section className="bg-white border-b border-[#E0E5EC] py-16">
            <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
              <ScrollReveal>
                <Link
                  href={`/our-thinking/${featured.slug}`}
                  className="group block rounded-xl border border-[#E0E5EC] bg-[#F8F9FC] overflow-hidden
                    transition-all duration-150
                    hover:border-[#014584] hover:shadow-[0_0_0_1px_#014584,0_8px_32px_rgba(1,69,132,0.10)]"
                >
                  <div className="h-[4px] bg-[#014584]" />
                  <div className="p-8 lg:p-12">
                    <div className="flex gap-2 mb-5 flex-wrap">
                      <span className="inline-block px-2.5 py-0.5 bg-[rgba(1,69,132,0.07)] border border-[rgba(1,69,132,0.20)] rounded text-[10px] text-[#014584] uppercase tracking-[0.06em] font-sans">
                        Featured
                      </span>
                      <span className="inline-block px-2.5 py-0.5 bg-transparent border border-[#E0E5EC] rounded text-[10px] text-[#52525B] uppercase tracking-[0.06em] font-sans">
                        {featured.category}
                      </span>
                    </div>
                    <h2 className="font-display text-[32px] lg:text-[40px] text-[#3E3E3E] leading-[1.15] mb-4 max-w-[720px]">
                      {featured.title}
                    </h2>
                    <p className="text-[16px] text-[#52525B] leading-[1.65] max-w-[640px] mb-7 font-sans">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-6 text-[13px] text-[#9AA3B2] font-sans">
                      <span>{featured.readTime} min read</span>
                      <span className="text-[#014584] group-hover:underline">Read article →</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          </section>
        )}

        {/* Category filter + grid */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">

            {/* Category pills */}
            {categories.length > 1 && (
              <div className="flex items-center gap-2 flex-wrap mb-10">
                <span className="text-[11px] text-[#9AA3B2] uppercase tracking-[0.08em] font-sans mr-1">Topics:</span>
                {categories.map((cat) => (
                  <span
                    key={cat}
                    className="inline-block px-3 py-1 border border-[#E0E5EC] rounded-[5px] text-[12px] text-[#52525B] font-sans"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article, i) => (
                <ScrollReveal key={article.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <Link
                    href={`/our-thinking/${article.slug}`}
                    className="group flex flex-col rounded-lg border border-[#E0E5EC] bg-[#F8F9FC] overflow-hidden h-full
                      transition-all duration-150
                      hover:border-[#014584] hover:bg-white hover:-translate-y-0.5
                      hover:shadow-[0_0_0_1px_#014584,0_4px_20px_rgba(1,69,132,0.10)]"
                  >
                    <div className="h-[3px] bg-[#014584] flex-shrink-0" />
                    <div className="p-5 pb-6 flex flex-col flex-1">
                      <span className="inline-block mb-3 text-[10px] uppercase tracking-[0.06em] text-[#014584] font-sans">
                        {article.category}
                      </span>
                      <h3 className="font-display text-[18px] text-[#3E3E3E] leading-[1.35] mb-2.5 flex-1">
                        {article.title}
                      </h3>
                      <p className="text-[13px] text-[#52525B] leading-[1.55] mb-4 font-sans">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[12px] text-[#9AA3B2] font-sans">{article.readTime} min read</span>
                        <span className="text-[13px] text-[#014584] font-sans group-hover:underline">Read →</span>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            {all.length === 0 && (
              <div className="py-20 text-center text-[#9AA3B2] font-sans text-[16px]">
                More articles coming soon.
              </div>
            )}
          </div>
        </section>

        {/* Editorial CTA */}
        <section className="bg-[#F2F5F9] border-t border-[#E0E5EC] py-16">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20
            flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <ScrollReveal className="flex-shrink-0">
              <h3 className="font-display text-[22px] text-[#3E3E3E]">Want to discuss this with Octmark?</h3>
              <p className="text-[14px] text-[#52525B] font-sans mt-1 max-w-[420px]">
                If a perspective here resonates, the best next step is a conversation about your growth system.
              </p>
            </ScrollReveal>
            <Link
              href="/start"
              className="inline-flex items-center h-11 px-7 bg-[#014584] text-white
                font-display text-[15px] tracking-[0.04em] rounded-lg border-0
                transition-all duration-150
                hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.55),0_4px_16px_rgba(1,69,132,0.35)]"
            >
              Start a conversation →
            </Link>
          </div>
        </section>

      </main>
      <GlobalFooter />
    </>
  );
}
