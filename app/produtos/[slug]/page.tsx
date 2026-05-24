import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { CallToAction } from "@/components/call-to-action"
import { FaqSection } from "@/components/faq-section"
import { PageHeader } from "@/components/page-header"
import { RegionServiceSection } from "@/components/region-service-section"
import { RelatedProducts } from "@/components/related-products"
import { SeoJsonLd } from "@/components/seo-json-ld"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { categories, getCategoryBySlug } from "@/data/categories"
import { getProductBySlug, productPages } from "@/data/products"
import { breadcrumbJsonLd, faqJsonLd, metadataForPage } from "@/lib/seo"

type PageProps = {
  params: Promise<{ slug: string }>
}

export const dynamicParams = false

export function generateStaticParams() {
  return [
    ...categories.map((category) => ({ slug: category.slug })),
    ...productPages.map((product) => ({ slug: product.slug })),
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const category = getCategoryBySlug(slug)
  const product = getProductBySlug(slug)
  const entity = category ?? product

  if (!entity) {
    return metadataForPage({
      title: "Página não encontrada | Pró-Saúde Itajubá",
      description: "Página não encontrada no site da Pró-Saúde Itajubá.",
      path: `/produtos/${slug}`,
    })
  }

  return metadataForPage({
    title: entity.title,
    description: entity.description,
    path: `/produtos/${slug}`,
  })
}

export default async function ProdutoOuCategoriaPage({ params }: PageProps) {
  const { slug } = await params
  const category = getCategoryBySlug(slug)

  if (category) {
    const breadcrumbs = [
      { name: "Início", href: "/" },
      { name: "Produtos", href: "/produtos" },
      { name: category.name, href: `/produtos/${category.slug}` },
    ]

    return (
      <main>
        <SeoJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
        <PageHeader
          eyebrow="Categoria"
          title={category.h1}
          text={category.intro}
          breadcrumbs={breadcrumbs}
        />

        <section className="section">
          <div className="container content-panel">
            <div>
              <span className="eyebrow">Produtos relacionados</span>
              <h2>Produtos relacionados</h2>
              <p>
                Veja os principais itens desta categoria. Alguns links levam para páginas
                detalhadas e outros indicam produtos que podem ser consultados com a loja.
              </p>
            </div>
            <ul className="related-list">
              {category.relatedItems.map((item) => (
                <li key={item.name}>
                  {item.slug ? (
                    <Link href={`/produtos/${item.slug}`}>
                      {item.name}
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>
                  ) : (
                    <span>{item.name}</span>
                  )}
                </li>
              ))}
            </ul>
            <WhatsAppButton
              label={
                category.slug === "mobilidade-e-acessibilidade"
                  ? "Consultar produtos de mobilidade pelo WhatsApp"
                  : `Consultar ${category.name.toLocaleLowerCase("pt-BR")} pelo WhatsApp`
              }
              message={category.whatsappMessage}
            />
          </div>
        </section>

        <RegionServiceSection />

        <CallToAction
          title="Precisa de ajuda para encontrar um produto?"
          text="Fale com a Pró-Saúde Itajubá e consulte opções disponíveis para sua necessidade."
          buttonLabel="Falar com a loja"
          message={category.whatsappMessage}
        />
      </main>
    )
  }

  const product = getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const parentCategory = getCategoryBySlug(product.categorySlug)
  const breadcrumbs = [
    { name: "Início", href: "/" },
    { name: "Produtos", href: "/produtos" },
    ...(parentCategory
      ? [{ name: parentCategory.name, href: `/produtos/${parentCategory.slug}` }]
      : []),
    { name: product.name, href: `/produtos/${product.slug}` },
  ]

  return (
    <main>
      <SeoJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SeoJsonLd data={faqJsonLd(product.faqs)} />

      <section className="page-header">
        <div className="container">
          <Breadcrumbs items={breadcrumbs} />
          <span className="eyebrow">Produto</span>
          <h1>{product.h1}</h1>
          <p>{product.intro}</p>
          <div className="page-header__actions">
            <WhatsAppButton
              label={`Consultar ${product.name} pelo WhatsApp`}
              message={product.whatsappMessage}
            />
            {parentCategory ? (
              <Link className="button button--ghost" href={`/produtos/${parentCategory.slug}`}>
                Ver categoria <ArrowRight size={18} aria-hidden="true" />
              </Link>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container content-panel content-panel--two">
          <div>
            <span className="eyebrow">Consulta</span>
            <h2>Consulte opções de {product.name.toLocaleLowerCase("pt-BR")}</h2>
            <p>
              A página apresenta o produto principal de forma simples. Para saber modelos,
              medidas ou opções disponíveis no momento, fale diretamente com a loja pelo
              WhatsApp.
            </p>
          </div>
          <div className="info-box">
            <strong>Como consultar</strong>
            <ol>
              <li>Clique no botão de WhatsApp.</li>
              <li>Envie a mensagem já preenchida.</li>
              <li>A loja informa as opções disponíveis.</li>
            </ol>
          </div>
        </div>
      </section>

      <RelatedProducts slugs={product.relatedProductSlugs} />
      <RegionServiceSection />
      <FaqSection faqs={product.faqs} />

      <CallToAction
        title="Fale pelo WhatsApp"
        text={`Consulte disponibilidade de ${product.name.toLocaleLowerCase("pt-BR")} com a Pró-Saúde Itajubá.`}
        buttonLabel={`Consultar ${product.name}`}
        message={product.whatsappMessage}
      />
    </main>
  )
}
