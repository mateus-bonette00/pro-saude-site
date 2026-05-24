import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Category } from "@/data/categories"

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link className="category-card" href={`/produtos/${category.slug}`}>
      <span className="category-card__label">Categoria</span>
      <h3>{category.name}</h3>
      <p>{category.shortDescription}</p>
      <span className="card-link">
        Ver categoria <ArrowRight size={16} aria-hidden="true" />
      </span>
    </Link>
  )
}
