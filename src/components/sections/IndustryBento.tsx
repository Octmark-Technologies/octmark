"use client";

import { Fragment } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  Heartbeat,
  GraduationCap,
  Buildings,
  ShoppingCart,
  Factory,
  ForkKnife,
  MagnifyingGlass,
  ShieldCheck,
  CalendarCheck,
  Scales,
  MapPin,
  Handshake,
  CreditCard,
  Envelope,
  ClipboardText,
  Package,
  ArrowsClockwise,
  CaretRight,
  type Icon,
} from "@phosphor-icons/react";

interface JourneyNode {
  icon: Icon;
  label: string;
}

interface Industry {
  slug: string;
  name: string;
  icon: Icon;
  /** Curated, on-brand accent hue for this sector. */
  accent: string;
  intro: string;
  /** Qualitative tuning spec, the variables the system adapts per sector. */
  spec: { decides: string; channel: string; tunedFor: string };
  /** Compact buyer-journey flow for this sector. */
  journey: JourneyNode[];
  focus: string[];
  /** Wide tiles use a two-column internal layout on large screens. */
  featured?: boolean;
  span: string;
}

const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: Heartbeat,
    accent: "#2E7DD1",
    intro:
      "Patients research carefully and decide slowly, and trust is the whole game. We build patient acquisition and retention that earns that trust and proves which channels bring real appointments.",
    spec: { decides: "Patient + family", channel: "Search + referral", tunedFor: "Booked appointments" },
    journey: [
      { icon: MagnifyingGlass, label: "Research" },
      { icon: ShieldCheck, label: "Trust" },
      { icon: CalendarCheck, label: "Book" },
    ],
    focus: [
      "Quality-scored patient acquisition across search, paid, and referral.",
      "Trust-first, compliance-aware content and messaging.",
      "Recall and retention journeys that bring patients back.",
    ],
    featured: true,
    span: "lg:col-span-7",
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    accent: "#7C5CFC",
    intro:
      "Enrolment runs on cycles and involves more than one decision-maker. We build demand and nurture that reaches students and parents at the right moment.",
    spec: { decides: "Student + parent", channel: "Social + counsellor", tunedFor: "Enrolments" },
    journey: [
      { icon: MagnifyingGlass, label: "Discover" },
      { icon: Scales, label: "Compare" },
      { icon: GraduationCap, label: "Enrol" },
    ],
    focus: [
      "Enrolment campaigns timed to admission cycles.",
      "Journeys that speak to both students and parents.",
      "Content authority that builds confidence before a decision.",
    ],
    span: "lg:col-span-5",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Buildings,
    accent: "#14B8A6",
    intro:
      "Property is a high-value, long-consideration purchase, so lead quality matters more than volume. We build qualified lead generation and patient nurture that protects your team's time.",
    spec: { decides: "Buyer + household", channel: "Portals + local", tunedFor: "Qualified visits" },
    journey: [
      { icon: MagnifyingGlass, label: "Browse" },
      { icon: MapPin, label: "Visit" },
      { icon: Handshake, label: "Offer" },
    ],
    focus: [
      "Qualified lead generation with quality scoring, not raw volume.",
      "Long-horizon nurture for considered decisions.",
      "Local and programmatic reach for the right buyers.",
    ],
    span: "lg:col-span-5",
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    icon: ShoppingCart,
    accent: "#FEA781",
    intro:
      "Commerce growth is won across the whole funnel, acquisition, conversion, and retention, all at a cost that works. We build full-funnel systems measured against revenue, not clicks.",
    spec: { decides: "Individual shopper", channel: "Paid + organic", tunedFor: "Revenue & LTV" },
    journey: [
      { icon: MagnifyingGlass, label: "Browse" },
      { icon: ShoppingCart, label: "Cart" },
      { icon: CreditCard, label: "Buy" },
    ],
    focus: [
      "Paid and organic acquisition optimised against real return.",
      "Conversion-focused storefronts and journeys.",
      "Retention and lifetime-value systems for repeat purchase.",
    ],
    featured: true,
    span: "lg:col-span-7",
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    accent: "#F59E0B",
    intro:
      "Manufacturing is long-cycle B2B, often through distributors and dealers. We build pipeline and channel demand for technical buyers, with attribution that survives a long sales process.",
    spec: { decides: "Buyer + procurement", channel: "Search + distributor", tunedFor: "Pipeline" },
    journey: [
      { icon: Envelope, label: "Enquire" },
      { icon: ClipboardText, label: "Evaluate" },
      { icon: Package, label: "Order" },
    ],
    focus: [
      "B2B lead generation for considered, long-cycle buying.",
      "Account and distributor demand programs.",
      "Content built for technical and procurement buyers.",
    ],
    span: "lg:col-span-6",
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: ForkKnife,
    accent: "#EC4899",
    intro:
      "Hospitality lives on demand, direct bookings, and loyalty, against real seasonality. We build systems that fill calendars and bring guests back, across every channel they use.",
    spec: { decides: "Guest + group", channel: "OTAs + direct", tunedFor: "Direct bookings" },
    journey: [
      { icon: MagnifyingGlass, label: "Discover" },
      { icon: CalendarCheck, label: "Book" },
      { icon: ArrowsClockwise, label: "Return" },
    ],
    focus: [
      "Demand generation tuned to seasonality.",
      "Direct-booking journeys that reduce reliance on third parties.",
      "Loyalty and retention for repeat guests.",
    ],
    span: "lg:col-span-6",
  },
];

/** Lightweight list for hero quick-jump chips (no icon components). */
export const INDUSTRY_LINKS = INDUSTRIES.map((i) => ({ slug: i.slug, name: i.name }));

/* hex -> rgba helper for accent washes */
function rgba(hex: string, a: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

/** Dark mini "dashboard" panel: cycle meter + tuning spec. The on-brand proof. */
function SpecPanel({ ind, big }: { ind: Industry; big?: boolean }) {
  const reduce = useReducedMotion();
  const specRows: [string, string][] = [
    ["Decides", ind.spec.decides],
    ["Trust channel", ind.spec.channel],
    ["Tuned for", ind.spec.tunedFor],
  ];
  return (
    <div
      className="rounded-xl p-4 lg:p-5"
      style={{
        background: "linear-gradient(150deg, #0D1426 0%, #070D1A 100%)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: `inset 0 0 0 1px ${rgba(ind.accent, 0.08)}`,
      }}
    >
      {/* buyer-journey mini flow */}
      <div className="mb-4">
        <span className="block font-mono text-[10px] uppercase tracking-[0.1em] text-[#4E5A6C] mb-2.5">
          Buyer journey
        </span>
        <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2">
          {ind.journey.map((n, i) => (
            <Fragment key={n.label}>
              <motion.span
                className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5"
                style={{ background: rgba(ind.accent, 0.12), border: `1px solid ${rgba(ind.accent, 0.26)}` }}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              >
                <n.icon size={13} weight="duotone" color={ind.accent} />
                <span className="text-[11px] text-[#EEF1F7] font-sans whitespace-nowrap">{n.label}</span>
              </motion.span>
              {i < ind.journey.length - 1 && (
                <CaretRight size={11} weight="bold" style={{ color: rgba(ind.accent, 0.7) }} className="shrink-0" />
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* tuning spec rows */}
      <dl className={big ? "grid grid-cols-1 gap-2.5" : "grid grid-cols-1 gap-2.5"}>
        {specRows.map(([k, v]) => (
          <div key={k} className="flex items-center justify-between gap-3 border-t border-white/[0.05] pt-2.5 first:border-0 first:pt-0">
            <dt className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#4E5A6C] shrink-0">{k}</dt>
            <dd className="text-[12.5px] text-[#C4CCD8] font-sans text-right leading-tight">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Card({ ind, i }: { ind: Industry; i: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      id={ind.slug}
      className={`group relative scroll-mt-[110px] overflow-hidden rounded-2xl bg-white border border-[#E5E8EE] p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--ac)] ${ind.span}`}
      style={
        {
          // accent CSS var, used by hover border + glow
          ["--ac" as string]: rgba(ind.accent, 0.55),
        } as React.CSSProperties
      }
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.08 }}
    >
      {/* accent corner wash */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full blur-[60px] opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `radial-gradient(circle, ${rgba(ind.accent, 0.28)} 0%, transparent 70%)` }}
      />
      {/* hover ring glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ boxShadow: `0 18px 50px ${rgba(ind.accent, 0.18)}` }}
      />

      <div
        className={
          ind.featured
            ? "relative grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 lg:gap-8 items-stretch h-full"
            : "relative flex flex-col h-full"
        }
      >
        {/* primary column */}
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-3.5 mb-4">
            <span
              className="inline-flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
              style={{ background: rgba(ind.accent, 0.12), border: `1px solid ${rgba(ind.accent, 0.22)}` }}
            >
              <ind.icon size={22} weight="duotone" color={ind.accent} />
            </span>
            <h3 className="font-display text-[21px] lg:text-[23px] text-[#3E3E3E] leading-none">{ind.name}</h3>
          </div>

          <p className="text-[15px] text-[#52525B] font-sans leading-[1.65] mb-5">{ind.intro}</p>

          {/* focus chips */}
          <ul className="flex flex-wrap gap-2 mb-6">
            {ind.focus.map((f) => (
              <li
                key={f}
                className="text-[12.5px] text-[#3E3E3E] font-sans leading-snug rounded-lg px-3 py-1.5 bg-[#F2F5F9] border border-[#E5E8EE]"
              >
                {f}
              </li>
            ))}
          </ul>

          {/* spec panel sits inline below for narrow cards */}
          {!ind.featured && (
            <div className="mb-6">
              <SpecPanel ind={ind} />
            </div>
          )}

          <Link
            href="/start"
            className={`${ind.featured ? "" : "mt-auto"} inline-flex items-center gap-1.5 text-[14px] font-display transition-all hover:gap-2.5`}
            style={{ color: ind.accent }}
          >
            Talk about {ind.name} <ArrowRight size={15} />
          </Link>
        </div>

        {/* featured cards get the spec panel as a sidebar */}
        {ind.featured && (
          <div className="flex items-center">
            <div className="w-full">
              <SpecPanel ind={ind} big />
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}

export default function IndustryBento() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5">
      {INDUSTRIES.map((ind, i) => (
        <Card key={ind.slug} ind={ind} i={i} />
      ))}
    </div>
  );
}
