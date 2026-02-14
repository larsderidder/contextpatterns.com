# Context Patterns — Agent Guidelines

## Deployment

- Hosted on **statichost.eu**. No CI/CD auto-deploy from git.
- After pushing, the user must manually build/deploy via statichost.eu.
- Do not assume changes are live after `git push`.
- The deploy root is the `dist/` directory.

## Build

- **Astro** static site generator. Build with `npm run build`, output goes to `dist/`.
- Dev server: `npm run dev` (but may not work well in all environments).
- Content lives in `src/content/patterns/` as Markdown files with frontmatter.
- Layouts in `src/layouts/`, pages in `src/pages/`, shared CSS in `src/styles/`.

## Site

- Reference site, not a blog. No dated posts or "Writing" section.
- Editorial direction: Instrument Serif + Inter, gold/sage palette, warm cream background.
- Patterns are defined as a content collection with schema validation.
- Each pattern has: title, summary, dot color, order, category (problem/pattern), sources, related patterns.
- The index page renders pattern cards from the collection. Pattern detail pages are generated from `src/pages/patterns/[...slug].astro`.
