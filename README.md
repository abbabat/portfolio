# Abbaba Toure — Portfolio

Personal portfolio for software engineering, platform development, and test automation.

**Live:** https://abbabat.github.io/portfolio/

## Run locally

No build step or package installation is required. From this directory:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000. Serve over HTTP instead of opening the HTML as a file to test browser behavior accurately.

## Structure

- `index.html`: accessible, server-independent portfolio content.
- `style.css`: shared design tokens, component styles, and responsive layouts.
- `script.js`: progressive enhancements for navigation, project filters, and copying the contact email.
- `Project1.html`–`Project4.html`: standalone project overviews; old URLs stay valid.
- `assets/`: optimized WebP images, favicon, and the downloadable résumé.

## Editing

Update role dates, descriptions, and education in `index.html`. Replace `assets/Abbaba_Resume.pdf` whenever the résumé changes. Keep project overview content aligned with the home page. All internal asset URLs are relative so the site works under the GitHub Pages `/portfolio/` path.

The core site works without JavaScript. Enhancements respect reduced motion, support keyboard use, and avoid runtime dependencies and third-party font requests. Project filtering uses native buttons with pressed states; work details use native disclosure elements.

## Deploy

The existing GitHub Pages deployment publishes the repository. Push the tested changes to `main` and check the Pages build before confirming the release.

## Verification

Check desktop and mobile layouts, keyboard navigation, menu open/close and Escape behavior, each filter, role details, all four project pages, email links, and résumé download. Confirm there are no browser errors, missing assets, or horizontal overflow. Repeat the core navigation with JavaScript disabled.

## Photos

The hero uses `assets/portrait.webp`; About uses `assets/about-portrait.webp`. Keep original personal photos locally and publish optimized exports without camera metadata. Adjust `object-position` in the portrait styles when replacing images, then check face framing at desktop and mobile widths.

## Visual design

Barlow and Barlow Condensed are served locally from `assets/fonts/`, with their SIL Open Font License files included. The project rows use WebP screenshots of the deployed apps (`assets/*-screen.webp`). The charcoal/blue palette and responsive layouts are defined in `style.css`.
