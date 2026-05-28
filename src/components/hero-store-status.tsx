"use client"

import { useEffect, useState } from "react"
import { Clock3 } from "lucide-react"
import { getStoreStatus, type StoreStatus } from "@/lib/store-hours"

export function HeroStoreStatus() {
  const [status, setStatus] = useState<StoreStatus>(() => getStoreStatus())

  useEffect(() => {
    const updateStatus = () => setStatus(getStoreStatus())
    updateStatus()

    const intervalId = window.setInterval(updateStatus, 60_000)
    return () => window.clearInterval(intervalId)
  }, [])

  return (
    <div
      className={`hero-status hero-status--${status.isOpen ? "open" : "closed"}`}
      role="status"
      aria-live="polite"
    >
      <span className="hero-status__indicator" aria-hidden="true">
        <span className="hero-status__dot" />
      </span>
      <span className="hero-status__content">
        <span className="hero-status__label">
          <Clock3 size={16} aria-hidden="true" />
          {status.label}
        </span>
        <span className="hero-status__detail">{status.detail}</span>
      </span>
      <span className="hero-status__hours">{status.todayHours}</span>
    </div>
  )
}
