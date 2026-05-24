import type { ProductFaq } from "@/data/products"

export function FaqSection({ faqs }: { faqs: ProductFaq[] }) {
  if (!faqs.length) {
    return null
  }

  return (
    <section className="section section--tight">
      <div className="container">
        <div className="section-heading">
          <span>Dúvidas frequentes</span>
          <h2>Dúvidas frequentes</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
