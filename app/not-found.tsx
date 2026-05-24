import Link from "next/link"

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="container">
        <span className="eyebrow">Página não encontrada</span>
        <h1>Não encontramos esta página</h1>
        <p>Use o menu para voltar aos produtos ou falar com a Pró-Saúde Itajubá.</p>
        <Link className="button button--primary" href="/produtos">
          Ver produtos
        </Link>
      </div>
    </main>
  )
}
