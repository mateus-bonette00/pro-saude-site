import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Clock3,
  MapPin,
  ShieldCheck,
  Store,
  UsersRound,
} from "lucide-react"
import { AboutLogoShowcase } from "@/components/about-logo-showcase"
import { versionedAsset } from "@/lib/versioned-asset"
import { CallToAction } from "@/components/call-to-action"
import { CategoryCard } from "@/components/category-card"
import { ContactSection } from "@/components/contact-section"
import { LocationBlock } from "@/components/location-block"
import { ProductCard } from "@/components/product-card"
import { RegionServiceSection } from "@/components/region-service-section"
import { SeoJsonLd } from "@/components/seo-json-ld"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
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

const heroBenefits = [
  { icon: Store, label: "Loja física em Itajubá" },
  { icon: Award, label: "Produtos de qualidade" },
  { icon: UsersRound, label: "Atendimento com qualidade" },
]

function HeroBenefits({ className }: { className?: string }) {
  return (
    <div
      className={["hero__benefits", className].filter(Boolean).join(" ")}
      aria-label="Diferenciais da Pró-Saúde Itajubá"
    >
      {heroBenefits.map((benefit) => {
        const Icon = benefit.icon

        return (
          <article className="hero__benefit" key={benefit.label}>
            <span className="hero__benefit-icon" aria-hidden="true">
              <Icon size={18} strokeWidth={2.1} />
            </span>
            <span className="hero__benefit-label">{benefit.label}</span>
          </article>
        )
      })}
    </div>
  )
}

const heroInfoCards = [
  {
    icon: Clock3,
    title: "Horário de funcionamento",
    text: (
      <>
        <strong>Segunda à Sexta</strong>
        <span>07:00 às 18:00</span>
        <strong>Sábado</strong>
        <span>08:00 às 12:00</span>
      </>
    ),
  },
  {
    icon: MapPin,
    title: "Nossa localização",
    text: (
      <>
        <span>{siteConfig.address}</span>
        <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
          Ver no mapa <ArrowRight size={15} aria-hidden="true" />
        </a>
      </>
    ),
  },
  {
    icon: WhatsAppIcon,
    title: "WhatsApp",
    text: (
      <>
        <strong>{siteConfig.whatsappDisplay}</strong>
        <span>Fale conosco pelo WhatsApp</span>
      </>
    ),
  },
  {
    icon: ShieldCheck,
    title: "30 anos de experiência em Itajubá e região",
    text: (
      <span>
        Tradição, confiança e compromisso com a saúde da nossa região.
      </span>
    ),
  },
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

        <div className="container hero__layout">
          <div className="hero__content">
            <div className="hero__badge">
              <ShieldCheck size={16} aria-hidden="true" />
              Sua loja de confiança em Itajubá-MG
            </div>

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
          </div>

          <div className="hero__visual-column">
            <div className="hero__visual" aria-label="Produtos de saúde da Pró-Saúde Itajubá">
              <div className="hero__visual-backdrop" aria-hidden="true">
                <div className="hero__visual-cross hero__visual-cross--tone-red hero__visual-cross--a" />
                <div className="hero__visual-cross hero__visual-cross--tone-green hero__visual-cross--b" />
                <div className="hero__visual-cross hero__visual-cross--tone-red hero__visual-cross--c" />
              </div>
              <div className="hero__product-scene">
                <Image
                  src={versionedAsset("/images/hero-products-scene.webp")}
                  alt="Cadeira de rodas, andador, aparelho de pressão, estetoscópio e produtos de saúde"
                  width={1672}
                  height={941}
                  sizes="(max-width: 430px) 100vw, (max-width: 767px) min(520px, 100vw), (max-width: 1023px) min(640px, 90vw), min(780px, 52vw)"
                  className="hero__scene-image"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="hero__cta-row">
            <div className="hero__actions">
              <WhatsAppButton
                label="Consultar pelo WhatsApp"
                message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."
              />
              <Link className="button button--ghost" href="#categorias">
                Ver Produtos
                <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <HeroBenefits className="hero__benefits--below-visual" />

          <div className="hero__info-panel">
            {heroInfoCards.map((card) => {
              const Icon = card.icon

              return (
                <article className="hero__info-card" key={card.title}>
                  <span className="hero__info-icon" aria-hidden="true">
                    <Icon size={24} />
                  </span>
                  <div>
                    <h2>{card.title}</h2>
                    <p>{card.text}</p>
                  </div>
                </article>
              )
            })}
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
              com qualidade e orientação clara. Nosso time está pronto para te ajudar a
              encontrar o produto certo, seja para uso domiciliar, pós-cirúrgico ou
              profissional.
            </p>
            <ul className="about-checks">
              <li>Atendimento presencial e pelo WhatsApp</li>
              <li>Mais de 3.000 produtos disponíveis</li>
              <li>Equipe especializada para orientar sua compra</li>
              <li>Suporte e atendimento para toda a região Sul de Minas</li>
            </ul>
          </div>
          <AboutLogoShowcase />
        </div>
      </section>

      <section id="categorias" className="section">
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

      <section className="section location-section">
        <div className="container location-summary">
          <div className="section-heading">
            <span>Localização</span>
            <h2>Localização e Horário de Funcionamento</h2>
            <p>
              Visite a loja em Itajubá ou fale antes pelo WhatsApp para consultar modelos e
              disponibilidade.
            </p>
          </div>
          <LocationBlock />
          <Link className="text-link" href="/localizacao">
            Ver página de localização <MapPin size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ContactSection />
    </main>
  )
}
