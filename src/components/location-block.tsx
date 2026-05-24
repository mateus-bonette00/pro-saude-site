import { Clock3, MapPin, MessageCircle, Phone } from "lucide-react"
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
        <MessageCircle size={20} aria-hidden="true" />
        <span>Celular / WhatsApp</span>
        <strong>{siteConfig.whatsappDisplay}</strong>
      </div>
      <div>
        <Clock3 size={20} aria-hidden="true" />
        <span>Horário</span>
        <strong>{siteConfig.openingHours}</strong>
      </div>
    </div>
  )
}
