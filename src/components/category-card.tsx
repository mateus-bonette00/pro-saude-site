import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Category } from "@/data/categories"
import { siteConfig } from "@/data/site"
import { createItemInquiryMessage, createWhatsAppUrl } from "@/lib/whatsapp"

export function CategoryCard({
  category,
  priority = false,
}: {
  category: Category
  priority?: boolean
}) {
  const whatsappUrl = createWhatsAppUrl(
    siteConfig.whatsapp,
    createItemInquiryMessage(category.name),
  )

  return (
    <a
      className="category-card"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Pedir ${category.name} no WhatsApp`}
    >
      <span className="category-card__media" aria-hidden="true">
        <Image
          src={category.image.src}
          alt={category.image.alt}
          width={category.image.width}
          height={category.image.height}
          sizes="(max-width: 720px) 100vw, (max-width: 920px) 50vw, 440px"
          priority={priority}
          loading={priority ? undefined : "lazy"}
        />
      </span>

      <span className="category-card__glass">
        <span className="category-card__glass-shine" aria-hidden="true" />
        <h3>{category.name}</h3>
        <p>{category.shortDescription}</p>
        <span className="category-card__cta">
          <span className="category-card__cta-text">Pedir no WhatsApp</span>
          <span className="category-card__arrow" aria-hidden="true">
            <ArrowUpRight size={16} strokeWidth={2.25} />
          </span>
        </span>
      </span>
    </a>
  )
}
