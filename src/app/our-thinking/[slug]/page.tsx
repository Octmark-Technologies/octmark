import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import { getArticleBySlug, getAllArticleSlugs, getAllArticles } from "@/lib/content";
import { teamMembers } from "@/data/team";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllArticleSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const author = teamMembers.find((m) => m.slug === article.authorSlug);
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/our-thinking/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `/our-thinking/${article.slug}`,
      type: "article",
      publishedTime: article.lastReviewed,
      authors: author ? [author.name] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const author = teamMembers.find((m) => m.slug === article.authorSlug);
  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, 2);

  const reviewDate = new Date(article.lastReviewed).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://octmarktechnologies.com";
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.lastReviewed,
    dateModified: article.lastReviewed,
    author: author ? { "@type": "Person", name: author.name } : undefined,
    publisher: {
      "@type": "Organization",
      name: "Octmark",
      logo: { "@type": "ImageObject", url: `${baseUrl}/images/OCTMARK_LOGO.png` },
    },
    mainEntityOfPage: `${baseUrl}/our-thinking/${article.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <GlobalHeader darkHero={false} />
      <main id="main">

        {/* Hero */}
        <section className="bg-[#F9F8F5] pt-[120px] pb-16 border-b border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <div className="max-w-[760px]">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-7 text-[12px] text-[#9AA3B2] font-sans">
                <Link href="/our-thinking" className="hover:text-[#52525B] transition-colors">Thinking</Link>
                <span>/</span>
                <span className="text-[#52525B]">{article.category}</span>
              </div>

              <span className="inline-block px-2.5 py-0.5 bg-[rgba(1,69,132,0.07)] border border-[rgba(1,69,132,0.20)] rounded text-[10px] text-[#014584] uppercase tracking-[0.06em] font-sans mb-4">
                {article.category}
              </span>
              <h1 className="font-display text-[40px] lg:text-[52px] text-[#3E3E3E] leading-[1.1] tracking-[-0.75px] mb-5">
                {article.title}
              </h1>
              <p className="text-[18px] text-[#52525B] leading-[1.65] font-sans mb-8">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-5">
                {author && (
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[rgba(1,69,132,0.09)] border border-[rgba(1,69,132,0.20)] flex items-center justify-center text-[#014584] text-[13px] font-display flex-shrink-0">
                      {author.initials}
                    </div>
                    <div>
                      <span className="text-[14px] font-display text-[#3E3E3E] block">{author.name}</span>
                      <span className="text-[11px] text-[#9AA3B2] font-sans">{author.role}</span>
                    </div>
                  </div>
                )}
                <div className="h-7 w-px bg-[#E0E5EC]" />
                <span className="text-[13px] text-[#9AA3B2] font-sans">{article.readTime} min read</span>
                <div className="h-7 w-px bg-[#E0E5EC]" />
                <span className="text-[13px] text-[#9AA3B2] font-sans">Updated {reviewDate}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article body */}
        <article className="bg-white py-16">
          <div className="mx-auto max-w-[760px] px-6 md:px-10 prose prose-lg prose-headings:font-display prose-headings:font-normal prose-headings:text-[#3E3E3E] prose-p:text-[#52525B] prose-p:leading-relaxed prose-li:text-[#52525B] prose-a:text-[#014584] prose-strong:text-[#3E3E3E]">
            <MDXRemote source={article.content} />
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="bg-[#F9F8F5] border-t border-[#E0E5EC] py-16">
            <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
              <h2 className="font-display text-[22px] text-[#3E3E3E] mb-7">More from Thinking</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/our-thinking/${r.slug}`}
                    className="flex flex-col rounded-lg border border-[#E0E5EC] bg-white p-6 gap-2
                      transition-all duration-150
                      hover:border-[#014584] hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(1,69,132,0.10)]"
                  >
                    <span className="text-[10px] uppercase tracking-[0.06em] text-[#014584] font-sans">{r.category}</span>
                    <h3 className="font-display text-[17px] text-[#3E3E3E] leading-[1.3]">{r.title}</h3>
                    <p className="text-[13px] text-[#52525B] leading-[1.5] font-sans">{r.excerpt}</p>
                    <span className="text-[12px] text-[#9AA3B2] font-sans mt-1">{r.readTime} min read</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Editorial CTA */}
        <section className="bg-[#070D1A] py-20 text-center border-t border-[rgba(255,255,255,0.06)]">
          <div className="mx-auto max-w-[560px] px-6">
            <h2 className="font-display text-[28px] text-[#EEF1F7] mb-3">
              Have a question about this perspective?
            </h2>
            <p className="text-[15px] text-[#8A96A8] mb-7 font-sans">
              Let&rsquo;s look at your growth system, start a conversation with Octmark.
            </p>
            <Link
              href="/start"
              className="inline-flex items-center h-12 px-8 bg-[#014584] text-white
                font-display text-[15px] tracking-[0.04em] rounded-lg border-0
                transition-all duration-150 hover:bg-[#0157A8]"
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
