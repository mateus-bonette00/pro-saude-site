"use client"

import { ArrowUpRight } from "lucide-react"
import { useState } from "react"
import { siteConfig } from "@/data/site"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("sending")

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${siteConfig.email}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error("Falha ao enviar")
      }

      form.reset()
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="hidden" name="_subject" value="Contato pelo site Pró-Saúde Itajubá" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="text" name="_honey" className="contact-form__honey" tabIndex={-1} autoComplete="off" />

      <div className="contact-form__field">
        <label htmlFor="contact-name">Nome</label>
        <input id="contact-name" name="name" type="text" required autoComplete="name" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-email">Seu e-mail</label>
        <input id="contact-email" name="email" type="email" required autoComplete="email" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-phone">Telefone (opcional)</label>
        <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <div className="contact-form__field">
        <label htmlFor="contact-message">Mensagem</label>
        <textarea id="contact-message" name="message" rows={5} required />
      </div>

      <button
        className="contact-form__submit"
        type="submit"
        disabled={status === "sending"}
        aria-busy={status === "sending"}
      >
        <span className="contact-form__submit-text">
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        </span>
        <span className="contact-form__submit-arrow" aria-hidden="true">
          <ArrowUpRight size={15} strokeWidth={2.25} />
        </span>
      </button>

      {status === "success" ? (
        <p className="contact-form__feedback contact-form__feedback--success" role="status">
          Mensagem enviada! Em breve a loja entrará em contato.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="contact-form__feedback contact-form__feedback--error" role="alert">
          Não foi possível enviar agora. Tente pelo WhatsApp ou e-mail{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      ) : null}
    </form>
  )
}
