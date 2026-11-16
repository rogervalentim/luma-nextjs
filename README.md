# Luma

Luma is a course-focused learning platform landing page built with Next.js App Router, React, TypeScript, Tailwind CSS, and Storybook. The application presents a polished marketing experience for featured courses, learning paths, social proof, and conversion-driven calls to action.

- Live Demo: (https://luma-nextjs.vercel.app/)

## Overview

This repository contains a front-end experience for a digital education brand, centered around a high-conversion homepage. The page combines editorial-style content, named learning categories, course highlights, trust indicators, and a community showcase to communicate the value of the platform.

### Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Storybook 10
- ESLint + Prettier

## Getting Started

### Prerequisites

- Node.js compatible with Next.js 16 (Node 20 LTS recommended)
- npm

### Installation

```bash
git clone https://github.com/rogervalentim/luma-nextjs.git
cd luma-nextjs
npm install
```

### Run locally

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in the browser.

For isolated component development and documentation:

```bash
npm run storybook
```

Storybook is available at [http://localhost:6006](http://localhost:6006).

### Production build

```bash
npm run build
npm run start
```

### Validation scripts

```bash
npm run lint
npm run typecheck
npm run format:check
npm run build
npm run build-storybook
```

## Key Architectural Decisions

- App Router composition: the homepage is assembled in `src/app/page.tsx`, combining reusable layout sections such as `Header`, `Hero`, `FeaturedCourse`, and `FinalCTA` into a single landing page flow.
- Component-driven UI structure: shared primitives live under `src/components/ui/`, while page-level blocks live under `src/components/layout/`. This keeps marketing sections modular and reusable across the experience.
- Tailwind-first styling system: the design tokens and base theme are centralized in `src/app/globals.css` using Tailwind CSS v4 `@theme` definitions, making colors, fonts, and spacing consistent across the app and Storybook preview.
- Responsive marketing design: sections are built with mobile-first utilities and container wrappers, with layout adjustments for tablet and desktop breakpoints to support a conversion-focused landing page.
- Storybook-backed component docs: each component has a corresponding `.stories.tsx` file, enabling isolated previews and UI review without running the full app.

## Project Structure

```text
.storybook/                 Storybook configuration and preview setup
src/
  app/                      Next.js App Router and global styles
  components/
    layout/                 Page sections and marketing blocks
    ui/                     Reusable UI primitives and stories
  lib/                      Shared utilities
public/                     Static assets and imagery
```

## Known Gaps & Future Improvements

- No backend or CMS integration yet; course and content data are currently static in the front-end layer.
- No authentication, user accounts, or checkout flow for enrollment.
- No automated unit or end-to-end test coverage has been added yet.
- No internationalization or localization support for multiple languages.
- No dark mode or personalization settings have been implemented.
- No real analytics or conversion tracking pipeline for production usage.

## Development Time & AI Tools Used

- Approximate Time Spent: [TODO: ~12 hours over 3 days]
- AI Tools Used: GitHub Copilot and similar LLM-assisted workflows were used to accelerate scaffolding, component generation, Storybook story creation, and documentation drafting. Final architectural decisions, visual review, and all code validation were completed manually.

## Notes

This project is intentionally focused on front-end presentation and component composition rather than a full learning-platform backend. It is well-suited as a design system and marketing site foundation, with a clear path to evolve into a complete course platform when business logic and data sources are introduced.
