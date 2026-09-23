"use client"

import { useEffect, useState } from "react"
import { MapPin } from "lucide-react"
import { WhatsAppIcon } from "@/components/whatsapp-icon"
import { siteConfig } from "@/data/site"
import { getStoreStatus, type StoreStatus } from "@/lib/store-hours"
import { createWhatsAppUrl } from "@/lib/whatsapp"

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25 1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z"
      />
    </svg>
  )
}

const scheduleText = "Seg a Sex: 07:00 às 18:00 | Sáb: 08:00 às 12:00"

export function HeaderTopBar() {
  const [status, setStatus] = useState<StoreStatus>(() => getStoreStatus())
  const statusLabel = status.isOpen ? "Aberto agora" : "Fechado agora"

  useEffect(() => {
    const updateStatus = () => setStatus(getStoreStatus())
    updateStatus()

    const intervalId = window.setInterval(updateStatus, 60_000)
    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div className="header-topbar" role="status" aria-live="polite">
      <div className="container header-topbar__inner">
        <div className="header-topbar__left">
          <span
            className={`header-topbar__status header-topbar__status--${
              status.isOpen ? "open" : "closed"
            }`}
          >
            <span className="header-topbar__dot" aria-hidden="true" />
            {statusLabel}
          </span>
          <span className="header-topbar__divider" aria-hidden="true" />
          <span className="header-topbar__hours">{scheduleText}</span>
        </div>

        <div className="header-topbar__right">
          <span className="header-topbar__region">
            <MapPin size={16} aria-hidden="true" />
            Itajubá-MG e região
          </span>
          <a
            href={createWhatsAppUrl(
              siteConfig.whatsapp,
              "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chamar a Pró-Saúde Itajubá no WhatsApp"
          >
            <WhatsAppIcon size={18} />
          </a>
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Pró-Saúde Itajubá"
          >
            <InstagramIcon />
          </a>
          <a
            href={siteConfig.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook da Pró-Saúde Itajubá"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
