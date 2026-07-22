"use client";

import { Target, MousePointerClick, Filter, UserCheck, RefreshCw } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "./FlowDiagram";

/** Customer Acquisition: channel mix → conversion tuning → feedback → split by outcome. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / acquisition",
  title: "Acquisition flow",
  pill: { label: "by cost" },
  steps: [
    { icon: Target, label: "Channel mix" },
    { icon: MousePointerClick, label: "Conversion tuning" },
    { icon: Filter, label: "Feed data back" },
  ],
  branchLabel: "by outcome",
  leaves: [
    { icon: UserCheck, label: "New customer", tone: "blue" },
    { icon: RefreshCw, label: "Re-target", tone: "coral" },
  ],
};

export default function AcquisitionChannels() {
  return <FlowDiagram config={config} />;
}
