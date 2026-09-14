# Transcript intake

Send the tutorial in batches. One message can contain one lesson, one video chapter, or a manageable block of transcript text.

Use this format when possible:

```text
BATCH: 01
TITLE: Python variables and data types
SOURCE: Course/video name or URL (optional)
TIMESTAMPS: 00:00-12:40 (optional)

TRANSCRIPT:
Paste the exact transcript here.
```

## Good batch sizes

- 5 to 20 minutes of transcript is ideal.
- Keep a concept together when possible; do not split an explanation in the middle.
- Send batches in order and keep the `BATCH` number stable.
- If the transcript contains code, include it exactly as shown and label the language if known.
- Tell me when you have sent the final batch with `FINAL BATCH: YES`.

## What happens to each batch

1. I identify the concepts, prerequisites, examples, and checks for understanding.
2. I label content as **From Tutorial**, **Clarification**, or **Additional Context**.
3. I add the lesson to `src/data/course.js` and update navigation/search/progress metadata as needed.
4. I validate the static site and report what was added.

Do not paraphrase the transcript before sending it. The original wording is useful for preserving technical accuracy.
