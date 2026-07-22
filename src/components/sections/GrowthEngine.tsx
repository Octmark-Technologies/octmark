"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  MagnetStraight,
  ChatCircleDots,
  Target,
  RocketLaunch,
  Heart,
  Brain,
  type Icon,
} from "@phosphor-icons/react";

/**
 * "The Growth Engine" — homepage hero visual. Cortex (AI core) sits at
 * the centre while the five lifecycle stages physically ORBIT it: the ring of
 * nodes revolves continuously, each icon counter-rotates so it stays upright,
 * the spokes revolve in sync, and signal pulses flow inward to the core.
 * Pure SVG + CSS/Motion, reduced-motion aware.
 */

interface Stage {
  icon: Icon;
  label: string;
}

const STAGES: Stage[] = [
  { icon: MagnetStraight, label: "Attract" },
  { icon: ChatCircleDots, label: "Engage" },
  { icon: Target, label: "Convert" },
  { icon: RocketLaunch, label: "Deliver" },
  { icon: Heart, label: "Retain" },
];

/* geometry — node radius matches in % (HTML) and viewBox units (SVG) */
const R = 36;
const START = -90;
const STEP = 360 / STAGES.length;
const ORBIT_SECONDS = 40;

const rad = (deg: number) => (deg * Math.PI) / 180;
const angle = (i: number) => START + i * STEP;
const pos = (i: number) => ({
  x: 50 + R * Math.cos(rad(angle(i))),
  y: 50 + R * Math.sin(rad(angle(i))),
});

export default function GrowthEngine() {
  const reduce = useReducedMotion();
  const spin = (dir: 1 | -1) =>
    reduce ? undefined : { rotate: 360 * dir };
  const spinT = { duration: ORBIT_SECONDS, ease: "linear" as const, repeat: Infinity };

  return (
    <div className="relative mx-auto w-full max-w-[440px] aspect-square select-none">
      {/* ── static SVG: glow, rings ─────────────────────────────── */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        <defs>
          <radialGradient id="ge-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4D9FE0" stopOpacity="0.5" />
            <stop offset="55%" stopColor="#014584" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#014584" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="50" cy="50" r="34" fill="url(#ge-core)" />
        <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(77,159,224,0.20)" strokeWidth="0.35" />
        <circle cx="50" cy="50" r={R - 11} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />
        <circle cx="50" cy="50" r="12" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3" />

        {/* slow dashed accent ring (rotates for texture) */}
        <motion.circle
          cx="50"
          cy="50"
          r={R}
          fill="none"
          stroke="rgba(77,159,224,0.35)"
          strokeWidth="0.5"
          strokeDasharray="0.6 5"
          strokeLinecap="round"
          style={{ originX: "50%", originY: "50%" }}
          animate={spin(1)}
          transition={{ ...spinT, duration: 60 }}
        />

        {/* ── rotating system: spokes + inward pulses ───────────── */}
        <motion.g style={{ originX: "50%", originY: "50%" }} animate={spin(1)} transition={spinT}>
          {STAGES.map((s, i) => {
            const p = pos(i);
            return (
              <line
                key={`spoke-${s.label}`}
                x1="50"
                y1="50"
                x2={p.x}
                y2={p.y}
                stroke="rgba(77,159,224,0.16)"
                strokeWidth="0.3"
              />
            );
          })}
          {!reduce &&
            STAGES.map((s, i) => {
              const p = pos(i);
              const tone = i === 2 ? "#FEA781" : "#4D9FE0";
              return (
                <motion.circle
                  key={`pulse-${s.label}`}
                  r="0.85"
                  fill={tone}
                  style={{ filter: `drop-shadow(0 0 2px ${tone})` }}
                  initial={{ cx: p.x, cy: p.y, opacity: 0 }}
                  animate={{ cx: [p.x, 50], cy: [p.y, 50], opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 2.6, ease: "easeIn", repeat: Infinity, delay: i * 0.6, repeatDelay: 1.4 }}
                />
              );
            })}
        </motion.g>
      </svg>

      {/* ── orbiting nodes (HTML, counter-rotated upright) ───────── */}
      <motion.div
        className="absolute inset-0"
        style={{ transformOrigin: "50% 50%" }}
        animate={spin(1)}
        transition={spinT}
      >
        {STAGES.map((s, i) => {
          const p = pos(i);
          return (
            <div
              key={s.label}
              className="absolute"
              style={{ left: `${p.x}%`, top: `${p.y}%`, transform: "translate(-50%, -50%)" }}
            >
              <motion.div
                className="flex flex-col items-center"
                style={{ transformOrigin: "50% 50%" }}
                animate={spin(-1)}
                transition={spinT}
              >
                <span
                  className="inline-flex items-center justify-center rounded-xl"
                  style={{
                    width: 46,
                    height: 46,
                    background: "rgba(13,20,38,0.9)",
                    border: "1px solid rgba(77,159,224,0.38)",
                    boxShadow: "0 0 20px rgba(1,69,132,0.4)",
                  }}
                >
                  <s.icon size={22} weight="duotone" color="#4D9FE0" />
                </span>
                <span className="mt-1.5 font-sans text-[11px] text-[#C4CCD8] whitespace-nowrap">{s.label}</span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* ── core: Cortex (static, pulsing glow) ─────────────── */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <motion.div
          className="relative inline-flex items-center justify-center rounded-2xl"
          style={{
            width: 76,
            height: 76,
            background: "linear-gradient(150deg, rgba(1,69,132,0.6), rgba(1,69,132,0.28))",
            border: "1px solid rgba(77,159,224,0.55)",
            boxShadow: "0 0 38px rgba(77,159,224,0.42), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
          animate={
            reduce
              ? undefined
              : {
                  boxShadow: [
                    "0 0 26px rgba(77,159,224,0.30), inset 0 1px 0 rgba(255,255,255,0.08)",
                    "0 0 48px rgba(77,159,224,0.58), inset 0 1px 0 rgba(255,255,255,0.08)",
                    "0 0 26px rgba(77,159,224,0.30), inset 0 1px 0 rgba(255,255,255,0.08)",
                  ],
                }
          }
          transition={{ duration: 3.4, ease: "easeInOut", repeat: Infinity }}
        >
          <Brain size={36} weight="duotone" color="#7FC1FF" />
        </motion.div>
        <span className="mt-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-[#4D9FE0]">Cortex</span>
        <span className="mt-0.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-[#4E5A6C]">AI core</span>
      </div>

      {/* status chip */}
      <div
        className="absolute right-0 top-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
        style={{ background: "rgba(13,20,38,0.7)", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <motion.span
          className="w-1.5 h-1.5 rounded-full bg-[#4D9FE0]"
          style={{ boxShadow: "0 0 6px #4D9FE0" }}
          animate={reduce ? undefined : { opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
        <span className="font-mono text-[9.5px] uppercase tracking-[0.08em] text-[#8A96A8]">live engine</span>
      </div>
    </div>
  );
}
