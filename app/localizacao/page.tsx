import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"
import { CallToAction } from "@/components/call-to-action"
import { LocationBlock } from "@/components/location-block"
import { PageHeader } from "@/components/page-header"
import { RegionServiceSection } from "@/components/region-service-section"
import { SeoJsonLd } from "@/components/seo-json-ld"
import { siteConfig } from "@/data/site"
import { breadcrumbJsonLd, metadataForPage } from "@/lib/seo"

export const metadata: Metadata = metadataForPage({
  title: "Localização da Pró-Saúde Itajubá | Itajubá-MG",
  description:
    "Veja a localização da Pró-Saúde Itajubá e entre em contato pelo WhatsApp para consultar produtos médicos, ortopédicos e de saúde.",
  path: "/localizacao",
})

export default function LocalizacaoPage() {
  const breadcrumbs = [
    { name: "Início", href: "/" },
    { name: "Localização", href: "/localizacao" },
  ]

  return (
    <main>
      <SeoJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHeader
        eyebrow="Como chegar"
        title="Localização da Pró-Saúde Itajubá"
        text="Visite a Pró-Saúde Itajubá para consultar produtos médicos, ortopédicos, hospitalares, de mobilidade, cuidados domiciliares e materiais de saúde em geral."
        breadcrumbs={breadcrumbs}
      />

      <section className="section">
        <div className="container location-page-grid">
          <div>
            <h2>Dados da loja</h2>
            <p>
              Antes de se deslocar, você também pode falar pelo WhatsApp para consultar
              disponibilidade de produtos.
            </p>
            <LocationBlock />
            <a
              className="button button--ghost"
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir no Google Maps <ExternalLink size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="map-placeholder">
            <span>Mapa</span>
            <strong>{siteConfig.address}</strong>
            <p>Localização da loja em Itajubá-MG.</p>
          </div>
        </div>
      </section>

      <RegionServiceSection />

      <CallToAction
        title="Vai até a loja?"
        text="Fale pelo WhatsApp antes para confirmar modelos e disponibilidade."
        buttonLabel="Consultar pelo WhatsApp"
        message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade antes de ir até a loja."
      />
    </main>
  )
}
