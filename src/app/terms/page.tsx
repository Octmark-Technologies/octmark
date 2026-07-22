import type { Metadata } from "next";
import GlobalHeader from "@/components/global/GlobalHeader";
import GlobalFooter from "@/components/global/GlobalFooter";

// PHASE 0 STUB, clears the footer 404. Replace with the reviewed legal text
// before launch. noindex until finalised.
export const metadata: Metadata = {
  title: "Terms of Service",
  robots: { index: false, follow: true },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <GlobalHeader darkHero={false} />
      <main id="main" className="flex-1">
        <section className="bg-white pt-[120px] pb-20">
          <div className="mx-auto max-w-[760px] px-6 md:px-10">
            <h1 className="font-display text-[40px] text-[#014584] mb-6">Terms of Service</h1>
            <p className="text-[15px] text-[#52525B] font-sans leading-[1.7]">
              Our full terms of service are being finalised and will be published
              here before launch. For any questions in the meantime, contact{" "}
              <a href="mailto:hello@octmark.io" className="text-[#014584] underline">
                hello@octmark.io
              </a>.
            </p>
          </div>
        </section>
      </main>
      <GlobalFooter />
    </>
  );
}
