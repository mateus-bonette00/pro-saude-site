import { HeaderTopBar } from "@/components/header-top-bar"
import { HeaderNavigation } from "@/components/header-navigation"

export function Header() {
  return (
    <header className="site-header">
      <HeaderTopBar />
      <div className="container site-header__container">
        <HeaderNavigation />
      </div>
    </header>
  )
}
