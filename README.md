# Interiia — Next.js Recreation

A high-fidelity recreation of the [Interiia Framer website](https://interiia.framer.website/) built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **GSAP** scroll animations.

## Features
- Letter-by-letter hero title animation
- Smooth fade-up / fade-in on scroll (GSAP + ScrollTrigger)
- Image hover zooms
- Accordion FAQ
- Fully responsive
- Uses original Framer CDN images

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes
- Images are loaded directly from `framerusercontent.com` (hotlinked). For production, download them into `/public/images` and update the `src` paths.
- GSAP ScrollTrigger is registered globally on the homepage.
- This is a visual & structural recreation of the homepage. Other pages (Projects detail, About, Contact, Blog) can be added following the same pattern.

## Tech
- Next.js 16
- React 19
- Tailwind CSS 4
- GSAP 3
