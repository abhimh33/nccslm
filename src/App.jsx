/**
 * App.jsx — Root application component.
 *
 * Manages language state and assembles all sections.
 * To edit content, open: src/content.js
 */

import { useState } from 'react'
import { content }   from './content.js'

import Header         from './components/Header.jsx'
import Footer         from './components/Footer.jsx'
import HeroSection    from './sections/HeroSection.jsx'
import AboutSection   from './sections/AboutSection.jsx'
import GallerySection from './sections/GallerySection.jsx'
import ContactSection from './sections/ContactSection.jsx'

export default function App() {
  const [language, setLanguage] = useState('kn')

  const text = content[language]

  const toggleLanguage = () =>
    setLanguage((current) => (current === 'kn' ? 'en' : 'kn'))

  return (
    <div
      className="min-h-screen bg-stone-50 text-zinc-900"
      lang={language}
    >
      <Header
        text={text}
        language={language}
        onToggleLang={toggleLanguage}
      />

      <main>
        <HeroSection    text={text.hero}    />
        <AboutSection   text={text.about}   />
        <GallerySection text={text.gallery} />
        <ContactSection text={text.contact} />
      </main>

      <Footer text={text} />
    </div>
  )
}
