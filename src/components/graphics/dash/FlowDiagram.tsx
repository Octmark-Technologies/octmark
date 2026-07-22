"use client";

import { motion, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";
import DashShell, { DashHead } from "./DashShell";
import { Pill, rowV, dashContainer } from "./dashKit";

export type FlowTone = "blue" | "coral";

export interface FlowStep {
  icon: LucideIcon;
  label: string;
  /** Small mono caption shown on the right of the node. */
  meta?: string;
  tone?: FlowTone;
}

export interface FlowLeaf {
  icon: LucideIcon;
  label: string;
  tone?: FlowTone;
}

export interface FlowConfig {
  /** Mono URL in the browser-frame chrome bar. */
  url: string;
  /** Dashboard header title. */
  title: string;
  /** Optional status pill (e.g. "live", "real-time"). */
  pill?: { label: string; tone?: FlowTone };
  /** Linear spine of the journey, top to bottom. */
  steps: FlowStep[];
  /** Small caption above the branch fan-out (e.g. "by intent"). */
  branchLabel?: string;
  /** Outcome leaves the final step fans out into. */
  leaves: FlowLeaf[];
}

/* ── tone tokens ─────────────────────────────────────────── */
const TONE = {
  blue: {
    tile: "rgba(1,69,132,0.20)",
    border: "rgba(77,159,224,0.34)",
    icon: "#4D9FE0",
    line: "rgba(77,159,224,0.32)",
    glow: "0 0 14px rgba(77,159,224,0.28)",
  },
  coral: {
    tile: "rgba(254,167,129,0.13)",
    border: "rgba(254,167,129,0.36)",
    icon: "#FEA781",
    line: "rgba(254,167,129,0.34)",
    glow: "0 0 14px rgba(254,167,129,0.24)",
  },
} as const;

/* spine geometry */
const NODE = 38; // icon-tile size
const CENTER = NODE / 2; // 19

/* branch leaf geometry (fixed heights keep the elbow connectors deterministic) */
const LEAF_H = 38;
const LEAF_GAP = 12;
const LEAF_PITCH = LEAF_H + LEAF_GAP;

function NodeTile({ icon: Icon, tone = "blue" as FlowTone }: { icon: LucideIcon; tone?: FlowTone }) {
  const t = TONE[tone];
  return (
    <span
      className="relative z-10 inline-flex items-center justify-center shrink-0 rounded-xl"
      style={{ width: NODE, height: NODE, background: t.tile, border: `1px solid ${t.border}`, boxShadow: t.glow }}
    >
      <Icon size={17} style={{ color: t.icon }} />
    </span>
  );
}

export default function FlowDiagram({ config, frameless = false }: { config: FlowConfig; frameless?: boolean }) {
  const { url, title, pill, steps, branchLabel, leaves } = config;
  const reduce = useReducedMotion();

  const spineLine = TONE.blue.line;
  // vertical guide from the fork origin down to the centre of the last leaf
  const guideHeight = (leaves.length - 1) * LEAF_PITCH + LEAF_H / 2 + 14;

  const body = (
    <>
      <DashHead title={title} right={pill ? <Pill tone={pill.tone}>{pill.label}</Pill> : undefined} />

      {/* ── spine ─────────────────────────────────────────── */}
      <div className="relative">
        {steps.length > 1 && (
          <span
            aria-hidden
            className="absolute w-px"
            style={{ left: CENTER, top: NODE / 2, bottom: NODE / 2, background: spineLine }}
          />
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: LEAF_GAP }}>
          {steps.map((s) => {
            const t = TONE[s.tone ?? "blue"];
            return (
              <motion.div key={s.label} variants={rowV} className="flex items-center gap-3">
                <NodeTile icon={s.icon} tone={s.tone} />
                <span
                  className="flex-1 min-w-0 flex items-center gap-2 rounded-lg px-3 h-[38px]"
                  style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${t.border}` }}
                >
                  <span className="flex-1 min-w-0 text-[12.5px] text-[#EEF1F7] font-sans truncate">{s.label}</span>
                  {s.meta && <span className="shrink-0 font-mono text-[9.5px] text-[#4E5A6C]">{s.meta}</span>}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── branch fan-out ────────────────────────────────── */}
      {leaves.length > 0 && (
        <motion.div variants={rowV} className="relative mt-3" style={{ marginLeft: CENTER }}>
          {/* fork stem from the last spine node into the guide */}
          <span aria-hidden className="absolute left-0 w-px" style={{ top: -LEAF_GAP, height: 14, background: spineLine }} />
          {branchLabel && (
            <span className="block pl-6 mb-2 font-mono text-[9.5px] uppercase tracking-[0.1em] text-[#4E5A6C]">
              {branchLabel}
            </span>
          )}
          <div className="relative">
            {/* vertical guide */}
            <span aria-hidden className="absolute left-0 top-0 w-px" style={{ height: guideHeight, background: spineLine }} />
            <div style={{ display: "flex", flexDirection: "column", gap: LEAF_GAP }}>
              {leaves.map((l) => {
                const t = TONE[l.tone ?? "blue"];
                return (
                  <motion.div
                    key={l.label}
                    variants={rowV}
                    className="relative flex items-center gap-2.5 pl-6"
                    style={{ height: LEAF_H }}
                  >
                    {/* elbow connector */}
                    <span aria-hidden className="absolute left-0 top-1/2 h-px" style={{ width: 18, background: spineLine }} />
                    <span
                      className="flex items-center gap-2 rounded-lg px-2.5 h-[30px]"
                      style={{ background: t.tile, border: `1px solid ${t.border}`, boxShadow: t.glow }}
                    >
                      <l.icon size={13} style={{ color: t.icon }} />
                      <span className="text-[12px] font-sans whitespace-nowrap" style={{ color: "#EEF1F7" }}>
                        {l.label}
                      </span>
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );

  if (frameless) {
    return (
      <motion.div
        variants={dashContainer}
        initial={reduce ? "show" : "hidden"}
        whileInView={reduce ? undefined : "show"}
        animate={reduce ? "show" : undefined}
        viewport={{ once: true, amount: 0.3 }}
      >
        {body}
      </motion.div>
    );
  }

  return <DashShell url={url}>{body}</DashShell>;
}
