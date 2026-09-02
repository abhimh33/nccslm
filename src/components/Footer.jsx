import { SITE, NAV, FOOTER } from '../content.js'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--navy-deep)' }}>
      {/* Gold accent top line */}
      <div className="h-1" style={{ background: 'var(--gold)' }} aria-hidden="true" />

      <div className="shell py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          {/* Org info */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg overflow-hidden"
                style={{ background: 'var(--gold)' }}
                aria-hidden="true"
              >
                <img
                  src="/images/logo.png"
                  alt=""
                  width="36"
                  height="36"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                  loading="lazy"
                />
              </span>
              <p className="text-sm font-semibold text-white">{SITE.name}</p>
            </div>
            <p className="mt-3 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
              ಸ್ಥಾಪನೆ: {SITE.established}
            </p>
          </div>

          {/* Footer nav */}
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm transition hover:opacity-80"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="my-6 h-px" style={{ background: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright */}
        <p className="text-xs text-center sm:text-left" style={{ color: 'rgba(255,255,255,0.4)' }}>
          {FOOTER.copyright}
        </p>
      </div>
    </footer>
  )
}
