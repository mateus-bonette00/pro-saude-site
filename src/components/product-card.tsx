import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import type { ProductPage } from "@/data/products"

export function ProductCard({
  product,
  variant = "featured",
}: {
  product: ProductPage
  variant?: "featured" | "compact"
}) {
  if (variant === "compact") {
    return (
      <Link className="product-card product-card--compact" href={`/produtos/${product.slug}`}>
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
        <ArrowRight size={16} aria-hidden="true" />
      </Link>
    )
  }

  return (
    <Link className="product-card" href={`/produtos/${product.slug}`}>
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
          <span className="product-card__cta-text">Ver produto</span>
          <span className="product-card__arrow" aria-hidden="true">
            <ArrowUpRight size={15} strokeWidth={2.25} />
          </span>
        </span>
      </span>
    </Link>
  )
}
