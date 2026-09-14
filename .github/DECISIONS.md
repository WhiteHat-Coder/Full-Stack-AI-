# Decisions

## 2026-09-14: Start with vanilla static files

The tutorial transcript will arrive incrementally, so a build framework would add setup cost before it adds learning value. Plain HTML, CSS, and JavaScript keep GitHub Pages deployment and future editing straightforward.

## 2026-09-14: Keep content data-driven

Lessons belong in `src/data/course.js` rather than being mixed into rendering logic. This lets transcript batches extend the course without rewriting navigation, search, or progress behavior.
