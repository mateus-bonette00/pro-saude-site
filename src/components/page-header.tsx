import { Breadcrumbs, type BreadcrumbLink } from "./breadcrumbs"

type PageHeaderProps = {
  eyebrow?: string
  title: string
  text: string
  breadcrumbs?: BreadcrumbLink[]
}

export function PageHeader({ eyebrow, title, text, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="page-header">
      <div className="container">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  )
}
