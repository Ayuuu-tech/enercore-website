import type { MetadataRoute } from "next";
import { projects } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.enercore.co";
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl,              lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${siteUrl}/services`,lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/projects`,lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${siteUrl}/about`,   lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url:             `${siteUrl}/projects/${p.slug}`,
    lastModified:    now,
    changeFrequency: "monthly",
    priority:        0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
