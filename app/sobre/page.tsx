import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { CallToAction } from "@/components/call-to-action"
import { PageHeader } from "@/components/page-header"
import { RegionServiceSection } from "@/components/region-service-section"
import { SeoJsonLd } from "@/components/seo-json-ld"
import { breadcrumbJsonLd, metadataForPage } from "@/lib/seo"

export const metadata: Metadata = metadataForPage({
  title: "Sobre a Pró-Saúde Itajubá | Loja de Produtos de Saúde",
  description:
    "Conheça a Pró-Saúde Itajubá, loja física de produtos médicos, ortopédicos, hospitalares, cuidados domiciliares e materiais de saúde em Itajubá-MG.",
  path: "/sobre",
})

export default function SobrePage() {
  const breadcrumbs = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
  ]

  return (
    <main>
      <SeoJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <PageHeader
        eyebrow="Quem somos"
        title="Sobre a Pró-Saúde Itajubá"
        text="A Pró-Saúde Itajubá é uma loja física especializada em produtos de saúde, materiais médicos, ortopédicos, hospitalares, produtos de mobilidade, cuidados domiciliares, curativos, EPIs e itens para uso profissional e familiar."
        breadcrumbs={breadcrumbs}
      />

      <section className="section">
        <div className="container story-grid">
          <article>
            <span className="eyebrow">Loja física</span>
            <h2>Quem somos</h2>
            <p>
              A loja atende clientes de Itajubá-MG e região, oferecendo atendimento próximo
              para ajudar na consulta de produtos conforme a disponibilidade.
            </p>
          </article>
          <article>
            <span className="eyebrow">Produtos</span>
            <h2>O que você encontra na loja</h2>
            <p>
              Produtos médicos, ortopédicos, hospitalares, itens de mobilidade, materiais
              para curativos, cuidados em casa, aparelhos de saúde, higiene, EPIs e
              descartáveis.
            </p>
          </article>
          <article>
            <span className="eyebrow">Atendimento</span>
            <h2>Clientes, cuidadores e profissionais</h2>
            <p>
              O atendimento é voltado para famílias, cuidadores, idosos, clínicas,
              consultórios e profissionais que precisam consultar produtos de saúde de forma
              prática.
            </p>
          </article>
        </div>
      </section>

      <RegionServiceSection />

      <section className="section">
        <div className="container quick-links">
          <Link href="/produtos">
            Ver produtos <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/localizacao">
            Ver localização <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <Link href="/contato">
            Falar com a loja <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CallToAction
        title="Quer consultar um produto?"
        text="Fale com a Pró-Saúde Itajubá pelo WhatsApp e confira as opções com atendimento da loja."
        buttonLabel="Falar pelo WhatsApp"
        message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar produtos."
      />
    </main>
  )
}
