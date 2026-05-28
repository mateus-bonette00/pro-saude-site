import type { MetadataRoute } from "next"
import { siteConfig } from "@/data/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-24")
  const staticRoutes = ["/", "/produtos", "/sobre", "/localizacao", "/contato"]

  return staticRoutes.map((route) => ({
    url: `${siteConfig.siteUrl}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/produtos" ? 0.9 : 0.7,
  }))
}
