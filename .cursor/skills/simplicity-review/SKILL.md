---
name: simplicity-review
description: Audit changes for AI-generated code bloat, unnecessary abstractions, and design compliance.
---

# Simplicity Review Skill

Use this skill to audit repository changes before delivery:

1. **Check for Bloat:**
   - Are there unused helper functions, types, or modules?
   - Were new dependencies added unnecessarily?
   - Is there dead or commented-out code left behind?

2. **Check Design Token Consistency:**
   - Are colors using the standard tokens (`paper`, `ink`, `accent`, `line`, `muted`)?
   - Is sentence-case maintained for headings and body copy?

3. **Check Build Integrity:**
   - Run `npm run build` to ensure static pages and OG images compile with zero warnings or errors.
