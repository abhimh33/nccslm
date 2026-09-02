# NCCSLM – Kannada Cooperative Society Website

A clean, modern single-page website for Netaji Credit Co-operative Society Ltd., built with React, Vite, and Tailwind CSS.

Live site: https://nccslm.in/

## Overview

This project is a responsive single-page website for a cooperative society with:

- Kannada-first content and professional typography
- smooth in-page navigation
- hero section with branding and photography
- services and membership staff gallery
- contact card section with phone, email, and address
- SEO metadata and Vercel-ready deployment structure

## Stack

- React
- Vite
- Tailwind CSS
- JavaScript

## Run locally

```bash
npm install
npm run dev -- --host 0.0.0.0
```

Then open:

```text
http://localhost:5173/
```

## Build for production

```bash
npm run build
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Open Vercel and import the repo.
3. Use the default Vite settings.
4. Add the custom domain:
   - https://nccslm.in/
5. Configure the DNS records exactly as Vercel suggests.

## Important project files

- `src/App.jsx` – main page structure
- `src/content.js` – website content in Kannada and English
- `src/components/` – reusable UI components
- `src/sections/` – major page sections
- `src/index.css` – design system, typography, spacing, and colors
- `index.html` – title, description, Open Graph, and favicon metadata
- `public/images/` – final site images

## Required images

Place the images in:

```text
public/images/
```

Recommended files:

- `logo.png`
- `bank_photo1.jpeg`
- `row_photo1.jpeg`

## Notes

- Kannada is rendered as Unicode text and remains selectable/searchable.
- The design is mobile-first and responsive.
- No backend, database, authentication, or API is required.
