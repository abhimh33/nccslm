/**
 * AboutSection.jsx — Bilingual About section with paragraphs and highlight cards.
 *
 * Props:
 *   text — current language's content.about object
 */

export default function AboutSection({ text }) {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="shell py-16 md:py-24"
    >
      {/* ── Section header ── */}
      <div className="mb-10 max-w-2xl">
        <p className="section-label">{text.kicker}</p>
        <h2 id="about-heading" className="heading-xl mt-3">
          {text.title}
        </h2>
      </div>

      {/* ── Main layout: prose + highlights ── */}
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Prose block */}
        <div className="card p-6 sm:p-8 lg:p-10">
          <div className="space-y-6">
            {text.paragraphs.map((para, i) => (
              <p
                key={i}
                className="prose-body"
              >
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* Highlight cards */}
        <div className="flex flex-col gap-4">
          {text.highlights.map((point, i) => (
            <div
              key={i}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-shadow hover:shadow-sm"
            >
              {/* Numbered indicator */}
              <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900 text-xs font-bold text-white">
                {i + 1}
              </span>
              <p className="mt-1 text-base font-semibold text-zinc-900">
                {point.title}
              </p>
              <p className="mt-1.5 text-sm leading-7 text-zinc-600">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
