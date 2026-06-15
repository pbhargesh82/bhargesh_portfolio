# Impeccable Skills — Plain English Guide

Impeccable is a design helper for websites and apps. It improves how things look, feel, and work on screen — things like pages, buttons, forms, menus, and layouts.

You run a skill by typing `/impeccable` followed by a command name and an optional target (the page, section, or feature you want to work on).

**Pattern:** `/impeccable <command> <target>`

You can also describe what you want in normal language — Impeccable will pick the right command. For example, "fix the spacing on my homepage" maps to `layout`.

---

## Build — Start or grow something new

### init
Sets up the project so the design helper knows what you're building, who it's for, and how it should look. Creates the project's design notes.

**Example prompts:**
```
/impeccable init
```
```
Set up Impeccable for this portfolio — I'm a product designer targeting hiring managers at tech companies.
```

---

### shape
Plans a new screen or feature before any code is written. Asks questions, thinks through the user experience, and writes a design brief.

**Example prompts:**
```
/impeccable shape contact page
```
```
/impeccable shape
I need a case study page that shows my process, the problem, and results. Help me plan it before we build anything.
```

---

### craft
Plans and then builds a new screen or feature from start to finish — real, working code, not a rough draft.

**Example prompts:**
```
/impeccable craft projects section
```
```
/impeccable craft
Build a testimonials section for the homepage — 3 quotes from past clients, with names and roles.
```

---

### document
Looks at your existing site or app and writes down its colors, fonts, spacing, and components so future work stays consistent.

**Example prompts:**
```
/impeccable document
```
```
/impeccable document
Scan my current CSS and create a design system doc so future changes stay on-brand.
```

---

### extract
Finds repeated patterns (like the same button style used in many places) and turns them into reusable building blocks.

**Example prompts:**
```
/impeccable extract buttons
```
```
/impeccable extract homepage
I've copied the same card style in five places — pull it into one reusable component.
```

---

## Evaluate — Review what you have

### critique
Gives an honest design review: what works, what feels generic or confusing, and what to fix first. Scores the overall quality.

**Example prompts:**
```
/impeccable critique homepage
```
```
/impeccable critique
Review my portfolio landing page — does it feel distinctive or generic? What should I fix first?
```

---

### audit
Runs technical checks: Is text easy to read? Can people use a keyboard? Does it work on different screen sizes? Is it fast? Reports problems without fixing them.

**Example prompts:**
```
/impeccable audit index.html
```
```
/impeccable audit
Check my site for accessibility and mobile issues. Don't fix yet — just give me a report.
```

---

## Refine — Improve what's already there

### polish
A final cleanup pass before launch — small details like spacing, alignment, button states, wording, and consistency.

**Example prompts:**
```
/impeccable polish homepage
```
```
/impeccable polish
I'm about to share this portfolio publicly — do a final pass on spacing, hover states, and anything that looks unfinished.
```

---

### bolder
Makes a safe or boring design more memorable — stronger headlines, clearer focus, more personality (without going over the top).

**Example prompts:**
```
/impeccable bolder hero section
```
```
/impeccable bolder
The homepage feels too plain and forgettable. Make the hero more striking without going cheesy.
```

---

### quieter
Calms down a design that feels too loud, busy, or overwhelming — softer colors, less motion, more breathing room.

**Example prompts:**
```
/impeccable quieter about page
```
```
/impeccable quieter
Too many gradients and animations — tone it down so it feels more professional and easier to read.
```

---

### distill
Simplifies — removes clutter and extra steps so people can get to what matters faster.

**Example prompts:**
```
/impeccable distill navigation
```
```
/impeccable distill
The homepage has too many sections competing for attention. Strip it to what a recruiter actually needs.
```

---

### harden
Prepares the design for real-world messiness: long names, errors, slow internet, different languages, empty screens.

**Example prompts:**
```
/impeccable harden contact form
```
```
/impeccable harden projects grid
What happens if a project has no image, a very long title, or the API fails? Make this section handle those cases.
```

---

### onboard
Improves the first-time experience — welcome screens, empty states, and the path to a user's first "aha" moment.

**Example prompts:**
```
/impeccable onboard first visit
```
```
/impeccable onboard
A recruiter lands here for the first time with 30 seconds to spare — design the path so they quickly see my best work.
```

---

## Enhance — Add or improve specific design elements

### animate
Adds purposeful movement — button feedback, smooth transitions, reveals — and respects people who prefer less motion.

**Example prompts:**
```
/impeccable animate project cards
```
```
/impeccable animate
Add subtle scroll reveals to the case study sections — nothing bouncy, and respect reduced-motion preferences.
```

---

### colorize
Adds thoughtful color to a gray or flat design — not random rainbows, but colors that guide attention and carry meaning.

**Example prompts:**
```
/impeccable colorize homepage
```
```
/impeccable colorize
Everything is gray and white. Add a cohesive accent color that fits a creative-but-professional portfolio.
```

---

### typeset
Improves fonts and text hierarchy — what's a headline vs. body text, readable sizes, fonts that match the brand.

**Example prompts:**
```
/impeccable typeset homepage
```
```
/impeccable typeset
The headings and body text all look the same size. Fix the type hierarchy and pick fonts that feel editorial, not generic.
```

---

### layout
Fixes spacing and structure — how things are grouped, aligned, and ordered on the page.

**Example prompts:**
```
/impeccable layout about section
```
```
/impeccable layout
The spacing feels random — some sections are cramped, others have huge gaps. Fix rhythm and alignment on the homepage.
```

---

### delight
Adds small, memorable touches — a friendly success message, a clever empty state, a moment of surprise where it fits.

**Example prompts:**
```
/impeccable delight 404 page
```
```
/impeccable delight contact form
Add a small moment of personality when someone successfully submits the contact form — keep it tasteful.
```

---

### overdrive
Pushes the design further than usual — ambitious effects or interactions, but only where they make sense for the project.

**Example prompts:**
```
/impeccable overdrive hero
```
```
/impeccable overdrive project gallery
I want the project gallery to feel extraordinary — propose 2–3 directions before building anything.
```

---

## Fix — Solve a specific problem

### clarify
Rewrites confusing labels, instructions, and error messages so people understand what to do.

**Example prompts:**
```
/impeccable clarify contact form
```
```
/impeccable clarify
Rewrite the button labels and error messages on the signup form — they're too vague right now.
```

---

### adapt
Reworks a design for a different context — phone vs. desktop, touch vs. mouse — not just shrinking the same layout.

**Example prompts:**
```
/impeccable adapt homepage for mobile
```
```
/impeccable adapt navigation
The desktop nav doesn't work on phones — rethink it for touch, not just stack the same links vertically.
```

---

### optimize
Finds and fixes slowness — heavy images, laggy animations, bloated code — and measures before and after.

**Example prompts:**
```
/impeccable optimize homepage
```
```
/impeccable optimize
The page feels sluggish on mobile — find what's slow and fix it. Show me before/after if you can.
```

---

## Iterate — Try options in the browser

### live
Opens your site in the browser, lets you click on parts of the page, and generates alternative designs you can compare side by side. Requires a running dev server.

**Example prompts:**
```
/impeccable live
```
```
/impeccable live
Dev server is running — let me pick the hero headline in the browser and see 3 different design directions.
```

---

## Shortcuts

### pin
Creates a shortcut so you can run a command directly without typing `/impeccable` first.

**Example prompts:**
```
/impeccable pin polish
```
After pinning, you can type:
```
/polish homepage
```
instead of `/impeccable polish homepage`.

---

### unpin
Removes a shortcut you created with pin.

**Example prompts:**
```
/impeccable unpin polish
```

---

## Not sure which command to use?

Just ask:

```
/impeccable
```
```
/impeccable
What should I work on next for this portfolio?
```

Impeccable will look at your project and suggest 2–3 commands with reasons. You pick which one to run.

You can also skip the command name and describe the problem:

| What you want | Say something like… | Maps to |
|---------------|---------------------|---------|
| Fix spacing | "The sections feel unevenly spaced" | `layout` |
| Better fonts | "Headings don't stand out enough" | `typeset` |
| More color | "The site feels too gray" | `colorize` |
| Clearer words | "People won't understand this error message" | `clarify` |
| Build something new | "Create a projects page from scratch" | `craft` |
| Try options live | "Show me different hero designs in the browser" | `live` |

---

## Two ways Impeccable thinks about design

These aren't commands — they're background modes that shape how other skills behave.

| Mode | When it applies | In plain English |
|------|-----------------|------------------|
| **Brand** | Marketing sites, portfolios, landing pages | The design *is* the product. It should feel distinctive and memorable. |
| **Product** | Apps, dashboards, tools, settings screens | The design should get out of the way so people can finish their task. Familiar and trustworthy beats flashy. |

---

## Quick reference — one line each

| Command | One line | Example |
|---------|----------|---------|
| **init** | Set up design context | `/impeccable init` |
| **shape** | Plan before building | `/impeccable shape contact page` |
| **craft** | Plan and build end to end | `/impeccable craft testimonials` |
| **document** | Capture visual style in writing | `/impeccable document` |
| **extract** | Turn repeats into reusable pieces | `/impeccable extract buttons` |
| **critique** | Design review with priorities | `/impeccable critique homepage` |
| **audit** | Technical quality report | `/impeccable audit` |
| **polish** | Final pre-launch cleanup | `/impeccable polish` |
| **bolder** | Make it more striking | `/impeccable bolder hero` |
| **quieter** | Make it calmer | `/impeccable quieter about page` |
| **distill** | Strip to essentials | `/impeccable distill nav` |
| **harden** | Handle errors and edge cases | `/impeccable harden contact form` |
| **onboard** | Improve first-time flows | `/impeccable onboard` |
| **animate** | Add purposeful motion | `/impeccable animate cards` |
| **colorize** | Add strategic color | `/impeccable colorize homepage` |
| **typeset** | Improve fonts and hierarchy | `/impeccable typeset` |
| **layout** | Fix spacing and structure | `/impeccable layout hero` |
| **delight** | Add personality in key moments | `/impeccable delight 404` |
| **overdrive** | Push creative/technical limits | `/impeccable overdrive gallery` |
| **clarify** | Fix confusing copy | `/impeccable clarify form errors` |
| **adapt** | Rework for devices/contexts | `/impeccable adapt for mobile` |
| **optimize** | Make it faster | `/impeccable optimize homepage` |
| **live** | Try alternatives in browser | `/impeccable live` |
| **pin / unpin** | Add or remove shortcuts | `/impeccable pin polish` |

---

*Source: `.cursor/skills/impeccable/` (Impeccable skill v3.5.0)*
