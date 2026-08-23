import type { MetadataRoute } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://www.octmark.com";

const routes = [
  { path: "/", priority: 1 },
  { path: "/products", priority: 0.8 },
  { path: "/octrackit", priority: 0.8 },
  { path: "/octrackit/cortex", priority: 0.7 },
  { path: "/products/ai-agents", priority: 0.7 },
  { path: "/products/marketing-automation", priority: 0.7 },
  { path: "/products/crm-solutions", priority: 0.7 },
  { path: "/solutions", priority: 0.8 },
  { path: "/solutions/lead-generation", priority: 0.7 },
  { path: "/solutions/customer-acquisition", priority: 0.7 },
  { path: "/solutions/customer-retention", priority: 0.7 },
  { path: "/solutions/attribution-analytics", priority: 0.7 },
  { path: "/solutions/programmatic-advertising", priority: 0.7 },
  { path: "/services", priority: 0.8 },
  { path: "/services/seo", priority: 0.7 },
  { path: "/services/paid-ads", priority: 0.7 },
  { path: "/services/social-media", priority: 0.7 },
  { path: "/services/content-marketing", priority: 0.7 },
  { path: "/services/web-ecommerce", priority: 0.7 },
  { path: "/industries", priority: 0.7 },
  { path: "/insights", priority: 0.6 },
  { path: "/results", priority: 0.7 },
  { path: "/results/b2b-saas-pipeline-growth", priority: 0.6 },
  { path: "/results/ecommerce-cpa-reduction", priority: 0.6 },
  { path: "/results/professional-services-revenue", priority: 0.6 },
  { path: "/our-thinking", priority: 0.6 },
  { path: "/company", priority: 0.6 },
  { path: "/how-we-work", priority: 0.6 },
  { path: "/team", priority: 0.5 },
  { path: "/start", priority: 0.7 },
  { path: "/demo", priority: 0.6 },
  { path: "/support", priority: 0.4 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
