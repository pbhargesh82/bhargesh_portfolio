# AI Guardrails Specification — Portfolio Site

Global playbook reference: https://github.com/pbhargesh82/ai-guradrails/blob/main/anti-ai-bloat-guardrails-playbook.md

---

## 1. Project Overview

* **Repository:** `bhargesh_portfolio`
* **Purpose:** High-performance, accessible, and proof-driven developer portfolio for Bhargesh Patel.
* **Stack:** Astro (static output), TypeScript, Tailwind CSS v4, Satori/Sharp (OG generator).
* **Source Directories:** `src/`, `public/`, `scripts/`, `docs/`.

---

## 2. Guardrail Boundaries

| Category | Allowed / Encouraged | Strictly Forbidden |
| :--- | :--- | :--- |
| **Components** | Native `.astro` components, semantic HTML5 tags | Unneeded React/Vue/Svelte islands for static content |
| **Styles** | Tailwind v4 utility tokens (`paper`, `ink`, `accent`, `line`, `muted`) | Hardcoded color literals, arbitrary fonts, heavy CSS frameworks |
| **Dependencies** | Minimal dependencies already specified in `package.json` | Adding heavy runtime animation packages, icon kits, or state libraries |
| **Data & Copy** | Dynamic data reading from `src/content/` and `src/lib/site.ts` | Hardcoding personal data across multiple pages or using placeholder content |

---

## 3. Simplicity Verification Checklist

Before committing or completing any AI-assisted task:

- [ ] Does the change solve the exact requested problem without extra fluff?
- [ ] Are all common metadata and data points centralized?
- [ ] Did `npm run build` pass with zero errors?
- [ ] Are all interactive elements keyboard accessible and WCAG AA contrast compliant?
- [ ] Has no unnecessary file or dependency been added?
