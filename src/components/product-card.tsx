import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { ProductPage } from "@/data/products"

export function ProductCard({ product }: { product: ProductPage }) {
  return (
    <Link className="product-card" href={`/produtos/${product.slug}`}>
      <span className="product-card__media">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
          sizes="(max-width: 720px) 40vw, (max-width: 920px) 25vw, 96px"
          loading="lazy"
        />
      </span>
      <span className="product-card__name">{product.name}</span>
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  )
}
