"use client";

import { Zap, Mail, Hourglass, MessageCircle, Check, RefreshCw } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "./FlowDiagram";

/** Marketing Automation: trigger → welcome → wait → offer → split by response. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / journeys",
  title: "Customer journey",
  pill: { label: "live" },
  steps: [
    { icon: Zap, label: "Trigger: signup" },
    { icon: Mail, label: "Email: welcome", meta: "sent" },
    { icon: Hourglass, label: "Wait 2 days" },
    { icon: MessageCircle, label: "WhatsApp: offer", meta: "sent" },
  ],
  branchLabel: "by response",
  leaves: [
    { icon: Check, label: "Converted", tone: "blue" },
    { icon: RefreshCw, label: "Re-engage", tone: "coral" },
  ],
};

export default function JourneyFlow() {
  return <FlowDiagram config={config} />;
}
