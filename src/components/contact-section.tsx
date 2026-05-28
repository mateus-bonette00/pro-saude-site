import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"

type ContactSectionProps = {
  showHeading?: boolean
  sectionId?: string
}

export function ContactSection({
  showHeading = true,
  sectionId = "contato",
}: ContactSectionProps) {
  return (
    <section className="section section--muted" id={sectionId}>
      <div className="container contact-section">
        {showHeading ? (
          <div className="section-heading">
            <span>Contato</span>
            <h2>Contato</h2>
            <p>
              Envie uma mensagem pelo formulário, siga nas redes sociais ou fale direto pelo
              WhatsApp e e-mail.
            </p>
          </div>
        ) : null}

        <div className="contact-section__grid">
          <div className="contact-section__aside">
            <h3 className="contact-section__subtitle">Redes sociais</h3>
            <p className="contact-section__text">
              Acompanhe a Pró-Saúde Itajubá no Instagram e no Facebook.
            </p>
            <SocialLinks />
          </div>

          <div className="contact-section__form-wrap">
            <h3 className="contact-section__subtitle">Formulário de contato</h3>
            <p className="contact-section__text">
              Sua mensagem será enviada para{" "}
              <strong>prosaudeitajuba@gmail.com</strong>.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
