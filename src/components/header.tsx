import Link from "next/link"
import Image from "next/image"
import { WhatsAppButton } from "./whatsapp-button"
import { siteConfig } from "@/data/site"

const menuItems = [
  { href: "/", label: "Início" },
  { href: "/produtos", label: "Produtos" },
  { href: "/produtos/cuidados-domiciliares", label: "Cuidados Domiciliares" },
  { href: "/produtos/mobilidade-e-acessibilidade", label: "Mobilidade" },
  { href: "/produtos/ortopedicos", label: "Ortopédicos" },
  { href: "/localizacao", label: "Localização" },
  { href: "/contato", label: "Contato" },
]

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href="/" className="brand" aria-label="Ir para a página inicial">
          <span className="brand__mark" aria-hidden="true">
            <Image
              src={siteConfig.logoIcon}
              alt=""
              width={44}
              height={44}
              className="brand__image"
              priority
            />
          </span>
          <span>
            <strong>{siteConfig.businessName}</strong>
            <small>Itajubá-MG</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Navegação principal">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-action">
          <WhatsAppButton
            label="WhatsApp"
            message="Olá! Vim pelo site da Pró-Saúde Itajubá e gostaria de atendimento."
            variant="secondary"
          />
        </div>
      </div>
    </header>
  )
}
