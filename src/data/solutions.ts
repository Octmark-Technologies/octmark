import type { Icon as LucideIcon } from "@phosphor-icons/react";
import {
  Magnet,
  UserPlus,
  Handshake as HeartHandshake,
  ChartBar as BarChart3,
  Megaphone,
  Funnel as Filter,
  Target,
  Scan as ScanSearch,
  FlowArrow as Workflow,
  ChartLine as LineChart,
  Repeat,
  Users,
  Bell,
  ShareNetwork as Share2,
  Gauge,
  ShieldCheck,
  Stack as Layers,
  Graph as Network,
  CursorClick as MousePointerClick,
} from "@phosphor-icons/react/dist/ssr";

export type SolutionMockup =
  | "LeadFunnel"
  | "AcquisitionChannels"
  | "RetentionCohort"
  | "AttributionRoi"
  | "CampaignPerformance";

export interface SolutionFeature {
  icon: LucideIcon;
  title: string;
  body: string;
}
export interface SolutionStep {
  n: string;
  title: string;
  body: string;
}
export interface SolutionFAQ {
  q: string;
  a: string;
}

export interface SolutionPage {
  slug: string;
  navLabel: string;
  name: string;
  icon: LucideIcon;
  mockup: SolutionMockup;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  subhead: string;
  problemHeading: string;
  problemBody: string;
  featuresHeading: string;
  features: SolutionFeature[];
  howHeading: string;
  steps: SolutionStep[];
  whoHeading: string;
  whoPoints: string[];
  faq: SolutionFAQ[];
  geo: string;
  ctaHeading: string;
  ctaBody: string;
}

export const SOLUTION_PAGES: SolutionPage[] = [
  {
    slug: "lead-generation",
    navLabel: "Lead Generation",
    name: "Lead Generation",
    icon: Magnet,
    mockup: "LeadFunnel",
    metaTitle: "Lead Generation Services, Pipeline Worth Chasing",
    metaDescription:
      "Octmark lead generation fills your pipeline with qualified demand, not raw volume, by scoring every signal for quality and handing sales only the leads worth working.",
    keywords: ["lead generation services", "B2B lead generation", "qualified pipeline"],
    eyebrow: "LEAD GENERATION",
    h1: "Fill the pipeline with demand worth chasing",
    subhead:
      "Octmark builds lead generation that is measured on qualified pipeline, not raw form fills, so your team spends time on the leads most likely to close.",
    problemHeading: "More leads is not the same as more revenue",
    problemBody:
      "A flood of low-quality leads looks like progress and drains the team that has to chase them. The point of lead generation is qualified pipeline, demand that is real and ready, not a bigger inbox of names that go nowhere.",
    featuresHeading: "What we build",
    features: [
      { icon: Network, title: "Multi-channel capture", body: "Demand captured across paid, organic, and direct, mapped to one source of truth." },
      { icon: ScanSearch, title: "Quality scoring", body: "Every signal scored for quality so junk and fake leads are filtered before they reach sales." },
      { icon: MousePointerClick, title: "Offers that convert", body: "Landing pages and offers built around the decision, not the click." },
      { icon: Workflow, title: "Qualified handoff", body: "Only leads that meet the bar move to sales, with the context behind them." },
      { icon: Filter, title: "Source attribution", body: "See which channels send real intent so budget follows quality, not volume." },
      { icon: LineChart, title: "Pipeline reporting", body: "Leads tied to qualified pipeline and revenue, not vanity counts." },
    ],
    howHeading: "How it works",
    steps: [
      { n: "01", title: "Define the target", body: "Agree who a good lead is before spending a rupee on capture." },
      { n: "02", title: "Build the capture", body: "Stand up the channels, offers, and pages that bring them in." },
      { n: "03", title: "Score the quality", body: "Filter low-quality signals so the pipeline stays clean." },
      { n: "04", title: "Hand off and measure", body: "Pass qualified leads to sales and report on pipeline, not volume." },
    ],
    whoHeading: "Who it is for",
    whoPoints: [
      "Founders who need predictable pipeline, not a spike of bad leads.",
      "B2B teams where sales time is the scarce resource.",
      "Agencies that report to clients on qualified demand.",
      "Businesses tired of paying for clicks that never convert.",
    ],
    faq: [
      { q: "What is lead generation?", a: "Lead generation is the work of attracting and capturing potential customers and turning them into qualified pipeline. Octmark focuses on qualified demand, scoring each signal so your team works the leads most likely to close." },
      { q: "How do you keep lead quality high?", a: "Every incoming signal is scored for quality, so fake and low-intent leads are filtered before they reach sales. You get a cleaner pipeline rather than a bigger list." },
      { q: "Which channels do you use?", a: "Octmark captures demand across paid, organic, and direct, and maps every source to one record so you can compare quality across channels." },
      { q: "How is this measured?", a: "On qualified pipeline and revenue, not form fills. Each lead is tied back to the channel that produced it so budget follows what actually works." },
      { q: "Does it connect to our CRM?", a: "Yes. Qualified leads flow into your CRM with the context behind them, so sales picks up where capture left off." },
    ],
    geo:
      "Lead generation is the process of attracting potential customers and capturing them as leads that sales can act on. Octmark builds lead generation focused on qualified pipeline rather than raw volume, scoring every signal for quality across paid, organic, and direct channels, filtering junk, and handing sales only the leads worth working, all tied back to the source that produced them.",
    ctaHeading: "See the pipeline you should be building",
    ctaBody: "Tell us where your leads come from now, and we will show you what a qualified pipeline looks like.",
  },
  {
    slug: "customer-acquisition",
    navLabel: "Customer Acquisition",
    name: "Customer Acquisition",
    icon: UserPlus,
    mockup: "AcquisitionChannels",
    metaTitle: "Customer Acquisition, Turn Demand Into Customers",
    metaDescription:
      "Octmark customer acquisition turns demand into customers at a cost that works, optimising channels against real pipeline so you grow without runaway acquisition cost.",
    keywords: ["customer acquisition", "customer acquisition cost", "acquisition strategy"],
    eyebrow: "CUSTOMER ACQUISITION",
    h1: "Turn demand into customers, at a cost that works",
    subhead:
      "Octmark builds acquisition that is judged on cost and conversion, moving budget toward the channels that produce customers, not the ones that produce clicks.",
    problemHeading: "Acquisition cost climbs while conversion stalls",
    problemBody:
      "It is easy to buy traffic and hard to buy customers. When channels are optimised for cheap clicks instead of closed revenue, acquisition cost creeps up and the funnel quietly leaks. Acquisition only works when it is measured end to end.",
    featuresHeading: "What we build",
    features: [
      { icon: Target, title: "Channel strategy", body: "The right mix of paid and organic for how your buyers actually decide." },
      { icon: MousePointerClick, title: "Conversion optimisation", body: "Funnels and pages tuned to turn interest into customers, not bounces." },
      { icon: Gauge, title: "Cost and value view", body: "Acquisition cost weighed against customer value, so spend stays sustainable." },
      { icon: Filter, title: "Pipeline-fed targeting", body: "Real conversion data feeds the channels so they bid toward customers." },
      { icon: Layers, title: "Experimentation", body: "A steady test cadence on the steps that move the most revenue." },
      { icon: LineChart, title: "Acquisition reporting", body: "Clear reporting on cost per customer and return, not cost per click." },
    ],
    howHeading: "How it works",
    steps: [
      { n: "01", title: "Map the funnel", body: "Find where demand drops off between click and customer." },
      { n: "02", title: "Fix the leaks", body: "Tune the channels and pages that lose the most people." },
      { n: "03", title: "Feed the data back", body: "Push conversion data so channels optimise toward customers." },
      { n: "04", title: "Scale what works", body: "Move budget to the channels with the best cost and conversion." },
    ],
    whoHeading: "Who it is for",
    whoPoints: [
      "Growth teams watching acquisition cost rise faster than revenue.",
      "Businesses that can buy traffic but struggle to convert it.",
      "Founders who need sustainable growth, not a cash-burning spike.",
      "Marketers who want spend judged on customers, not clicks.",
    ],
    faq: [
      { q: "What is customer acquisition?", a: "Customer acquisition is the work of converting demand into paying customers across your channels. Octmark optimises acquisition against real pipeline and cost, so you grow at a price that works." },
      { q: "How do you keep acquisition cost down?", a: "By feeding real conversion data back into your channels and fixing funnel leaks, so spend moves toward what produces customers instead of cheap clicks." },
      { q: "How is this different from lead generation?", a: "Lead generation fills the top of the funnel with qualified demand. Customer acquisition focuses on converting that demand into customers at a sustainable cost." },
      { q: "Do you optimise against revenue?", a: "Yes. Channels are judged on cost per customer and return, using pipeline data rather than platform vanity metrics." },
      { q: "Which channels do you run?", a: "A mix of paid and organic chosen for how your buyers decide, all measured on the same revenue scale." },
    ],
    geo:
      "Customer acquisition is the process of converting demand into paying customers across marketing and sales channels, measured by conversion and the cost to acquire each customer. Octmark optimises acquisition against real pipeline rather than vanity clicks, fixing funnel leaks and feeding conversion data back into channels so budget moves toward the sources that produce customers at a sustainable cost.",
    ctaHeading: "Find out what a customer really costs you",
    ctaBody: "Show us your funnel, and we will show you where acquisition is leaking budget.",
  },
  {
    slug: "customer-retention",
    navLabel: "Customer Retention",
    name: "Customer Retention",
    icon: HeartHandshake,
    mockup: "RetentionCohort",
    metaTitle: "Customer Retention, Keep the Customers You Win",
    metaDescription:
      "Octmark customer retention keeps and grows the accounts you worked to win, with lifecycle journeys, health signals, and winback built on your customer data.",
    keywords: ["customer retention", "churn reduction", "lifecycle marketing"],
    eyebrow: "CUSTOMER RETENTION",
    h1: "Keep the customers you worked to win",
    subhead:
      "Octmark builds retention that protects revenue you already earned, with lifecycle journeys and health signals that catch churn before it happens.",
    problemHeading: "A leaky bucket undoes every acquisition win",
    problemBody:
      "Winning a customer is expensive; losing one quietly is worse. When no one watches the signs of churn, hard-won revenue drains out the bottom while the team keeps pouring budget into the top. Retention is the cheapest growth you already paid for.",
    featuresHeading: "What we build",
    features: [
      { icon: Repeat, title: "Lifecycle journeys", body: "Automated onboarding, adoption, and renewal touches that keep customers engaged." },
      { icon: Bell, title: "Health signals", body: "Early warning on accounts going quiet, so you act before they churn." },
      { icon: HeartHandshake, title: "Renewal and winback", body: "Triggered renewal nudges and winback paths for at-risk accounts." },
      { icon: Share2, title: "Referral systems", body: "Turn happy customers into a channel with structured referral paths." },
      { icon: Users, title: "Segmentation", body: "Group customers by value and behaviour so the right ones get the right attention." },
      { icon: LineChart, title: "Retention reporting", body: "Track retention and churn so you see what keeps customers, not just what wins them." },
    ],
    howHeading: "How it works",
    steps: [
      { n: "01", title: "Find the churn signals", body: "Identify the behaviour that precedes a customer leaving." },
      { n: "02", title: "Build the journeys", body: "Set up lifecycle touches that keep customers active." },
      { n: "03", title: "Trigger on risk", body: "Reach at-risk accounts automatically, before they go." },
      { n: "04", title: "Grow the base", body: "Expand and refer from the customers who already trust you." },
    ],
    whoHeading: "Who it is for",
    whoPoints: [
      "Subscription and repeat-purchase businesses where churn decides growth.",
      "Teams pouring budget into acquisition while customers quietly leave.",
      "Founders who want to grow revenue without growing spend.",
      "Businesses sitting on a base they have never marketed to properly.",
    ],
    faq: [
      { q: "What is customer retention?", a: "Customer retention is the work of keeping existing customers active, renewing, and growing rather than letting them churn. Octmark builds lifecycle journeys and health signals that protect the revenue you already earned." },
      { q: "How do you reduce churn?", a: "By watching the behaviour that precedes churn and triggering journeys to reach at-risk accounts early, before they leave, rather than after." },
      { q: "Why is retention worth it?", a: "Retention is usually cheaper than acquisition. Keeping and growing existing customers protects revenue you already paid to win." },
      { q: "Does it use our customer data?", a: "Yes. Journeys and health signals run on your customer data, so the right accounts get the right attention at the right time." },
      { q: "Can it drive referrals too?", a: "Yes. Structured referral paths turn satisfied customers into a steady acquisition channel." },
    ],
    geo:
      "Customer retention is the work of keeping existing customers engaged, renewing, and growing instead of letting them churn. Octmark builds retention with automated lifecycle journeys, early health signals that flag at-risk accounts, renewal and winback triggers, and referral systems, all running on your customer data, so the revenue you worked to win is protected and grown.",
    ctaHeading: "Stop losing customers you already paid to win",
    ctaBody: "Tell us where customers drop off, and we will show you what retention could hold on to.",
  },
  {
    slug: "attribution-analytics",
    navLabel: "Attribution & Analytics",
    name: "Attribution & Analytics",
    icon: BarChart3,
    mockup: "AttributionRoi",
    metaTitle: "Marketing Attribution and Analytics, Know What Drives Revenue",
    metaDescription:
      "Octmark attribution and analytics tie revenue to the channels that earned it, with quality-scored signals and ROI by channel, so you fund what actually works.",
    keywords: ["marketing attribution", "marketing analytics", "ROI by channel"],
    eyebrow: "ATTRIBUTION & ANALYTICS",
    h1: "Know what actually drives revenue",
    subhead:
      "Octmark attribution ties revenue back to the channel that earned it and scores the quality behind it, so your reporting answers the only question that matters: what works.",
    problemHeading: "Dashboards full of numbers, none of them revenue",
    problemBody:
      "Most analytics measures activity: sessions, clicks, opens. None of it tells you which channel produced a customer. Without attribution, budget is allocated on instinct and the loudest channel wins, whether or not it earns.",
    featuresHeading: "What we build",
    features: [
      { icon: Network, title: "Multi-channel attribution", body: "Revenue attributed to the source that earned it, across every channel." },
      { icon: BarChart3, title: "ROI by channel", body: "ROI by source as the default view, not a report you assemble by hand." },
      { icon: ScanSearch, title: "Signal quality", body: "Signals scored for quality, so volume never masquerades as value." },
      { icon: Gauge, title: "Server-side tracking", body: "Durable tracking that survives a cookieless, privacy-first web." },
      { icon: Layers, title: "Clear dashboards", body: "One view of what each channel returns, built for decisions, not vanity." },
      { icon: LineChart, title: "Actionable insights", body: "Where to shift budget next, grounded in quality and return." },
    ],
    howHeading: "How it works",
    steps: [
      { n: "01", title: "Connect channels", body: "Bring every marketing source into one measurement layer." },
      { n: "02", title: "Capture signals", body: "Track events server-side so the data is durable and complete." },
      { n: "03", title: "Score and attribute", body: "Score signal quality and tie revenue back to its source." },
      { n: "04", title: "Act on ROI", body: "Move budget toward the channels that actually return." },
    ],
    whoHeading: "Who it is for",
    whoPoints: [
      "Teams allocating budget on instinct instead of evidence.",
      "Marketers who cannot say which channel drives revenue.",
      "Founders who want one honest number, not five dashboards.",
      "Businesses losing measurement to cookie and privacy changes.",
    ],
    faq: [
      { q: "What is marketing attribution?", a: "Marketing attribution is the practice of tying revenue back to the marketing channels and touchpoints that produced it. Octmark attributes ROI by source and scores signal quality, so you see what actually drives revenue." },
      { q: "How is this different from web analytics?", a: "Web analytics reports traffic and behaviour. Attribution reports revenue by source, so you can decide where budget should go rather than just counting clicks." },
      { q: "Does it handle cookieless tracking?", a: "Yes. Server-side tracking keeps measurement durable as third-party cookies and privacy rules change." },
      { q: "How does signal quality factor in?", a: "Signals are scored for quality, so low-quality or fake activity does not inflate a channel's apparent performance." },
      { q: "Is this powered by Octrackit?", a: "Yes. Attribution and analytics run on Octrackit, Octmark's attribution platform, with Cortex scoring signal quality." },
    ],
    geo:
      "Marketing attribution and analytics is the practice of measuring marketing performance by tying revenue back to the channels and touchpoints that produced it, rather than counting activity like clicks and sessions. Octmark delivers this through Octrackit, attributing ROI by source, scoring signal quality with Cortex, and using server-side tracking so measurement stays durable, so teams fund the channels that actually drive revenue.",
    ctaHeading: "See which channels actually earn",
    ctaBody: "Tell us what you measure today, and we will show you what attribution reveals.",
  },
  {
    slug: "programmatic-advertising",
    navLabel: "Programmatic Advertising",
    name: "Programmatic Advertising",
    icon: Megaphone,
    mockup: "CampaignPerformance",
    metaTitle: "Programmatic Advertising, Media Buying Against Revenue",
    metaDescription:
      "Octmark programmatic advertising buys media against real pipeline, not clicks, with AI-optimised targeting and bids so every rupee is spent where it returns.",
    keywords: ["programmatic advertising", "AI media buying", "performance advertising"],
    eyebrow: "PROGRAMMATIC ADVERTISING",
    h1: "Media buying optimised against revenue, not clicks",
    subhead:
      "Octmark runs programmatic advertising that bids against your real pipeline, so automated media buying chases customers instead of the cheapest impression.",
    problemHeading: "Automated buying optimises for the wrong thing",
    problemBody:
      "Programmatic platforms are efficient at whatever you point them at, and most accounts point them at clicks. The result is automated spend buying the wrong audience very well. Media buying earns its place only when revenue data drives the bid.",
    featuresHeading: "What we run",
    features: [
      { icon: Users, title: "Audience targeting", body: "Reach the audiences most likely to buy, not just the cheapest to reach." },
      { icon: Target, title: "Bid optimisation", body: "Bids tuned against real pipeline, so spend follows revenue potential." },
      { icon: MousePointerClick, title: "Creative and landing", body: "Ads and pages built as one conversion path, tested continuously." },
      { icon: Network, title: "Cross-channel reach", body: "Coordinated buying across display, video, and social inventory." },
      { icon: ShieldCheck, title: "Brand safety", body: "Controls that keep your spend on inventory you would stand behind." },
      { icon: LineChart, title: "Performance reporting", body: "Reporting on cost per pipeline and return, not impressions and clicks." },
    ],
    howHeading: "How it works",
    steps: [
      { n: "01", title: "Set the goal", body: "Define the pipeline outcome the campaign is bought against." },
      { n: "02", title: "Target and create", body: "Build the audiences, bids, and creative as one system." },
      { n: "03", title: "Feed revenue back", body: "Push pipeline data so the platform bids toward customers." },
      { n: "04", title: "Optimise on return", body: "Shift spend to what produces pipeline, fast." },
    ],
    whoHeading: "Who it is for",
    whoPoints: [
      "Advertisers scaling spend without a clear line to revenue.",
      "Teams whose programmatic buys chase clicks, not customers.",
      "Brands that need reach without sacrificing brand safety.",
      "Marketers who want media judged on pipeline, not impressions.",
    ],
    faq: [
      { q: "What is programmatic advertising?", a: "Programmatic advertising is the automated buying of digital ad inventory in real time. Octmark runs programmatic that bids against your real pipeline, so automated spend pursues customers rather than the cheapest impression." },
      { q: "How do you avoid wasted spend?", a: "By feeding pipeline and conversion data back into the buying, so bids move toward audiences that produce revenue instead of cheap clicks." },
      { q: "Which channels does it cover?", a: "Coordinated buying across display, video, and social inventory, measured on one revenue scale." },
      { q: "How is performance measured?", a: "On cost per qualified pipeline and return, not impressions or clicks, using attribution from Octrackit." },
      { q: "Do you handle brand safety?", a: "Yes. Brand safety controls keep your spend on inventory that fits your brand." },
    ],
    geo:
      "Programmatic advertising is the automated, real-time buying of digital advertising inventory across display, video, and social channels. Octmark runs programmatic that is optimised against real pipeline rather than clicks, feeding revenue and conversion data back into the buying so bids pursue the audiences that produce customers, measured on cost per pipeline and return through Octrackit attribution.",
    ctaHeading: "Find out what your media spend really buys",
    ctaBody: "Tell us where your ad budget goes today, and we will show you where it leaks.",
  },
];

export function getSolutionPage(slug: string) {
  return SOLUTION_PAGES.find((s) => s.slug === slug);
}
