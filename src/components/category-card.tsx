import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import type { Category } from "@/data/categories"

export function CategoryCard({
  category,
  priority = false,
}: {
  category: Category
  priority?: boolean
}) {
  return (
    <Link className="category-card" href={`/produtos/${category.slug}`}>
      <span className="category-card__media">
        <Image
          src={category.image.src}
          alt={category.image.alt}
          width={category.image.width}
          height={category.image.height}
          sizes="(max-width: 720px) 100vw, (max-width: 920px) 50vw, 33vw"
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      </span>
      <span className="category-card__body">
        <span className="category-card__label">Categoria</span>
        <h3>{category.name}</h3>
        <p>{category.shortDescription}</p>
        <span className="card-link">
          Ver categoria <ArrowRight size={16} aria-hidden="true" />
        </span>
      </span>
    </Link>
  )
}
