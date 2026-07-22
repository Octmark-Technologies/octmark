"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Seconds to delay the reveal (use for manual staggering). */
  delay?: number;
  /** Initial vertical offset in px. Negative reveals from below differently. */
  y?: number;
  /** Animate every time it enters view, or only once. Default once. */
  once?: boolean;
  /** Fraction of the element that must be visible to trigger. */
  amount?: number;
  duration?: number;
}

/**
 * Scroll-into-view reveal (fade + rise). The site-wide motion primitive.
 * Renders a static wrapper when the user prefers reduced motion.
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  once = true,
  amount = 0.2,
  duration = 0.6,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
