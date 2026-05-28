import Link from "next/link"
import Image from "next/image"
import { Clock3, Mail, MapPin, Phone } from "lucide-react"
import { SocialLinks } from "@/components/social-links"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { servedRegions } from "@/data/regions"
import { siteConfig } from "@/data/site"
import { createWhatsAppUrl } from "@/lib/whatsapp"

const footerWhatsAppMessage =
  "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/sobre", label: "Sobre" },
  { href: "/localizacao", label: "Localização" },
  { href: "/contato", label: "Contato" },
]

export function Footer() {
  const whatsappUrl = createWhatsAppUrl(siteConfig.whatsapp, footerWhatsAppMessage)

  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div className="footer-main">
          <section className="footer-col footer-col--brand">
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
          </section>

          <section className="footer-col">
            <h2 className="footer-col__title">Navegação</h2>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="footer-col">
            <h2 className="footer-col__title">Contato</h2>
            <ul className="footer-contact-list">
              <li>
                <span className="footer-contact-list__icon" aria-hidden="true">
                  <MapPin size={18} />
                </span>
                <span className="footer-contact-list__body">
                  <span className="footer-contact-list__label">Localização</span>
                  <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
                    {siteConfig.address}
                  </a>
                </span>
              </li>
              <li>
                <span className="footer-contact-list__icon" aria-hidden="true">
                  <Phone size={18} />
                </span>
                <span className="footer-contact-list__body">
                  <span className="footer-contact-list__label">Telefone</span>
                  <a href={`tel:${siteConfig.phoneSchema.replace(/\s/g, "")}`}>
                    {siteConfig.phone}
                  </a>
                </span>
              </li>
              <li>
                <span className="footer-contact-list__icon" aria-hidden="true">
                  <WhatsAppIcon size={18} />
                </span>
                <span className="footer-contact-list__body">
                  <span className="footer-contact-list__label">WhatsApp</span>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {siteConfig.whatsappDisplay}
                  </a>
                </span>
              </li>
              <li>
                <span className="footer-contact-list__icon" aria-hidden="true">
                  <Mail size={18} />
                </span>
                <span className="footer-contact-list__body">
                  <span className="footer-contact-list__label">E-mail</span>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </span>
              </li>
            </ul>
          </section>

          <section className="footer-col">
            <h2 className="footer-col__title">Redes sociais</h2>
            <SocialLinks variant="footer" />

            <h2 className="footer-col__title footer-col__title--spaced">Horário</h2>
            <ul className="footer-hours-list">
              {siteConfig.openingHoursSchedule.map((item) => (
                <li
                  key={item.days}
                  className={item.closed ? "footer-hours-list__item is-closed" : "footer-hours-list__item"}
                >
                  <Clock3 size={16} aria-hidden="true" />
                  <span className="footer-hours-list__days">{item.days}</span>
                  <span className="footer-hours-list__hours">{item.hours}</span>
                </li>
              ))}
            </ul>
          </section>
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
