"use client";

import { ListChecks, SlidersHorizontal, Bot, Check, ShieldCheck } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "./FlowDiagram";

/** AI Agents: pick work → set rules → run → split on completion. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / agents",
  title: "Agent flow",
  pill: { label: "running", tone: "coral" },
  steps: [
    { icon: ListChecks, label: "Pick the task" },
    { icon: SlidersHorizontal, label: "Set rules & triggers" },
    { icon: Bot, label: "Agent runs", meta: "logged" },
  ],
  branchLabel: "on completion",
  leaves: [
    { icon: Check, label: "Done", tone: "blue" },
    { icon: ShieldCheck, label: "Human sign-off", tone: "coral" },
  ],
};

export default function AgentRunQueue() {
  return <FlowDiagram config={config} />;
}
