"use client";

import { Palette, Code2, Rocket, ShoppingCart, RefreshCw } from "lucide-react";
import FlowDiagram, { type FlowConfig } from "@/components/graphics/dash/FlowDiagram";

/** Web & E-commerce: design → build → launch → split by session. */
const config: FlowConfig = {
  url: "app.octmarktechnologies.com / web-store",
  title: "Build flow",
  pill: { label: "shipped" },
  steps: [
    { icon: Palette, label: "Design" },
    { icon: Code2, label: "Build" },
    { icon: Rocket, label: "Launch" },
  ],
  branchLabel: "by session",
  leaves: [
    { icon: ShoppingCart, label: "Checkout", tone: "blue" },
    { icon: RefreshCw, label: "Recover cart", tone: "coral" },
  ],
};

export default function WebEcommerceHero() {
  return <FlowDiagram config={config} />;
}
