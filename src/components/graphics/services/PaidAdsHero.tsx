"use client";

import { Target, Megaphone, LineChart, TrendingUp, PauseCircle } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "@/components/graphics/dash/FlowDiagram";

/** Paid Ads: audience & bid → launch → optimise → split by ROAS. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / paid-ads",
  title: "Paid ads flow",
  pill: { label: "vs pipeline", tone: "coral" },
  steps: [
    { icon: Target, label: "Audience & bid" },
    { icon: Megaphone, label: "Launch ads" },
    { icon: LineChart, label: "Optimise ROAS" },
  ],
  branchLabel: "by ROAS",
  leaves: [
    { icon: TrendingUp, label: "Scale", tone: "blue" },
    { icon: PauseCircle, label: "Pause", tone: "coral" },
  ],
};

export default function PaidAdsHero() {
  return <FlowDiagram config={config} />;
}
