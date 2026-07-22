"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface GrowInProps {
  children: ReactNode;
  className?: string;
  /** Axis to grow along. "y" grows from the bottom, "x" from the left. */
  axis?: "x" | "y";
  delay?: number;
  duration?: number;
  amount?: number;
  once?: boolean;
}

/**
 * Scales an element in from a baseline as it scrolls into view, for bars,
 * meters, and growth motifs. Grows from the bottom ("y") or left ("x").
 * Static under reduced motion.
 */
export default function GrowIn({
  children,
  className,
  axis = "y",
  delay = 0,
  duration = 0.7,
  amount = 0.4,
  once = true,
}: GrowInProps) {
  const reduce = useReducedMotion();
  const origin = axis === "y" ? "bottom" : "left";
  const initialScale = axis === "y" ? { scaleY: 0 } : { scaleX: 0 };
  const finalScale = axis === "y" ? { scaleY: 1 } : { scaleX: 1 };

  if (reduce) {
    return (
      <div className={className} style={{ transformOrigin: origin }}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={{ transformOrigin: origin }}
      initial={{ opacity: 0, ...initialScale }}
      whileInView={{ opacity: 1, ...finalScale }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
