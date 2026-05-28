import Image from "next/image"

export function AboutLogoShowcase() {
  return (
    <div className="about-showcase">
      <div className="about-showcase__backdrop" aria-hidden="true">
        <span className="about-showcase__glow about-showcase__glow--green" />
        <span className="about-showcase__glow about-showcase__glow--coral" />
      </div>

      <Image
        src="/images/logo-pro-saude-4k.png"
        alt="Logo Pró-Saúde Itajubá"
        width={420}
        height={420}
        className="about-showcase__logo"
      />

      <p className="about-showcase__caption">30+ anos em Itajubá</p>
    </div>
  )
}
