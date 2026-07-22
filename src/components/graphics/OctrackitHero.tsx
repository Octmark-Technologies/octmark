"use client";

import { Radio, Gauge, Network, TrendingUp, Scissors } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "@/components/graphics/dash/FlowDiagram";

/** Octrackit: capture signals → score quality → attribute revenue → split by ROI. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / octrackit",
  title: "Attribution flow",
  pill: { label: "real-time" },
  steps: [
    { icon: Radio, label: "Capture signals" },
    { icon: Gauge, label: "Score quality" },
    { icon: Network, label: "Attribute revenue", meta: "₹" },
  ],
  branchLabel: "by ROI",
  leaves: [
    { icon: TrendingUp, label: "Scale winners", tone: "blue" },
    { icon: Scissors, label: "Cut waste", tone: "coral" },
  ],
};

export default function OctrackitHero() {
  return <FlowDiagram config={config} />;
}
