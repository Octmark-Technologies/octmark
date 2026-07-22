// Content models for the platform-led architecture (v4).
// Types only, no content. Real product/solution content is supplied by the
// business and dropped into MDX/CMS matching these shapes (Phase 1).

/** A platform product or capability (e.g. Octrackit, AI Agents, Server-Side Tracking). */
export interface ProductFrontmatter {
  name: string;
  slug: string;
  /** "product" = sellable product (Octrackit, CRM…); "capability" = platform capability */
  kind: "product" | "capability";
  /** One-line value statement shown on cards and nav. */
  tagline: string;
  /** The problem this product solves (buyer's language). */
  problem: string;
  /** Capability bullets. */
  capabilities: string[];
  /** Named integrations (e.g. "Zoho CRM", "Meta", "Google Ads"). */
  integrations?: string[];
  /** Outcome statements / proof points. */
  outcomes?: string[];
  /** Screenshot/image paths under /public/images/platform/. */
  screenshots?: string[];
  featuredImage?: string;
  /** Case study slugs that demonstrate this product. */
  relatedCaseStudySlugs?: string[];
  /** CTA label for the product (defaults to "Book a demo"). */
  demoCtaLabel?: string;
  /** SEO. */
  metaTitle?: string;
  metaDescription?: string;
  order?: number;
  featured?: boolean;
}

export interface Product extends ProductFrontmatter {
  /** Raw MDX body, pass to MDXRemote for rendering. */
  content: string;
}

/** An outcome-led solution that combines platform + expertise (e.g. Lead Generation). */
export interface SolutionFrontmatter {
  name: string;
  slug: string;
  /** "By goal" | "By motion", grouping used in nav/hub. */
  group: "goal" | "motion";
  /** The outcome promise (buyer's language). */
  outcome: string;
  /** How the platform delivers this outcome. */
  platformPart: string;
  /** How Octmark's expertise/services deliver this outcome. */
  expertisePart: string;
  /** Proof points / metrics. */
  proof?: string[];
  relatedProductSlugs?: string[];
  relatedCaseStudySlugs?: string[];
  featuredImage?: string;
  metaTitle?: string;
  metaDescription?: string;
  order?: number;
}

export interface Solution extends SolutionFrontmatter {
  content: string;
}
