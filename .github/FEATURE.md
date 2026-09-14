# Learning website feature brief

## Current course

- **Title:** Full-Stack AI Engineer
- **Subject:** Python, data science, machine learning, deep learning, MLOps, and generative AI
- **Source status:** Awaiting transcript batches. The README is background context, not a transcript.

## Learning experience

The site turns supplied learning material into lessons with clear explanations, examples, code, important points, common mistakes, quick checks when appropriate, and compact summaries. The learner-facing experience never describes how the lessons were produced.

## Planned features

- Course-map sidebar with active lesson state
- Client-side search across lesson metadata and content
- Section progress stored in `localStorage`
- In-page table of contents for long lessons
- Copyable, language-labeled code examples
- Tutorial/clarification/additional-context labels
- Responsive layout and keyboard-accessible controls
- Theme preference stored locally

## Content workflow

Transcripts arrive in batches using `.github/TRANSCRIPT_INTAKE.md`. Each batch is analyzed before it is added to `src/data/course.js`. The interface is deliberately ready before content so the source remains the controlling input.
