"use client";

import { Radio, BrainCircuit, Send, ShieldX } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "./FlowDiagram";

/** Cortex: a signal enters, the brain scores it, then it forks dispatch/suppress. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / cortex",
  title: "Decision stream",
  pill: { label: "live" },
  steps: [
    { icon: Radio, label: "Signal in" },
    { icon: BrainCircuit, label: "Cortex scores", meta: "conf" },
  ],
  branchLabel: "decision · fail-open",
  leaves: [
    { icon: Send, label: "Dispatch", tone: "blue" },
    { icon: ShieldX, label: "Suppress", tone: "coral" },
  ],
};

export default function CortexDecisionStream() {
  return <FlowDiagram config={config} />;
}
