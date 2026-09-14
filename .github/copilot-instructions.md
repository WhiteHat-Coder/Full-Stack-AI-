# Copilot instructions

This repository is a static learning website for the Full-Stack AI Engineer course. Tutorial transcripts are private authoring sources and the primary accuracy reference, but learners must see polished course content only.

## Before changing the project

Inspect the relevant files in `.github/` and the skills in `.github/skills/`. Read `TRANSCRIPT_INTAKE.md` before adding source material. Keep changes small and preserve the dependency-free GitHub Pages setup.

## Content rules

- Learning content lives in `src/data/course.js`.
- Preserve tutorial code and claims accurately.
- Keep source distinctions in authoring data and internal documentation; do not expose transcript-production language to learners.
- Never show phrases such as **Transcript-backed**, **From Tutorial**, **supplied transcript**, or **generated from a transcript** in the public UI or learner-facing lesson content.
- Present clarifications as normal explanations or clearly labeled **Clarification** notes when useful to learning.
- Never present an invented explanation as something the tutor said.
- Add new sections as structured data so navigation, search, and progress tracking continue to work.

## UI and platform rules

- The site must work as static files under a GitHub Pages subpath; use relative asset paths and no backend or runtime API keys.
- Keep the interface responsive for mobile and desktop.
- Preserve keyboard access, visible focus states, semantic headings, labels, readable contrast, and reduced-motion respect when adding animations.
- Prefer the existing vanilla HTML/CSS/JavaScript architecture. Add dependencies only when a clear requirement justifies them.
- Keep examples copyable and identify their language.

## Common changes

- Add a lesson: update `course.sections` in `src/data/course.js`.
- Change layout or visual language: update `src/styles.css` and keep the rules documented in `DESIGN_SYSTEM.md`.
- Change behavior: update `src/app.js`, then open `index.html` directly or serve the folder with any static file server for a browser check.
- Update project decisions and behavior documentation when the architecture changes.
