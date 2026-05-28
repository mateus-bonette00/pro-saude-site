import type { Metadata } from "next"
import { CallToAction } from "@/components/call-to-action"
import { CategoryCard } from "@/components/category-card"
import { PageHeader } from "@/components/page-header"
import { ProductCard } from "@/components/product-card"
import { RegionServiceSection } from "@/components/region-service-section"
import { SeoJsonLd } from "@/components/seo-json-ld"
import { categories } from "@/data/categories"
import { productPages } from "@/data/products"
import { breadcrumbJsonLd, metadataForPage } from "@/lib/seo"

export const metadata: Metadata = metadataForPage({
  title: "Produtos Médicos, Ortopédicos e Hospitalares | Pró-Saúde Itajubá",
  description:
    "Conheça as categorias de produtos da Pró-Saúde Itajubá: mobilidade, ortopédicos, cuidados domiciliares, materiais médicos, curativos, aparelhos e mais.",
  path: "/produtos",
})

const productHubSlugs = [
  "cadeira-de-rodas",
  "andador",
  "bengala",
  "muleta",
  "cadeira-de-banho",
  "barra-de-apoio",
  "aparelho-de-pressao",
  "oximetro",
  "estetoscopio",
  "balanca-digital",
  "colchao-hospitalar",
  "colchao-anti-escaras",
  "cama-hospitalar",
  "cinta-lombar",
  "bota-imobilizadora",
  "colar-cervical",
  "meia-de-compressao",
  "joelheira",
  "tornozeleira",
  "munhequeira",
  "tipoia",
  "gaze",
  "atadura",
  "esparadrapo",
  "alcool-70",
  "inalacao-e-oxigenio",
]

export default function ProdutosPage() {
  const products = productHubSlugs
    .map((slug) => productPages.find((product) => product.slug === slug))
    .filter(Boolean)

  return (
    <main>
      <SeoJsonLd
        data={breadcrumbJsonLd([
          { name: "Início", href: "/" },
          { name: "Produtos", href: "/produtos" },
        ])}
      />

      <PageHeader
        eyebrow="Catálogo por categoria"
        title="Produtos da Pró-Saúde Itajubá"
        text="Encontre produtos médicos, ortopédicos, hospitalares, de mobilidade, curativos, aparelhos de saúde, EPIs e itens para cuidados domiciliares. Consulte a disponibilidade pelo WhatsApp."
        breadcrumbs={[
          { name: "Início", href: "/" },
          { name: "Produtos", href: "/produtos" },
        ]}
      />

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span>Categorias</span>
            <h2>Categorias principais</h2>
          </div>
          <div className="category-grid">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.slug}
                category={category}
                priority={index < 3}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <div className="section-heading">
            <span>Produtos estratégicos</span>
            <h2>Produtos mais procurados</h2>
            <p>
              Lista enxuta para facilitar a busca. Para outros produtos, fale com a loja pelo
              WhatsApp.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) =>
              product ? <ProductCard key={product.slug} product={product} /> : null,
            )}
          </div>
        </div>
      </section>

      <RegionServiceSection />

      <CallToAction
        title="Quer confirmar algum produto?"
        text="Fale com a Pró-Saúde Itajubá pelo WhatsApp e consulte a disponibilidade com a loja."
        buttonLabel="Consultar disponibilidade"
        message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de consultar disponibilidade de produtos."
      />
    </main>
  )
}
