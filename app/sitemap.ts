import type { MetadataRoute } from "next"
import { categories } from "@/data/categories"
import { productPages } from "@/data/products"
import { siteConfig } from "@/data/site"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-24")
  const staticRoutes = ["/", "/produtos", "/sobre", "/localizacao", "/contato"]
  const categoryRoutes = categories.map((category) => `/produtos/${category.slug}`)
  const productRoutes = productPages.map((product) => `/produtos/${product.slug}`)

  return [...staticRoutes, ...categoryRoutes, ...productRoutes].map((route) => ({
    url: `${siteConfig.siteUrl}${route === "/" ? "" : route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/produtos" ? 0.9 : 0.7,
  }))
}
