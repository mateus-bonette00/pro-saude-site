import { MessageCircle } from "lucide-react"
import { siteConfig } from "@/data/site"
import { createWhatsAppUrl } from "@/lib/whatsapp"

type WhatsAppButtonProps = {
  label?: string
  message: string
  variant?: "primary" | "secondary" | "floating"
}

export function WhatsAppButton({
  label = "Chamar no WhatsApp",
  message,
  variant = "primary",
}: WhatsAppButtonProps) {
  return (
    <a
      className={`whatsapp-button whatsapp-button--${variant}`}
      href={createWhatsAppUrl(siteConfig.whatsapp, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <MessageCircle aria-hidden="true" size={18} strokeWidth={2.4} />
      <span>{label}</span>
    </a>
  )
}
