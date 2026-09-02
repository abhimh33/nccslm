/**
 * ContactSection.jsx — Clean contact section with clickable cards.
 *
 * Props:
 *   text — current language's content.contact object
 */

export default function ContactSection({ text }) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="shell py-16 md:py-24"
    >
      <div className="card p-6 sm:p-8 lg:p-12">
        {/* ── Section header ── */}
        <div className="mb-10 max-w-xl">
          <p className="section-label">{text.kicker}</p>
          <h2 id="contact-heading" className="heading-xl mt-3">
            {text.title}
          </h2>
          {text.subtitle && (
            <p className="prose-body mt-4">
              {text.subtitle}
            </p>
          )}
        </div>

        {/* ── Contact cards grid ── */}
        <div className="grid gap-4 sm:grid-cols-2">
          {text.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition hover:border-stone-300 hover:bg-white"
            >
              <p className="section-label">{item.label}</p>
              <a
                href={item.href}
                className="mt-3 block text-lg font-semibold text-zinc-900 transition-colors hover:text-stone-600 focus-visible:rounded-md"
                /* Open external links in new tab */
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
