import { SITE, ABOUT } from '../content.js'

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="shell py-16 md:py-24"
    >
      {/* ── Section header ── */}
      <div className="mb-10">
        <p className="section-label">{ABOUT.kicker}</p>
        <h2 id="about-heading" className="heading-xl mt-3">
          {ABOUT.title}
        </h2>
        <div className="section-divider" />
      </div>

      {/* ── Two-column layout ── */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Paragraphs */}
        <div className="card p-6 sm:p-8">
          <div className="space-y-5">
            {ABOUT.paragraphs.map((para, i) => (
              <p key={i} className="prose-body">
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Quick facts sidebar */}
        <div className="flex flex-col gap-4">
          {/* Established */}
          <div
            className="rounded-xl border p-5"
            style={{ borderColor: 'var(--border)', background: 'var(--gold-soft)' }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              ಸ್ಥಾಪನೆ
            </p>
            <p className="mt-2 text-3xl font-bold" style={{ color: 'var(--navy)' }}>
              {SITE.established}
            </p>
            <p className="mt-1 text-sm" style={{ color: 'var(--ink-3)' }}>
              {new Date().getFullYear() - SITE.established}+ ವರ್ಷಗಳ ಸೇವೆ
            </p>
          </div>

          {/* Address */}
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              ವಿಳಾಸ
            </p>
            <address className="mt-3 not-italic text-sm leading-7" style={{ color: 'var(--ink-2)' }}>
              {SITE.address.map((line, i) => (
                <span key={i}>
                  {line}
                  {i < SITE.address.length - 1 && <br />}
                </span>
              ))}
            </address>
          </div>

          {/* Phone */}
          <div className="card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--gold)' }}>
              ದೂರವಾಣಿ
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="mt-3 inline-flex items-center gap-2 text-lg font-semibold transition hover:opacity-80"
              style={{ color: 'var(--navy)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--gold)' }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
