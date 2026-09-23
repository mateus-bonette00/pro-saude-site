import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SeoJsonLd } from "@/components/seo-json-ld"
import { siteConfig } from "@/data/site"
import { localBusinessJsonLd, shareImageMetadata } from "@/lib/seo"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-montserrat",
})

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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.businessName,
    images: shareImageMetadata(),
  },
  twitter: {
    card: "summary",
    images: shareImageMetadata(),
  },
}

const buildStamp = process.env.NEXT_PUBLIC_BUILD_STAMP ?? "1"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={montserrat.variable} data-build={buildStamp}>
      <body>
        <SeoJsonLd data={localBusinessJsonLd()} />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton
          variant="floating"
          label="Falar pelo WhatsApp"
          message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."
        />
      </body>
    </html>
  )
}
