import { Clock3, MapPin, Phone } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { siteConfig } from "@/data/site"

export function LocationBlock() {
  return (
    <div className="location-block">
      <div>
        <MapPin size={20} aria-hidden="true" />
        <span>Endereço</span>
        <strong>{siteConfig.address}</strong>
      </div>
      <div>
        <Phone size={20} aria-hidden="true" />
        <span>Telefone fixo</span>
        <strong>{siteConfig.phone}</strong>
      </div>
      <div>
        <WhatsAppIcon size={20} className="location-block__whatsapp-icon" />
        <span>Celular / WhatsApp</span>
        <strong>{siteConfig.whatsappDisplay}</strong>
      </div>
      <div className="location-block__hours-card">
        <Clock3 size={20} aria-hidden="true" />
        <span>Horários de Funcionamento</span>
        <ul className="location-hours">
          {siteConfig.openingHoursSchedule.map((item) => (
            <li key={item.days} className={item.closed ? "is-closed" : undefined}>
              <span>{item.days}</span>
              <span>{item.hours}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
