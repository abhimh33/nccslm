import { SITE, CONTACT } from '../content.js'

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-24"
      style={{ background: 'var(--cream-warm)' }}
    >
      <div className="shell">
        {/* ── Section header ── */}
        <div className="mb-10">
          <p className="section-label">{CONTACT.kicker}</p>
          <h2 id="contact-heading" className="heading-xl mt-3">
            {CONTACT.title}
          </h2>
          <div className="section-divider" />
          <p className="prose-body mt-4">{CONTACT.subtitle}</p>
        </div>

        {/* ── Contact cards ── */}
        <div className="grid gap-5 sm:grid-cols-2">
          {/* Phone */}
          <div className="card p-6">
            <div className="mb-3 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                ದೂರವಾಣಿ
              </p>
            </div>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="block text-xl font-bold transition hover:opacity-80"
              style={{ color: 'var(--navy)' }}
            >
              {SITE.phone}
            </a>
          </div>

          {/* Address */}
          <div className="card p-6">
            <div className="mb-3 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </span>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                ವಿಳಾಸ
              </p>
            </div>
            <address className="not-italic text-sm leading-7" style={{ color: 'var(--ink-2)' }}>
              {SITE.address.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < SITE.address.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>
        </div>
      </div>
    </section>
  )
}
