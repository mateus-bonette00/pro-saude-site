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

  const whatsappUrl = createWhatsAppUrl(siteConfig.whatsapp, footerWhatsAppMessage)

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-top">
          <div className="footer-brand">
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
            <a
              className="footer-whatsapp-cta"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon size={18} aria-hidden="true" />
              Chamar no WhatsApp
            </a>
          </div>

          <div className="footer-nav">
            <section className="footer-nav__group">
              <h2 className="footer-nav__title">Navegação</h2>
              <ul className="footer-nav__list">
                <li>
                  <Link href="/">Início</Link>
                </li>
                <li>
                  <Link href="/produtos">Produtos</Link>
                </li>
                <li>
                  <Link href="/sobre">Sobre</Link>
                </li>
                <li>
                  <Link href="/localizacao">Localização</Link>
                </li>
                <li>
                  <Link href="/contato">Contato</Link>
                </li>
              </ul>
            </section>

            <section className="footer-nav__group">
              <h2 className="footer-nav__title">Categorias</h2>
              <ul className="footer-nav__list">
                {categoryLinks.slice(0, 6).map((category) => (
                  <li key={category.slug}>
                    <Link href={`/produtos/${category.slug}`}>{category.name}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section className="footer-nav__group">
              <h2 className="footer-nav__title">Produtos</h2>
              <ul className="footer-nav__list">
                {productLinks.map((product) =>
                  product ? (
                    <li key={product.slug}>
                      <Link href={`/produtos/${product.slug}`}>{product.name}</Link>
                    </li>
                  ) : null,
                )}
              </ul>
            </section>
          </div>
        </div>

        <div className="footer-contact-panel">
          <article className="footer-info-card">
            <MapPin size={18} aria-hidden="true" />
            <div>
              <h3>Endereço</h3>
              <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
                {siteConfig.address}
              </a>
            </div>
          </article>

          <article className="footer-info-card">
            <Phone size={18} aria-hidden="true" />
            <div>
              <h3>Telefone</h3>
              <a href={`tel:${siteConfig.phoneSchema.replace(/\s/g, "")}`}>{siteConfig.phone}</a>
            </div>
          </article>

          <article className="footer-info-card">
            <WhatsAppIcon size={18} className="footer-info-card__whatsapp" aria-hidden="true" />
            <div>
              <h3>WhatsApp</h3>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {siteConfig.whatsappDisplay}
              </a>
            </div>
          </article>

          <article className="footer-info-card">
            <Mail size={18} aria-hidden="true" />
            <div>
              <h3>E-mail</h3>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
          </article>

          <article className="footer-info-card footer-info-card--hours">
            <Clock3 size={18} aria-hidden="true" />
            <div>
              <h3>Horários</h3>
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
          </article>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom__regions">
            Atendimento em {servedRegions.slice(0, 4).join(", ")} e outras cidades da região.
          </p>
          <p className="footer-bottom__legal">
            CNPJ {siteConfig.cnpj} · Consulte disponibilidade antes de visitar a loja.
          </p>
        </div>
      </div>
    </footer>
  )
}
