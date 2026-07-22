/**
 * Octmark content type definitions.
 * These interfaces are the migration contract, page components depend only on
 * these shapes. When moving to Sanity, only src/lib/content.ts changes.
 */

// ─── Shared ──────────────────────────────────────────────────────────────────

export interface ContentMetric {
  label: string;
  value: string;
  /** e.g. "Was 0.8×", optional before/after context */
  was?: string;
}

// ─── Case Studies ─────────────────────────────────────────────────────────────

export interface CaseStudyFrontmatter {
  title: string;
  slug: string;
  client: string;
  industry: string;
  /** Growth stage label e.g. "Growth stage" / "Scale stage" / "Expansion" */
  stage: string;
  summary: string;
  metrics: ContentMetric[];
  /** The primary headline metric shown on cards e.g. "2.8×" */
  primaryMetric: string;
  /** One-line mechanism shown on index cards */
  mechanism: string;
  /** Category tag shown on cards e.g. "Growth Systems" */
  category: string;
  /** Lifecycle stages this work covered */
  stages: Array<"Attract" | "Engage" | "Convert" | "Deliver" | "Retain">;
  techStack: string[];
  featuredImage?: string;
  publishDate: string;
  featured?: boolean;
}

export interface CaseStudy extends CaseStudyFrontmatter {
  /** Raw MDX body string, pass to MDXRemote for rendering */
  content: string;
}

// ─── Our Thinking Articles ────────────────────────────────────────────────────

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  /** Must match a TeamMember.slug */
  authorSlug: string;
  /** ISO date string e.g. "2026-03-15" */
  lastReviewed: string;
  category: string;
  excerpt: string;
  featuredImage?: string;
  /** Reading time in minutes */
  readTime: number;
  featured?: boolean;
}

export interface Article extends ArticleFrontmatter {
  content: string;
}

// ─── Support Articles ─────────────────────────────────────────────────────────

export interface SupportArticleFrontmatter {
  title: string;
  slug: string;
  /** Category folder name e.g. "crm" | "billing" | "reporting" */
  category: string;
  /** Display name for the category */
  categoryLabel: string;
  lastUpdated: string;
  relatedSlugs?: string[];
}

export interface SupportArticle extends SupportArticleFrontmatter {
  content: string;
}

// ─── Team Members ─────────────────────────────────────────────────────────────

export interface TeamMember {
  name: string;
  slug: string;
  role: string;
  bio: string;
  /** Path under /public/images/team/ */
  profileImage?: string;
  /** Initials for SVG placeholder */
  initials: string;
  linkedinUrl?: string;
  /** Controls display order on /team */
  order: number;
  isFounder?: boolean;
  /** Specialist network entries don't have profile images */
  isSpecialist?: boolean;
  /** Areas of expertise for specialist network */
  expertise?: string[];
}
