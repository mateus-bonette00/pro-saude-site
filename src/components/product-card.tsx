import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { ProductPage } from "@/data/products"

export function ProductCard({ product }: { product: ProductPage }) {
  return (
    <Link className="product-card" href={`/produtos/${product.slug}`}>
      <span>{product.name}</span>
      <ArrowRight size={16} aria-hidden="true" />
    </Link>
  )
}
