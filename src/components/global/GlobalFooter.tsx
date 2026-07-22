import Link from "next/link";
import Image from "next/image";

const PLATFORM_LINKS = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/solutions" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
];

const COMPANY_LINKS = [
  { label: "About Octmark", href: "/company" },
  { label: "Our Approach", href: "/how-we-work" },
  { label: "Careers", href: "/company" },
  { label: "Partners", href: "/company" },
  { label: "Contact", href: "/start" },
];

const INSIGHTS_LINKS = [
  { label: "Case Studies", href: "/results" },
  { label: "Blogs", href: "/our-thinking" },
  { label: "Support", href: "/support" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function GlobalFooter() {
  return (
    <footer
      className="bg-[#070D1A] border-t border-[rgba(255,255,255,0.08)]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.025) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }}
      aria-label="Site footer"
    >
      {/* Columns */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 pt-14 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[280px_1fr_1fr_1fr] gap-10 lg:gap-0">

          {/* Brand column */}
          <div className="lg:pr-10 lg:border-r lg:border-[rgba(255,255,255,0.05)]">
            <Link href="/" aria-label="Octmark, Home" className="inline-block mb-4">
              <Image
                src="/images/OCTMARK_LOGO_WHITE.png"
                alt="Octmark"
                height={30}
                width={120}
                className="h-[30px] w-auto block"
              />
            </Link>
            <p className="text-[13px] text-[#4E5A6C] leading-relaxed">
              Fewer guesses. More growth.
            </p>
            {/* Social */}
            <div className="flex gap-4 mt-5">
              <a
                href="https://www.linkedin.com/company/octmark-technologies/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Octmark on LinkedIn"
                className="flex flex-col items-center gap-1 group"
              >
                <svg
                  className="w-[18px] h-[18px] stroke-[#4E5A6C] group-hover:stroke-[#8A96A8] transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7H10v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="text-[10px] text-[#4E5A6C] group-hover:text-[#8A96A8] tracking-[0.04em] transition-colors">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://www.instagram.com/weareoctmark"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Octmark on Instagram"
                className="flex flex-col items-center gap-1 group"
              >
                <svg
                  className="w-[18px] h-[18px] stroke-[#4E5A6C] group-hover:stroke-[#8A96A8] transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="1.5"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span className="text-[10px] text-[#4E5A6C] group-hover:text-[#8A96A8] tracking-[0.04em] transition-colors">
                  Instagram
                </span>
              </a>
            </div>
          </div>

          {/* Platform column */}
          <div className="lg:px-10 lg:border-r lg:border-[rgba(255,255,255,0.05)]">
            <span className="block text-[10px] uppercase tracking-[0.10em] text-[#4E5A6C] mb-3.5">
              Products
            </span>
            <ul>
              {PLATFORM_LINKS.map((l) => (
                <li key={l.label} className="mb-2">
                  <Link
                    href={l.href}
                    className="text-[13px] text-[#8A96A8] hover:text-[#EEF1F7] hover:underline transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div className="lg:px-10 lg:border-r lg:border-[rgba(255,255,255,0.05)]">
            <span className="block text-[10px] uppercase tracking-[0.10em] text-[#4E5A6C] mb-3.5">
              Company
            </span>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l.label} className="mb-2">
                  <Link
                    href={l.href}
                    className="text-[13px] text-[#8A96A8] hover:text-[#EEF1F7] hover:underline transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Insights column */}
          <div className="lg:pl-10">
            <span className="block text-[10px] uppercase tracking-[0.10em] text-[#4E5A6C] mb-3.5">
              Insights
            </span>
            <ul>
              {INSIGHTS_LINKS.map((l) => (
                <li key={l.label} className="mb-2">
                  <Link
                    href={l.href}
                    className="text-[13px] text-[#8A96A8] hover:text-[#EEF1F7] hover:underline transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-20 mt-10 py-5 border-t border-[rgba(255,255,255,0.05)] flex items-center justify-between gap-4 flex-wrap">
        <span className="font-mono text-[11px] text-[rgba(78,90,108,0.65)]">
          © {new Date().getFullYear()} Octmark Technologies · Privacy · Terms
        </span>
        <a
          href="#"
          className="text-[13px] text-[#4E5A6C] hover:text-[#8A96A8] hover:underline transition-colors duration-150"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
