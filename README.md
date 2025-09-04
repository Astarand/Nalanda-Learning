# Nalanda Learning — Next.js Application

A modern web application built with Next.js (App Router) for the Nalanda Learning website. This repository contains the source code, components, pages, and configuration needed to develop, build, and deploy the project.

<p align="center">
  <a href="https://nextjs.org" target="_blank"><img alt="Next.js" src="https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white"></a>
  <a href="https://react.dev" target="_blank"><img alt="React" src="https://img.shields.io/badge/React-19-61dafb?logo=react&logoColor=white"></a>
  <img alt="Node" src="https://img.shields.io/badge/Node.js-%E2%89%A5%2018.18%20%7C%2020+-339933?logo=node.js&logoColor=white">
  <img alt="Status" src="https://img.shields.io/badge/status-active-success">
  <img alt="License" src="https://img.shields.io/badge/license-private-lightgrey">
</p>

> Current stack: Next.js 15, React 19, Turbopack (dev), ESLint. No runtime environment variables are required at the moment.

---

## Quick Links
- Getting Started
- Scripts
- Project Structure
- Architecture
- Deployment
- Contributing

## Table of Contents
- Features
- Tech Stack
- Prerequisites
- Getting Started (Local Development)
- Available Scripts
- Project Structure
- Architecture
- Configuration and Environment
- Build
- Run in Production
- Deployment
- Quality & Standards
- Contributing
- Troubleshooting
- License
- Acknowledgements

## Preview / Screenshots
Add screenshots or GIFs here to showcase key pages and flows. Store assets under `public/`.

## Features
- Next.js App Router using the `app/` directory
- Fast local development with Turbopack (`next dev --turbo`)
- Modular components under `components/`
- Static assets served from `public/`
- ESLint integrated; build ignores lint errors by config (can be tightened later)
- Lightbox support via `yet-another-react-lightbox`

## Tech Stack
- Next.js 15.3.x
- React 19
- Node.js >= 18.18.0 (LTS recommended) or Node.js 20+
- Package manager: npm (recommended). Yarn/Pnpm/Bun can work but scripts here assume npm.

## Prerequisites
- Node.js 18.18+ or 20+ installed
- npm 9+ recommended

## Getting Started (Local Development)
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the app at:
   - http://localhost:3000

Edit files under `app/` (for pages) and `components/` (for reusable UI). Changes hot‑reload automatically.

## Available Scripts
- `npm run dev` – Start development server with Turbopack
- `npm run build` – Create an optimised production build
- `npm run start` – Start the production server (after build)
- `npm run lint` – Run ESLint checks

## Project Structure
- `app/` – App Router pages and layout files (e.g., `app/page.js`, nested routes like `app/about/page.js`)
- `components/` – Reusable React components
- `public/` – Static assets (images, icons, etc.)
- `next.config.mjs` – Next.js configuration (currently ignores ESLint errors during build)
- `eslint.config.mjs` – ESLint configuration
- `package.json` – Scripts and dependencies

### Folder Tree (high level)
```text
.
├─ app/
├─ components/
├─ public/
├─ next.config.mjs
├─ eslint.config.mjs
└─ package.json
```

## Architecture
- App Router (directory-based routing) powers pages, layouts, and nested routes inside `app/`.
- Components are colocated and reused via `components/`.
- Static assets (images/icons) are served from `public/` and referenced with `/asset-name.ext` paths.

## Configuration and Environment
- No environment variables are currently required.
- If you introduce runtime configuration, prefer Next.js runtime env conventions:
  - Public variables: `NEXT_PUBLIC_*`
  - Server-only variables: regular `process.env.*`
  - Add an `.env.local` (not committed) and document new variables here.

## Build
Create a production build:
```bash
npm run build
```

## Run in Production
After building, start the server:
```bash
npm run start
```
The server listens on port 3000 by default. You can set `PORT=XXXX` when deploying on platforms that support it.

## Deployment
- Vercel (recommended): Import the repository on Vercel and deploy. Defaults generally work for Next.js App Router.
- Node server / Docker / other hosts: Build (`npm run build`) and run (`npm run start`). Ensure Node 18.18+ or 20+.

## Quality & Standards
- Linting: `npm run lint` (ESLint 9 + eslint-config-next)
- Consider enabling lint to fail builds by removing `ignoreDuringBuilds: true` in `next.config.mjs` when the codebase is clean.
- Code style: Keep components small and composable; prefer server components where applicable in App Router.

## Contributing
- Create feature branches from `main`.
- Keep PRs focused and add screenshots/GIFs where applicable.
- Run `npm run lint` before opening a PR.
- Commit convention: Conventional Commits style is recommended (e.g., `feat:`, `fix:`, `chore:`).

## Troubleshooting
- Port already in use: stop the other process or run `PORT=3001 npm run dev` (platform-dependent).
- Stale dev server: stop and restart `npm run dev` after dependency or config changes.
- Node version mismatch: ensure Node 18.18+ or 20+.

## License
This is a private project. All rights reserved unless otherwise stated.

## Acknowledgements
- Built with Next.js: https://nextjs.org
- Lightbox by yet-another-react-lightbox
