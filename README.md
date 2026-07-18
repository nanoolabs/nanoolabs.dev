# nanoolabs.dev [⌐■_■]

> Official website and lab showcase for Nanoo. Astro 5 site (currently single page, growing) deploy to Cloudflare Pages.

`Astro` `Tailwind CSS` `Cloudflare Pages` `pnpm`

## Overview

This is the public face of Nanoo - an experimental engineering lab for the edge ecosystem. The site lists active lab projects ("Nanoo Stack", "Nanoo CDN", "Nanoo webrings", etc.) and links to their documentation and repositories.

## Architecture & Tech Stack

- **Runtime:** Node.js 22 (CI) / any modern Node
- **Framework:** Astro 5 (static site generation, zero js by default)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite` with design token from `@nlbs/css` (published npm package from `nanoolabs/css`, CSS custom properties)
- **Fonts:** Geist Sans + Geist Mono via `@fontsource`
- **Hosting:** Cloudflare Pages (static output in `dist/`)

## Quickstart

```bash
# 1. Clone & Instal
git clone https://github.com/nanoolabs/nanoolabs.dev.git
cd nanoolabs.dev
pnpm install

# 2. Run Dev Server
pnpm dev
```

## Project Structure

```
├── src/
│   ├── components/    # Astro components (Button, Card, Footer, etc)
│   ├── layouts/       # BaseLayout.astro (HTML shell with Meta tag)
│   ├── pages/         # Pages (currently only index.astro, growing)
│   ├── styles/        # global.css (Tailwind + design tokens)
│   ├── consts.ts      # Site metadata & experiment data
│   └── types.ts       # Shared typescript interfaces
├── public/
│   ├── _headers       # Cloudflare security & cache headers
│   └── _redirects     # Cloudflare redirect rules
├── .github/workflows/ # CI/CD (deploy + releasee)
├── astro.config.mjs
└── package.json
```

## Development & Ops

- **Dev server:** `pnpm dev`
- **Build:** `pnpm build` → outputs to `dist/`
- **Preview:** `pnpm preview` (preview built site locally)
- **Format:** `pnpm format` (Prettier — no linter, no test) temporary

---

## Nanoo Labs Ecosystem

This project is part of the [nanoolabs.dev](https://nanoolabs.dev) ecosystems . Design tokens live in the `@nlbs/css` package (published from `nanoolabs/css`) - update tokens there, not in local CSS

## Contributing

Strict PR rules.

1. Checkout to a feature branch (`feat/name-feature`).
2. Run `pnpm format` before pushing.
3. Commit messages must follow Conventional Commits (e.g., `feat: add experiment card `).

## License

MIT License — Nanoo Labs © 2026.
