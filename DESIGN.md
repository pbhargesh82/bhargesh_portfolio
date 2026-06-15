---
name: Bhargesh.Lab Portfolio
description: Neo-brutalist software engineer portfolio — white field, safety-yellow accent, JetBrains Mono, ruled borders
colors:
  paper: "#ffffff"
  ink: "#000000"
  ink-muted: "rgba(0, 0, 0, 0.7)"
  ink-subtle: "rgba(0, 0, 0, 0.6)"
  border: "#000000"
  accent: "#ffff00"
  accent-hover: "#ffff00"
  accent-ink: "#000000"
  surface: "#ffffff"
typography:
  display:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(2.5rem, 9vw, 6rem)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.03em"
    textTransform: "uppercase"
  heading:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(2rem, 6vw, 5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    textTransform: "uppercase"
  body:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(1rem, 2vw, 1.25rem)"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "normal"
    textTransform: "uppercase"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 800
    letterSpacing: "0.1em"
    textTransform: "uppercase"
borders:
  brutal: "4px solid #000000"
  heavy: "8px solid #000000"
shadows:
  brutal: "8px 8px 0 #000000"
  brutal-accent: "8px 8px 0 #ffff00"
  brutal-hover: "12px 12px 0 #000000"
spacing:
  section: "clamp(4rem, 8vw, 6rem)"
  container: "min(80rem, 100% - 3rem)"
  header-height: "5rem"
components:
  button-primary:
    backgroundColor: "#000000"
    textColor: "#ffffff"
    shadow: "8px 8px 0 #ffff00"
  button-secondary:
    backgroundColor: "#ffffff"
    textColor: "#000000"
    border: "4px solid #000000"
    shadow: "8px 8px 0 #000000"
  nav-link:
    borderLeft: "4px solid #000000"
    hoverBackground: "#ffff00"
  project-card:
    border: "4px solid #000000"
    imageFilter: "grayscale contrast-125"
  stat-card:
    border: "4px solid #000000"
    shadow: "brutal-shadow-hover on hover"
icons:
  family: "Material Symbols Outlined"
---

## Overview

Neo-brutalist dev portfolio: white page field, black rules, safety-yellow accent. Single-family JetBrains Mono throughout — monospace is the brand voice, not a lazy dev shorthand. Hero pairs oversized uppercase headline with a rotated yellow slab and grayscale project/diagram frame. Sections separated by heavy horizontal rules; projects use a ruled grid; experience rows invert to black on hover. Sticky header, scrolling marquee band, contact block on full yellow field. No headshot, no glass, no gradients on text.

**Color strategy:** Drenched — yellow and black carry identity; white is the breathing room between stamped elements.

## Colors

| Token | Role | Value |
|-------|------|-------|
| **paper / surface** | Page and card backgrounds | `#ffffff` |
| **ink / primary** | Text, borders, inverted hover fills | `#000000` |
| **accent** | CTAs, marquee text, highlight slabs, contact section | `#ffff00` |
| **ink-muted** | Secondary labels (`opacity-60`–`70` on accent — verify contrast) | Black at 60–70% |

- Inverted pairs: black fill + white text for primary buttons; yellow fill + black text for accent bands.
- Imagery: grayscale, high contrast, often `mix-blend-multiply` on white.

## Typography

- **One family:** JetBrains Mono for display, headings, body, and labels. Hierarchy via weight (400–900), size clamps, and inversion — not a second font.
- **Case:** Uppercase is default for headings, nav, buttons, and section labels. Sentence case only where long prose readability demands it (future: manifesto body from `PROFILE.md`).
- **Display ceiling:** Hero `clamp(2.5rem, 9vw, 6rem)` — test overflow at tablet widths; reduce max if headlines clip.
- **Icons:** Material Symbols Outlined for UI affordances (menu, mail, arrows).

## Layout & structure

| Section | ID | Notes |
|---------|-----|-------|
| Header | — | Sticky, `border-b` 8px, logo `BHARGESH.LAB`, nav with `border-l-4` link separators |
| Hero | `#hero` | Min-height viewport, glitch scanline overlay, dual CTAs, optional rotated asset frame |
| Marquee | — | Black band, yellow uppercase scroll; disabled under `prefers-reduced-motion` |
| About | `#about` | Manifesto + 2×2 metric stat grid |
| Projects | `#projects` | `THE_VAULT` heading, ruled `grid` with thumbnail cards |
| Experience | `#experience` | `CAREER_LOGS` — date / role / tag columns, row hover invert |
| Contact | `#contact` | Yellow field, sticky intro + bordered form panel |
| Footer | — | Black bar, social links, copyright |

## Motion

- **Buttons:** `translate` + shadow collapse on hover/active (`brutal-shadow` → none).
- **Marquee:** 20s linear infinite; off when `prefers-reduced-motion: reduce`.
- **Section reveal:** Scroll-triggered opacity/transform — must include reduced-motion fallback.
- **Project thumbnails:** Scale on hover inside ruled cells.
- No bounce, no elastic easing.

## Do's and Don'ts

**Do:**

- 4px and 8px black borders (`brutal-border`, `border-heavy`).
- Offset hard shadows (`8px 8px 0`) — black or yellow offset depending on button role.
- Safety-yellow accent used decisively: CTA bands, marquee, contact section, hover fills.
- Terminal-flavored labels (`SYSTEMS_ONLINE`, `UNIT_ID`, section tags) when tied to real metadata.
- Lead with project thumbnails in a ruled grid.
- Sticky header; anchor nav (ABOUT / WORK / LOGS).

**Don't:**

- Rounded corners, soft shadows, or glass blur.
- Purple gradients, mint/navy palette, cream paper, gradient text.
- A second display font "to balance" the mono — commit to one family.
- Placeholder employers, projects, or `href="#"` on resume/contact links in production.
- Empty `alt` on project images.
- Decorative contact forms with no submit path — prefer mailto or wired handler.

## Implementation reference

Tokens and utilities live in `src/styles/global.css`:

- `@theme` colors: `primary`, `accent`, `surface`
- Utilities: `.brutal-border`, `.brutal-shadow`, `.brutal-shadow-yellow`, `.brutal-shadow-hover`, `.glitch-bg`
- Section default: `border-bottom: 4px solid black`

Live page: `src/pages/index.astro`. Component partials in `src/components/` should be updated to use these tokens when wired in.
