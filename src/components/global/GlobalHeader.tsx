"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Brain,
  Robot,
  Database,
  FlowArrow,
  Magnet,
  UserPlus,
  Handshake,
  ChartBar,
  Megaphone,
  MagnifyingGlass,
  Target,
  ShareNetwork,
  PencilSimple,
  Globe,
  Heartbeat,
  GraduationCap,
  Buildings,
  ShoppingCart,
  Factory,
  ForkKnife,
  type Icon,
} from "@phosphor-icons/react";

// ── Navigation model (platform-led, 6 sections) ────────────────────────────────
// NOTE (Phase 0): sub-items point to their hub pages until the individual
// product/solution pages are built in Phase 1. No links resolve to 404.
interface NavPanel {
  eyebrow: string;
  title: string;
  desc: string;
  cta: string;
  href: string;
  external?: boolean;
  /** Brand logo to show in the panel (overrides icon). */
  logo?: "octrackit";
  /** Logo already contains the product name, so hide the eyebrow + title. */
  wordmark?: boolean;
  /** Phosphor icon to show when there is no logo. */
  icon?: Icon;
}
interface NavChild {
  label: string;
  href: string;
  desc?: string;
  /** Link points to an external site (opens in a new tab). */
  external?: boolean;
  /** Rich panel shown in the dropdown rail when this child is hovered. */
  panel?: NavPanel;
}
interface NavGroup {
  heading?: string;
  items: NavChild[];
}
interface NavItem {
  label: string;
  href: string;
  groups: NavGroup[];
  /** Render the child list in this many columns (default 1). */
  cols?: number;
  /** Anchor the dropdown to the right edge (for rightmost nav items). */
  alignRight?: boolean;
}

const NAV: NavItem[] = [
  {
    label: "Products",
    href: "/products",
    groups: [
      {
        items: [
          {
            label: "Octrackit",
            href: "/octrackit",
            desc: "AI marketing attribution platform",
            panel: {
              eyebrow: "Flagship",
              title: "Octrackit",
              desc: "AI marketing attribution that scores every signal for quality and shows ROI by channel, in real time.",
              cta: "Explore Octrackit",
              href: "/octrackit",
              logo: "octrackit",
              wordmark: true,
            },
          },
          {
            label: "Cortex",
            href: "/octrackit/cortex",
            desc: "AI lead quality scoring",
            panel: {
              eyebrow: "AI quality",
              title: "Cortex",
              desc: "A per-client AI engine that scores lead quality and filters fake leads from real intent.",
              cta: "Meet Cortex",
              href: "/octrackit/cortex",
              icon: Brain,
            },
          },
          {
            label: "AI Agents",
            href: "/products/ai-agents",
            desc: "Autonomous marketing workflows",
            panel: {
              eyebrow: "Autonomous",
              title: "AI Agents",
              desc: "Autonomous agents that run multi-step marketing workflows, with a human in control.",
              cta: "Explore AI Agents",
              href: "/products/ai-agents",
              icon: Robot,
            },
          },
          {
            label: "Marketing Automation",
            href: "/products/marketing-automation",
            desc: "Campaigns that run themselves",
            panel: {
              eyebrow: "Automation",
              title: "Marketing Automation",
              desc: "Campaigns and journeys that run themselves across email, WhatsApp, and your CRM.",
              cta: "Explore Marketing Automation",
              href: "/products/marketing-automation",
              icon: FlowArrow,
            },
          },
          {
            label: "CRM Solutions",
            href: "/products/crm-solutions",
            desc: "Unified customer data & pipeline",
            panel: {
              eyebrow: "Unified data",
              title: "CRM Solutions",
              desc: "One unified record per customer, so sales and marketing work from the same data.",
              cta: "Explore CRM Solutions",
              href: "/products/crm-solutions",
              icon: Database,
            },
          },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    groups: [
      {
        items: [
          {
            label: "Lead Generation", href: "/solutions/lead-generation", desc: "Fill the pipeline with qualified demand",
            panel: { eyebrow: "Solution", title: "Lead Generation", desc: "Fill the pipeline with qualified demand, scored for quality so sales works only real leads.", cta: "Explore Lead Generation", href: "/solutions/lead-generation", icon: Magnet },
          },
          {
            label: "Customer Acquisition", href: "/solutions/customer-acquisition", desc: "Turn demand into customers",
            panel: { eyebrow: "Solution", title: "Customer Acquisition", desc: "Turn demand into customers at a cost that works, with channels optimised against real pipeline.", cta: "Explore Customer Acquisition", href: "/solutions/customer-acquisition", icon: UserPlus },
          },
          {
            label: "Customer Retention", href: "/solutions/customer-retention", desc: "Keep and grow your accounts",
            panel: { eyebrow: "Solution", title: "Customer Retention", desc: "Keep and grow the customers you win, with lifecycle journeys and early churn signals.", cta: "Explore Customer Retention", href: "/solutions/customer-retention", icon: Handshake },
          },
          {
            label: "Attribution & Analytics", href: "/solutions/attribution-analytics", desc: "Know what drives revenue",
            panel: { eyebrow: "Solution", title: "Attribution & Analytics", desc: "Tie revenue to the channel that earned it, with quality-scored signals and ROI by channel.", cta: "Explore Attribution & Analytics", href: "/solutions/attribution-analytics", icon: ChartBar },
          },
          {
            label: "Programmatic Advertising", href: "/solutions/programmatic-advertising", desc: "AI-optimised media buying",
            panel: { eyebrow: "Solution", title: "Programmatic Advertising", desc: "AI-optimised media buying that bids against your real pipeline, not the cheapest click.", cta: "Explore Programmatic Advertising", href: "/solutions/programmatic-advertising", icon: Megaphone },
          },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    groups: [
      {
        items: [
          {
            label: "SEO", href: "/services/seo", desc: "Search that brings buyers",
            panel: { eyebrow: "Service", title: "SEO", desc: "Organic search built around buyer intent and proven against real pipeline, not vanity rankings.", cta: "Explore SEO", href: "/services/seo", icon: MagnifyingGlass },
          },
          {
            label: "Paid Ads", href: "/services/paid-ads", desc: "Spend that buys pipeline",
            panel: { eyebrow: "Service", title: "Paid Advertising", desc: "Performance media bought against pipeline, so every rupee chases customers, not clicks.", cta: "Explore Paid Ads", href: "/services/paid-ads", icon: Target },
          },
          {
            label: "Social Media", href: "/services/social-media", desc: "Attention that builds demand",
            panel: { eyebrow: "Service", title: "Social Media", desc: "A social presence that turns attention into demand, tracked back to the pipeline it creates.", cta: "Explore Social Media", href: "/services/social-media", icon: ShareNetwork },
          },
          {
            label: "Content Marketing", href: "/services/content-marketing", desc: "Content that earns trust",
            panel: { eyebrow: "Service", title: "Content Marketing", desc: "Content that answers real buyer questions, ranks, and moves them toward a decision.", cta: "Explore Content Marketing", href: "/services/content-marketing", icon: PencilSimple },
          },
          {
            label: "Web & E-Commerce", href: "/services/web-ecommerce", desc: "Sites built to convert",
            panel: { eyebrow: "Service", title: "Web & E-Commerce", desc: "Fast, high-converting sites and stores, wired into your attribution from the first line of code.", cta: "Explore Web & E-Commerce", href: "/services/web-ecommerce", icon: Globe },
          },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    alignRight: true,
    groups: [
      {
        items: [
          {
            label: "Healthcare", href: "/industries#healthcare",
            panel: { eyebrow: "Industry", title: "Healthcare", desc: "Growth systems built for how healthcare teams acquire and retain patients, with trust and compliance in mind.", cta: "Explore Healthcare", href: "/industries#healthcare", icon: Heartbeat },
          },
          {
            label: "Education", href: "/industries#education",
            panel: { eyebrow: "Industry", title: "Education", desc: "Enrolment and engagement systems for institutions and edtech, measured on real outcomes.", cta: "Explore Education", href: "/industries#education", icon: GraduationCap },
          },
          {
            label: "Real Estate", href: "/industries#real-estate",
            panel: { eyebrow: "Industry", title: "Real Estate", desc: "Lead generation and nurture built for high-value, long-consideration property decisions.", cta: "Explore Real Estate", href: "/industries#real-estate", icon: Buildings },
          },
          {
            label: "E-Commerce", href: "/industries#ecommerce",
            panel: { eyebrow: "Industry", title: "E-Commerce", desc: "Acquisition, conversion, and retention systems for online stores, measured against revenue.", cta: "Explore E-Commerce", href: "/industries#ecommerce", icon: ShoppingCart },
          },
          {
            label: "Manufacturing", href: "/industries#manufacturing",
            panel: { eyebrow: "Industry", title: "Manufacturing", desc: "Pipeline and distributor demand systems for considered, long-cycle B2B buying.", cta: "Explore Manufacturing", href: "/industries#manufacturing", icon: Factory },
          },
          {
            label: "Hospitality", href: "/industries#hospitality",
            panel: { eyebrow: "Industry", title: "Hospitality", desc: "Demand, booking, and loyalty systems built for hospitality and experience brands.", cta: "Explore Hospitality", href: "/industries#hospitality", icon: ForkKnife },
          },
        ],
      },
    ],
  },
  {
    label: "Insights",
    href: "/insights",
    alignRight: true,
    groups: [
      {
        items: [
          { label: "Case Studies", href: "/results", desc: "Proof, real client outcomes" },
          { label: "Blogs", href: "/our-thinking", desc: "Positions, not posts" },
          { label: "Resources", href: "/insights", desc: "Tools & templates" },
          { label: "Guides", href: "/insights", desc: "Deep-dive playbooks" },
          { label: "Industry Reports", href: "/insights", desc: "Data & benchmarks" },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "/company",
    alignRight: true,
    groups: [
      {
        items: [
          { label: "About Octmark", href: "/company", desc: "Who we are" },
          { label: "Our Approach", href: "/how-we-work", desc: "How we work" },
          { label: "The Team", href: "/team", desc: "The people behind the work" },
          { label: "Careers", href: "/company", desc: "Join us" },
          { label: "Contact", href: "/start", desc: "Talk to us" },
        ],
      },
    ],
  },
];

interface GlobalHeaderProps {
  /** True when the page behind the nav has a dark hero (#070D1A). */
  darkHero?: boolean;
  /** Remove the conversion CTAs (e.g. on /start and /demo themselves). */
  hideCta?: boolean;
}

export default function GlobalHeader({ darkHero = true, hideCta = false }: GlobalHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [activePanel, setActivePanel] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Header is transparent-over-dark at the top of a dark-hero page. Opening a
  // dropdown does NOT solidify the header, the panel is its own floating white
  // card below the bar, so the transparent header stays put on hover.
  const isTransparentDark = darkHero && !scrolled;

  const triggerColor = (active: boolean) =>
    isTransparentDark
      ? active
        ? "text-[#EEF1F7]"
        : "text-[#8A96A8] hover:text-[#EEF1F7]"
      : active
        ? "text-[#014584]"
        : "text-[#52525B] hover:text-[#3E3E3E]";

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <header
        className={[
          "fixed top-0 left-0 right-0 h-[72px] z-50",
          "transition-all duration-200",
          scrolled
            ? "bg-white/95 backdrop-blur-[8px] border-b border-[#E0E5EC] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            : "bg-transparent",
        ].join(" ")}
        aria-label="Site navigation"
      >
        <div className="mx-auto max-w-[1280px] h-[72px] flex items-center justify-between px-6 md:px-10 lg:px-20 gap-5">
          {/* Logo */}
          <Link href="/" aria-label="Octmark, Home">
            <Image
              src={isTransparentDark ? "/images/OCTMARK_LOGO_WHITE.png" : "/images/OCTMARK_LOGO.png"}
              alt="Octmark"
              height={44}
              width={176}
              priority
              className="h-[44px] w-auto block"
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden lg:flex items-center justify-center gap-5 flex-1">
            {NAV.map((item) => {
              const active = pathname.startsWith(item.href) && item.href !== "/";
              const panelChildren = item.groups.flatMap((g) => g.items).filter((c) => c.panel);
              const hasPanels = panelChildren.length > 0;
              const activeChild =
                panelChildren.find((c) => c.label === activePanel) ?? panelChildren[0];
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenSection(item.label)}
                  onMouseLeave={() => {
                    setOpenSection((s) => (s === item.label ? null : s));
                    setActivePanel(null);
                  }}
                >
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    aria-haspopup="true"
                    className={[
                      "inline-flex items-center gap-1 font-display text-[14px] transition-colors duration-150",
                      triggerColor(active),
                    ].join(" ")}
                  >
                    {item.label}
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"
                      className="mt-[2px] opacity-60 transition-transform duration-150 group-hover:rotate-180"
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                    </svg>
                  </Link>

                  {/* Dropdown panel */}
                  <div
                    className={[
                      "absolute top-[calc(100%+10px)] pt-2",
                      item.alignRight ? "right-0 origin-top-right" : "left-0 origin-top-left",
                      "invisible opacity-0 translate-y-1 scale-[0.98]",
                      "group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100",
                      "group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:scale-100",
                      "transition-all duration-200 ease-out",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "relative rounded-2xl border border-[#E6EAF0] bg-white overflow-hidden",
                        "shadow-[0_24px_60px_-16px_rgba(1,69,132,0.22)]",
                        hasPanels ? "w-[600px]" : item.cols === 2 ? "w-[460px]" : "w-[300px]",
                      ].join(" ")}
                    >
                      {/* Top accent bar */}
                      <div className="h-[3px] w-full bg-gradient-to-r from-[#014584] via-[#0157A8] to-[#FEA781]" />

                      <div className={hasPanels ? "flex" : ""}>
                        {/* Link list */}
                        <div className="flex-1 p-3">
                          {item.groups.map((group, gi) => (
                            <div
                              key={gi}
                              className={item.cols === 2 ? "grid grid-cols-2 gap-x-1" : ""}
                            >
                              {group.items.map((child) => (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                  onMouseEnter={() => child.panel && setActivePanel(child.label)}
                                  onFocus={() => child.panel && setActivePanel(child.label)}
                                  className="group/item flex items-start rounded-xl px-3 py-2.5 hover:bg-[#F4F7FB] transition-colors"
                                >
                                  <span className="min-w-0">
                                    <span className="flex items-center gap-1.5 font-display text-[14px] text-[#1F2A37]">
                                      {child.label}
                                      <span className="opacity-0 -translate-x-1 text-[#014584] transition-all duration-150 group-hover/item:opacity-100 group-hover/item:translate-x-0">
                                        →
                                      </span>
                                    </span>
                                    {child.desc && (
                                      <span className="block text-[12px] text-[#8A93A6] font-sans leading-snug mt-0.5">
                                        {child.desc}
                                      </span>
                                    )}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>

                        {/* Dynamic product rail, updates to the hovered product */}
                        {hasPanels && activeChild?.panel && (
                          <Link
                            key={activeChild.label}
                            href={activeChild.panel.href}
                            {...(activeChild.panel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="relative w-[236px] shrink-0 m-3 ml-0 rounded-xl bg-[#070D1A] p-5 flex flex-col justify-between overflow-hidden"
                          >
                            <span
                              className="absolute inset-0"
                              style={{
                                backgroundImage:
                                  "radial-gradient(ellipse 220px 160px at 85% 0%, rgba(1,69,132,0.55) 0%, transparent 70%)",
                              }}
                            />
                            <span className="relative block animate-[fadeIn_180ms_ease-out]">
                              {/* Media: brand logo or duotone icon */}
                              <span className="flex h-14 items-center mb-3">
                                {activeChild.panel.logo === "octrackit" && (
                                  <Image src="/images/octrackit-dark.png" alt="Octrackit" width={280} height={140} className="h-14 w-auto" />
                                )}
                                {!activeChild.panel.logo && activeChild.panel.icon && (
                                  <span
                                    className="inline-flex items-center justify-center w-10 h-10 rounded-[10px]"
                                    style={{ background: "rgba(1,69,132,0.22)", border: "1px solid rgba(77,159,224,0.35)" }}
                                  >
                                    <activeChild.panel.icon size={22} weight="duotone" color="#4D9FE0" />
                                  </span>
                                )}
                              </span>
                              {!activeChild.panel.wordmark && (
                                <>
                                  <span className="block text-[10px] uppercase tracking-[0.16em] text-[#FEA781] font-sans">
                                    {activeChild.panel.eyebrow}
                                  </span>
                                  <span className="block font-display text-[19px] text-[#EEF1F7] mt-1.5">
                                    {activeChild.panel.title}
                                  </span>
                                </>
                              )}
                              <span className="block text-[12px] text-[#8A96A8] font-sans leading-relaxed mt-2">
                                {activeChild.panel.desc}
                              </span>
                            </span>
                            <span className="relative inline-flex items-center gap-1 text-[13px] text-[#EEF1F7] font-display mt-5">
                              {activeChild.panel.cta} →
                            </span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Desktop right actions, single Book Demo CTA */}
          {!hideCta && (
            <div className="hidden lg:flex items-center">
              <Link
                href="/demo"
                className={[
                  "inline-flex items-center h-10 px-5 rounded-[6px] font-display text-[14px] tracking-[0.02em]",
                  "bg-[#014584] text-white border-0 transition-all duration-150 whitespace-nowrap",
                  "hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.4),0_4px_12px_rgba(1,69,132,0.25)]",
                ].join(" ")}
              >
                Book Demo
              </Link>
            </div>
          )}

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={[
              "lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-[5px]",
              "rounded-[6px] transition-colors duration-150",
              isTransparentDark ? "text-[#EEF1F7]" : "text-[#3E3E3E]",
            ].join(" ")}
          >
            <span className={["block h-[1.5px] w-5 bg-current transition-transform duration-200", menuOpen ? "translate-y-[6.5px] rotate-45" : ""].join(" ")} />
            <span className={["block h-[1.5px] w-5 bg-current transition-opacity duration-200", menuOpen ? "opacity-0" : ""].join(" ")} />
            <span className={["block h-[1.5px] w-5 bg-current transition-transform duration-200", menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""].join(" ")} />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay, accordion */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={[
          "fixed inset-0 z-40 bg-[#070D1A] flex flex-col pt-[72px]",
          "transition-opacity duration-200",
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <nav aria-label="Mobile primary" className="flex flex-col px-6 pt-6 pb-6 gap-1 flex-1 overflow-y-auto">
          {NAV.map((item) => {
            const expanded = openSection === item.label;
            return (
              <div key={item.label} className="border-b border-[rgba(255,255,255,0.06)]">
                <button
                  type="button"
                  onClick={() => setOpenSection((s) => (s === item.label ? null : item.label))}
                  aria-expanded={expanded}
                  className="w-full flex items-center justify-between py-3.5 font-display text-[18px] text-[#EEF1F7]"
                >
                  {item.label}
                  <svg width="14" height="14" viewBox="0 0 10 10" aria-hidden="true"
                    className={["opacity-70 transition-transform duration-200", expanded ? "rotate-180" : ""].join(" ")}>
                    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                  </svg>
                </button>
                {expanded && (
                  <div className="pb-3 pl-1">
                    {item.groups.map((group, gi) => (
                      <div key={gi} className="mb-2">
                        {group.heading && (
                          <span className="block text-[11px] uppercase tracking-[0.10em] text-[#4E5A6C] font-semibold mb-1">
                            {group.heading}
                          </span>
                        )}
                        {group.items.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            {...(child.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="block py-2 font-sans text-[15px] text-[#8A96A8] hover:text-[#EEF1F7]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {!hideCta && (
          <div className="px-6 pb-10 flex flex-col gap-3">
            <Link
              href="/demo"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center h-12 w-full rounded-[6px] font-display text-[15px] tracking-[0.02em] bg-[#014584] text-white transition-colors duration-150 hover:bg-[#0157A8]"
            >
              Book Demo
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
