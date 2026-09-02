# NCCSLM – Modern Kannada Cooperative Society Website

A modern single-page website for Netaji Credit Co-operative Society Ltd. built with React, Vite, and Tailwind CSS.

Live domain: https://nccslm.in/

## Project overview

This project is a responsive, single-page website designed for a cooperative society with:

- Kannada-first content and typography
- clean modern layout
- smooth in-page navigation
- service highlights and member gallery
- contact section with phone and email
- SEO metadata for production deployment

## Tech stack

- React
- Vite
- Tailwind CSS
- JavaScript

## Local development

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Then open:

```text
http://localhost:5173/
```

## Production build

```bash
npm run build
```

## Deployment

This project is Vercel-ready.

1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Deploy using the default Vite settings.
4. Add the custom domain:
   - https://nccslm.in/
5. Configure the DNS records as shown in the Vercel dashboard.

## Important files

- `src/content.js` — all website text and content
- `src/components/` — reusable UI components
- `src/sections/` — page sections
- `src/index.css` — styles and design tokens
- `public/images/` — image assets
- `index.html` — metadata and SEO tags

## Image folder

Place your site images in:

```text
public/images/
```

Use files like:

- `logo.png`
- `bank_photo.png`
- `row_photo1.jpeg`

## Notes

- Kannada text is kept as real Unicode text, not converted to images.
- The site is optimized for mobile-friendly rendering and responsive layout.
- No backend, database, or authentication is required.
