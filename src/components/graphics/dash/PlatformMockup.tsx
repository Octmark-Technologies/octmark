import type { PlatformMockup as MockupKey } from "@/data/platform";
import AgentRunQueue from "./AgentRunQueue";
import JourneyFlow from "./JourneyFlow";
import PipelineBoard from "./PipelineBoard";

/** Renders the dashboard-mockup graphic for a platform product page. */
export default function PlatformMockup({ mockup }: { mockup: MockupKey }) {
  if (mockup === "AgentRunQueue") return <AgentRunQueue />;
  if (mockup === "JourneyFlow") return <JourneyFlow />;
  return <PipelineBoard />;
}
