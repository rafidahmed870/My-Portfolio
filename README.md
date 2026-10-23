<div align="center">

# Rafid Ahmed — Portfolio

**Personal portfolio of Rafid Ahmed, full-stack developer from Dhaka, Bangladesh.**

[![Live](https://img.shields.io/badge/Live-rafidstudio.cloud-8b5cf6?style=flat-square&logo=vercel&logoColor=white)](https://rafidstudio.cloud)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

</div>

---

## Overview

A modern, dark-themed developer portfolio built with Next.js 16 App Router. Features per-section skeleton loading, full SEO coverage, a physics-based interactive lanyard card, animated text effects, and a Docker-ready production setup.

**Live at → [rafidstudio.cloud](https://rafidstudio.cloud)**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animation | Motion (Framer Motion fork) |
| 3D / Physics | Three.js (Lanyard card) |
| UI Components | shadcn/ui |
| Package Manager | pnpm |
| Containerization | Docker + Docker Compose |

---

## Features

- **Per-section skeleton loading** — each section shows its own matching skeleton while content streams in, no blank flashes
- **Physics lanyard card** — Three.js powered interactive ID card in the contact section
- **Animated text** — BlurText, TechText components with scroll/load triggers
- **Full SEO** — Open Graph, Twitter cards, JSON-LD structured data (Person + WebSite schema), canonical URLs, sitemap, robots.txt
- **Dynamic OG image** — auto-generated at `/opengraph-image` via `next/og`
- **PWA ready** — web manifest, theme color, apple touch icon
- **Static output** — all routes prerendered as static HTML at build time
- **Docker production setup** — multi-stage build, non-root user, standalone output, healthcheck
- **Custom 404 page** — themed not-found page with navigation

---

## Project Structure

```
rafid-studio-portfolio/
├── app/
│   ├── layout.tsx          # Root layout, metadata, JSON-LD, fonts
│   ├── page.tsx            # Home page with Suspense boundaries
│   ├── loading.tsx         # Route-level loading skeleton
│   ├── not-found.tsx       # Custom 404 page
│   ├── sitemap.ts          # /sitemap.xml
│   ├── robots.ts           # /robots.txt
│   ├── opengraph-image.tsx # Dynamic OG image (1200×630)
│   ├── icon.tsx            # Dynamic favicon (32×32)
│   ├── apple-icon.tsx      # Dynamic apple touch icon (180×180)
│   └── globals.css         # Global styles, CSS variables
├── components/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Work.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Nav.tsx
│   ├── DockNav.tsx
│   ├── DockNavWrapper.tsx  # Client wrapper for ssr:false
│   ├── Lanyard.tsx         # Three.js physics card
│   ├── BlurText.tsx        # Animated text component
│   ├── TechText.tsx        # Canvas-based text component
│   ├── skeletons/          # Per-section skeleton components
│   │   ├── HeroSkeleton.tsx
│   │   ├── AboutSkeleton.tsx
│   │   ├── ServicesSkeleton.tsx
│   │   ├── WorkSkeleton.tsx
│   │   ├── ContactSkeleton.tsx
│   │   └── FooterSkeleton.tsx
│   └── ui/
│       └── skeleton.tsx    # shadcn Skeleton primitive
├── data/
│   ├── icons.tsx
│   ├── nav-items.tsx
│   └── social-links.tsx
├── lib/
│   ├── constants.ts        # BASE_URL, site title/description
│   └── utils.ts            # cn() helper
├── public/
│   ├── og-image.png        # Static OG image fallback
│   └── manifest.json       # PWA manifest
├── assets/                 # Source images (imported via next/image)
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
└── next.config.ts
```

---

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 11+

### Installation

```bash
# Clone the repo
git clone https://github.com/rafidahmed870/My-Portfolio.git
cd My-Portfolio

# Install dependencies
pnpm install
```

### Development

```bash
pnpm dev
```

Opens at **http://localhost:5040**

### Production Build

```bash
pnpm build
pnpm start
```

---

## Docker

### Run with Docker Compose

```bash
docker compose up -d --build
```

App will be available at **http://localhost:5040**

### Run with Docker only

```bash
docker build -t rafid-studio-portfolio .
docker run -p 5040:5040 rafid-studio-portfolio
```

### How it works

The Dockerfile uses a **3-stage multi-stage build**:

| Stage | Base | Purpose |
|---|---|---|
| `deps` | `node:22-alpine` | Install dependencies with frozen lockfile |
| `builder` | `node:22-alpine` | Build Next.js app → `.next/standalone` |
| `runner` | `node:22-alpine` | Minimal runtime image, non-root user |

The final image only contains the standalone output — no `node_modules` bloat, ~150MB total.

---

## SEO & Metadata

| Feature | Detail |
|---|---|
| Title template | `%s \| Rafid Ahmed` |
| Canonical URL | `https://rafidstudio.cloud` |
| Open Graph | 1200×630 image, title, description, locale |
| Twitter Card | `summary_large_image` |
| JSON-LD | `Person` + `WebSite` schema |
| Sitemap | `/sitemap.xml` — static, 5 entries |
| Robots | `/robots.txt` — allow all, disallow `/_next/` |
| Viewport | Separate `viewport` export (Next.js 15+) |
| PWA | Manifest, theme color, apple touch icon |

To verify ownership in Google Search Console, uncomment the `verification` block in `app/layout.tsx` and add your token.

---

## Environment Variables

No required environment variables for the base portfolio. All configuration lives in `lib/constants.ts`.

| Variable | Default | Description |
|---|---|---|
| `PORT` | `5040` | Server port (set via Docker env or `-p` flag) |
| `HOSTNAME` | `0.0.0.0` | Bind address |
| `NODE_ENV` | `production` | Node environment |
| `NEXT_TELEMETRY_DISABLED` | `1` | Disable Next.js telemetry |

---

## License

MIT — feel free to use this as inspiration for your own portfolio.

---

<div align="center">

Built by [Rafid Ahmed](https://rafidstudio.cloud) · Dhaka, Bangladesh

</div>
