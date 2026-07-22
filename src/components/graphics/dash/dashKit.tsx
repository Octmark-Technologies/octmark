"use client";

import { motion, type Variants } from "motion/react";

/* Shared cascade timing for every dashboard widget. */
export const dashContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};

export const rowV: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

const barV: Variants = {
  hidden: { scaleX: 0 },
  show: { scaleX: 1, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const TONES = {
  blue: "linear-gradient(90deg,#014584,#4D9FE0)",
  coral: "linear-gradient(90deg,#c2693f,#FEA781)",
  dim: "linear-gradient(90deg,#1d2942,#33415c)",
};

/** A horizontal progress/value bar that grows from the left on scroll. */
export function Bar({
  pct,
  tone = "blue",
  height = 8,
  glow = false,
  className = "",
}: {
  pct: number;
  tone?: keyof typeof TONES;
  height?: number;
  glow?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`relative block w-full rounded-full bg-white/[0.06] overflow-hidden ${className}`}
      style={{ height }}
    >
      <motion.span
        variants={barV}
        className="absolute inset-y-0 left-0 rounded-full"
        style={{
          width: `${pct}%`,
          transformOrigin: "left",
          background: TONES[tone],
          boxShadow: glow ? "0 0 10px rgba(77,159,224,0.5)" : undefined,
        }}
      />
    </span>
  );
}

/** A vertical bar (for funnel/column charts) that grows from the bottom. */
export function Column({
  pct,
  tone = "blue",
  className = "",
}: {
  pct: number;
  tone?: keyof typeof TONES;
  className?: string;
}) {
  return (
    <span className={`relative block w-full h-full rounded-md bg-white/[0.05] overflow-hidden ${className}`}>
      <motion.span
        variants={{
          hidden: { scaleY: 0 },
          show: { scaleY: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
        }}
        className="absolute inset-x-0 bottom-0 rounded-md"
        style={{ height: `${pct}%`, transformOrigin: "bottom", background: TONES[tone] }}
      />
    </span>
  );
}

/** A small status pill used in widget headers (e.g. "real-time", "▲ improving"). */
export function Pill({
  children,
  tone = "blue",
}: {
  children: React.ReactNode;
  tone?: "blue" | "coral";
}) {
  const color = tone === "coral" ? "#FEA781" : "#4D9FE0";
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.06em] text-[#8A96A8]">
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
      {children}
    </span>
  );
}
