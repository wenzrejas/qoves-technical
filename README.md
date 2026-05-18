# Qoves — Technical Task

A pixel-perfect recreation of the Qoves facial analysis SaaS landing page, built as a portfolio technical task.

## Tech Stack

- **Framework** — Next.js
- **Language** — TypeScript
- **Styling** — SCSS Modules with shared variables and mixins
- **Animation** — GSAP + ScrollTrigger
- **Smooth Scroll** — Lenis (desktop only)
- **Icons** — React Feather
- **Formatting** — Prettier

## Sections

| Section | Description |
|---|---|
| **Hero** | Animated SVG bracket frame with before/after images and step indicators |
| **Facial Analysis** | Dark-bg section with face image, chart overlays, and scroll parallax |
| **FAQ** | Accordion with GSAP-animated open/close per category and question |
| **Insecurity** | Sticky video background with two scroll panels — entrance cards + pinned philosophy scroll |

## Project Structure

```
src/
├── app/
│   ├── globals.scss       # Reset and global styles
│   ├── layout.tsx         # Root layout, fonts, SmoothScroll
│   └── page.tsx           # Page composition
├── components/
│   ├── layout/            # Section components
│   │   ├── Hero/
│   │   ├── FacialAnalysis/
│   │   ├── FAQ/
│   │   └── InsecuritySection/
│   └── ui/
│       ├── Badge/          # Reusable badge/label pill
│       └── SmoothScroll/   # Lenis + GSAP ScrollTrigger integration
├── data/                   # Static content (hero steps, FAQ, insecurity cards)
├── lib/
│   └── gsap.ts             # Single GSAP plugin registration point
└── styles/
    ├── _variables.scss     # Design tokens (colors, spacing, typography, easing)
    └── _mixins.scss        # Reusable mixins (container, respond-to, body-text, etc.)
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run format` | Format all `src` files with Prettier |

## Fonts

Custom local fonts loaded via `next/font/local`:

- **PP Neue Montreal** — primary sans-serif (Thin, Book, Medium, Bold, Italic weights)
- **Zagma Mono** — monospace used for labels and badges
