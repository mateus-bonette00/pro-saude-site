import { getProductsBySlugs } from "@/data/products"
import { ProductCard } from "./product-card"

export function RelatedProducts({ slugs }: { slugs: string[] }) {
  const products = getProductsBySlugs(slugs)

  if (!products.length) {
    return null
  }

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="section-heading">
          <span>Veja também</span>
          <h2>Produtos relacionados</h2>
        </div>
        <div className="product-grid product-grid--compact">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
