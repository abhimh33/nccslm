/**
 * App.jsx — Root component for ನೇತಾಜಿ ಕ್ರೆಡಿಟ್ ಕೋ-ಆಪರೇಟಿವ್ ಸೊಸೈಟಿ ಲಿ.
 * All content is managed in src/content.js
 */

import Header         from './components/Header.jsx'
import Footer         from './components/Footer.jsx'
import HeroSection    from './sections/HeroSection.jsx'
import AboutSection   from './sections/AboutSection.jsx'
import ServicesSection from './sections/ServicesSection.jsx'
import GallerySection from './sections/GallerySection.jsx'
import ContactSection from './sections/ContactSection.jsx'

export default function App() {
  return (
    <div className="min-h-screen" lang="kn" style={{ background: 'var(--cream)' }}>
      <Header />

      <main>
        <HeroSection    />
        <AboutSection   />
        <ServicesSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
