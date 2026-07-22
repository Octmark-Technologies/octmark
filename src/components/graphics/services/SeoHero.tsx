"use client";

import { Search, PenTool, TrendingUp, Target, RefreshCw } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "@/components/graphics/dash/FlowDiagram";

/** SEO: keyword audit → on-page & content → rankings → split from organic. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / seo",
  title: "SEO flow",
  pill: { label: "improving" },
  steps: [
    { icon: Search, label: "Keyword audit" },
    { icon: PenTool, label: "On-page & content" },
    { icon: TrendingUp, label: "Earn rankings", meta: "#1" },
  ],
  branchLabel: "from organic",
  leaves: [
    { icon: Target, label: "Pipeline", tone: "blue" },
    { icon: RefreshCw, label: "Iterate", tone: "coral" },
  ],
};

export default function SeoHero() {
  return <FlowDiagram config={config} />;
}
