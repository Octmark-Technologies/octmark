"use client";

import { Sprout, BookOpen, Activity, ShieldCheck, Zap, TrendingUp } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "./FlowDiagram";

/**
 * Cortex maturity journey: Initializing -> Learning -> Stabilizing ->
 * Strong, then it powers decisions while it keeps learning. Frameless so it sits
 * inside the section card. Illustrative only; the real score reflects training
 * volume, accuracy, features, and balance.
 */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / cortex-strength",
  title: "Cortex strength",
  pill: { label: "stabilizing" },
  steps: [
    { icon: Sprout, label: "Initializing" },
    { icon: BookOpen, label: "Learning" },
    { icon: Activity, label: "Stabilizing", meta: "now" },
    { icon: ShieldCheck, label: "Strong" },
  ],
  branchLabel: "when strong",
  leaves: [
    { icon: Zap, label: "Powers decisions", tone: "blue" },
    { icon: TrendingUp, label: "Keeps learning", tone: "coral" },
  ],
};

export default function BrainStrengthMeter() {
  return <FlowDiagram config={config} frameless />;
}
