import { siteConfig } from "@/data/site"

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25 1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3Z"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true">
      <path
        fill="currentColor"
        d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12Z"
      />
    </svg>
  )
}

type SocialLinksProps = {
  variant?: "default" | "footer"
}

export function SocialLinks({ variant = "default" }: SocialLinksProps) {
  const className =
    variant === "footer" ? "social-links social-links--footer" : "social-links"

  return (
    <div className={className}>
      <a
        className="social-links__item"
        href={siteConfig.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram da Pró-Saúde Itajubá"
      >
        <InstagramIcon />
        <span>Instagram</span>
      </a>
      <a
        className="social-links__item"
        href={siteConfig.facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook da Pró-Saúde Itajubá"
      >
        <FacebookIcon />
        <span>Facebook</span>
      </a>
    </div>
  )
}
