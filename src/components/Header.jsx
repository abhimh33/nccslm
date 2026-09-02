/**
 * Header.jsx — Sticky navigation bar with language toggle and mobile menu.
 *
 * Props:
 *   text       — current language's content object
 *   language   — 'kn' | 'en'
 *   onToggleLang — function to toggle language
 */

import { useState, useEffect } from 'react'

export default function Header({ text, language, onToggleLang }) {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [scrolled, setScrolled]   = useState(false)

  /* Compact header on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close mobile menu on route-hash click */
  const closeMenu = () => setMenuOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-stone-200/80 bg-white/90 shadow-sm backdrop-blur-md'
          : 'border-transparent bg-white/70 backdrop-blur-sm'
      }`}
    >
      <nav className="shell flex items-center justify-between py-4">
        {/* ── Logo / Site name ── */}
        <a
          href="#home"
          className="flex items-center gap-3 focus-visible:rounded-lg"
          aria-label={`${text.siteName} — ಮುಖಪುಟಕ್ಕೆ ಹೋಗಿ`}
        >
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-sm font-bold text-white"
            aria-hidden="true"
          >
            {text.siteNameShort}
          </span>
          <span className="text-base font-semibold tracking-tight text-zinc-900 sm:text-lg">
            {text.siteName}
          </span>
        </a>

        {/* ── Desktop nav links ── */}
        <div className="hidden items-center gap-7 md:flex" role="navigation" aria-label="Main navigation">
          {text.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-zinc-600 transition-colors duration-150 hover:text-zinc-900"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* ── Right controls ── */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            type="button"
            onClick={onToggleLang}
            className="rounded-full border border-stone-300 bg-white px-3 py-1.5 text-xs font-bold text-zinc-700 transition hover:border-stone-400 hover:text-zinc-900 focus-visible:outline-offset-2"
            aria-label={language === 'kn' ? 'Switch to English' : 'ಕನ್ನಡಕ್ಕೆ ಬದಲಿಸಿ'}
          >
            {language === 'kn' ? 'EN' : 'ಕ'}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-stone-300 bg-white text-zinc-700 transition hover:bg-stone-50 md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? (
              /* X icon */
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            ) : (
              /* Hamburger icon */
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile dropdown menu ── */}
      {menuOpen && (
        <div id="mobile-menu" className="shell pb-4 md:hidden">
          <nav
            className="rounded-2xl border border-stone-200 bg-white p-3 shadow-md"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {text.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-2.5 text-base font-medium text-zinc-700 transition hover:bg-stone-100 hover:text-zinc-900"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
