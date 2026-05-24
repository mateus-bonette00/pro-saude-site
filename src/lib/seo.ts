import type { Metadata } from "next"
import { siteConfig } from "@/data/site"
import { servedRegions } from "@/data/regions"

type BreadcrumbItem = {
  name: string
  href: string
}

type FaqItem = {
  question: string
  answer: string
}

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`
  return `${siteConfig.siteUrl}${cleanPath === "/" ? "" : cleanPath}`
}

export function metadataForPage({
  title,
  description,
  path,
}: {
  title: string
  description: string
  path: string
}): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      siteName: siteConfig.businessName,
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: siteConfig.logoWide,
          width: 555,
          height: 121,
          alt: siteConfig.businessName,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    description: siteConfig.description,
    telephone: siteConfig.phoneSchema ?? siteConfig.phone,
    url: siteConfig.siteUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: siteConfig.country,
    },
    areaServed: servedRegions,
  }
}

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  }
}

export function faqJsonLd(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
