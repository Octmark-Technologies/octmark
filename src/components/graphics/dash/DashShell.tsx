"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import BrowserFrame from "@/components/graphics/BrowserFrame";
import { dashContainer } from "./dashKit";

/**
 * Wraps a realistic dashboard-mockup widget in the product browser frame and
 * drives the staggered reveal. Children are the widget rows/charts.
 */
export default function DashShell({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) {
  const reduce = useReducedMotion();

  return (
    <BrowserFrame url={url} bodyClassName="p-5 sm:p-6">
      <motion.div
        variants={dashContainer}
        initial={reduce ? "show" : "hidden"}
        whileInView={reduce ? undefined : "show"}
        animate={reduce ? "show" : undefined}
        viewport={{ once: true, amount: 0.3 }}
      >
        {children}
      </motion.div>
    </BrowserFrame>
  );
}

/** Standard widget header: title (left) + optional status (right). */
export function DashHead({
  title,
  right,
}: {
  title: string;
  right?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between mb-5">
      <span className="font-mono text-[11px] uppercase tracking-[0.10em] text-[#8A96A8]">{title}</span>
      {right}
    </div>
  );
}
