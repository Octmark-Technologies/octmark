"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  Heartbeat,
  GraduationCap,
  Buildings,
  ShoppingCart,
  Factory,
  ForkKnife,
  CaretRight,
  type Icon,
} from "@phosphor-icons/react";
import IndustryVisual from "@/components/graphics/IndustryVisual";

interface Industry {
  slug: string;
  name: string;
  icon: Icon;
  intro: string;
  focus: string[];
}

const INDUSTRIES: Industry[] = [
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: Heartbeat,
    intro:
      "Patients research carefully and decide slowly, and trust is the whole game. We build patient acquisition and retention that earns that trust and proves which channels bring real appointments.",
    focus: [
      "Patient acquisition across search, paid, and referral, scored for quality.",
      "Trust-first, compliance-aware content and messaging.",
      "Recall and retention journeys that bring patients back.",
    ],
  },
  {
    slug: "education",
    name: "Education",
    icon: GraduationCap,
    intro:
      "Enrolment runs on cycles and involves more than one decision-maker. We build demand and nurture for institutions and edtech that reaches students and parents at the right moment.",
    focus: [
      "Enrolment campaigns timed to admission cycles.",
      "Journeys that speak to both students and parents.",
      "Content authority that builds confidence before a decision.",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: Buildings,
    intro:
      "Property is a high-value, long-consideration purchase, so lead quality matters more than lead volume. We build qualified lead generation and patient nurture that protects your team's time.",
    focus: [
      "Qualified lead generation with quality scoring, not raw volume.",
      "Long-horizon nurture for considered decisions.",
      "Local and programmatic reach for the right buyers.",
    ],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce",
    icon: ShoppingCart,
    intro:
      "Commerce growth is won across the whole funnel: acquisition, conversion, and retention, all at a cost that works. We build full-funnel systems measured against revenue, not clicks.",
    focus: [
      "Paid and organic acquisition optimised against real return.",
      "Conversion-focused storefronts and journeys.",
      "Retention and lifetime-value systems for repeat purchase.",
    ],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    intro:
      "Manufacturing is long-cycle B2B, often through distributors and dealers. We build pipeline and channel demand for technical buyers, with attribution that survives a long sales process.",
    focus: [
      "B2B lead generation for considered, long-cycle buying.",
      "Account and distributor demand programs.",
      "Content built for technical and procurement buyers.",
    ],
  },
  {
    slug: "hospitality",
    name: "Hospitality",
    icon: ForkKnife,
    intro:
      "Hospitality lives on demand, direct bookings, and loyalty, against real seasonality. We build systems that fill calendars and bring guests back, across every channel they use.",
    focus: [
      "Demand generation tuned to seasonality.",
      "Direct-booking journeys that reduce reliance on third parties.",
      "Loyalty and retention for repeat guests.",
    ],
  },
];

/** Lightweight list for hero quick-jump chips (no icon components). */
export const INDUSTRY_LINKS = INDUSTRIES.map((i) => ({ slug: i.slug, name: i.name }));

export default function IndustriesExplorer() {
  const [active, setActive] = useState(INDUSTRIES[0].slug);

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.replace("#", "");
      if (INDUSTRIES.some((i) => i.slug === h)) setActive(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[4fr_7fr] gap-6 lg:gap-8">
      {/* Tablist */}
      <div role="tablist" aria-label="Industries" className="flex flex-col gap-1.5">
        {INDUSTRIES.map((ind) => {
          const on = ind.slug === active;
          return (
            <button
              key={ind.slug}
              id={ind.slug}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setActive(ind.slug)}
              className={`group flex items-center gap-3 text-left rounded-xl px-4 py-3.5 scroll-mt-[100px] border transition-all duration-150 ${
                on
                  ? "bg-white border-[#014584] shadow-[0_2px_14px_rgba(1,69,132,0.10)]"
                  : "bg-transparent border-transparent hover:bg-white/70"
              }`}
            >
              <span
                className={`inline-flex items-center justify-center w-9 h-9 rounded-lg shrink-0 transition-colors ${
                  on ? "bg-[rgba(1,69,132,0.12)]" : "bg-[#E7EDF5]"
                }`}
              >
                <ind.icon size={18} weight="duotone" color="#014584" />
              </span>
              <span className={`flex-1 font-display text-[16px] ${on ? "text-[#014584]" : "text-[#3E3E3E]"}`}>
                {ind.name}
              </span>
              <CaretRight
                size={13}
                weight="bold"
                className={on ? "text-[#014584]" : "text-[#9AA3B2] group-hover:translate-x-0.5 transition-transform"}
              />
            </button>
          );
        })}
      </div>

      {/* Tabpanels (all in DOM, inactive hidden, for accessibility + crawlability) */}
      <div>
        {INDUSTRIES.map((ind) => (
          <div
            key={ind.slug}
            role="tabpanel"
            aria-labelledby={ind.slug}
            hidden={ind.slug !== active}
            className="rounded-2xl bg-white border border-[#E5E8EE] overflow-hidden"
          >
            <IndustryVisual icon={ind.icon} />
            <div className="p-7 lg:p-9">
              <h3 className="font-display text-[24px] lg:text-[26px] text-[#3E3E3E] leading-snug mb-3">{ind.name}</h3>
              <p className="text-[16px] text-[#52525B] font-sans leading-[1.7] mb-6 max-w-[640px]">{ind.intro}</p>
              <ul className="space-y-3 mb-7">
                {ind.focus.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 mt-0.5 rounded-full bg-[rgba(1,69,132,0.08)] text-[#014584]">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    <span className="text-[15px] text-[#3E3E3E] font-sans leading-[1.55]">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/start"
                className="inline-flex items-center gap-1.5 text-[15px] text-[#014584] font-display hover:gap-2.5 transition-all"
              >
                Talk about {ind.name} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
