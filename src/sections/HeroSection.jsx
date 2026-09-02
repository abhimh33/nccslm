import { SITE, HERO } from '../content.js'

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
      style={{ background: 'var(--navy)' }}
    >
      {/* Subtle decorative pattern */}
      <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="shell relative grid items-center gap-8 py-16 md:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-24">
        {/* ── Copy column ── */}
        <div className="space-y-6 text-center lg:text-left">
          {/* Established badge */}
          <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold"
               style={{ borderColor: 'rgba(194,149,46,0.4)', color: 'var(--gold-light)', background: 'rgba(194,149,46,0.1)' }}>
            <span>ಸ್ಥಾಪನೆ: {SITE.established}</span>
          </div>

          {/* Organisation name */}
          <h1
            id="hero-heading"
            className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-[2.6rem]"
            style={{ color: 'var(--white)' }}
          >
            {SITE.name}
          </h1>

          {/* Tagline */}
          <p
            className="text-lg font-semibold sm:text-xl"
            style={{ color: 'var(--gold-light)' }}
          >
            {HERO.heading}
          </p>

          {/* Description */}
          <p
            className="mx-auto max-w-lg text-base leading-8 lg:mx-0"
            style={{ color: 'rgba(255,255,255,0.75)' }}
          >
            {HERO.subheading}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
            <a href="#about" className="btn-gold">
              {HERO.ctaPrimary}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98]"
              style={{ borderColor: 'rgba(255,255,255,0.3)' }}
            >
              {HERO.ctaSecondary}
            </a>
          </div>

          {/* Phone link */}
          <div className="pt-1">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-80"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {SITE.phone}
            </a>
          </div>
        </div>

        {/* ── Image column ── */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            className="absolute -inset-4 rounded-2xl opacity-20 blur-2xl"
            style={{ background: 'var(--gold)' }}
            aria-hidden="true"
          />
          <img
            src="/images/photo-1.jpg"
            alt={HERO.imageAlt}
            width="640"
            height="480"
            className="relative h-64 w-full rounded-2xl border object-cover shadow-2xl sm:h-80 md:h-96 lg:h-[420px]"
            style={{ borderColor: 'rgba(255,255,255,0.12)' }}
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      {/* Bottom edge accent */}
      <div className="h-1" style={{ background: 'var(--gold)' }} aria-hidden="true" />
    </section>
  )
}
