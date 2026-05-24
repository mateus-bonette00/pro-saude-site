import type { Metadata } from "next"
import { ExternalLink } from "lucide-react"
import { CallToAction } from "@/components/call-to-action"
import { LocationBlock } from "@/components/location-block"
import { PageHeader } from "@/components/page-header"
import { SeoJsonLd } from "@/components/seo-json-ld"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { siteConfig } from "@/data/site"
import { breadcrumbJsonLd, metadataForPage } from "@/lib/seo"

export const metadata: Metadata = metadataForPage({
  title: "Contato | Pró-Saúde Itajubá",
  description:
    "Fale com a Pró-Saúde Itajubá pelo WhatsApp para consultar produtos, disponibilidade, endereço e atendimento da loja.",
  path: "/contato",
})

export default function ContatoPage() {
  const breadcrumbs = [
    { name: "Início", href: "/" },
    { name: "Contato", href: "/contato" },
  ]

  return (
    <main>
      <SeoJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHeader
        eyebrow="Contato"
        title="Fale com a Pró-Saúde Itajubá"
        text="Entre em contato pelo WhatsApp para consultar disponibilidade de produtos, tirar dúvidas e falar com a loja."
        breadcrumbs={breadcrumbs}
      />

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card">
            <span className="eyebrow">WhatsApp</span>
            <h2>Atendimento pelo WhatsApp</h2>
            <p>
              Use o botão abaixo para abrir uma conversa com a mensagem já preenchida.
            </p>
            <WhatsAppButton
              label="Chamar no WhatsApp"
              message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."
            />
            <div className="contact-meta">
              <div className="contact-meta__item">
                <span>Celular / WhatsApp</span>
                <strong>{siteConfig.whatsappDisplay}</strong>
              </div>
              <div className="contact-meta__item">
                <span>Telefone fixo</span>
                <strong>{siteConfig.phone}</strong>
              </div>
              <div className="contact-meta__item">
                <span>E-mail</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div className="contact-meta__item">
                <span>CNPJ</span>
                <strong>{siteConfig.cnpj}</strong>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <span className="eyebrow">Dados</span>
            <h2>Telefone, endereço e horário</h2>
            <LocationBlock />
            <a
              className="text-link"
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir Google Maps <ExternalLink size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <CallToAction
        title="Quer consultar disponibilidade?"
        text="Envie uma mensagem e informe o produto que você procura."
        buttonLabel="Consultar disponibilidade"
        message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de produtos."
      />
    </main>
  )
}
