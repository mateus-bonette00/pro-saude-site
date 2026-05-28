import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { siteConfig } from "@/data/site"
import { createWhatsAppUrl } from "@/lib/whatsapp"

type WhatsAppButtonProps = {
  label?: string
  message: string
  variant?: "primary" | "secondary" | "floating" | "glass"
}

export function WhatsAppButton({
  label = "Chamar no WhatsApp",
  message,
  variant = "primary",
}: WhatsAppButtonProps) {
  const isFloating = variant === "floating"

  return (
    <a
      className={`whatsapp-button whatsapp-button--${variant}`}
      href={createWhatsAppUrl(siteConfig.whatsapp, message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <WhatsAppIcon size={isFloating ? 28 : 18} className="whatsapp-button__icon" />
      {!isFloating ? <span>{label}</span> : null}
    </a>
  )
}
