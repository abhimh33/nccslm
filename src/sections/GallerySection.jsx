import { GALLERY } from '../content.js'

// Fixed pixel height for all 3 portrait image containers — guaranteed equal, no gap
const IMG_H = 320 // px

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

      {/* ── Staff photo grid ── */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {GALLERY.photos.map((photo, i) => (
          <figure
            key={i}
            className="group overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            style={{ borderColor: 'var(--border)' }}
          >
            {/* Image container — fixed height, no flex, no aspect-ratio */}
            <div
              className="relative overflow-hidden"
              style={{ height: `${IMG_H}px` }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width="480"
                height="640"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  transition: 'transform 0.5s ease',
                }}
                className="group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  const fb = e.currentTarget.nextElementSibling
                  if (fb) fb.style.display = 'flex'
                }}
              />
              {/* Fallback */}
              <div
                style={{
                  display: 'none',
                  position: 'absolute',
                  inset: 0,
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  background: 'var(--cream-warm)',
                  color: 'var(--ink-3)',
                }}
              >
                ಚಿತ್ರ ಲಭ್ಯವಿಲ್ಲ
              </div>
            </div>

            {/* Caption — sits directly below image, zero gap */}
            <figcaption
              style={{
                borderTop: '1px solid var(--border-light)',
                padding: '12px 16px',
                textAlign: 'center',
                background: 'var(--white)',
              }}
            >
              <p
                style={{
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  color: 'var(--navy)',
                  margin: 0,
                }}
              >
                {photo.name}
              </p>
              <p
                style={{
                  fontSize: '0.75rem',
                  lineHeight: '1.5',
                  color: 'var(--ink-3)',
                  margin: '2px 0 0',
                }}
              >
                {photo.role}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
