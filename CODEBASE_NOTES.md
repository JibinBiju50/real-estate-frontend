# ESTO Codebase NOtes

## APP FLOW

Main.jsx
- starts the react app
- App is wrapped inside NavbarVisibilityProvider
- NavbarVisibiltyProvider is wrapped inside Browserouter

App.jsx
- wraps the appRoute route component

AppRoutes.jsx
- wraps each route inside a parent route (shared route) that renders the Layout component (contains navbar, footer, and chatwidget)
- Layout component is wrapped inside the Routes container.
- Layout will act as a wrapper for all the nested pages.

Layout.jsx
- fetches the visible state from the useNavbarVisibility context and uses it to conditionally render Navbar and ChatWidget.
- Footer is always rendered with no condition.
- Other pages are rendered based on the path inside the Outlet placeholder.

NavbarVisibilityContext.js
- create and export the context
- create and exports a hook to use the context.

NavbarVisibiltyProvider.jsx
- Create context provider using the NavbarVisibilityContext
- Create state for navbar visibility
- Share the state to the child components through the provider.

# Pages

Home.jsx
- main landing page
- scrolling detection and show navbar
- Includes 8 sections

## sections

HeroSection.jsx
## HeroSection.jsx

- Shows a sticky full-screen hero animation with a background real estate video.
- The section height is very large (`h-[585vh]`) to create enough scroll distance for the animation.
- The inner wrapper is `sticky top-0 h-screen`, so the hero stays fixed while the user scrolls through the animation.
- Receives `scrollYProgress` and `heroRef` as props from `Home.jsx`.
- `heroRef` is attached to the main section so the parent can track scroll progress for this hero area.
- Does not manage React state using `useState`.
- Uses Framer Motion's `useTransform` to convert `scrollYProgress` into animation values.
- Motion values created:
  - `symbolY`: controls triangle vertical movement.
  - `symbolScale`: controls triangle zoom.
  - `symbolOpacity`: controls triangle visibility.
  - `introOpacity`: controls first title visibility.
  - `videoOpacity`: controls background video fade.
  - `detailOpacity`: controls transformed hero content fade-in.
  - `detailY`: controls slight vertical movement of transformed hero content.
- Uses `motion.video` and `motion.div` so Framer Motion values can be applied through the `style` prop.
- Tailwind classes handle layout, spacing, positioning, typography, colors, and responsiveness.
- Risk area: animation timing is fragile. Small changes to `useTransform` ranges can break the scroll sequence.

AvaResidence
- shows ava residence images and features




