import Link from "next/link";
import type { Metadata } from "next";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import ScrollReveal from "@/components/ui/ScrollReveal";
import EscalationStrip from "@/components/sections/EscalationStrip";
import TicketForm from "@/components/sections/TicketForm";
import { getAllSupportArticles, getAllSupportCategories } from "@/lib/content";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Search the knowledge base or raise a support ticket. A team member will pick it up and reply directly.",
  alternates: { canonical: "/support" },
  openGraph: {
    title: "Support",
    description:
      "Search the knowledge base or raise a support ticket. A team member will pick it up and reply directly.",
    url: "/support",
    type: "website",
  },
};

export default function SupportPage() {
  const articles = getAllSupportArticles();
  const categories = getAllSupportCategories();

  return (
    <>
      <GlobalHeader darkHero={false} />
      <main id="main" className="flex-1">

        {/* Hero */}
        <section className="bg-[#F9F8F5] pt-[120px] pb-14 border-b border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <span className="stag">SUPPORT</span>
            <h1 className="font-display text-[48px] lg:text-[56px] text-[#014584] tracking-[-1px] leading-[1.1] mt-2 mb-4">
              Support
            </h1>
            <p className="text-[18px] text-[#3E3E3E] font-sans max-w-[540px] leading-[1.65]">
              Search the knowledge base or raise a support ticket. A team member will pick it up
              and reply directly.
            </p>
          </div>
        </section>

        {/* Knowledge base */}
        <section className="bg-white py-16 border-b border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">

            <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 items-start">

              {/* Sidebar, category navigation */}
              <nav aria-label="Knowledge base categories">
                <h2 className="font-display text-[14px] text-[#9AA3B2] uppercase tracking-[0.08em] mb-4">
                  Browse by topic
                </h2>
                <ul className="space-y-1">
                  {categories.map((cat) => (
                    <li key={cat.slug}>
                      <a
                        href={`#cat-${cat.slug}`}
                        className="flex items-center gap-2 py-2 text-[14px] font-sans text-[#52525B]
                          hover:text-[#014584] transition-colors duration-150
                          border-l-2 border-transparent hover:border-[#FEA781] pl-3"
                      >
                        {cat.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Article list */}
              <div>
                <h2 className="font-display text-[32px] text-[#014584] mb-8 leading-[1.2]">
                  Browse the knowledge base
                </h2>

                {categories.map((cat) => {
                  const catArticles = articles.filter((a) => a.category === cat.slug);
                  if (catArticles.length === 0) return null;

                  return (
                    <div key={cat.slug} id={`cat-${cat.slug}`} className="mb-10">
                      <h3 className="font-sans text-[11px] uppercase tracking-[0.10em] text-[#014584] font-semibold mb-4 pb-2 border-b border-[#E0E5EC]">
                        {cat.label}
                      </h3>
                      <div className="space-y-3">
                        {catArticles.map((article) => (
                          <ScrollReveal key={article.slug}>
                            <Link
                              href={`/support/${article.slug}`}
                              className="group flex items-start gap-4 p-5 rounded-lg border border-[#E0E5EC] bg-[#F8F9FC]
                                transition-all duration-150
                                hover:border-[#014584] hover:bg-white hover:-translate-y-0.5
                                hover:shadow-[0_4px_16px_rgba(1,69,132,0.08)]"
                            >
                              <div className="flex-1 min-w-0">
                                <h4 className="font-display text-[17px] text-[#3E3E3E] leading-[1.35] mb-1.5 group-hover:text-[#014584] transition-colors">
                                  {article.title}
                                </h4>
                                <p className="text-[12px] text-[#9AA3B2] font-sans">
                                  Updated {new Date(article.lastUpdated).toLocaleDateString("en-IN", { year: "numeric", month: "long" })}
                                </p>
                              </div>
                              <span className="text-[#014584] font-sans text-[14px] flex-shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                                →
                              </span>
                            </Link>
                          </ScrollReveal>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {articles.length === 0 && (
                  <p className="text-[15px] text-[#9AA3B2] font-sans">
                    Knowledge base articles are being prepared.
                  </p>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* Ticket form */}
        <section className="bg-[#F9F8F5] py-16 border-b border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <div className="max-w-[640px] mx-auto">
              <ScrollReveal>
                <TicketForm />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Escalation strip */}
        <EscalationStrip
          heading="Need to speak to someone now?"
          body="A team member reviews every ticket within four business hours. For urgent issues, book a call directly."
          ctaLabel="Book a call directly"
          ctaHref="https://calendly.com/octmark"
          variant="dark-mid"
        />

      </main>
      <GlobalFooter />
    </>
  );
}
