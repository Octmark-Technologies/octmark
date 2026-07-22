"use client";

import { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3 | 4;
  as?: "div" | "section" | "article" | "li";
}

const DELAY_CLASS = {
  0: "",
  1: "[--reveal-delay:120ms]",
  2: "[--reveal-delay:240ms]",
  3: "[--reveal-delay:360ms]",
  4: "[--reveal-delay:480ms]",
} as const;

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
}: ScrollRevealProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          obs.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal
      data-delay={delay || undefined}
      className={`${DELAY_CLASS[delay]} ${className}`}
    >
      {children}
    </Tag>
  );
}
