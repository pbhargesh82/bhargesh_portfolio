---
name: Bhargesh Patel Portfolio
description: Dark-structured software engineer portfolio — navy field, mint accent, project thumbnails
colors:
  paper: "oklch(0.19 0.04 250)"
  ink: "oklch(0.93 0.01 250)"
  ink-muted: "oklch(0.72 0.025 250)"
  ink-subtle: "oklch(0.58 0.03 250)"
  border: "oklch(0.32 0.035 250)"
  accent: "oklch(0.84 0.12 180)"
  accent-hover: "oklch(0.9 0.1 180)"
  accent-ink: "oklch(0.19 0.04 250)"
  surface: "oklch(0.24 0.038 250)"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  heading:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
rounded:
  sm: "6px"
  md: "10px"
spacing:
  section: "clamp(4rem, 10vw, 7rem)"
  container: "min(72rem, 100% - 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.accent-ink}"
  project-thumbnail:
    aspectRatio: "4/3"
    border: "1px {colors.border}"
---

## Overview

Dark-structured dev portfolio with mint accent. Hero splits intro copy and a project thumbnail grid; experience uses a flat date + role layout; projects are thumbnail-led cards. System light/dark both first-class. No headshot, no glass, no gradients on text.

## Colors

- **Paper** — page background (navy in dark, neutral off-white in light)
- **Accent** — mint green for CTAs, nav logo, links, current-role marker
- **Strategy:** Committed in dark mode; restrained light counterpart with same accent role

## Typography

- **Display:** Archivo — name and section headings
- **Body:** Hanken Grotesk — prose, meta, labels

## Do's and Don'ts

**Do:** Lead with project thumbnails. Keep mint accent disciplined. Sticky header with backdrop.

**Don't:** Purple gradients, glassmorphism, section eyebrows on every block, avatar in hero, warm cream paper.
