import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { ProductPage } from "@/data/products"
import { siteConfig } from "@/data/site"
import { createItemInquiryMessage, createWhatsAppUrl } from "@/lib/whatsapp"

export function ProductCard({
  product,
  variant = "featured",
}: {
  product: ProductPage
  variant?: "featured" | "compact"
}) {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.whatsapp,
    createItemInquiryMessage(product.name),
  )

  if (variant === "compact") {
    return (
      <a
        className="product-card product-card--compact"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Pedir ${product.name} no WhatsApp`}
      >
        <span className="product-card__media">
          <Image
            src={product.image.src}
            alt={product.image.alt}
            width={product.image.width}
            height={product.image.height}
            sizes="96px"
            loading="lazy"
          />
        </span>
        <span className="product-card__name">{product.name}</span>
        <span className="product-card__cta-text">Pedir no WhatsApp</span>
      </a>
    )
  }

  return (
    <a
      className="product-card"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Pedir ${product.name} no WhatsApp`}
    >
      <span className="product-card__media" aria-hidden="true">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
          sizes="(max-width: 720px) 45vw, (max-width: 920px) 50vw, 300px"
          loading="lazy"
        />
      </span>

      <span className="product-card__glass">
        <span className="product-card__glass-shine" aria-hidden="true" />
        <h3>{product.name}</h3>
        <span className="product-card__cta">
          <span className="product-card__cta-text">Pedir no WhatsApp</span>
          <span className="product-card__arrow" aria-hidden="true">
            <ArrowUpRight size={15} strokeWidth={2.25} />
          </span>
        </span>
      </span>
    </a>
  )
}
