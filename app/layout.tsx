import type { Metadata } from "next"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { SeoJsonLd } from "@/components/seo-json-ld"
import { siteConfig } from "@/data/site"
import { localBusinessJsonLd } from "@/lib/seo"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Pró-Saúde Itajubá | Produtos Médicos, Ortopédicos e Hospitalares",
    template: "%s",
  },
  description: siteConfig.description,
  icons: {
    icon: siteConfig.logoIcon,
    apple: siteConfig.logoIcon,
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <SeoJsonLd data={localBusinessJsonLd()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
