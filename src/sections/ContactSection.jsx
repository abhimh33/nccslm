import { SITE, CONTACT } from '../content.js'

// Reusable SVG icons
const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)

function CardIcon({ children }) {
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
      style={{ background: 'var(--gold-soft)', color: 'var(--gold)' }}
      aria-hidden="true"
    >
      {children}
    </span>
  )
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-24"
      style={{ background: 'var(--cream-warm)' }}
    >
      <div className="shell">
        {/* Section header */}
        <div className="mb-10">
          <p className="section-label">{CONTACT.kicker}</p>
          <h2 id="contact-heading" className="heading-xl mt-3">
            {CONTACT.title}
          </h2>
          <div className="section-divider" />
          <p className="prose-body mt-4">{CONTACT.subtitle}</p>
        </div>

        {/* Contact cards grid — 2 cols on sm+, 3 cols on lg+ */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {/* Primary phone (heading) */}
          <div className="card p-6">
            <div className="mb-3 flex items-center gap-3">
              <CardIcon><PhoneIcon /></CardIcon>
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
            {/* Additional phone numbers */}
            <div className="mt-3 space-y-1.5 border-t pt-3" style={{ borderColor: 'var(--border-light)' }}>
              {SITE.phones.map((p) => (
                <a
                  key={p.tel}
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-2 text-base font-semibold transition hover:opacity-80"
                  style={{ color: 'var(--navy)' }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--gold)', flexShrink: 0 }} aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  {p.number}
                </a>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="card p-6">
            <div className="mb-3 flex items-center gap-3">
              <CardIcon><EmailIcon /></CardIcon>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                ಇಮೇಲ್
              </p>
            </div>
            <a
              href={`mailto:${SITE.email}`}
              className="block break-all text-base font-semibold transition hover:opacity-80"
              style={{ color: 'var(--navy)' }}
            >
              {SITE.email}
            </a>
          </div>

          {/* Address — spans full width on sm, normal on lg */}
          <div className="card p-6 sm:col-span-2 lg:col-span-1">
            <div className="mb-3 flex items-center gap-3">
              <CardIcon><LocationIcon /></CardIcon>
              <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
                ವಿಳಾಸ
              </p>
            </div>
            {/* English address */}
            <address className="not-italic text-xs leading-6" style={{ color: 'var(--ink-3)' }}>
              {SITE.addressEn.map((line, i) => (
                <span key={i}>{line}{i < SITE.addressEn.length - 1 && <br />}</span>
              ))}
            </address>
            {/* Kannada address */}
            <address className="mt-2 not-italic text-sm leading-7" style={{ color: 'var(--ink-2)' }}>
              {SITE.addressKn.map((line, i) => (
                <span key={i}>{line}{i < SITE.addressKn.length - 1 && <br />}</span>
              ))}
            </address>
          </div>

        </div>
      </div>
    </section>
  )
}
