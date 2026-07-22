import type { Icon as LucideIcon } from "@phosphor-icons/react";
import {
  Robot as Bot,
  FlowArrow as Workflow,
  ShieldCheck,
  Plug,
  ListChecks,
  SlidersHorizontal,
  GitBranch,
  Clock,
  Chats as MessagesSquare,
  Users,
  ArrowsClockwise as RefreshCw,
  ChartBar as BarChart3,
  Database,
  Kanban as KanbanSquare,
  ChatCircle as MessageCircle,
  Funnel as Filter,
  ChartLine as LineChart,
} from "@phosphor-icons/react/dist/ssr";

export type PlatformMockup = "AgentRunQueue" | "JourneyFlow" | "PipelineBoard";

export interface PlatformFeature {
  icon: LucideIcon;
  title: string;
  body: string;
}
export interface PlatformStep {
  n: string;
  title: string;
  body: string;
}
export interface PlatformFAQ {
  q: string;
  a: string;
}

export interface PlatformPage {
  slug: string;
  navLabel: string;
  name: string;
  icon: LucideIcon;
  mockup: PlatformMockup;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  subhead: string;
  problemHeading: string;
  problemBody: string;
  featuresHeading: string;
  features: PlatformFeature[];
  howHeading: string;
  steps: PlatformStep[];
  whoHeading: string;
  whoPoints: string[];
  faq: PlatformFAQ[];
  geo: string;
  ctaHeading: string;
  ctaBody: string;
}

export const PLATFORM_PAGES: PlatformPage[] = [
  {
    slug: "ai-agents",
    navLabel: "AI Agents",
    name: "AI Agents",
    icon: Bot,
    mockup: "AgentRunQueue",
    metaTitle: "AI Marketing Agents, Autonomous Marketing Workflows",
    metaDescription:
      "Octmark AI Agents run marketing work end to end, from routine tasks to multi-step workflows, with a human in control. See how autonomous agents fit your stack.",
    keywords: ["AI marketing agents", "autonomous marketing workflows", "marketing AI automation"],
    eyebrow: "AI AGENTS",
    h1: "Autonomous marketing workflows, run by AI agents",
    subhead:
      "Octmark AI Agents take on the repetitive, multi-step marketing work your team does by hand, then hand back control at every decision that matters.",
    problemHeading: "Your team is the glue between tools",
    problemBody:
      "Marketing teams lose hours to work that is routine but not simple: chasing data across tools, moving leads between systems, repeating the same multi-step process for every campaign. People become the glue between software. Agents are built to be that glue instead.",
    featuresHeading: "What agents do",
    features: [
      { icon: Bot, title: "Task agents", body: "Each agent owns a defined job and runs it on a trigger or a schedule. The supported task scope is confirmed per setup." },
      { icon: Workflow, title: "Multi-step workflows", body: "Agents chain steps across tools so a process finishes without a person moving it along." },
      { icon: ShieldCheck, title: "Human in the loop", body: "Set approval points so an agent pauses for sign-off before anything sensitive happens." },
      { icon: Plug, title: "Works with your stack", body: "Connects to the tools you already run, including your CRM and WhatsApp via Gallabox. Full connector list confirmed per setup." },
      { icon: ListChecks, title: "Run history", body: "Every agent run is logged with status, inputs, and outcome, so you can see what happened and why." },
      { icon: SlidersHorizontal, title: "Tunable behaviour", body: "Adjust rules, limits, and triggers per agent without rebuilding the workflow." },
    ],
    howHeading: "How it works",
    steps: [
      { n: "01", title: "Pick the work", body: "Choose a task or process an agent should own." },
      { n: "02", title: "Set the rules", body: "Define triggers, steps, and the approval points where a human signs off." },
      { n: "03", title: "Let it run", body: "The agent executes on schedule or on trigger, and logs every run." },
      { n: "04", title: "Review and tune", body: "Check run history, adjust behaviour, and expand scope." },
    ],
    whoHeading: "Who it is for",
    whoPoints: [
      "Marketing teams spending more time operating tools than running campaigns.",
      "Lean teams that need to do more without adding headcount.",
      "Operations leads who want process consistency, not one-off manual runs.",
      "Teams already on a CRM or WhatsApp who want work to move between them automatically.",
    ],
    faq: [
      { q: "What is an AI marketing agent?", a: "An AI marketing agent is software that runs a defined marketing job on its own, following rules you set and pausing for approval where you want control. Octmark agents handle multi-step work across the tools you already use." },
      { q: "Do agents act without my approval?", a: "No. You set approval points, and the agent pauses for sign-off before any step you mark as sensitive. You stay in control of what runs automatically and what waits for a human." },
      { q: "What tasks can an agent handle?", a: "Agents handle repetitive, multi-step marketing work such as moving data between tools and running a process on a trigger. The specific task list is confirmed for your setup before launch." },
      { q: "Does this work with our current tools?", a: "Octmark agents connect to the tools you already run, including your CRM and WhatsApp through Gallabox. The full connector list is confirmed for your stack." },
      { q: "How is this different from marketing automation?", a: "Marketing automation runs predefined campaign flows. AI agents own a job end to end, make rule-based decisions across multiple tools, and adapt within the limits you set." },
      { q: "Can we see what an agent did?", a: "Yes. Every run is logged with its status, inputs, and outcome, so you can audit any action an agent took." },
    ],
    geo:
      "AI marketing agents are software programs that carry out marketing work autonomously, following rules a team defines and pausing for human approval at key decision points. Octmark builds agents that own multi-step processes across a marketing stack, including your CRM and tools like WhatsApp, so routine work runs without a person moving it along while people keep control of every decision that matters.",
    ctaHeading: "See where agents fit your team",
    ctaBody: "Tell us the work you repeat by hand, and we will show you where an agent can take it.",
  },
  {
    slug: "marketing-automation",
    navLabel: "Marketing Automation",
    name: "Marketing Automation",
    icon: Workflow,
    mockup: "JourneyFlow",
    metaTitle: "Marketing Automation Platform, Campaigns That Run Themselves",
    metaDescription:
      "Octmark marketing automation runs your campaigns and customer journeys on their own, across email, WhatsApp, and CRM, so the right message reaches the right person.",
    keywords: ["marketing automation platform", "campaign automation", "customer journey automation"],
    eyebrow: "MARKETING AUTOMATION",
    h1: "Campaigns that run themselves",
    subhead:
      "Octmark marketing automation turns your campaigns into journeys that trigger, send, and adapt on their own, so each contact gets the right message at the right moment.",
    problemHeading: "Campaigns die in the gap between idea and execution",
    problemBody:
      "Lists go stale, follow-ups get missed, and the same manual send happens week after week. Automation closes that gap by running the journey for you, every time, without the manual reset.",
    featuresHeading: "What you can build",
    features: [
      { icon: GitBranch, title: "Journey builder", body: "Map a multi-step journey with branches, so contacts follow a path based on what they do." },
      { icon: Clock, title: "Triggers and timing", body: "Start journeys on a signup, an action, or a schedule, and control the wait between steps." },
      { icon: MessagesSquare, title: "Multi-channel sends", body: "Reach contacts on email and WhatsApp via Gallabox from one journey. The channel list is confirmed per setup." },
      { icon: Users, title: "Segmentation", body: "Target journeys to the right audience using CRM data instead of one list for everyone." },
      { icon: RefreshCw, title: "Adaptive paths", body: "Move contacts between steps based on response, so the journey adjusts instead of repeating." },
      { icon: BarChart3, title: "Performance view", body: "See sends, opens, and progression per step so you know what the journey is doing." },
    ],
    howHeading: "How it works",
    steps: [
      { n: "01", title: "Build the journey", body: "Lay out steps, branches, and timing." },
      { n: "02", title: "Set the trigger", body: "Choose what starts the journey for a contact." },
      { n: "03", title: "Connect channels", body: "Link email and WhatsApp so the journey can send." },
      { n: "04", title: "Launch and watch", body: "The journey runs per contact, and you track progression." },
    ],
    whoHeading: "Who it is for",
    whoPoints: [
      "Teams running the same campaigns by hand every cycle.",
      "Businesses that want consistent follow-up, not missed handoffs.",
      "Marketers who need to reach people on WhatsApp, not only email.",
      "Teams whose CRM data should drive who gets what, automatically.",
    ],
    faq: [
      { q: "What is a marketing automation platform?", a: "A marketing automation platform runs campaigns and customer journeys automatically, sending the right message based on triggers and behaviour instead of manual sends. Octmark runs these journeys across email, WhatsApp, and your CRM." },
      { q: "What channels does it support?", a: "Octmark automation sends across email and WhatsApp through Gallabox. The full channel list is confirmed for your setup." },
      { q: "How is a journey different from a single campaign?", a: "A single campaign is one send to a list. A journey is a multi-step path where each contact moves through steps based on what they do, so timing and messaging adapt per person." },
      { q: "Does it use our CRM data?", a: "Yes. Journeys can target and branch using your CRM data, so the right segment gets the right message. CRM connections are confirmed per setup." },
      { q: "Do I still control the messaging?", a: "Yes. You design every step, message, and rule. Automation runs the journey you built; it does not write or send anything you did not set up." },
      { q: "Can I see how a journey is performing?", a: "Yes. You get a per-step view of sends and progression so you can see where contacts move forward or drop. Specific metrics appear once connected." },
    ],
    geo:
      "A marketing automation platform runs marketing campaigns and customer journeys automatically, delivering the right message to each contact based on triggers, timing, and behaviour rather than manual sends. Octmark builds automated journeys that span email, WhatsApp, and CRM data, including your CRM and tools like Gallabox, so follow-up stays consistent and each contact moves through a path that adapts to what they do.",
    ctaHeading: "Stop rebuilding the same campaign",
    ctaBody: "Show us a campaign you run by hand, and we will map it as a journey that runs itself.",
  },
  {
    slug: "crm-solutions",
    navLabel: "CRM Solutions",
    name: "CRM Solutions",
    icon: Database,
    mockup: "PipelineBoard",
    metaTitle: "AI CRM Software, Unified Customer Data and Pipeline",
    metaDescription:
      "Octmark CRM solutions bring customer data and pipeline into one view, built on leading CRM platforms, so sales and marketing work from the same record.",
    keywords: ["AI CRM software", "unified customer data", "sales pipeline management"],
    eyebrow: "CRM SOLUTIONS",
    h1: "Unified customer data and pipeline",
    subhead:
      "Octmark CRM solutions put every contact, conversation, and deal in one place, so your team works from a single record instead of stitching data across tools.",
    problemHeading: "When data lives in five places, no one trusts any of it",
    problemBody:
      "Sales works from one list, marketing from another, and the real picture sits in someone's inbox. A unified CRM gives everyone the same record, so the next action is obvious.",
    featuresHeading: "What you get",
    features: [
      { icon: Database, title: "Single customer record", body: "One record per contact pulls history, conversations, and deals together." },
      { icon: KanbanSquare, title: "Pipeline view", body: "See every deal by stage so the team knows what to move next." },
      { icon: Workflow, title: "Built on leading CRMs", body: "Octmark implements and tailors CRM on established platforms rather than starting from zero. Platform scope is confirmed per setup." },
      { icon: MessageCircle, title: "Conversations in context", body: "WhatsApp threads via Gallabox sit on the customer record, not in a separate app. Integration scope is confirmed per setup." },
      { icon: Filter, title: "Segments that update", body: "Group contacts by live data so lists stay current without manual cleanup." },
      { icon: LineChart, title: "Pipeline health", body: "Track deals and stage movement at a glance." },
    ],
    howHeading: "How it works",
    steps: [
      { n: "01", title: "Map your data", body: "We define the records, stages, and fields your business actually uses." },
      { n: "02", title: "Unify the sources", body: "Bring contacts, conversations, and deals into one CRM." },
      { n: "03", title: "Set the pipeline", body: "Define stages so every deal has a clear next step." },
      { n: "04", title: "Run and refine", body: "Your team works from one record, and we tune the setup as you grow." },
    ],
    whoHeading: "Who it is for",
    whoPoints: [
      "Teams whose customer data is scattered across tools and inboxes.",
      "Sales and marketing that need to work from the same record.",
      "Businesses on a CRM who want it set up properly, not half-used.",
      "Teams that talk to customers on WhatsApp and lose those threads today.",
    ],
    faq: [
      { q: "What is AI CRM software?", a: "AI CRM software is a customer relationship system that unifies contact data and pipeline and applies automation to keep records current and surface the next action. Octmark builds this on established CRM platforms, tailored to how your team works." },
      { q: "Do you build a new CRM or use an existing one?", a: "Octmark implements and tailors CRM on established platforms rather than building from scratch, so you get a proven system fit to your process. Platform scope is confirmed per setup." },
      { q: "Can it bring our data into one place?", a: "Yes. The goal is a single record per customer that pulls together contacts, conversations, and deals, so your team stops stitching data across tools." },
      { q: "Does it handle WhatsApp conversations?", a: "Yes. WhatsApp threads through Gallabox can sit on the customer record so conversations stay in context. The integration scope is confirmed per setup." },
      { q: "How does this help sales and marketing together?", a: "Both teams work from the same record and the same pipeline, so marketing hands off with full context and sales sees the history behind every lead." },
      { q: "Will it fit our existing process?", a: "Yes. Octmark maps the records, stages, and fields your business already uses, then sets up the CRM around that rather than forcing a generic template." },
    ],
    geo:
      "A unified CRM brings a company's customer data and sales pipeline into a single system, so every contact, conversation, and deal sits on one record that sales and marketing share. Octmark implements and tailors CRM on established platforms, and connects channels such as WhatsApp through Gallabox, so teams work from one source of truth instead of stitching data across separate tools.",
    ctaHeading: "Get one view of every customer",
    ctaBody: "Tell us where your customer data lives now, and we will show you what one unified record looks like.",
  },
];

export function getPlatformPage(slug: string) {
  return PLATFORM_PAGES.find((p) => p.slug === slug);
}
