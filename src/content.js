// ─────────────────────────────────────────────────────────────────────────────
// content.js — All website text lives here.
//
// HOW TO EDIT YOUR CONTENT:
//   Search for lines marked  // REPLACE  and change the value on that line.
//   The `kn` object = Kannada text.
//   The `en` object = English text.
//   Both objects must keep the same key structure.
// ─────────────────────────────────────────────────────────────────────────────

export const content = {
  kn: {
    // ── Site identity ──────────────────────────────────────────────────────
    siteName:      'ಎನ್.ಸಿ.ಸಿ.ಎಸ್.ಎಲ್.ಎಂ', // REPLACE — your org name in Kannada
    siteNameShort: 'ನಂ',                      // REPLACE — 2-letter abbrev for logo circle

    // ── Navigation ─────────────────────────────────────────────────────────
    nav: [
      { label: 'ಮುಖಪುಟ',   href: '#home'    },
      { label: 'ನಮ್ಮ ಬಗ್ಗೆ', href: '#about'   },
      { label: 'ಗ್ಯಾಲರಿ',    href: '#gallery' },
      { label: 'ಸಂಪರ್ಕ',    href: '#contact' },
    ],

    // ── Hero section ────────────────────────────────────────────────────────
    hero: {
      eyebrow:     'ಕನ್ನಡ • ಸಂಸ್ಕೃತಿ • ಗುಣಮಟ್ಟ', // REPLACE — short tagline or category
      title:       'ಇಲ್ಲಿ ನಿಮ್ಮ ಮುಖ್ಯ ಕನ್ನಡ ಶೀರ್ಷಿಕೆ ಬರೆಯಿರಿ',   // REPLACE — hero heading
      description: 'ಇಲ್ಲಿ ನಿಮ್ಮ ಸಂಕ್ಷಿಪ್ತ ಕನ್ನಡ ವಿವರಣೆ ಬರೆಯಿರಿ. ಒಂದು ಅಥವಾ ಎರಡು ವಾಕ್ಯಗಳಲ್ಲಿ ನಿಮ್ಮ ಸೇವೆ ಅಥವಾ ಸಂಸ್ಥೆಯ ಉದ್ದೇಶವನ್ನು ತಿಳಿಸಿ.', // REPLACE
      subtitleEn:  'A trusted organisation serving the community with dedication.', // REPLACE or set to '' to hide
      cta:         'ಇನ್ನಷ್ಟು ತಿಳಿಯಿರಿ', // REPLACE — primary CTA button label
      ctaSecondary:'ಸಂಪರ್ಕಿಸಿ',         // REPLACE — secondary CTA button label
      imageAlt:    'ಸಂಸ್ಥೆಯ ಮುಖ್ಯ ಚಿತ್ರ', // REPLACE — describe what photo-1.jpg shows
    },

    // ── About section ────────────────────────────────────────────────────────
    about: {
      kicker: 'ನಮ್ಮ ಬಗ್ಗೆ',
      title:  'ಇಲ್ಲಿ ನಮ್ಮ ಸಂಸ್ಥೆಯ ಹಿನ್ನೆಲೆ ಮತ್ತು ಉದ್ದೇಶ', // REPLACE — about heading
      paragraphs: [
        // REPLACE — Add/remove paragraphs as needed
        'ಇಲ್ಲಿ ನಿಮ್ಮ ಮೊದಲ ಅನುಚ್ಛೇದ ಬರೆಯಿರಿ. ನಿಮ್ಮ ಸಂಸ್ಥೆ, ಸೇವೆ ಅಥವಾ ಕೆಲಸದ ಬಗ್ಗೆ ಸ್ಪಷ್ಟವಾಗಿ ತಿಳಿಸಿ. ಓದುಗರಿಗೆ ಸುಲಭವಾಗಿ ಅರ್ಥವಾಗುವಂತೆ ಸರಳ ಭಾಷೆಯಲ್ಲಿ ಬರೆಯಿರಿ.',
        'ಇಲ್ಲಿ ನಿಮ್ಮ ಎರಡನೇ ಅನುಚ್ಛೇದ ಬರೆಯಿರಿ. ನಿಮ್ಮ ವಿಶೇಷತೆ, ಅನುಭವ ಅಥವಾ ಸಾಧನೆಗಳ ಬಗ್ಗೆ ಮಾಹಿತಿ ನೀಡಿ.',
      ],
      highlights: [
        { title: 'ನಮ್ಮ ಗುರಿ',    description: 'ನಿಮ್ಮ ಮೊದಲ ಪ್ರಮುಖ ಅಂಶದ ವಿವರಣೆ ಇಲ್ಲಿ ಬರೆಯಿರಿ.'  }, // REPLACE
        { title: 'ನಮ್ಮ ಸೇವೆ',    description: 'ನಿಮ್ಮ ಎರಡನೇ ಪ್ರಮುಖ ಅಂಶದ ವಿವರಣೆ ಇಲ್ಲಿ ಬರೆಯಿರಿ.' }, // REPLACE
        { title: 'ನಮ್ಮ ಬದ್ಧತೆ',   description: 'ನಿಮ್ಮ ಮೂರನೇ ಪ್ರಮುಖ ಅಂಶದ ವಿವರಣೆ ಇಲ್ಲಿ ಬರೆಯಿರಿ.'  }, // REPLACE
      ],
    },

    // ── Gallery section ──────────────────────────────────────────────────────
    gallery: {
      kicker: 'ಗ್ಯಾಲರಿ',
      title:  'ನಮ್ಮ ಛಾಯಾಚಿತ್ರಗಳು', // REPLACE — gallery heading
      photos: [
        { src: '/images/photo-1.jpg', alt: 'ಮೊದಲ ಚಿತ್ರ',   caption: 'ಛಾಯಾಚಿತ್ರ ೧' }, // REPLACE alt + caption
        { src: '/images/photo-2.jpg', alt: 'ಎರಡನೇ ಚಿತ್ರ',  caption: 'ಛಾಯಾಚಿತ್ರ ೨' }, // REPLACE alt + caption
        { src: '/images/photo-3.jpg', alt: 'ಮೂರನೇ ಚಿತ್ರ',  caption: 'ಛಾಯಾಚಿತ್ರ ೩' }, // REPLACE alt + caption
      ],
    },

    // ── Contact section ──────────────────────────────────────────────────────
    contact: {
      kicker:   'ಸಂಪರ್ಕ',
      title:    'ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ', // REPLACE
      subtitle: 'ಯಾವುದೇ ಪ್ರಶ್ನೆ ಅಥವಾ ಮಾಹಿತಿಗಾಗಿ ನಮ್ಮನ್ನು ತಲುಪಿ.', // REPLACE
      items: [
        { label: 'ಫೋನ್',     href: 'tel:+919999999999',       value: '+91 99999 99999'     }, // REPLACE
        { label: 'ಇಮೇಲ್',    href: 'mailto:hello@example.com', value: 'hello@example.com'   }, // REPLACE
        { label: 'Instagram', href: 'https://instagram.com',    value: '@yourhandle'         }, // REPLACE
        { label: 'ವಿಳಾಸ',    href: '#contact',                 value: 'ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ'  }, // REPLACE
      ],
    },

    // ── Footer ──────────────────────────────────────────────────────────────
    footer: {
      copyright: '© 2026 ಎನ್.ಸಿ.ಸಿ.ಎಸ್.ಎಲ್.ಎಂ. ಎಲ್ಲಾ ಹಕ್ಕುಗಳೂ ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.', // REPLACE
    },
  },

  en: {
    // ── Site identity ──────────────────────────────────────────────────────
    siteName:      'NCCSLM', // REPLACE — full English organisation name
    siteNameShort: 'N',      // REPLACE — 1-letter abbreviation for logo

    // ── Navigation ─────────────────────────────────────────────────────────
    nav: [
      { label: 'Home',    href: '#home'    },
      { label: 'About',   href: '#about'   },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Contact', href: '#contact' },
    ],

    // ── Hero section ────────────────────────────────────────────────────────
    hero: {
      eyebrow:     'Kannada • Culture • Quality', // REPLACE
      title:       'Your main English headline here', // REPLACE
      description: 'Write a short English description of your organisation, service, or purpose. Keep it clear and concise.', // REPLACE
      subtitleEn:  '',
      cta:         'Learn more',   // REPLACE
      ctaSecondary:'Contact us',   // REPLACE
      imageAlt:    'Main feature photo', // REPLACE
    },

    // ── About section ────────────────────────────────────────────────────────
    about: {
      kicker: 'About',
      title:  'Our background and purpose', // REPLACE
      paragraphs: [
        'Write your first paragraph here. Describe your organisation clearly.', // REPLACE
        'Write your second paragraph here. Share experience or achievements.',   // REPLACE
      ],
      highlights: [
        { title: 'Our mission',    description: 'Describe your first key point here.'  }, // REPLACE
        { title: 'Our services',   description: 'Describe your second key point here.' }, // REPLACE
        { title: 'Our commitment', description: 'Describe your third key point here.'  }, // REPLACE
      ],
    },

    // ── Gallery section ──────────────────────────────────────────────────────
    gallery: {
      kicker: 'Gallery',
      title:  'Our photographs', // REPLACE
      photos: [
        { src: '/images/photo-1.jpg', alt: 'First photo',  caption: 'Photo 1' }, // REPLACE
        { src: '/images/photo-2.jpg', alt: 'Second photo', caption: 'Photo 2' }, // REPLACE
        { src: '/images/photo-3.jpg', alt: 'Third photo',  caption: 'Photo 3' }, // REPLACE
      ],
    },

    // ── Contact section ──────────────────────────────────────────────────────
    contact: {
      kicker:   'Contact',
      title:    'Get in touch',  // REPLACE
      subtitle: 'Reach out to us with any questions or for more information.', // REPLACE
      items: [
        { label: 'Phone',     href: 'tel:+919999999999',       value: '+91 99999 99999'     }, // REPLACE
        { label: 'Email',     href: 'mailto:hello@example.com', value: 'hello@example.com'   }, // REPLACE
        { label: 'Instagram', href: 'https://instagram.com',    value: '@yourhandle'         }, // REPLACE
        { label: 'Address',   href: '#contact',                 value: 'Bengaluru, Karnataka' }, // REPLACE
      ],
    },

    // ── Footer ──────────────────────────────────────────────────────────────
    footer: {
      copyright: '© 2026 NCCSLM. All rights reserved.', // REPLACE
    },
  },
}
