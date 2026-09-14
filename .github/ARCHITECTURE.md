# Architecture

## Stack

The site uses plain HTML, CSS, and JavaScript modules. It has no build step, backend, database, or runtime API dependency, which makes it directly deployable to GitHub Pages.

## Structure

- `index.html`: semantic application shell
- `src/app.js`: rendering, search, navigation, theme, and local progress behavior
- `src/data/course.js`: transcript-derived course data
- `src/styles.css`: responsive visual system
- `.github/`: product, design, content, and agent guidance

## Data model

`course.sections` will contain lesson objects with stable `id` values, titles, summaries, concepts, source-labeled content, examples, checks, and optional table-of-contents headings. Stable IDs keep local progress intact as content grows.

## Routing and deployment

The initial site is a single-page document with hash-free client navigation. All links and assets use relative paths, so it works at `/` and at a GitHub Pages repository subpath. GitHub Pages can publish the repository root directly; no server fallback is required.

## State and search

Progress and theme preference use browser `localStorage`. Search is a case-insensitive client-side filter over the loaded course data. No user data leaves the browser.
