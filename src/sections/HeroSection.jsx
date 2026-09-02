import { SITE, HERO } from '../content.js'

export default function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      style={{ background: 'var(--navy)' }}
    >
      {/* Subtle dot pattern — contained, no overflow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ── Two-column hero ── */}
      <div className="shell relative py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-14">

          {/* Copy column */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Established badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold"
              style={{
                borderColor: 'rgba(194,149,46,0.4)',
                color: 'var(--gold-light)',
                background: 'rgba(194,149,46,0.1)',
              }}
            >
              ಸ್ಥಾಪನೆ: {SITE.established}
            </div>

            {/* Organisation name */}
            <h1
              id="hero-heading"
              className="text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl"
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
            <div className="flex flex-wrap justify-center gap-3 pt-1 lg:justify-start">
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
            <a
              href={`tel:${SITE.phoneTel}`}
              className="inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-80"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {SITE.phone}
            </a>
          </div>

          {/* Image column — bank photo: object-contain so full image is visible */}
          <div
            className="w-full rounded-2xl shadow-2xl"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.12)',
              overflow: 'hidden',
            }}
          >
            <img
              src="/images/bank_photo.png"
              alt={HERO.bankImageAlt}
              width="720"
              height="480"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                maxHeight: '340px',
                objectFit: 'contain',
                objectPosition: 'center center',
              }}
              loading="eager"
              decoding="async"
              onError={(e) => {
                e.currentTarget.parentElement.style.display = 'none'
              }}
            />
          </div>
        </div>

        {/* ── Row photo — full width below the two columns, preserves full aspect ratio ── */}
        <div className="mt-6 w-full">
          <img
            src="/images/row_photo1.jpeg"
            alt={HERO.groupImageAlt}
            width="1200"
            height="400"
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              borderRadius: '1rem',
              border: '1px solid rgba(255,255,255,0.12)',
              boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
            }}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
      </div>

      {/* Gold accent line */}
      <div className="h-1" style={{ background: 'var(--gold)' }} aria-hidden="true" />
    </section>
  )
}
