"use client";

import { CalendarDays, Send, Heart, UserPlus, Repeat } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "@/components/graphics/dash/FlowDiagram";

/** Social Media: content plan → publish → engage → split by intent. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / social",
  title: "Social flow",
  pill: { label: "scheduled" },
  steps: [
    { icon: CalendarDays, label: "Content plan" },
    { icon: Send, label: "Publish" },
    { icon: Heart, label: "Engage", meta: "reach" },
  ],
  branchLabel: "by intent",
  leaves: [
    { icon: UserPlus, label: "Leads", tone: "blue" },
    { icon: Repeat, label: "Re-share", tone: "coral" },
  ],
};

export default function SocialMediaHero() {
  return <FlowDiagram config={config} />;
}
