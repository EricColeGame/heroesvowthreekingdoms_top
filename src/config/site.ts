export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    community?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Heroes Vow Three Kingdoms Wiki",
  shortName: "Heroes Vow Three Kingdoms",
  logoText: "H",
  tagline: "Complete Guides, Characters, Strategy & Tier Lists",
  description: "Your ultimate guide to Heroes' Vow: Three Kingdoms! Explore character guides, faction strategies, turn-based combat systems, achievements, and progression tips for the Three Kingdoms sandbox RPG.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://heroesvowthreekingdoms.top",
  supportEmail: "support@heroesvowthreekingdoms.top",
  gameUrl: "https://store.steampowered.com/app/3020510/Heroes_Vow_Three_Kingdoms/",
  heroVideoId: "HW8aQaU_y54", // Heroes' Vow: Three Kingdoms gameplay showcase
  social: {
    community: "https://steamcommunity.com/app/3020510",
    youtube: "https://www.youtube.com/results?search_query=Heroes+Vow+Three+Kingdoms",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
