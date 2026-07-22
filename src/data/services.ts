import type { Icon as LucideIcon } from "@phosphor-icons/react";
import {
  Scan as ScanSearch,
  Gauge,
  Target,
  FileText,
  LinkSimple as Link2,
  ChartLine as LineChart,
  Funnel as Filter,
  Megaphone,
  CursorClick as MousePointerClick,
  Repeat,
  ChartBar as BarChart3,
  ShareNetwork as Share2,
  Users,
  CalendarDots as CalendarDays,
  Heart,
  PencilSimple as PenLine,
  Stack as Layers,
  MagnifyingGlass as Search,
  FlowArrow as Workflow,
  Globe,
  ShoppingCart,
} from "@phosphor-icons/react/dist/ssr";

export interface ServiceDeliverable {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ServiceContent {
  slug: string;
  navLabel: string;
  name: string;
  icon: LucideIcon;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  subhead: string;
  problemHeading: string;
  problemBody: string[];
  whatWeDoHeading: string;
  whatWeDoIntro: string;
  deliverables: ServiceDeliverable[];
  connectHeading: string;
  connectBody: string;
  proofHeading: string;
  proofBody: string;
  finalCtaHeading: string;
  finalCtaBody: string;
}

export const SERVICES: ServiceContent[] = [
  {
    slug: "seo",
    navLabel: "SEO",
    name: "SEO",
    icon: ScanSearch,
    metaTitle: "SEO That Compounds Into Pipeline",
    metaDescription:
      "Organic search built to bring in buyers, not traffic. Octmark runs SEO against real pipeline attribution, so you see which rankings actually earn revenue.",
    eyebrow: "SEO",
    h1: "Search that brings buyers, not just traffic.",
    subhead:
      "Most SEO reports rising rankings while the pipeline stays flat. We build organic search around the queries your buyers actually use, then prove which ones turn into revenue.",
    problemHeading: "Rankings are not the same as revenue",
    problemBody: [
      "You have probably paid for SEO before and watched a dashboard fill with keywords you never sell against. Traffic went up. Qualified demand did not.",
      "The gap is attribution. When no one can connect a ranking to a closed deal, SEO survives on faith instead of evidence. We close that gap first.",
    ],
    whatWeDoHeading: "What we build",
    whatWeDoIntro:
      "A search presence engineered for intent, technical health, and measurable contribution to pipeline.",
    deliverables: [
      {
        title: "Technical foundation",
        desc: "Site architecture, crawlability, and Core Web Vitals fixed so search engines and buyers both move fast.",
        icon: Gauge,
      },
      {
        title: "Intent-led keyword strategy",
        desc: "We target the queries that sit closest to a buying decision, not the ones that are easiest to rank for.",
        icon: Target,
      },
      {
        title: "Content that ranks and converts",
        desc: "Pages written to answer the question and move the reader toward a decision, not to pad a word count.",
        icon: FileText,
      },
      {
        title: "Authority and links",
        desc: "Earned relevance from sources your buyers and search engines both trust, with no spam shortcuts.",
        icon: Link2,
      },
      {
        title: "Revenue reporting",
        desc: "Every ranking tied back to sessions, pipeline, and closed revenue through Octrackit attribution.",
        icon: LineChart,
      },
    ],
    connectHeading: "SEO inside the growth system",
    connectBody:
      "SEO is the Attract stage of your growth engine, and it does not work in isolation. Search demand flows into the same CRM and attribution layer as every other channel, so you can compare a blog ranking against a paid click on the same revenue scale, then fund whatever earns the most.",
    proofHeading: "Built on evidence",
    proofBody:
      "We have run organic search for growth-stage businesses across 12 sectors, and the standard never changes: rankings have to earn their place in the pipeline. See how that plays out on our results page.",
    finalCtaHeading: "See where your search actually stands",
    finalCtaBody:
      "Get a free growth audit and we will tell you which organic opportunities are worth the investment, and which are not.",
  },
  {
    slug: "paid-ads",
    navLabel: "Paid Ads",
    name: "Paid Advertising",
    icon: Target,
    metaTitle: "Paid Advertising That Buys Pipeline",
    metaDescription:
      "Paid media bought against real pipeline data, not vanity clicks. Octmark runs your ads on live attribution so every rupee is spent where it returns revenue.",
    eyebrow: "PAID ADS",
    h1: "Ad spend that buys pipeline, not clicks.",
    subhead:
      "Most accounts optimise toward the cheapest click. We optimise toward the deals that close, using your real pipeline data to decide where the next rupee goes.",
    problemHeading: "Cheap clicks are not the goal",
    problemBody: [
      "Platforms reward you for the metrics they control: impressions, clicks, cost per lead. None of those pay your salaries. A campaign can hit every platform target and still lose money.",
      "The reason is that most advertisers never feed closed revenue back into the ad account, so the algorithm keeps buying the wrong audience very efficiently.",
    ],
    whatWeDoHeading: "What we run",
    whatWeDoIntro: "Performance media managed against pipeline, not platform vanity metrics.",
    deliverables: [
      {
        title: "Account and funnel audit",
        desc: "We find the wasted spend and the audiences quietly carrying the account before we change a single budget.",
        icon: Filter,
      },
      {
        title: "Channel strategy",
        desc: "The right mix across search, social, and programmatic for how your buyers actually make decisions.",
        icon: Megaphone,
      },
      {
        title: "Creative and landing alignment",
        desc: "Ads and the pages they point to built as one conversion path, not two disconnected jobs.",
        icon: MousePointerClick,
      },
      {
        title: "Pipeline-fed optimisation",
        desc: "Closed revenue pushed back into the platforms so they bid toward customers, not clickers.",
        icon: Repeat,
      },
      {
        title: "Spend accountability",
        desc: "Clear reporting on cost per qualified pipeline and return, not cost per click.",
        icon: BarChart3,
      },
    ],
    connectHeading: "Paid media inside the growth system",
    connectBody:
      "Paid sits across Attract and Engage, and its advantage is speed. Because spend runs on the same attribution layer as the rest of your marketing, we can move budget toward the campaigns producing real pipeline within days, not quarters.",
    proofHeading: "Spend we can defend",
    proofBody:
      "Across growth-stage businesses in 12 sectors, the discipline is the same: if a campaign cannot be tied to pipeline, it does not keep its budget. Our results page shows the kind of outcome that follows.",
    finalCtaHeading: "Find out what your spend is really buying",
    finalCtaBody:
      "Get a free growth audit and we will show you where your paid budget is working and where it is leaking.",
  },
  {
    slug: "social-media",
    navLabel: "Social Media",
    name: "Social Media",
    icon: Share2,
    metaTitle: "Social Media That Builds Demand",
    metaDescription:
      "Social presence built to create demand and trust, not chase follower counts. Octmark connects social to pipeline so you know what attention is worth.",
    eyebrow: "SOCIAL MEDIA",
    h1: "Attention that turns into demand.",
    subhead:
      "Follower counts do not pay invoices. We build a social presence that creates familiarity with the people who will eventually buy, and we track it back to pipeline.",
    problemHeading: "Audience is not the same as demand",
    problemBody: [
      "Plenty of brands have a large, busy social presence and a quiet sales pipeline. Likes and follows feel like progress, which makes them easy to mistake for results.",
      "Social earns its budget when it builds trust with the right audience and feeds the rest of the funnel. That only happens when it is planned around your buyer, not the algorithm of the week.",
    ],
    whatWeDoHeading: "What we manage",
    whatWeDoIntro:
      "A social presence designed for relevance with buyers and measurable contribution to the funnel.",
    deliverables: [
      {
        title: "Audience and positioning",
        desc: "We define who you are talking to and why they should care, before posting anything.",
        icon: Users,
      },
      {
        title: "Content and calendar",
        desc: "A consistent stream of posts written to build authority, not to fill a grid.",
        icon: CalendarDays,
      },
      {
        title: "Community and response",
        desc: "Conversations handled in your voice, turning passive followers into warm contacts.",
        icon: Heart,
      },
      {
        title: "Creative production",
        desc: "Formats built for each platform and tested against what actually earns attention.",
        icon: PenLine,
      },
      {
        title: "Contribution reporting",
        desc: "Social activity connected to site visits and pipeline through the attribution layer.",
        icon: LineChart,
      },
    ],
    connectHeading: "Social inside the growth system",
    connectBody:
      "Social works across Attract and Engage, warming an audience long before they fill in a form. Because it shares the same attribution and CRM layer as your other channels, the familiarity it builds shows up later as cheaper, faster conversions you can actually trace.",
    proofHeading: "Attention with a purpose",
    proofBody:
      "We have built social presence for growth-stage businesses across 12 sectors, always tied to a commercial outcome rather than a vanity number. Our results page shows where that leads.",
    finalCtaHeading: "See if your social is earning its place",
    finalCtaBody:
      "Get a free growth audit and we will tell you whether your social presence is building demand or just noise.",
  },
  {
    slug: "content-marketing",
    navLabel: "Content Marketing",
    name: "Content Marketing",
    icon: PenLine,
    metaTitle: "Content Marketing That Earns Trust",
    metaDescription:
      "Content built to win trust and rank, then convert. Octmark produces content tied to pipeline, so you publish what earns revenue, not what fills a calendar.",
    eyebrow: "CONTENT MARKETING",
    h1: "Content that earns trust and revenue.",
    subhead:
      "Publishing more is not a strategy. We produce content that answers what your buyers are actually weighing, ranks for it, and moves them toward a decision.",
    problemHeading: "More content is not the answer",
    problemBody: [
      "Most content programmes measure output: posts published, words written, calendars filled. Output is not the same as influence, and a busy blog can sit entirely outside the buying decision.",
      "Content earns its keep when it shows up at the moment a buyer has a question and answers it better than anyone else. That takes editorial judgement, not volume.",
    ],
    whatWeDoHeading: "What we produce",
    whatWeDoIntro:
      "Content built around real buyer questions, designed to rank, build authority, and convert.",
    deliverables: [
      {
        title: "Editorial strategy",
        desc: "We map the questions your buyers ask at each stage and decide what is genuinely worth writing.",
        icon: Layers,
      },
      {
        title: "Search-aware writing",
        desc: "Pieces built to rank for real intent and to read like they were written by someone who knows the subject.",
        icon: Search,
      },
      {
        title: "Authority pieces",
        desc: "Positions worth holding, the kind that make a buyer trust you before the first call.",
        icon: FileText,
      },
      {
        title: "Distribution",
        desc: "Content put in front of the right audience across owned, earned, and paid channels.",
        icon: Workflow,
      },
      {
        title: "Performance reporting",
        desc: "Each piece tracked from read to pipeline through Octrackit, so you publish more of what works.",
        icon: LineChart,
      },
    ],
    connectHeading: "Content inside the growth system",
    connectBody:
      "Content runs through Attract and Engage and quietly supports Convert, giving sales something credible to send. Because every piece is measured on the same attribution layer as the rest of your marketing, you can see which articles create pipeline and retire the ones that only create work.",
    proofHeading: "Editorial with evidence",
    proofBody:
      "We produce content for growth-stage businesses across 12 sectors, and we hold every piece to one test: does it earn attention and move someone closer to a decision. See the standard on our results page, or read our own positions in Our Thinking.",
    finalCtaHeading: "See what your content should be doing",
    finalCtaBody:
      "Get a free growth audit and we will show you where content can earn trust and pipeline, and where it cannot.",
  },
  {
    slug: "web-ecommerce",
    navLabel: "Web & E-Commerce",
    name: "Web & E-Commerce",
    icon: Globe,
    metaTitle: "Web & E-Commerce Built to Convert",
    metaDescription:
      "Websites and stores built to convert and be measured. Octmark designs and builds high-performing sites wired into your attribution and CRM from day one.",
    eyebrow: "WEB & E-COMMERCE",
    h1: "Sites built to convert and be measured.",
    subhead:
      "A site that looks good but cannot be measured is a liability. We design and build fast, high-converting websites and stores that are wired into your data from the first line of code.",
    problemHeading: "A pretty site that cannot prove anything",
    problemBody: [
      "Many sites are designed to win an internal approval meeting, not to convert a stranger or report what happened. They load slowly, bury the next step, and leave you guessing about where visitors drop off.",
      "When the build and the measurement are treated as separate jobs, you end up with a site you cannot improve, because you cannot see inside it.",
    ],
    whatWeDoHeading: "What we build",
    whatWeDoIntro:
      "Fast, conversion-focused websites and stores, instrumented for measurement from day one.",
    deliverables: [
      {
        title: "Conversion-first design",
        desc: "Layouts built around the decision you want the visitor to make, with the next step always clear.",
        icon: MousePointerClick,
      },
      {
        title: "Performance engineering",
        desc: "Fast load times and clean code, because speed is both a ranking factor and a conversion factor.",
        icon: Gauge,
      },
      {
        title: "E-commerce builds",
        desc: "Stores designed to move buyers from product to checkout with as little friction as possible.",
        icon: ShoppingCart,
      },
      {
        title: "Measurement baked in",
        desc: "Server-side tracking and attribution wired in from the start, not bolted on later.",
        icon: Workflow,
      },
      {
        title: "Iterate on evidence",
        desc: "Ongoing testing on the pages that matter, guided by what the data actually shows.",
        icon: LineChart,
      },
    ],
    connectHeading: "Your site inside the growth system",
    connectBody:
      "Your website is where Attract becomes Convert, the place every other channel sends its traffic. Building it on Octrackit attribution from day one means each visit, form, and sale is traceable, so the whole growth system can finally see what the site is doing.",
    proofHeading: "Builds that can prove themselves",
    proofBody:
      "We design and build for growth-stage businesses across 12 sectors, always to the same brief: convert well and report honestly. Our results page shows what that produces.",
    finalCtaHeading: "See what your site could be converting",
    finalCtaBody:
      "Get a free growth audit and we will tell you where your site is losing visitors and revenue.",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
