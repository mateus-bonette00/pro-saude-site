import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"
import { CallToAction } from "@/components/call-to-action"
import { CategoryCard } from "@/components/category-card"
import { LocationBlock } from "@/components/location-block"
import { ProductCard } from "@/components/product-card"
import { RegionServiceSection } from "@/components/region-service-section"
import { SeoJsonLd } from "@/components/seo-json-ld"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { categories } from "@/data/categories"
import { productPages } from "@/data/products"
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
        <div className="hero__shapes" aria-hidden="true">
          <div className="hero__shape hero__shape--1" />
          <div className="hero__shape hero__shape--2" />
          <div className="hero__shape hero__shape--3" />
          <div className="hero__shape hero__shape--4" />
          <div className="hero__shape hero__shape--5" />
          <div className="hero__shape hero__shape--6" />
          <div className="hero__shape hero__shape--7" />
          <div className="hero__shape hero__shape--8" />
          <div className="hero__shape hero__shape--9" />
          <div className="hero__shape hero__shape--10" />
        </div>

        <div className="container hero__center">
          <h1 className="hero__title">
            Produtos <mark>Médicos, Ortopédicos e Hospitalares</mark> em{" "}
            <mark className="accent">Itajubá - MG</mark>
          </h1>

          <p className="hero__sub">
            A Pró-Saúde Itajubá é uma loja física com produtos para saúde, mobilidade,
            cuidados domiciliares, curativos, aparelhos e materiais médicos. Atendemos
            clientes, famílias, cuidadores, clínicas e profissionais da região de
            Itajubá e do Sul de Minas.
          </p>

          <div className="hero__actions">
            <WhatsAppButton
              label="Falar pelo WhatsApp"
              message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."
            />
            <Link className="button button--ghost" href="/produtos">
              Ver produtos <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">30+</span>
              <span className="hero__stat-label">
                Anos de
                <br />
                Existência
              </span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">100%</span>
              <span className="hero__stat-label">
                Clientes
                <br />
                Satisfeitos
              </span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">3000+</span>
              <span className="hero__stat-label">Produtos Disponíveis</span>
            </div>
          </div>

          <div className="hero__scroll">
            <div className="hero__scroll-line" />
            Role para descobrir
          </div>
        </div>
      </section>

      <section id="sobre" className="section about-section">
        <div className="container about-panel">
          <div className="about-text">
            <span className="eyebrow">Sobre nós</span>
            <h2>Mais de 30 anos cuidando da saúde de Itajubá</h2>
            <p>
              A Pró-Saúde Itajubá é uma loja de produtos médicos, ortopédicos e hospitalares
              em Itajubá-MG, com mais de três décadas atendendo pacientes em recuperação,
              idosos, cuidadores, famílias e profissionais da saúde da região.
            </p>
            <p>
              Aqui você encontra os produtos que mais saem: cadeira de rodas, andador,
              bengala, muleta, cama hospitalar, colchão anti-escaras, fraldas geriátricas,
              meia de compressão, aparelho de pressão, oxímetro, cinta lombar, bota
              imobilizadora, curativos, gazes e ataduras, tudo em um só lugar, com
              orientação especializada na hora da compra.
            </p>
            <p>
              Somos uma loja física especializada no centro de Itajubá, com atendimento
              humano e personalizado. Nosso time está pronto para te ajudar a encontrar o
              produto certo, seja para uso domiciliar, pós-cirúrgico ou profissional.
            </p>
            <ul className="about-checks">
              <li>Atendimento presencial e pelo WhatsApp</li>
              <li>Mais de 3.000 produtos disponíveis</li>
              <li>Equipe especializada para orientar sua compra</li>
              <li>Suporte e atendimento para toda a região Sul de Minas</li>
            </ul>
          </div>
          <div className="about-logo-wrap">
            <Image
              src="/images/logo-pro-saude-4k.png"
              alt="Logo Pró-Saúde Itajubá"
              width={420}
              height={420}
              className="about-logo-img"
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
            {featuredCategories.map((category, index) => (
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
