import Image from "next/image";
import type { Metadata } from "next";
import GradientOrb from "@/components/graphics/GradientOrb";

export const metadata: Metadata = {
  title: "Coming Soon | Octmark",
  description: "Octmark's new site is on its way. Fewer guesses. More growth.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/" },
};

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/octmark",
    path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z",
    extra: (
      <>
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/octmark",
    path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
    extra: (
      <>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </>
    ),
  },
];

export default function HomePage() {
  return (
    <main
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{
        background: "#070D1A",
        backgroundImage: [
          "radial-gradient(ellipse 700px 500px at 78% 18%, rgba(1,69,132,0.10) 0%, transparent 60%)",
          "radial-gradient(ellipse 300px 300px at 25% 75%, rgba(1,69,132,0.05) 0%, transparent 60%)",
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
        ].join(", "),
        backgroundSize: "auto, auto, 32px 32px",
      }}
    >
      <GradientOrb tone="blue" size={640} intensity={0.16} className="top-[6%] right-[4%]" />
      <GradientOrb tone="coral" size={380} intensity={0.08} className="bottom-[12%] left-[8%]" />

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <Image
          src="/images/OCTMARK_LOGO_WHITE.png"
          alt="Octmark"
          height={34}
          width={140}
          className="h-[34px] w-auto mb-10"
          priority
        />

        <span className="text-[#FEA781]/88 text-[12px] tracking-[0.14em] uppercase mb-5 font-sans">
          Fewer guesses. More growth.
        </span>

        <h1 className="font-display text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.05] tracking-[-1px] text-[#EEF1F7] max-w-[900px] mb-6">
          Something better is{" "}
          <span
            className="text-[#FEA781]"
            style={{ textShadow: "0 0 24px rgba(254,167,129,0.35)" }}
          >
            being built.
          </span>
        </h1>

        <p className="text-[16px] sm:text-[18px] text-[#8A96A8] leading-[1.65] max-w-[540px] mb-10 font-sans">
          We&rsquo;re rebuilding octmarktechnologies.com from the ground up. In the meantime, reach
          out and we&rsquo;ll get back to you within 2 business days.
        </p>

        <a
          href="mailto:info@octmarktechnologies.com"
          className="inline-flex items-center h-11 px-7 bg-[#014584] text-white
            font-display text-[15px] tracking-[0.04em] rounded-lg border-0 cursor-pointer
            transition-all duration-150 whitespace-nowrap mb-12
            hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.60),0_4px_20px_rgba(1,69,132,0.40)]"
        >
          info@octmarktechnologies.com
        </a>

        <div className="flex gap-6">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Octmark on ${s.label}`}
              className="flex flex-col items-center gap-1.5 group"
            >
              <svg
                className="w-[18px] h-[18px] stroke-[#4E5A6C] group-hover:stroke-[#8A96A8] transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d={s.path} />
                {s.extra}
              </svg>
              <span className="text-[10px] text-[#4E5A6C] group-hover:text-[#8A96A8] tracking-[0.04em] transition-colors font-sans">
                {s.label}
              </span>
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-10 border-t border-[rgba(255,255,255,0.05)] py-5 text-center">
        <span className="font-mono text-[11px] text-[rgba(78,90,108,0.65)]">
          © {new Date().getFullYear()} Octmark Technologies
        </span>
      </div>
    </main>
  );
}
