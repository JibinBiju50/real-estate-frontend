# ESTO Real Estate Showcase

ESTO is a luxury real estate brand website built with React, Vite, Tailwind CSS, and Framer Motion. The project is inspired by premium real estate developer websites and focuses on cinematic presentation, scroll-based transitions, editorial layouts, and enquiry-focused user flows.

This is not a broker marketplace where agents upload listings. It is a front-end showcase website for presenting a luxury real estate brand, featured residences, brand story sections, news highlights, and contact options.

## Features

- Cinematic home hero with background video, scroll-driven triangle transition, title fade, transformed hero content, and delayed navbar/chat visibility.
- Featured residence carousel with manual controls, progress bar, scroll expansion, and image zoom effect for the first featured item.
- Editorial home sections for masterpieces, partners, bespoke services, brand statistics, article highlight, enquiry call-to-action, and footer.
- Animated multi-level sidebar navigation with blurred background, nested submenus, staggered link animations, and hover styling.
- Frontend-only chat widget with option-based conversation flow, message history, restart, minimize, close, and contact redirection.
- Dedicated AVA news/detail page with article heading, large residence image, descriptive content, and responsive image showcase.
- Responsive layout and styling using Tailwind CSS with custom brand colors and typography.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Router
- React Icons
- Swiper
- Lenis

## Project Structure

```text
src/
  assets/
    images/        # Residence, partner, masterpiece, and article images
    videos/        # Hero and enquiry background videos
  components/
    home/          # Home page sections
    layout/        # Navbar, footer, layout, and chat widget
  context/         # Navbar visibility state
  hooks/           # Shared hooks
  pages/           # Home and AVA news page
  routes/          # App routes
```

## Main Sections

- **Hero Section**: Opens with a video background and "The Art of Elevation", then transforms on scroll into the detailed ESTO residence hero.
- **Featured Section**: Displays featured properties in a horizontal carousel with a scroll-based expansion effect.
- **Masterpiece Section**: Uses large architectural imagery and text overlays to communicate the brand's design language.
- **Partners Section**: Presents partner/project imagery in a sliding row below a centered introduction.
- **Bespoke Section**: Uses a triangle transition to reveal a dark, image-led service section.
- **Stats Section**: Highlights credibility through key brand numbers and supporting copy.
- **Article Highlight**: Shows a featured news story with image, date, title, and read more action.
- **Enquire Section**: Final call-to-action with water caustics video background and request callback button.
- **Footer**: Includes brand mark, project links, explore links, newsletter field, policies, and social icons.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```
