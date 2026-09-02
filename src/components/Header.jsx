import { useState, useEffect } from 'react'
import { SITE, NAV } from '../content.js'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-[var(--border)] bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="shell flex items-center justify-between py-3">
        {/* ── Logo / Org name ── */}
        <a
          href="#home"
          className="flex items-center gap-3 focus-visible:rounded-lg"
          aria-label={`${SITE.name} — ಮುಖಪುಟಕ್ಕೆ ಹೋಗಿ`}
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
            style={{ background: 'var(--navy)' }}
            aria-hidden="true"
          >
            ನೇ
          </span>
          <span
            className="hidden text-sm font-semibold sm:block sm:max-w-[280px] lg:max-w-none"
            style={{ color: 'var(--navy)' }}
          >
            {SITE.name}
          </span>
          <span
            className="text-sm font-semibold sm:hidden"
            style={{ color: 'var(--navy)' }}
          >
            {SITE.nameShort}
          </span>
        </a>

        {/* ── Desktop nav ── */}
        <div className="hidden items-center gap-6 lg:flex" role="navigation" aria-label="ಮುಖ್ಯ ಸಂಚಾಲನೆ">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors duration-150 hover:opacity-80"
              style={{ color: 'var(--ink-2)' }}
            >
              {item.label}
            </a>
          ))}
          {/* Phone CTA */}
          <a
            href={`tel:${SITE.phoneTel}`}
            className="btn-primary !rounded-lg !px-4 !py-2 !text-xs"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            {SITE.phone}
          </a>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-white lg:hidden"
          style={{ borderColor: 'var(--border)' }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'ಮೆನು ಮುಚ್ಚಿ' : 'ಮೆನು ತೆರೆಯಿರಿ'}
        >
          {menuOpen ? (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          )}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      {menuOpen && (
        <div id="mobile-menu" className="shell pb-4 lg:hidden">
          <nav
            className="rounded-xl border bg-white p-3 shadow-lg"
            style={{ borderColor: 'var(--border)' }}
            role="navigation"
            aria-label="ಮೊಬೈಲ್ ಸಂಚಾಲನೆ"
          >
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-2.5 text-base font-medium transition hover:bg-stone-50"
                style={{ color: 'var(--ink-2)' }}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-2 border-t pt-3" style={{ borderColor: 'var(--border-light)' }}>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="btn-primary w-full justify-center !text-sm"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {SITE.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
