import Link from "next/link"

export type BreadcrumbLink = {
  name: string
  href: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbLink[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.href}>
              {isLast ? <span>{item.name}</span> : <Link href={item.href}>{item.name}</Link>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
