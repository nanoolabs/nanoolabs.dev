# Nanoolabs (v1.1.0)

> **A Lab for Experiments**

Nanoolabs is a minimalist technical Research and Development (R&D) environment built for high performance experiment

## Tech Stack

- **Framework:** [Astro 5.x](https://astro.build/) (Static First)
- **Styling:** [TailwindCSS 4](https://tailwindcss.com/) (Vite Plugin)
- **Runtime:** [Node.js 22 (LTS)](https://nodejs.org/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Search:** [Pagefind](https://pagefind.app/)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/)
- **CI/CD:** GitHub Actions

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm run build

# Preview build locally
pnpm preview
```

## Deployment

Automatic deployment is handled via GitHub Actions to **Cloudflare Pages**.

- **Branch:** `main` triggers production build.
- **Environment:** Node 22, pnpm 9.
- **Project Name:** `nanoolabs`

---

Built to be fast, simple, and scalable by [Adnan Slamet Wibowo](https://nanoolabs.dev).
