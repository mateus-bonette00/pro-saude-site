import type { Metadata } from "next"
import { CallToAction } from "@/components/call-to-action"
import { ContactSection } from "@/components/contact-section"
import { LocationBlock } from "@/components/location-block"
import { PageHeader } from "@/components/page-header"
import { SeoJsonLd } from "@/components/seo-json-ld"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { siteConfig } from "@/data/site"
import { breadcrumbJsonLd, metadataForPage } from "@/lib/seo"

export const metadata: Metadata = metadataForPage({
  title: "Contato | Pró-Saúde Itajubá",
  description:
    "Fale com a Pró-Saúde Itajubá pelo WhatsApp, formulário, e-mail ou redes sociais para consultar produtos e disponibilidade.",
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
        text="Entre em contato pelo WhatsApp, formulário, e-mail ou redes sociais para consultar disponibilidade de produtos e tirar dúvidas."
        breadcrumbs={breadcrumbs}
      />

      <section className="section">
        <div className="container">
          <div className="contact-quick">
            <WhatsAppButton
              label="Chamar no WhatsApp"
              message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."
            />
            <p className="contact-quick__note">
              WhatsApp: <strong>{siteConfig.whatsappDisplay}</strong> · E-mail:{" "}
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container location-summary">
          <div className="section-heading section-heading--compact">
            <span>Localização</span>
            <h2>Localização e Horário de Funcionamento</h2>
          </div>
          <LocationBlock />
        </div>
      </section>

      <ContactSection showHeading={false} sectionId="formulario-contato" />

      <CallToAction
        title="Quer consultar disponibilidade?"
        text="Envie uma mensagem e informe o produto que você procura."
        buttonLabel="Consultar disponibilidade"
        message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de produtos."
      />
    </main>
  )
}
