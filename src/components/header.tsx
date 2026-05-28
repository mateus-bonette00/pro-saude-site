import { HeaderNavigation } from "@/components/header-navigation"

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__container">
        <HeaderNavigation />
      </div>
    </header>
  )
}
