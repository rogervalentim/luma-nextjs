# Luma

Luma is a course-focused learning platform landing page built with Next.js App Router, React, TypeScript, Tailwind CSS, and Storybook. Alongside the marketing experience, Storybook is a core part of the project: it makes the UI components and page sections easy to explore, review, and develop in isolation.

- Live Demo: [luma-nextjs.vercel.app](https://luma-nextjs.vercel.app/)
- Storybook: [Browse the component and section documentation](https://6afb70fca7bda0b750f10d0d-eklxhfhgen.chromatic.com/?path=/docs/sections-categories--docs)

## Overview

This repository contains a front-end experience for a digital education brand, centered around a high-conversion homepage. The page combines editorial-style content, named learning categories, course highlights, trust indicators, and a community showcase to communicate the value of the platform. Its component-driven workflow is supported by Storybook, where reusable UI and complete sections can be viewed and refined independently of the full application.

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

### Storybook

Storybook is used to develop and document the interface in small, reviewable pieces. Its stories provide an isolated view of reusable components and page sections, helping make visual states easier to inspect and UI changes easier to validate during development.

Run the local Storybook:

```bash
npm run storybook
```

The local Storybook is available at [http://localhost:6006](http://localhost:6006). The published [Storybook deployment](https://6afb70fca7bda0b750f10d0d-eklxhfhgen.chromatic.com/?path=/docs/sections-categories--docs) makes the component and section documentation available online.

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
- Storybook as a UI development and documentation tool: component and section stories provide isolated previews for exploring variations, reviewing visual changes, and understanding the interface without running the full app.
- Reusable, story-backed components: shared primitives and page sections are documented in Storybook, helping keep the UI modular and making its building blocks easier to discover and reuse.

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
- AI Tools Used: GitHub Copilot was used to assist with scaffolding, component development, Storybook story creation, and documentation drafting. Final architectural decisions, visual review, and code validation were completed manually.

## Notes

This project is intentionally focused on front-end presentation and component composition rather than a full learning-platform backend. Its Storybook documentation supports the component-driven workflow, making it a useful foundation for evolving the design system and marketing site into a complete course platform as business logic and data sources are introduced.
