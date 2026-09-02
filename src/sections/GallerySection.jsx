import { GALLERY } from '../content.js'

export default function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="shell py-16 md:py-24"
    >
      {/* ── Section header ── */}
      <div className="mb-10">
        <p className="section-label">{GALLERY.kicker}</p>
        <h2 id="gallery-heading" className="heading-xl mt-3">
          {GALLERY.title}
        </h2>
        <div className="section-divider" />
      </div>

      {/* ── Photo grid ── */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY.photos.map((photo, i) => (
          <figure
            key={i}
            className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="relative overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                width="640"
                height="480"
                className="h-64 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] sm:h-72 md:h-80"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  // Graceful fallback if image is missing
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling.style.display = 'flex'
                }}
              />
              {/* Fallback placeholder */}
              <div
                className="hidden h-64 w-full items-center justify-center text-sm sm:h-72 md:h-80"
                style={{ background: 'var(--cream-warm)', color: 'var(--ink-3)' }}
              >
                ಚಿತ್ರ ಲಭ್ಯವಿಲ್ಲ
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}
