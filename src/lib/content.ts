/**
 * Octmark content library, filesystem implementation.
 *
 * MIGRATION CONTRACT: This file is the ONLY file that changes when moving to
 * Sanity. All page components call these functions and depend only on the
 * TypeScript interfaces in src/types/content.ts. The function signatures must
 * remain identical after migration (add async/await, swap fs calls for GROQ).
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type {
  CaseStudy,
  CaseStudyFrontmatter,
  Article,
  ArticleFrontmatter,
  SupportArticle,
  SupportArticleFrontmatter,
} from "@/types/content";

export type { TeamMember } from "@/types/content";

// ─── Paths ────────────────────────────────────────────────────────────────────

const CONTENT = path.join(process.cwd(), "src/content");
const RESULTS_DIR = path.join(CONTENT, "results");
const THINKING_DIR = path.join(CONTENT, "thinking");
const SUPPORT_DIR = path.join(CONTENT, "support");

// ─── Helpers ──────────────────────────────────────────────────────────────────

function readMdx<T>(filePath: string): { frontmatter: T; content: string } {
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return { frontmatter: data as T, content: content.trim() };
}

function getMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => path.join(dir, f));
}

// ─── Module-level caches ──────────────────────────────────────────────────────
// Eliminates N+1 file reads when multiple functions call getAllX() in one build worker.

let _casesCache: CaseStudy[] | null = null;
let _articlesCache: Article[] | null = null;
let _supportCache: SupportArticle[] | null = null;

// ─── Case Studies ─────────────────────────────────────────────────────────────

export function getAllCaseStudies(): CaseStudy[] {
  if (_casesCache) return _casesCache;
  _casesCache = getMdxFiles(RESULTS_DIR)
    .map((file) => {
      const { frontmatter, content } = readMdx<CaseStudyFrontmatter>(file);
      return { ...frontmatter, content };
    })
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  return _casesCache;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getAllCaseStudies().find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudy(): CaseStudy | undefined {
  return getAllCaseStudies().find((cs) => cs.featured);
}

export function getAllCaseStudySlugs(): { slug: string }[] {
  return getAllCaseStudies().map((cs) => ({ slug: cs.slug }));
}

// ─── Articles ─────────────────────────────────────────────────────────────────

export function getAllArticles(): Article[] {
  if (_articlesCache) return _articlesCache;
  _articlesCache = getMdxFiles(THINKING_DIR)
    .map((file) => {
      const { frontmatter, content } = readMdx<ArticleFrontmatter>(file);
      return { ...frontmatter, content };
    })
    .sort(
      (a, b) =>
        new Date(b.lastReviewed).getTime() - new Date(a.lastReviewed).getTime()
    );
  return _articlesCache;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article | undefined {
  return getAllArticles().find((a) => a.featured);
}

export function getArticlesByCategory(category: string): Article[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getAllArticleCategories(): string[] {
  return [...new Set(getAllArticles().map((a) => a.category))];
}

export function getAllArticleSlugs(): { slug: string }[] {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

// ─── Support ──────────────────────────────────────────────────────────────────

function getSupportFiles(): string[] {
  if (!fs.existsSync(SUPPORT_DIR)) return [];
  const files: string[] = [];
  fs.readdirSync(SUPPORT_DIR).forEach((cat) => {
    const catDir = path.join(SUPPORT_DIR, cat);
    if (fs.statSync(catDir).isDirectory()) {
      fs.readdirSync(catDir)
        .filter((f) => f.endsWith(".mdx"))
        .forEach((f) => files.push(path.join(catDir, f)));
    }
  });
  return files;
}

export function getAllSupportArticles(): SupportArticle[] {
  if (_supportCache) return _supportCache;
  _supportCache = getSupportFiles().map((file) => {
    const { frontmatter, content } = readMdx<SupportArticleFrontmatter>(file);
    return { ...frontmatter, content };
  });
  return _supportCache;
}

export function getSupportArticleBySlug(slug: string): SupportArticle | undefined {
  return getAllSupportArticles().find((a) => a.slug === slug);
}

export function getSupportArticlesByCategory(category: string): SupportArticle[] {
  return getAllSupportArticles().filter((a) => a.category === category);
}

export function getAllSupportCategories(): { slug: string; label: string }[] {
  const articles = getAllSupportArticles();
  const map = new Map<string, string>();
  articles.forEach((a) => map.set(a.category, a.categoryLabel));
  return Array.from(map.entries()).map(([slug, label]) => ({ slug, label }));
}

export function getAllSupportSlugs(): { slug: string }[] {
  return getAllSupportArticles().map((a) => ({ slug: a.slug }));
}
