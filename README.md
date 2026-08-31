# Frontend Mentor - Shortly URL shortening API Challenge solution

This is a solution to the [Shortly URL shortening API Challenge](https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G) on Frontend Mentor.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)

## Overview

### The challenge

Users can:

- View the optimal layout for the site depending on their device's screen size
- Shorten any valid URL
- See a list of their shortened links, even after refreshing the browser
- Copy the shortened link to their clipboard in a single click
- Receive an error message when the form is submitted if the input field is empty

### Screenshot

![](./preview.jpg)

## My process

### Built with

- Semantic HTML5 markup
- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) as the build tool
- [Tailwind CSS](https://tailwindcss.com/), themed from the CSS custom properties in `src/index.css`
- Mobile-first, responsive layout (375px → 1440px+)
- [Clean URI API](https://cleanuri.com/docs) for the actual link shortening

### Project structure

```
src/
  components/   UI components (Header, Hero, ShortenerSection, StatisticsSection, CtaBanner, Footer, ...)
  hooks/        useLocalStorage — persists shortened links across refreshes
  services/     urlShortener.js — isolated wrapper around the Clean URI API
  data/         static content (nav links, feature copy, footer links)
```

Keeping the API call in its own `services/` file means the shortening provider can be swapped out later without touching any component.

### What I learned

- **Tailwind + CSS custom properties.** Rather than hardcoding hex values, `tailwind.config.js` maps its color palette straight to the `:root` variables in `index.css` (e.g. `bg-blue-400` resolves to `var(--Blue-400)`). One gotcha: Tailwind's color-opacity modifiers (`bg-gray-400/10`) silently produce no CSS when the underlying color is a `var()` reference instead of a raw color value — it needs a real color to apply an alpha channel to. Any shade that needs opacity support has to be defined as a plain HSL/RGB value.
- **Full-bleed sections vs. centered content.** Every section needs its background to run edge-to-edge while its content stays capped at a max-width and centered. The clean pattern is an outer full-width element for color/background, with an inner `mx-auto max-w-content px-*` wrapper for the content — and that inner padding has to stay applied at *every* breakpoint, not drop to `0` once a `max-width` kicks in, or content touches the viewport edges on any screen narrower than the max-width.
- **ESM vs. CommonJS config files.** With `"type": "module"` in `package.json`, config files using `module.exports` (like a default `postcss.config.js`) fail at build time. They need `export default` instead.

### Continued development

- Swap `localStorage` for a small backend so links persist across devices, not just the browser they were created in.
- Add a CORS proxy (Vercel/Netlify serverless function) ahead of deployment, since the Clean URI API is called directly from the client.
- Expand keyboard and screen-reader testing on the mobile nav and the shorten-form error state.

### AI Collaboration

This solution was built with Claude (Anthropic) doing the implementation directly, from a starter project that already had Tailwind configured and the design screenshots in `src/design/`.

- **Debugging:** the initial `npm run build` failed with `module is not defined in ES module scope`. Claude traced it to `postcss.config.js` using CommonJS syntax in an ESM project (`"type": "module"` in `package.json`) and rewrote it as `export default { ... }`.
- **Building the UI:** `src/App.jsx` was unused Vite/React boilerplate with no real markup. Claude built out the full component tree (header with a working mobile menu, hero, the shorten form with error and copy states, the staggered "Advanced Statistics" cards, CTA banner, footer) directly from the desktop/mobile design JPGs and the color variables already defined in `index.css`.
- **Verification:** Claude ran the dev server headlessly (Playwright) to screenshot the build at multiple viewport widths and compare it against the provided designs, and to exercise the empty-submit error state, the mobile nav, and the shorten/copy flow (with the Clean URI API mocked, since it isn't reachable from the sandboxed build environment) before handing the project back.
- **Follow-up fix:** a reported layout bug — content touching the screen edges at medium viewport widths — turned out to be `md:px-0` overriding the mobile padding once the `md` breakpoint hit, before the `max-w-content` cap had room to center anything. Fixed by keeping non-zero padding at every breakpoint.
