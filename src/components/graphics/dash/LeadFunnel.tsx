"use client";

import { Network, ScanSearch, Workflow, Check, Repeat } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "./FlowDiagram";

/** Lead Generation as a branching journey: capture → score → qualify → split by quality. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / lead-gen",
  title: "Lead flow",
  pill: { label: "live" },
  steps: [
    { icon: Network, label: "Multi-channel capture" },
    { icon: ScanSearch, label: "Quality scoring" },
    { icon: Workflow, label: "Qualified handoff" },
  ],
  branchLabel: "by quality",
  leaves: [
    { icon: Check, label: "Sales-ready", tone: "blue" },
    { icon: Repeat, label: "Nurture", tone: "coral" },
  ],
};

export default function LeadFunnel() {
  return <FlowDiagram config={config} />;
}
