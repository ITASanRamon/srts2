# ITA San Ramon — srts2 (branch)

This repository contains the `srts2` branch of the ITA San Ramon website. It is a Next.js (App Router) project using TypeScript and Tailwind CSS, with some legacy Express + static HTML assets retained for reference.

Quick links
- App layout: [`RootLayout`](app/layout.tsx) — [app/layout.tsx](app/layout.tsx)
- Home page: [`Home`](app/page.tsx) — [app/page.tsx](app/page.tsx)
- Shared header: [`Header`](app/components/Header.tsx) — [app/components/Header.tsx](app/components/Header.tsx)
- Schedule page: [`SchedulePage`](app/schedule/page.tsx) — [app/schedule/page.tsx](app/schedule/page.tsx)
- Next.js config: [next.config.js](next.config.js) and [next.config.ts](next.config.ts)
- TypeScript config: [tsconfig.json](tsconfig.json)
- Tailwind config: [tailwind.config.js](tailwind.config.js)
- PostCSS config: [postcss.config.mjs](postcss.config.mjs) and [postcss.config.js](postcss.config.js)
- Package manifest: [package.json](package.json) and lockfile [pnpm-lock.yaml](pnpm-lock.yaml)
- Custom Next server: [server.js](server.js)
- Legacy Express app (reference): [app.js](app.js)
- Static public assets: [public/](public/)
- Legacy view template: [views/index.html](views/index.html)

Project overview
- Framework: Next.js (App Router)
- Languages: TypeScript & JavaScript
- Styling: Tailwind CSS for main UI; legacy CSS remains in `public/` for reference
- Purpose: Public site for ITA San Ramon with pages for officers, schedule, teachers, and volunteers.

Repository layout (high level)
- app/ — Next.js App Router routes, components and global layout
  - [app/layout.tsx](app/layout.tsx) — Root layout and font setup
  - [app/page.tsx](app/page.tsx) — Home page
  - [app/components/Header.tsx](app/components/Header.tsx) — top navigation/header
  - [app/schedule/page.tsx](app/schedule/page.tsx) — schedule UI (regular + HSCP)
  - route pages: [app/officers/page.tsx](app/officers/page.tsx), [app/teachers/page.tsx](app/teachers/page.tsx), [app/volunteers/page.tsx](app/volunteers/page.tsx)
- public/ — static assets (images, legacy CSS, backups)
  - legacy styles: [public/css/styles.css](public/css/styles.css)
- views/ — legacy HTML templates (e.g. [views/index.html](views/index.html))
- root config files: [next.config.js](next.config.js), [tsconfig.json](tsconfig.json), [tailwind.config.js](tailwind.config.js)
- server helpers: [server.js](server.js) (custom Next server) and [app.js](app.js) (legacy Express rendering `views/`)

Development environment
- Dev container base: Ubuntu 24.04.2 LTS (branch-specific dev container may be used)
- Node: Recommend Node 18+ (see engine constraints in lockfile for specific packages)
- Package manager: pnpm (preferred). npm/yarn also work.

Local setup
1. Install dependencies:
   pnpm install
2. Run development server:
   pnpm dev
   - `dev` script runs the custom server: [server.js](server.js)
3. Build for production:
   pnpm build
4. Start production server (after build):
   pnpm start

Notes & tips
- The app uses the Next App Router (app/). Prefer editing pages under [app/](app/) rather than legacy templates under [views/](views/).
- The site header/navigation is centralized in [`Header`](app/components/Header.tsx) — updating links there updates all pages.
- Schedule content and logic live in [app/schedule/page.tsx](app/schedule/page.tsx).
- Tailwind CSS is configured in [tailwind.config.js](tailwind.config.js). PostCSS configs are in [postcss.config.mjs](postcss.config.mjs) and [postcss.config.js](postcss.config.js) (both present).
- Legacy Express app `app.js` serves `views/` and static files from `public/` — useful for quick static hosting or migrating content.

Contributing
- Create a feature branch off `srts2`.
- Run linters and tests locally (if configured) before submitting a PR.
- Keep changes focused and include a clear PR description.

If you need pointers to specific components or to move legacy content into the Next app, check the quick links at the top of this README.

Domain verification
- Static verification file (served from public): `public/domain-verification.html`
- Next.js route: `/verify-domain` (file: `app/verify-domain/page.tsx`)

The verification page contains the official verification statement for the srtamilschool.org domain and is available as both a static file and an App Router route.
