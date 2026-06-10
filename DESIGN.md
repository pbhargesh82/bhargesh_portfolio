---
name: Bhargesh Patel Portfolio
description: Minimal frontend developer portfolio — warm paper, ink type, teal accent
colors:
  paper: "#F7F5F2"
  ink: "#1C1917"
  ink-muted: "#57534E"
  ink-subtle: "#A8A29E"
  border: "#E7E5E4"
  accent: "#0D6E6E"
  accent-hover: "#0A5555"
  surface: "#FFFFFF"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
spacing:
  section: "clamp(4rem, 10vw, 7rem)"
  gap: "1.5rem"
  container: "min(72rem, 100% - 3rem)"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.surface}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 1.5rem"
  link-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.sm}"
    padding: "0.5rem 0.75rem"
---

<!-- SEED -->

## Overview

Warm paper background with ink typography and a single teal accent. Single-page scroll: hero, experience timeline, project grid, contact footer. No glass, no gradients, no decorative backgrounds. Generous section rhythm with a centered container.

## Colors

- **Paper** (`#F7F5F2`) — page background; warm, not clinical white
- **Ink** (`#1C1917`) — primary text and headings
- **Ink muted** (`#57534E`) — secondary copy, meta labels
- **Border** (`#E7E5E4`) — dividers and card outlines
- **Accent** (`#0D6E6E`) — primary CTA, current-role marker, link hover
- **Surface** (`#FFFFFF`) — cards and avatar frame

Strategy: Restrained. Accent appears on primary actions and one timeline marker only.

## Typography

- **Display**: Bricolage Grotesque — name and hero headline; tight tracking, fluid clamp scale
- **Body**: Public Sans — descriptions, experience copy, project blurbs; 17px base for readability
- **Labels**: Public Sans uppercase tracking — section eyebrows ("Experience", "Projects")
- Scale ratio ~1.25 between steps; max line length 65ch for prose blocks

## Elevation

Flat design. Depth comes from 1px borders (`border-stone-200`), not shadows. Cards use `border` + `bg-white` on paper. No drop shadows except none.

## Components

- **Primary button** — teal fill, white text, 6px radius, focus ring offset
- **Ghost link** — muted text, underline on hover, external arrow icon
- **Project card** — white surface, border, title + description + stack tags + action row
- **Timeline item** — left border accent on current role; dot marker for others
- **Social icon** — 20px SVG, stone color, accent on hover

## Do's and Don'ts

**Do**: Use whitespace between sections. Keep one accent color. Let typography carry hierarchy. Use real project links and copy.

**Don't**: Add glassmorphism, gradient text, purple palettes, bento grids, joke widgets, or animated decorative elements. Don't use Inter, Fraunces, or Space Grotesk.
