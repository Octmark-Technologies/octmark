"use client";

import { UserPlus, Filter, FileText, Trophy, Repeat } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "./FlowDiagram";

/** CRM Solutions: new lead → qualified → proposal → split by stage. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / crm",
  title: "Pipeline flow",
  pill: { label: "one record" },
  steps: [
    { icon: UserPlus, label: "New lead" },
    { icon: Filter, label: "Qualified" },
    { icon: FileText, label: "Proposal sent" },
  ],
  branchLabel: "by stage",
  leaves: [
    { icon: Trophy, label: "Won", tone: "blue" },
    { icon: Repeat, label: "Nurture", tone: "coral" },
  ],
};

export default function PipelineBoard() {
  return <FlowDiagram config={config} />;
}
