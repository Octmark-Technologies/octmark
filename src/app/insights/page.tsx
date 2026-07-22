import type { Metadata } from "next";
import Link from "next/link";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";

// PHASE 0 STUB, Insights hub. Case Studies + Blogs link to existing pages;
// Resources/Guides/Industry Reports are added in Phase 1. noindex until content lands.
export const metadata: Metadata = {
  title: "Insights",
  description: "Case studies, articles, guides, and industry reports from Octmark.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/insights" },
};

const ITEMS = [
  { label: "Case Studies", href: "/results", live: true },
  { label: "Blogs", href: "/our-thinking", live: true },
  { label: "Resources", href: "/insights", live: false },
  { label: "Guides", href: "/insights", live: false },
  { label: "Industry Reports", href: "/insights", live: false },
];

export default function InsightsHubPage() {
  return (
    <>
      <GlobalHeader darkHero={false} />
      <main id="main" className="flex-1">
        <section className="bg-[#F9F8F5] pt-[120px] pb-14 border-b border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <span className="stag">INSIGHTS</span>
            <h1 className="font-display text-[48px] lg:text-[56px] text-[#014584] tracking-[-1px] leading-[1.1] mt-2 mb-4">
              Insights
            </h1>
            <p className="text-[18px] text-[#3E3E3E] font-sans max-w-[600px] leading-[1.65]">
              Proof, perspective, and playbooks, how Octmark thinks and what it has delivered.
            </p>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <div className="mb-10 px-4 py-3 rounded-[6px] text-[12px] text-[#52525B] font-sans"
              style={{ background: "rgba(1,69,132,0.04)", border: "1px solid rgba(1,69,132,0.12)" }}>
              Case Studies and Blogs are live; Resources, Guides, and Industry Reports are added in Phase 1.
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {ITEMS.map((s) => (
                <Link key={s.label} href={s.href} className="border border-[#E0E5EC] rounded-lg p-5 hover:border-[#014584] transition-colors block">
                  <h2 className="font-display text-[16px] text-[#3E3E3E]">{s.label}</h2>
                  <span className="text-[12px] text-[#9AA3B2] font-sans">{s.live ? "View →" : "Coming soon"}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
