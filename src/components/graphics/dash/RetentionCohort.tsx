"use client";

import { Repeat, Bell, Share2, HeartHandshake } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "./FlowDiagram";

/** Customer Retention: lifecycle journeys → health signals → split by account health. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / retention",
  title: "Retention flow",
  pill: { label: "holding" },
  steps: [
    { icon: Repeat, label: "Lifecycle journeys" },
    { icon: Bell, label: "Health signals", meta: "scored" },
  ],
  branchLabel: "by health",
  leaves: [
    { icon: Share2, label: "Expand & refer", tone: "blue" },
    { icon: HeartHandshake, label: "Winback", tone: "coral" },
  ],
};

export default function RetentionCohort() {
  return <FlowDiagram config={config} />;
}
