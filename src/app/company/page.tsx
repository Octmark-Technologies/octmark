import type { Metadata } from "next";
import Link from "next/link";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";

// PHASE 0 STUB, Company hub. Our Approach + Contact link to existing pages;
// About/Careers/Partners are added in Phase 1. noindex until content lands.
export const metadata: Metadata = {
  title: "Company",
  description: "About Octmark, our approach, team, careers, and partners.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/company" },
};

const ITEMS = [
  { label: "About Octmark", href: "/company", live: false },
  { label: "Our Approach", href: "/how-we-work", live: true },
  { label: "The Team", href: "/team", live: true },
  { label: "Careers", href: "/company", live: false },
  { label: "Partners", href: "/company", live: false },
  { label: "Contact", href: "/start", live: true },
];

export default function CompanyHubPage() {
  return (
    <>
      <GlobalHeader darkHero={false} />
      <main id="main" className="flex-1">
        <section className="bg-[#F9F8F5] pt-[120px] pb-14 border-b border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <span className="stag">COMPANY</span>
            <h1 className="font-display text-[48px] lg:text-[56px] text-[#014584] tracking-[-1px] leading-[1.1] mt-2 mb-4">
              About Octmark
            </h1>
            <p className="text-[18px] text-[#3E3E3E] font-sans max-w-[600px] leading-[1.65]">
              The team and the thinking behind the platform.
            </p>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <div className="mb-10 px-4 py-3 rounded-[6px] text-[12px] text-[#52525B] font-sans"
              style={{ background: "rgba(1,69,132,0.04)", border: "1px solid rgba(1,69,132,0.12)" }}>
              Our Approach, The Team, and Contact are live; About, Careers, and Partners are added in Phase 1.
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
