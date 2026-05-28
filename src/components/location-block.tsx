import { Clock3, Mail, MapPin, Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { siteConfig } from "@/data/site"
import { createWhatsAppUrl } from "@/lib/whatsapp"

const footerWhatsAppMessage =
  "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."

export function LocationBlock() {
  const whatsappUrl = createWhatsAppUrl(siteConfig.whatsapp, footerWhatsAppMessage)

  return (
    <div className="location-block">
      <article className="location-block__card">
        <MapPin size={22} aria-hidden="true" />
        <span className="location-block__label">Endereço</span>
        <a
          className="location-block__value"
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.address}
        </a>
      </article>

      <article className="location-block__card">
        <Phone size={22} aria-hidden="true" />
        <span className="location-block__label">Telefone fixo</span>
        <a
          className="location-block__value"
          href={`tel:${siteConfig.phoneSchema.replace(/\s/g, "")}`}
        >
          {siteConfig.phone}
        </a>
      </article>

      <article className="location-block__card">
        <WhatsAppIcon size={22} className="location-block__whatsapp-icon" aria-hidden="true" />
        <span className="location-block__label">WhatsApp</span>
        <a
          className="location-block__value"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteConfig.whatsappDisplay}
        </a>
      </article>

      <article className="location-block__card">
        <Mail size={22} aria-hidden="true" />
        <span className="location-block__label">E-mail</span>
        <a className="location-block__value" href={`mailto:${siteConfig.email}`}>
          {siteConfig.email}
        </a>
      </article>

      <article className="location-block__card location-block__card--hours">
        <Clock3 size={22} aria-hidden="true" />
        <span className="location-block__label">Horário de funcionamento</span>
        <ul className="location-hours">
          {siteConfig.openingHoursSchedule.map((item) => (
            <li key={item.days} className={item.closed ? "is-closed" : undefined}>
              <span>{item.days}</span>
              <span>{item.hours}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  )
}
