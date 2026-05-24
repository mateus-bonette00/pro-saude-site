import Link from "next/link"
import Image from "next/image"
import { Clock3, Mail, MessageCircle, MapPin, Phone } from "lucide-react"
import { categories } from "@/data/categories"
import { productPages } from "@/data/products"
import { servedRegions } from "@/data/regions"
import { siteConfig } from "@/data/site"

const footerProducts = [
  "cadeira-de-rodas",
  "andador",
  "aparelho-de-pressao",
  "colchao-hospitalar",
  "cinta-lombar",
  "bota-imobilizadora",
  "meia-de-compressao",
]

export function Footer() {
  const categoryLinks = categories.filter((category) => category.featuredOnHome)
  const productLinks = footerProducts
    .map((slug) => productPages.find((product) => product.slug === slug))
    .filter(Boolean)

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <section className="footer-column footer-column--brand">
          <Image
            src={siteConfig.logoWide}
            alt={siteConfig.businessName}
            width={270}
            height={59}
            className="footer-logo"
            priority
          />
          <strong>{siteConfig.businessName}</strong>
          <p>{siteConfig.description}</p>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </li>
            <li>
              <Phone size={16} aria-hidden="true" />
              <span>{siteConfig.phone}</span>
            </li>
            <li>
              <MessageCircle size={16} aria-hidden="true" />
              <span>{siteConfig.whatsappDisplay}</span>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </li>
            <li>
              <Clock3 size={16} aria-hidden="true" />
              <span>{siteConfig.openingHours}</span>
            </li>
            <li>
              <span>CNPJ {siteConfig.cnpj}</span>
            </li>
          </ul>
        </section>

        <section className="footer-column">
          <strong>Links principais</strong>
          <Link href="/">Início</Link>
          <Link href="/produtos">Produtos</Link>
          <Link href="/sobre">Sobre</Link>
          <Link href="/localizacao">Localização</Link>
          <Link href="/contato">Contato</Link>
        </section>

        <section className="footer-column">
          <strong>Categorias</strong>
          {categoryLinks.slice(0, 7).map((category) => (
            <Link key={category.slug} href={`/produtos/${category.slug}`}>
              {category.name}
            </Link>
          ))}
        </section>

        <section className="footer-column">
          <strong>Produtos procurados</strong>
          {productLinks.map((product) =>
            product ? (
              <Link key={product.slug} href={`/produtos/${product.slug}`}>
                {product.name}
              </Link>
            ) : null,
          )}
        </section>
      </div>

      <div className="container footer-bottom">
        <span>Atendimento em {servedRegions.join(", ")} e outras cidades da região.</span>
        <span>Consulte disponibilidade antes de se deslocar até a loja.</span>
      </div>
    </footer>
  )
}
