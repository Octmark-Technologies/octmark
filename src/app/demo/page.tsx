import type { Metadata } from "next";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";
import DemoForm from "@/components/sections/DemoForm";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "See the Octmark platform, Octrackit, AI agents, automation, CRM, and attribution, in a guided walkthrough.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/demo" },
  openGraph: {
    title: "Book a Demo | Octmark",
    description:
      "See the Octmark platform in a guided walkthrough.",
    url: "/demo",
    type: "website",
  },
};

export default function DemoPage() {
  return (
    <>
      <GlobalHeader darkHero={false} hideCta />
      <main id="main" className="flex-1">
        <section className="bg-[#F9F8F5] pt-[120px] pb-14 border-b border-[#E0E5EC]">
          <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20">
            <span className="stag">PLATFORM DEMO</span>
            <h1 className="font-display text-[48px] lg:text-[56px] text-[#014584] tracking-[-1px] leading-[1.1] mt-2 mb-4">
              See the platform in action
            </h1>
            <p className="text-[18px] text-[#3E3E3E] font-sans max-w-[540px] leading-[1.65]">
              A guided walkthrough of Octrackit and the Octmark platform, mapped to
              your goals, not a generic product tour.
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[640px] px-6 md:px-10">
            <DemoForm />
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
