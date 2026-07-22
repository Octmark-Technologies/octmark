"use client";

import { motion, useReducedMotion } from "motion/react";

interface DrawPathProps {
  d: string;
  className?: string;
  stroke?: string;
  strokeWidth?: number | string;
  strokeLinecap?: "butt" | "round" | "square";
  strokeLinejoin?: "miter" | "round" | "bevel";
  fill?: string;
  markerEnd?: string;
  markerStart?: string;
  duration?: number;
  delay?: number;
  amount?: number;
  once?: boolean;
}

/**
 * An SVG <path> that draws itself (stroke) as it scrolls into view.
 * Place inside any <svg>. Falls back to a static drawn path under reduced motion.
 */
export default function DrawPath({
  d,
  className,
  stroke,
  strokeWidth = 1.5,
  strokeLinecap,
  strokeLinejoin,
  fill = "none",
  markerEnd,
  markerStart,
  duration = 1.2,
  delay = 0,
  amount = 0.4,
  once = true,
}: DrawPathProps) {
  const reduce = useReducedMotion();

  const shared = {
    d,
    className,
    stroke,
    strokeWidth,
    strokeLinecap,
    strokeLinejoin,
    fill,
    markerEnd,
    markerStart,
  };

  if (reduce) return <path {...shared} />;

  return (
    <motion.path
      {...shared}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: "easeInOut" }}
    />
  );
}
