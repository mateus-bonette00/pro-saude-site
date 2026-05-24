import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react"
import { CallToAction } from "@/components/call-to-action"
import { CategoryCard } from "@/components/category-card"
import { LocationBlock } from "@/components/location-block"
import { ProductCard } from "@/components/product-card"
import { RegionServiceSection } from "@/components/region-service-section"
import { SeoJsonLd } from "@/components/seo-json-ld"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { categories } from "@/data/categories"
import { productPages } from "@/data/products"
import { siteConfig } from "@/data/site"
import { metadataForPage, breadcrumbJsonLd } from "@/lib/seo"

export const metadata: Metadata = metadataForPage({
  title: "Pró-Saúde Itajubá | Produtos Médicos, Ortopédicos e Hospitalares",
  description:
    "Loja física em Itajubá-MG com produtos médicos, ortopédicos, hospitalares, mobilidade, cuidados domiciliares, curativos e materiais de saúde.",
  path: "/",
})

const homeProductSlugs = [
  "cadeira-de-rodas",
  "andador",
  "bengala",
  "muleta",
  "cadeira-de-banho",
  "barra-de-apoio",
  "aparelho-de-pressao",
  "oximetro",
  "colchao-hospitalar",
  "colchao-anti-escaras",
  "cinta-lombar",
  "bota-imobilizadora",
  "meia-de-compressao",
  "gaze",
  "atadura",
  "esparadrapo",
]

export default function Home() {
  const featuredCategories = categories.filter((category) => category.featuredOnHome)
  const featuredProducts = homeProductSlugs
    .map((slug) => productPages.find((product) => product.slug === slug))
    .filter(Boolean)

  return (
    <main>
      <SeoJsonLd data={breadcrumbJsonLd([{ name: "Início", href: "/" }])} />

      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <span className="eyebrow">Pró-Saúde Itajubá</span>
            <h1>Produtos médicos, ortopédicos e hospitalares em Itajubá</h1>
            <p>
              A Pró-Saúde Itajubá oferece produtos para saúde, mobilidade, cuidados
              domiciliares, curativos, aparelhos, materiais médicos e atendimento para
              clientes, cuidadores, clínicas e profissionais da região.
            </p>
            <div className="hero__actions">
              <WhatsAppButton
                label="Consultar pelo WhatsApp"
                message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."
              />
              <Link className="button button--ghost" href="/produtos">
                Ver produtos <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <ul className="hero__checks">
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                Loja física em Itajubá-MG
              </li>
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                Catálogo enxuto por categoria
              </li>
              <li>
                <CheckCircle2 size={17} aria-hidden="true" />
                Consulta rápida pelo WhatsApp
              </li>
            </ul>
          </div>

          <div className="hero__media" aria-label="Logo da Pró-Saúde Itajubá">
            <Image
              src={siteConfig.logoWide}
              alt={siteConfig.businessName}
              width={555}
              height={121}
              className="hero__logo"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span>Categorias principais</span>
            <h2>Categorias principais</h2>
          </div>
          <div className="category-grid">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <span>Produtos mais procurados</span>
            <h2>Produtos mais procurados</h2>
            <p>
              Consulte a disponibilidade dos produtos pelo WhatsApp ou visite a Pró-Saúde
              Itajubá.
            </p>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) =>
              product ? <ProductCard key={product.slug} product={product} /> : null,
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel">
          <div>
            <span className="eyebrow">Atendimento</span>
            <h2>Atendimento para clientes, famílias e profissionais</h2>
          </div>
          <p>
            A Pró-Saúde Itajubá atende clientes, famílias, cuidadores, idosos, clínicas,
            consultórios e profissionais da saúde que precisam de produtos para saúde,
            mobilidade, curativos, cuidados em casa e uso profissional.
          </p>
        </div>
      </section>

      <RegionServiceSection />

      <CallToAction
        title="Precisa consultar algum produto?"
        text="Fale com a Pró-Saúde Itajubá pelo WhatsApp e confirme a disponibilidade com a loja."
        message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."
      />

      <section className="section">
        <div className="container location-summary">
          <div className="section-heading section-heading--compact">
            <span>Localização</span>
            <h2>Localização resumida</h2>
            <p>
              Visite a loja ou fale antes pelo WhatsApp para consultar modelos e
              disponibilidade.
            </p>
          </div>
          <LocationBlock />
          <Link className="text-link" href="/localizacao">
            Ver página de localização <MapPin size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
