---
target: homepage
total_score: 20
p0_count: 2
p1_count: 2
timestamp: 2026-06-15T06-55-49Z
slug: src-pages-index-astro
---
# Critique: Homepage (`src/pages/index.astro`)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Mobile menu button is inert; resume/social links go to `#`; contact form has no submit feedback |
| 2 | Match System / Real World | 1 | Placeholder employers, projects, and email contradict `PROFILE.md` |
| 3 | User Control and Freedom | 3 | Anchor nav works; otherwise a simple scroll surface |
| 4 | Consistency and Standards | 1 | Shipped page diverges from `PRODUCT.md`, `DESIGN.md`, and unused component layer |
| 5 | Error Prevention | 2 | Decorative contact form invites submission with no handler |
| 6 | Recognition Rather Than Recall | 2 | Hacker labels (`COMMS_LINK`, `NAME_INPUT`) force decoding |
| 7 | Flexibility and Efficiency | 2 | No mobile nav, no skip link; ALL CAPS slows recruiter scanning |
| 8 | Aesthetic and Minimalist Design | 2 | Committed visual noise (marquee, metric grid, eyebrows) without earning information |
| 9 | Error Recovery | 2 | Form submit is a dead end |
| 10 | Help and Documentation | 3 | IA is linear; copy obscures rather than guides |
| **Total** | | **20/40** | **Acceptable — significant improvements needed** |

## Anti-Patterns Verdict

**LLM assessment:** Yes — this reads as AI-generated template portfolio. Yellow/black neo-brutalism, JetBrains Mono everywhere, `SYSTEMS_ONLINE // V2.0` kicker, hero metric grid (05+ years / 50+ projects / 99% uptime), numbered project eyebrows (`INFRASTRUCTURE // 01`), buzzword marquee, and fake companies/projects are saturated 2025–2026 dev-portfolio tropes. It directly contradicts the documented brand (`crafted`, `clear`, `quiet`) and anti-references in `PRODUCT.md`.

**Deterministic scan:** 8 findings — 7× `side-tab` (`border-l-4` / `border-r-4` / `border-r-8` in `index.astro`, `Projects.astro`, `ProjectCard.astro`, `MobileNav.astro`); 1× `single-font` (JetBrains Mono only in `BaseLayout.astro` / `global.css`).

**Visual overlays:** Injection succeeded on `http://localhost:4321/` — 15 overlay markers visible in the critique browser tab, including side-tab borders on nav links and cramped-padding on the hero kicker.

## Overall Impression

The page commits hard to a brutalist hacker aesthetic, but it is the wrong aesthetic for this brief — and it ships placeholder fiction instead of Bhargesh's real profile. A recruiter who clicks through will see fake employers and projects before they ever reach contact. The single biggest opportunity is to wire the existing content-driven components (`Hero`, `Experience`, `Projects`, `Footer`) to `PROFILE.md` and realign tokens/type to `DESIGN.md`.

## What's Working

1. **Section rhythm** — Hero → work → experience → contact is the right hire narrative; anchors and sticky header support the scan path recruiters use.
2. **Project card grid structure** — Thumbnail-led cards with stack footer is a sound pattern (the component layer already does this with real assets).
3. **Reduced-motion respect** — Marquee animation disables under `prefers-reduced-motion`.

## Priority Issues

### [P0] Placeholder content destroys trust
- **Why:** Fake roles (TECHCORP, INNOVATE_LABS), fake projects (CLOUDSCALE_ENG), and wrong email (`hello@bhargesh.dev`) contradict `PROFILE.md`. A hiring manager will bounce.
- **Fix:** Replace monolithic `index.astro` markup with `Hero`, `Experience`, `Projects`, `Footer` components backed by `src/content/*.json`.
- **Suggested command:** `/impeccable craft homepage`

### [P0] Brand and product intent are inverted
- **Why:** `PRODUCT.md` promises crafted/clear/quiet; live site is loud ALL CAPS cyber-brutalism with mono-as-shorthand-for-dev.
- **Fix:** Reconcile `global.css` tokens and typography with `DESIGN.md` (or update docs if brutalism is the new direction — but pick one).
- **Suggested command:** `/impeccable distill homepage`

### [P1] Hero metric template and buzzword marquee
- **Why:** 05+/50+/99% stat grid and scrolling "ZERO DOWNTIME" are explicit anti-patterns; they add noise without proof.
- **Fix:** Cut the metric grid; replace marquee with one line of real positioning or remove entirely.
- **Suggested command:** `/impeccable quieter hero`

### [P1] Broken mobile navigation and dead links
- **Why:** Hamburger does nothing (`MobileNav` exists but is not imported); resume/GitHub/social links use `#`.
- **Fix:** Wire `MobileNav.astro`; point links to real URLs from `socials.json`.
- **Suggested command:** `/impeccable harden header`

### [P2] Accessibility gaps on imagery and contrast-adjacent copy
- **Why:** Project images have empty `alt`; `opacity-60`/`opacity-70` labels on yellow accent may fail contrast; `text-9xl` headline risks overflow.
- **Fix:** Use `thumbnailAlt` from content; bump muted text toward ink; clamp hero display size.
- **Suggested command:** `/impeccable audit homepage`

## Persona Red Flags

**Taylor (Hiring manager, 60-second tab scan):** Sees "SNR_SW_ENGINEER @ TECHCORP_SOLUTIONS" instead of Bridginex — assumes resume is outdated or site is a template. "RESUME.PDF" and GitHub links go nowhere. Trust gone before scroll.

**Jordan (First-time visitor):** `WAKE ME UP`, `EXECUTE_SEND`, and `COMMS_LINK` read as gimmicks, not contact paths. Cannot open mobile menu on phone. Cannot tell which projects are real.

**Casey (Mobile, interrupted scan):** Hamburger is a dead control. Hero headline at `text-9xl` will clip on narrow viewports. Contact form is long and uppercase-heavy for thumb typing.

## Minor Observations

- `BaseLayout.astro` still injects `localhost:8400/live.js` — dev artifact in layout.
- Contact form is decorative; `Footer.astro` already offers a cleaner email-first contact pattern.
- Unused component files and content JSON suggest a partial migration stuck halfway.
- Section scroll-reveal script adds motion without `prefers-reduced-motion` guard.

## Questions to Consider

- Is brutalism the voice, or is `PROFILE.md`'s warm/direct tone the voice? They cannot coexist without picking one.
- What if the hero showed one real project thumbnail and your actual stack row instead of a manifesto and metric grid?
- Does a contact form earn its place when email is the stated preferred channel?
