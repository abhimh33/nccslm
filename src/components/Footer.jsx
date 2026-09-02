/**
 * Footer.jsx — Minimal professional footer.
 *
 * Props:
 *   text — current language's content object (uses siteName + footer)
 */

export default function Footer({ text }) {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-8 border-t border-stone-200 bg-white/80">
      <div className="shell flex flex-col gap-4 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        {/* Site name */}
        <p className="font-semibold text-zinc-800">{text.siteName}</p>

        {/* Copyright */}
        <p>{text.footer.copyright.replace('2026', year)}</p>

        {/* Footer nav links */}
        <nav aria-label="Footer navigation" className="flex gap-5">
          <a href="#about"   className="transition hover:text-zinc-800">{text.nav[1].label}</a>
          <a href="#gallery" className="transition hover:text-zinc-800">{text.nav[2].label}</a>
          <a href="#contact" className="transition hover:text-zinc-800">{text.nav[3].label}</a>
        </nav>
      </div>
    </footer>
  )
}
