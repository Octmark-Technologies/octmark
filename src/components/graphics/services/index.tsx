import type { ComponentType } from "react";
import SeoHero from "./SeoHero";
import PaidAdsHero from "./PaidAdsHero";
import SocialMediaHero from "./SocialMediaHero";
import ContentMarketingHero from "./ContentMarketingHero";
import WebEcommerceHero from "./WebEcommerceHero";

/**
 * Maps a service slug to its bespoke hero diagram. Returns null for any slug
 * without a graphic yet, so the template can fall back gracefully.
 */
const HEROES: Record<string, ComponentType> = {
  seo: SeoHero,
  "paid-ads": PaidAdsHero,
  "social-media": SocialMediaHero,
  "content-marketing": ContentMarketingHero,
  "web-ecommerce": WebEcommerceHero,
};

export function ServiceHero({ slug }: { slug: string }) {
  const Hero = HEROES[slug];
  return Hero ? <Hero /> : null;
}

export function hasServiceHero(slug: string) {
  return slug in HEROES;
}
