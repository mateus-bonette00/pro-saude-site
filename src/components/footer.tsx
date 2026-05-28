import Link from "next/link"
import Image from "next/image"
import { Clock3, Mail, MapPin, Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { categories } from "@/data/categories"
import { productPages } from "@/data/products"
import { servedRegions } from "@/data/regions"
import { siteConfig } from "@/data/site"
import { createWhatsAppUrl } from "@/lib/whatsapp"

const footerProducts = [
  "cadeira-de-rodas",
  "andador",
  "aparelho-de-pressao",
  "colchao-hospitalar",
  "cinta-lombar",
  "bota-imobilizadora",
  "meia-de-compressao",
]

const footerWhatsAppMessage =
  "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."

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
          <p className="footer-brand-text">
            Produtos médicos, ortopédicos e hospitalares em Itajubá-MG.
          </p>

          <ul className="footer-contact">
            <li>
              <MapPin size={16} aria-hidden="true" />
              <div className="footer-contact__content">
                <span className="footer-contact__label">Endereço</span>
                <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
                  {siteConfig.address}
                </a>
              </div>
            </li>
            <li>
              <Phone size={16} aria-hidden="true" />
              <div className="footer-contact__content">
                <span className="footer-contact__label">Telefone</span>
                <a href={`tel:${siteConfig.phoneSchema.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
              </div>
            </li>
            <li>
              <WhatsAppIcon size={16} className="footer-contact__whatsapp-icon" />
              <div className="footer-contact__content">
                <span className="footer-contact__label">WhatsApp</span>
                <a
                  href={createWhatsAppUrl(siteConfig.whatsapp, footerWhatsAppMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.whatsappDisplay}
                </a>
              </div>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <div className="footer-contact__content">
                <span className="footer-contact__label">E-mail</span>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
            </li>
            <li className="footer-contact__hours">
              <Clock3 size={16} aria-hidden="true" />
              <div className="footer-contact__content">
                <span className="footer-contact__label">Horários</span>
                <dl className="footer-hours">
                  {siteConfig.openingHoursSchedule.map((item) => (
                    <div
                      key={item.days}
                      className={item.closed ? "footer-hours__row is-closed" : "footer-hours__row"}
                    >
                      <dt>{item.days}</dt>
                      <dd>{item.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
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
        <p className="footer-bottom__regions">
          Atendimento em {servedRegions.slice(0, 4).join(", ")} e outras cidades da região.
        </p>
        <p className="footer-bottom__legal">
          CNPJ {siteConfig.cnpj} · Consulte disponibilidade antes de visitar a loja.
        </p>
      </div>
    </footer>
  )
}
