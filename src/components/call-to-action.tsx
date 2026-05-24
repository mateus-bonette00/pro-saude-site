import { WhatsAppButton } from "./whatsapp-button"

type CallToActionProps = {
  title: string
  text: string
  buttonLabel?: string
  message: string
}

export function CallToAction({
  title,
  text,
  buttonLabel = "Chamar no WhatsApp",
  message,
}: CallToActionProps) {
  return (
    <section className="section cta-band">
      <div className="container cta-band__inner">
        <div>
          <span className="eyebrow">Atendimento rápido</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <WhatsAppButton label={buttonLabel} message={message} />
      </div>
    </section>
  )
}
