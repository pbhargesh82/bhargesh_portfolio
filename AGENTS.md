# AI Agent Guardrails — bhargesh_portfolio

This repository contains the developer portfolio website for **Bhargesh Patel**, built with Astro, TypeScript, and Tailwind CSS.

Adhere strictly to the **Anti-AI-Bloat Guardrails** and design principles documented in `DESIGN.md` and `PRODUCT.md`.

---

## 1. Project Context & Stack

* **Framework:** Astro 5+ (`src/pages`, `src/layouts`, `src/components`, `src/content`)
* **Styling:** Tailwind CSS v4 (`src/styles/global.css`) with curated design tokens (ink `#0a0a0a`, accent `#ffe600`, paper `#f5f5f5`, line `#d8d8d8`, muted `#555555`).
* **Content:** Single source-of-truth JSON files in `src/content/` (`profile.json`, `projects.json`, `experience.json`, `socials.json`, `stack.json`).
* **Build / OG:** Automated OpenGraph generator (`scripts/generate-og-image.mjs`) using Satori and Sharp.

---

## 2. Behavioral Rules for AI Assistants

1. **Minimal, Purpose-Built Edits:**
   * Write only the exact code needed to fulfill the request.
   * Do not introduce abstract helper wrappers, generic utility directories, or speculative features.
2. **Strict Scope Control (Forbidden Anti-Patterns):**
   * **No unrequested UI frameworks:** Do not add React/Vue/Svelte components to pages unless explicitly instructed. Use pure Astro components.
   * **No external CSS libraries:** Stick exclusively to the existing Tailwind tokens and brutalist utility classes.
   * **No inline styling spaghetti:** Rely on design tokens in `global.css` and existing utility classes (`brutal-shadow`, `brutal-border`, `shadow-press`).
   * **No fake or placeholder data:** Content must remain factual and synced with `PROFILE.md` and `src/content/`.
3. **Respect Design Principles:**
   * Review `DESIGN.md` and `PRODUCT.md` before making any layout or visual modifications.
   * Keep the "one brutalist signature" (terminal hero card + hard shadow) clean and distinct; do not over-decorate other elements.
4. **Mechanical Verification:**
   * Always verify that `npm run build` succeeds cleanly before concluding changes.
   * Ensure TypeScript types and Astro components pass validation.

---

## 3. Key Commands

```powershell
npm run dev        # Starts local Astro dev server with predev OG build
npm run build      # Generates OG image and builds static production bundle
npm run preview    # Previews production build locally
```
