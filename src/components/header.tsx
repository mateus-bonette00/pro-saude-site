import Link from "next/link"
import Image from "next/image"
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

export function Header() {
  return (
    <header className="site-header">
      <div className="container">
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

          <nav className="main-nav main-nav--right" aria-label="Navegação direita">
            {rightItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
