import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import EscalationStrip from "@/components/sections/EscalationStrip";
import { getSupportArticleBySlug, getAllSupportSlugs, getAllSupportArticles } from "@/lib/content";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllSupportSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getSupportArticleBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: `Octmark support, ${article.categoryLabel}`,
    robots: { index: false, follow: true },
  };
}

export default async function SupportArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getSupportArticleBySlug(slug);
  if (!article) notFound();

  const related = getAllSupportArticles()
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  const updatedDate = new Date(article.lastUpdated).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <GlobalHeader darkHero={false} />
      <main id="main" className="flex-1">

        {/* Hero */}
        <section className="bg-[#F9F8F5] pt-[120px] pb-12 border-b border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-7 text-[12px] text-[#9AA3B2] font-sans">
              <Link href="/support" className="hover:text-[#52525B] transition-colors">Support</Link>
              <span>/</span>
              <span className="text-[#52525B]">{article.categoryLabel}</span>
            </div>

            <span className="inline-block px-2.5 py-0.5 bg-[rgba(1,69,132,0.07)] border border-[rgba(1,69,132,0.20)] rounded text-[10px] text-[#014584] uppercase tracking-[0.06em] font-sans mb-4">
              {article.categoryLabel}
            </span>
            <h1 className="font-display text-[36px] lg:text-[44px] text-[#3E3E3E] leading-[1.15] tracking-[-0.5px] mb-3">
              {article.title}
            </h1>
            <p className="text-[13px] text-[#9AA3B2] font-sans">
              Last updated {updatedDate}
            </p>
          </div>
        </section>

        {/* Article body */}
        <div className="bg-white py-14">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-14 items-start">

              {/* MDX content */}
              <article>
                <div className="prose prose-lg prose-headings:font-display prose-headings:font-normal prose-headings:text-[#3E3E3E] prose-p:text-[#52525B] prose-p:leading-relaxed prose-li:text-[#52525B] prose-a:text-[#014584] prose-strong:text-[#3E3E3E] max-w-none">
                  <MDXRemote source={article.content} />
                </div>
              </article>

              {/* Sidebar */}
              <aside>
                {/* Ticket CTA */}
                <div className="rounded-lg border border-[#E0E5EC] bg-[#F8F9FC] p-6 mb-6">
                  <h2 className="font-display text-[16px] text-[#3E3E3E] mb-2">
                    Couldn&rsquo;t find what you need?
                  </h2>
                  <p className="text-[13px] text-[#52525B] font-sans leading-[1.6] mb-4">
                    Raise a support ticket and a team member will respond directly.
                  </p>
                  <Link
                    href="/support#ticket"
                    className="inline-flex items-center h-9 px-4 bg-[#014584] text-white font-display text-[13px] tracking-[0.03em] rounded-lg transition-colors hover:bg-[#0157A8]"
                  >
                    Raise a ticket
                  </Link>
                </div>

                {/* Related articles */}
                {related.length > 0 && (
                  <div>
                    <h2 className="font-sans text-[11px] uppercase tracking-[0.10em] text-[#9AA3B2] font-semibold mb-3">
                      Related articles
                    </h2>
                    <ul className="space-y-2">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link
                            href={`/support/${r.slug}`}
                            className="text-[14px] text-[#014584] font-sans hover:underline leading-[1.4] block"
                          >
                            {r.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>

            </div>
          </div>
        </div>

        {/* Escalation strip */}
        <EscalationStrip
          heading="Need to speak to someone now?"
          body="A team member reviews every ticket within four business hours."
          ctaLabel="Book a call directly"
          ctaHref="https://calendly.com/octmark"
          variant="dark-mid"
        />

      </main>
      <GlobalFooter />
    </>
  );
}
