"use client";

import { Network, Gauge, ScanSearch, TrendingUp, Scissors } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "./FlowDiagram";

/** Attribution & Analytics: connect → track → attribute → split by return. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / attribution",
  title: "Attribution flow",
  pill: { label: "real-time" },
  steps: [
    { icon: Network, label: "Connect channels" },
    { icon: Gauge, label: "Server-side tracking" },
    { icon: ScanSearch, label: "Score & attribute" },
  ],
  branchLabel: "by return",
  leaves: [
    { icon: TrendingUp, label: "Scale winners", tone: "blue" },
    { icon: Scissors, label: "Cut waste", tone: "coral" },
  ],
};

export default function AttributionRoi() {
  return <FlowDiagram config={config} />;
}
