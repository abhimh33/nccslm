/**
 * HeroSection.jsx — Full-width hero with image, heading, description, and CTAs.
 *
 * Props:
 *   text — current language's content.hero object
 */

export default function HeroSection({ text }) {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="shell grid items-center gap-10 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr]"
    >
      {/* ── Copy column ── */}
      <div className="space-y-7 lg:max-w-xl">
        {/* Eyebrow tag */}
        <p className="inline-flex items-center rounded-full border border-stone-300 bg-stone-100/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-stone-600">
          {text.eyebrow}
        </p>

        {/* Main heading */}
        <h1
          id="hero-heading"
          className="heading-xl max-w-lg !leading-tight text-zinc-900"
        >
          {text.title}
        </h1>

        {/* English subtitle (shown when non-empty) */}
        {text.subtitleEn && (
          <p className="text-base font-medium text-stone-500 sm:text-lg">
            {text.subtitleEn}
          </p>
        )}

        {/* Description */}
        <p className="prose-body max-w-md">
          {text.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a href="#about" className="btn-primary">
            {text.cta}
          </a>
          <a href="#contact" className="btn-outline">
            {text.ctaSecondary}
          </a>
        </div>
      </div>

      {/* ── Image column ── */}
      <div className="relative">
        {/* Decorative glow */}
        <div
          className="absolute -inset-6 rounded-[2.5rem] bg-stone-200/60 blur-3xl"
          aria-hidden="true"
        />
        {/* Hero photo — uses photo-1.jpg */}
        <figure className="relative">
          <img
            src="/images/photo-1.jpg"
            alt={text.imageAlt}
            width="720"
            height="540"
            className="relative h-72 w-full rounded-3xl border border-stone-200 object-cover shadow-2xl sm:h-[420px] md:h-[480px] lg:h-[500px]"
            loading="eager"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
