"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const containerVariants = (stagger: number, delayChildren: number): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

const itemVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
});

interface StaggerProps {
  children: ReactNode;
  className?: string;
  /** Delay between each child, seconds. */
  stagger?: number;
  /** Delay before the first child, seconds. */
  delay?: number;
  amount?: number;
  once?: boolean;
}

/** Container that reveals its <StaggerItem> children one after another on scroll. */
export function Stagger({
  children,
  className,
  stagger = 0.12,
  delay = 0,
  amount = 0.2,
  once = true,
}: StaggerProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={containerVariants(stagger, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  y?: number;
}

/** A single child of <Stagger>. Inherits the cascade timing from its parent. */
export function StaggerItem({ children, className, y = 22 }: StaggerItemProps) {
  const reduce = useReducedMotion();

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div className={className} variants={itemVariants(y)}>
      {children}
    </motion.div>
  );
}
