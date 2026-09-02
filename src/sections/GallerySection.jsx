/**
 * GallerySection.jsx — 3-photo responsive gallery.
 *
 * Image files expected at:
 *   public/images/photo-1.jpg
 *   public/images/photo-2.jpg
 *   public/images/photo-3.jpg
 *
 * Props:
 *   text — current language's content.gallery object
 */

export default function GallerySection({ text }) {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="shell py-16 md:py-24"
    >
      {/* ── Section header ── */}
      <div className="mb-10">
        <p className="section-label">{text.kicker}</p>
        <h2 id="gallery-heading" className="heading-xl mt-3">
          {text.title}
        </h2>
      </div>

      {/* ── Photo grid ── */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {text.photos.map((photo, i) => (
          <figure
            key={i}
            className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                width="720"
                height="540"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-72"
                loading="lazy"
                decoding="async"
              />
              {/* Subtle overlay on hover */}
              <div
                className="absolute inset-0 bg-zinc-900/0 transition-all duration-300 group-hover:bg-zinc-900/10"
                aria-hidden="true"
              />
            </div>
            <figcaption className="border-t border-stone-100 bg-white px-5 py-3 text-sm font-medium text-zinc-600">
              {photo.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
