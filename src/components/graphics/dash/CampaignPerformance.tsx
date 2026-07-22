"use client";

import { Target, Megaphone, LineChart, TrendingUp, PauseCircle } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "./FlowDiagram";

/** Programmatic Advertising: audience & bid → deliver → measure → split by ROAS. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / programmatic",
  title: "Campaign flow",
  pill: { label: "vs pipeline" },
  steps: [
    { icon: Target, label: "Audience & bid" },
    { icon: Megaphone, label: "Deliver creative" },
    { icon: LineChart, label: "Measure ROI" },
  ],
  branchLabel: "by ROAS",
  leaves: [
    { icon: TrendingUp, label: "Scale", tone: "blue" },
    { icon: PauseCircle, label: "Pause low ROAS", tone: "coral" },
  ],
};

export default function CampaignPerformance() {
  return <FlowDiagram config={config} />;
}
