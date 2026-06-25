---
name: Bhargesh.Lab Portfolio
description: Refined engineering portfolio — near-black ink on white, safety-yellow signature accent, Archivo + JetBrains Mono, hairline structure with one brutalist terminal-card signature
colors:
  paper: "#ffffff"
  ink: "#0a0a0a"
  muted: "#525257"
  line: "#e4e4e4"
  surface: "#f5f5f4"
  accent: "#ffe600"
  accent-ink: "#0a0a0a"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 6vw, 4.5rem)"
    fontWeight: 900
    lineHeight: 0.98
    letterSpacing: "-0.025em"
    textTransform: "none"
  heading:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
    textTransform: "none"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
    textTransform: "none"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.18em"
    textTransform: "uppercase"
  mono:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    usage: "Terminal card, stat numerals, tech tags, eyebrow labels — code-flavored accents only"
borders:
  brutal: "3px solid #0a0a0a"
  heavy: "6px solid #0a0a0a"
  hairline: "1px solid #e4e4e4"
shadows:
  brutal: "6px 6px 0 #0a0a0a"
  brutal-accent: "6px 6px 0 #ffe600"
  press-hover: "3px 3px 0 (collapses on hover with translate)"
spacing:
  section: "clamp(5rem, 8vw, 7rem)"
  container: "max-w-6xl (72rem), px-5 md:px-8"
  header-height: "4rem"
components:
  button-primary:
    backgroundColor: "#0a0a0a"
    textColor: "#ffffff"
    border: "2px solid #0a0a0a"
    shadow: "6px 6px 0 #ffe600 (brutal-shadow-accent)"
    interaction: "shadow-press — translate(2px,2px) + shadow shrink on hover"
  button-secondary:
    backgroundColor: "#ffffff"
    textColor: "#0a0a0a"
    border: "2px solid #0a0a0a"
    shadow: "6px 6px 0 #0a0a0a (brutal-shadow)"
  nav-link:
    color: "#525257"
    hoverColor: "#0a0a0a"
  project-card:
    border: "2px solid #0a0a0a"
    shadow: "6px 6px 0 #0a0a0a"
    imageFilter: "none — full color screenshots"
  facts-strip:
    container: "hairline grid of label/value cells (mono label + bold value) — replaces vanity number grid"
  terminal-card:
    note: "The one retained brutalist signature — dark bg, mono, mac dots, 3px border + offset shadow"
icons:
  family: "Material Symbols Outlined"
---

## Overview

Refined engineering portfolio. White page field, near-black ink, **safety-yellow as a signature accent** (not a drench). The voice is now **precise and confident** rather than loud: clean **Archivo** sans for headings and readable body copy, with **JetBrains Mono** reserved for the terminal card, stat numerals, tech tags, and small eyebrow labels. Structure is carried by hairline dividers and intentional whitespace; the brutalist energy is concentrated into **one signature**: the hero terminal card and the offset hard-shadow on primary CTAs and project cards.

This is a deliberate move away from the previous full neo-brutalist treatment (all-caps mono body, 4–8px borders on every element, grayscale imagery, yellow-drenched contact). The redesign prioritizes client/recruiter trust and readability while keeping a memorable engineering identity.

**Color strategy:** Restrained — near-black + white do the work; safety-yellow appears as ~10% accent (highlight mark, CTA offset shadow, "Current" tag, marquee separators).

## Colors

| Token | Role | Value |
|-------|------|-------|
| **paper** | Page and card backgrounds | `#ffffff` |
| **ink** | Primary text, borders, dark sections, footer | `#0a0a0a` |
| **muted** | Secondary/body text (≥7:1 on white) | `#525257` |
| **line** | Hairline dividers and grid lines | `#e4e4e4` |
| **surface** | Subtle alternating section background | `#f5f5f4` |
| **accent** | Highlight mark, CTA offset shadow, tags, marquee separators | `#ffe600` |

- Yellow is used as a **fill behind black text** (`.mark`) or as an **offset shadow** — never as low-contrast text on white.
- Imagery: **full color**, no grayscale filter. Real project screenshots lead the Work section.

## Typography

- **Two roles, contrast axis:** Archivo (sans) for everything readable; JetBrains Mono only for code-flavored accents. The mono now feels intentional because it contrasts with the sans.
- **Case:** Sentence case for headings, body, nav, and buttons. Uppercase reserved for short mono eyebrow labels and tags.
- **Display ceiling:** Hero `clamp(2.75rem, 6vw, 4.5rem)` (≤96px ceiling). Tracking `-0.025em` (≥ -0.04em floor). `text-wrap: balance` on headings.
- **Icons:** Material Symbols Outlined for UI affordances (menu, mail, arrows, send, code).

## Layout & structure

| Section | ID | Notes |
|---------|-----|-------|
| Header | — | Sticky, hairline border, blurred paper bg, mono wordmark `bhargesh.dev`, working mobile menu |
| Hero | `#hero` | Sentence-case headline with yellow `.mark`, readable bio, dual CTAs, availability pulse, terminal-card signature |
| Marquee | — | Black band, mono uppercase scroll, yellow separators; reduced-motion safe |
| About | `#about` | Two-column intro + manifesto prose, hairline quick-facts strip (experience / now / focus / location / availability) |
| Stack | `#stack` | Surface bg, Frontend / Backend tech chips (bordered) |
| Work | `#work` | `Selected work` — real projects, full-color screenshots, Live + Code links |
| Experience | `#experience` | Surface bg, hairline timeline rows, mono dates, `Current` tag |
| Contact | `#contact` | Sentence-case heading, mailto + location + socials, Netlify form submitted via fetch with inline success/error states |
| Footer | — | Black bar, social links, copyright |

## Motion

- **Buttons/cards:** `.shadow-press` — `translate(2px,2px)` + offset-shadow shrink on hover (the signature interaction).
- **Marquee:** 48s linear infinite; wraps statically under `prefers-reduced-motion`.
- **Section reveal:** IntersectionObserver adds `.is-visible`. Reveal is a **progressive enhancement** — the hidden start state only applies under `html.js`, so no-JS/headless renders ship fully visible. A 1.5s safety timer reveals everything as a fallback.
- No bounce, no elastic easing.

## Do's and Don'ts

**Do:**

- Sentence case for headings and body; mono uppercase only for small labels/tags.
- One accent (safety-yellow) at ~10%: highlight mark, CTA shadow, tags, marquee.
- Keep the terminal card and offset hard-shadow as the brutalist signature.
- Hairline dividers + whitespace for structure; full-color project screenshots.
- Real projects, employers, and links only. Keyboard-navigable, focus-visible outlines.

**Don't:**

- All-caps body copy or mono as the body font.
- Borders on every element, grayscale imagery, or a yellow-drenched section.
- Yellow text on white (fails contrast) — yellow is a fill/shadow.
- Placeholder/fake projects or `href="#"` on resume/contact links in production.
- Gate content visibility behind a JS reveal class (ships blank in headless renders).

## Implementation reference

Tokens and utilities live in `src/styles/global.css`:

- `@theme` colors: `ink`, `paper`, `muted`, `line`, `surface`, `accent` (+ `primary` alias)
- Fonts: `--font-sans` (Archivo), `--font-mono` (JetBrains Mono)
- Utilities: `.brutal-border`, `.brutal-shadow`, `.brutal-shadow-accent`, `.shadow-press`, `.mark`, `.reveal`
- Reveal gating: `.js .reveal { opacity: 0 }` set by inline script

Live page: `src/pages/index.astro`. Content is data-driven from `src/content/*.json` (profile, projects, experience, stack, socials).
