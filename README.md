# ITA San Ramon — srts2 (branch)

This repository contains the `srts2` branch of the ITA San Ramon website, built with Next.js (App Router), TypeScript and Tailwind CSS. This README provides branch-specific context, setup steps, and useful tips for contributors working on this branch.

## Project overview

- Framework: Next.js (App Router)
- Languages: TypeScript, JavaScript
- Styling: Tailwind CSS (plus some legacy CSS in `public/css`)
- Purpose: Public site for ITA San Ramon with pages for officers, schedule, teachers, and volunteers.

## Repository structure (important locations)

- `app/` — Next.js App Router source (routes, layouts, components). Key files:
  - `app/layout.tsx` — application layout
  - `app/page.tsx` — home page
  - `app/components/Header.tsx` — shared header component
  - `app/officers`, `app/schedule`, `app/teachers`, `app/volunteers` — route pages
- `public/` — static assets (images, legacy CSS backups)
- `views/` — legacy HTML templates (kept for reference)
- `package.json` — scripts and dependencies
- `next.config.js`, `next.config.ts`, `tsconfig.json`, `tailwind.config.js` — configuration files

## Schedule

### Regular Classes

- Weekly classes for all standard levels.
- Refer to `app/schedule/page.tsx` for the latest schedule and updates.
- Typical timings: Sundays, 10:00 AM – 12:00 PM (see website for details).

### HSCP Classes

- High School Credit Program (HSCP) classes for eligible students.
- Schedule: Sundays, 8:30 AM – 1:00 PM.
- Details and updates are also managed in `app/schedule/page.tsx` or a dedicated HSCP section if available.

## Prerequisites

- Node.js 18+ (recommended)
- pnpm (preferred) — if you use npm or yarn, commands below will note equivalents

## Install & run (local development)

1. Install dependencies

   pnpm install

   (or `npm install` / `yarn install`)

2. Start development server

   pnpm dev

   (or `npm run dev` / `yarn dev`)

3. Open the app at http://localhost:3000

4. Build for production

   pnpm build

5. Start production server (after build)

   pnpm start

## Useful scripts

Check `package.json` for the exact script list, but common scripts include:

- `dev` — run development server
- `build` — build for production
- `start` — run production server
- `lint` — run linters (if configured)

## Branch-specific notes

- This README is tailored for the `srts2` branch. If the branch contains experimental changes or deployment differences, list them here.
- There are some legacy assets and CSS under `public/` and `views/` kept for reference; prefer updated components in `app/` when working on UI.
- Review `next.config.*` files for environment-specific configuration before deploying.

## Contributing

- Create a feature branch off the `srts2` branch.
- Run linters and tests locally (if present) before submitting a PR.
- Keep changes focused and include a clear PR description.

## Deploy

- Deployment likely uses Vercel or a similar platform. Confirm environment variables and build settings with repository maintainers.

## License & Maintainers

- Check repository root for a LICENSE file and `package.json` for author/maintainer info.
- For branch ownership or deployment secrets, contact the repository maintainers.

---

This file was updated to provide branch-specific context for contributors working on `srts2`. Update it as the branch evolves or when special setup steps are introduced.
