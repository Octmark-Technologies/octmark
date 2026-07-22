"use client";

import { Search, PenTool, Share2, Check, Mail } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "@/components/graphics/dash/FlowDiagram";

/** Content Marketing: research → create → distribute → split by intent. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / content",
  title: "Content flow",
  pill: { label: "publishing" },
  steps: [
    { icon: Search, label: "Topic research" },
    { icon: PenTool, label: "Create content" },
    { icon: Share2, label: "Distribute" },
  ],
  branchLabel: "by intent",
  leaves: [
    { icon: Check, label: "Convert", tone: "blue" },
    { icon: Mail, label: "Nurture", tone: "coral" },
  ],
};

export default function ContentMarketingHero() {
  return <FlowDiagram config={config} />;
}
