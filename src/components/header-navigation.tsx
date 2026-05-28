"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { siteConfig } from "@/data/site"

const leftItems = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/#sobre", label: "Sobre" },
]

const rightItems = [
  { href: "/localizacao", label: "Localização" },
  { href: "/contato", label: "Contato" },
]

const mobileItems = [...leftItems, ...rightItems]

const whatsappMessage =
  "Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."

export function HeaderNavigation() {
  const [menuOpen, setMenuOpen] = useState(false)
  const panelId = useId()
  const pathname = usePathname()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle("site-header-menu-open", menuOpen)
    return () => document.body.classList.remove("site-header-menu-open")
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false)
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className="site-header__inner">
        <nav className="main-nav main-nav--left" aria-label="Navegação esquerda">
          {leftItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className="brand-center" aria-label="Ir para a página inicial">
          <span className="brand-center__halo" aria-hidden="true" />
          <Image
            src={siteConfig.logoWide}
            alt={siteConfig.businessName}
            width={220}
            height={169}
            className="brand-center__logo"
            priority
          />
        </Link>

        <button
          type="button"
          className={`site-header__menu-toggle${menuOpen ? " is-active" : ""}`}
          aria-expanded={menuOpen}
          aria-controls={panelId}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="site-header__menu-toggle-icon" aria-hidden="true">
            <span className="site-header__menu-toggle-bar" />
            <span className="site-header__menu-toggle-bar" />
            <span className="site-header__menu-toggle-bar" />
          </span>
        </button>

        <nav className="main-nav main-nav--right" aria-label="Navegação direita">
          {rightItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <WhatsAppButton
            label="Falar pelo WhatsApp"
            message={whatsappMessage}
            variant="glass"
          />
        </nav>
      </div>

      <button
        type="button"
        className={`site-header__backdrop${menuOpen ? " is-visible" : ""}`}
        aria-hidden={!menuOpen}
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <nav
        id={panelId}
        className={`site-header__mobile-panel${menuOpen ? " is-open" : ""}`}
        aria-label="Menu principal"
        aria-hidden={!menuOpen}
      >
        <div className="site-header__mobile-panel-inner">
          {mobileItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <WhatsAppButton
            label="Falar pelo WhatsApp"
            message={whatsappMessage}
            variant="glass"
          />
        </div>
      </nav>
    </>
  )
}
