"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Total travel in px across the scroll range. Positive moves slower (down). */
  distance?: number;
  /** "y" (default) or "x" axis travel. */
  axis?: "x" | "y";
}

/**
 * Scroll-linked parallax: translates its content as the element passes through
 * the viewport. Used for decorative graphics (orbs, grids, product frames).
 */
export default function Parallax({
  children,
  className,
  distance = 60,
  axis = "y",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const travel = useTransform(scrollYProgress, [0, 1], [distance, -distance]);

  if (reduce) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={axis === "y" ? { y: travel } : { x: travel }}
    >
      {children}
    </motion.div>
  );
}
