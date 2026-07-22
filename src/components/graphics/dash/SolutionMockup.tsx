import type { SolutionMockup as MockupKey } from "@/data/solutions";
import LeadFunnel from "./LeadFunnel";
import AcquisitionChannels from "./AcquisitionChannels";
import RetentionCohort from "./RetentionCohort";
import AttributionRoi from "./AttributionRoi";
import CampaignPerformance from "./CampaignPerformance";

/** Renders the dashboard-mockup graphic for a solution page. */
export default function SolutionMockup({ mockup }: { mockup: MockupKey }) {
  if (mockup === "LeadFunnel") return <LeadFunnel />;
  if (mockup === "AcquisitionChannels") return <AcquisitionChannels />;
  if (mockup === "RetentionCohort") return <RetentionCohort />;
  if (mockup === "AttributionRoi") return <AttributionRoi />;
  return <CampaignPerformance />;
}
