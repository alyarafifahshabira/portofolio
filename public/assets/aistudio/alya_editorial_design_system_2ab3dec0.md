---
name: "Alya Editorial"
description: "Luxury high-fashion editorial portfolio design system inspired by print magazines and minimalist architectural lookbooks."
---

## Overview

**Alya Editorial** is a luxury print-inspired digital portfolio system created for **Alya Rafifah Shabira**, a first-year Informatics Engineering student at Institut Teknologi PLN. Designed for academic mentors, organizational committees, scholarship/summit selectors, and creative/tech collaborators, the system pairs warm sunlit alabaster silk surfaces (`#F3EDE4`) with deep obsidian contrast bands (`#11100F`) and antique champagne gold accents (`#B0926A`, `#8C6D46`).

The aesthetic blends **Minimalism** with **Editorial Print Craft**: generous negative space, crisp 1px hairline rules punctuated by delicate 4-point gold star motifs (`✦`), overlapping magazine-cover masthead typography, and high-contrast alternating light/dark bands.

## Colors

The palette preserves the exact warm alabaster silk, obsidian black, and champagne gold tokens specified for the portfolio, paired with accessible neutral ink tones for editorial legibility.

- **Warm Silk (`bg-cream`, `bg-cream-dark`):** Primary light-band canvas (`#F3EDE4`) and secondary tonal step (`#E8DFD3`) for achievements and certificates ledgers.
- **Obsidian (`bg-dark`, `paper`):** High-contrast dark-band canvas (`#11100F`) with warm paper ink (`#F5F0E8`) for the Organizational Experience showcase and Footer.
- **Champagne Gold (`gold`, `gold-accessible`):** `#B0926A` for decorative rules, stars, monograms, and dark-band accents; `#8C6D46` for accessible small eyebrow text and interactive fills on cream surfaces.

```yaml
colors:
  bg-cream: "#F3EDE4"
  bg-cream-dark: "#E8DFD3"
  bg-dark: "#11100F"
  ink: "#141312"
  ink-muted: "#484645"
  paper: "#F5F0E8"
  paper-muted: "#D1C4B7"
  gold: "#B0926A"
  gold-accessible: "#735A37"
  rule-light: "#D1C4B7"
  rule-dark: "#372F26"
  light:
    primary: "#8C6D46"
    on-primary: "#FFFFFF"
    surface: "#F3EDE4"
    surface-container-low: "#E8DFD3"
    on-surface: "#141312"
    on-surface-variant: "#484645"
    outline: "#D1C4B7"
  dark:
    primary: "#B0926A"
    on-primary: "#11100F"
    surface: "#11100F"
    surface-container: "#1C1B1A"
    on-surface: "#F5F0E8"
    on-surface-variant: "#D1C4B7"
    outline: "#372F26"
```

## Typography

A dual-font editorial hierarchy pairs **Cormorant Garamond** for dramatic magazine mastheads, section titles, and signature monograms with **Plus Jakarta Sans** for crisp uppercase eyebrows, navigation links, and readable body copy. Every display/headline level above `32px` includes a `-mobile` counterpart.

```yaml
typography:
  display-masthead:
    fontFamily: "Cormorant Garamond"
    fontSize: 160px
    fontWeight: 400
    lineHeight: 136px
    letterSpacing: -4px
  display-masthead-mobile:
    fontFamily: "Cormorant Garamond"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 34px
    letterSpacing: -0.5px
  display-lg:
    fontFamily: "Cormorant Garamond"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 58px
    letterSpacing: -1px
  display-lg-mobile:
    fontFamily: "Cormorant Garamond"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: -0.5px
  headline-lg:
    fontFamily: "Cormorant Garamond"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 52px
    letterSpacing: -0.8px
  headline-lg-mobile:
    fontFamily: "Cormorant Garamond"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: -0.4px
  headline-md:
    fontFamily: "Cormorant Garamond"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 40px
    letterSpacing: -0.5px
  headline-md-mobile:
    fontFamily: "Cormorant Garamond"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: -0.3px
  headline-sm:
    fontFamily: "Cormorant Garamond"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 32px
    letterSpacing: -0.3px
  title-lg:
    fontFamily: "Cormorant Garamond"
    fontSize: 20px
    fontWeight: 500
    lineHeight: 26px
    letterSpacing: 0.8px
  body-md:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  body-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 13px
    fontWeight: 400
    lineHeight: 22px
    letterSpacing: 0px
  eyebrow:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 11px
    fontWeight: 500
    lineHeight: 16px
    letterSpacing: 2px
  eyebrow-sm:
    fontFamily: "Plus Jakarta Sans"
    fontSize: 10px
    fontWeight: 500
    lineHeight: 14px
    letterSpacing: 1.8px
```

## Layout & Spacing

The layout uses a centered max-width editorial container (`1360px`) with generous horizontal breathing room (`5vw` / `24px`–`64px`) and an 8px spacing rhythm. Multi-column desktop grids (3-column hero foreground, 4-column experience showcase, 3-column skills/strengths/feature, 2-column education ledger, 4-column footer) collapse cleanly to 2-column and single-column stacks on tablet and mobile without horizontal overflow.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 36px
  gutter-2xl: 48px
  section-y: 96px
  page-margin: 24px
```

## Elevation & Depth

Hierarchy is conveyed through **tonal band alternation** (warm silk `#F3EDE4` → obsidian `#11100F` → warm silk `#F3EDE4` → deeper silk `#E8DFD3` → obsidian `#11100F`) and **1px hairline rules** rather than drop shadows. Subtle diagonal radial silk-fold lighting accents light sections, and overlapping Z-index layering in the hero places the cutout portrait cleanly in front of the giant masthead lettering.

## Shapes

Sharp architectural edges (`0px` on editorial photography frames, ledger rows, and buttons) anchor the print-magazine aesthetic, contrasted only by circular geometric seals and subtle 4px micro-tags where appropriate.

```yaml
rounded:
  none: 0px
  sm: 2px
  DEFAULT: 0px
  md: 4px
  full: 9999px
```

## Motion & Micro-interaction

Motion is unhurried and architectural, using a smooth deceleration curve (`cubic-bezier(0.22, 1, 0.36, 1)`). Scroll-triggered `.reveal` entrances translate `24px` upward while fading in, editorial cards scale subtly (`1.04`) on hover, and the hero circular seal rotates continuously at a meditative `28s` pace. All animations pause or disable cleanly under `prefers-reduced-motion: reduce`.

```yaml
motion:
  hover-link:
    duration: 300ms
    delay: 0ms
    timingFunction: cubic-bezier(0.22, 1, 0.36, 1)
  card-zoom:
    duration: 800ms
    delay: 0ms
    timingFunction: cubic-bezier(0.22, 1, 0.36, 1)
  section-reveal:
    duration: 900ms
    delay: 0ms
    timingFunction: cubic-bezier(0.22, 1, 0.36, 1)
```

## Voice & Content Strategy

- **Tone of voice:** Poised, articulate, and grounded. Copy reflects first-year academic ambition and genuine organizational stewardship without hype or buzzwords.
- **Capitalisation:** Uppercase wide-tracked (`letter-spacing: 0.18em`) for `.eyebrow` labels, section indices, and navigation links; title case or exact source spelling for institutional names, achievements, and certificates.
- **Data fidelity:** All personal details, dates, bullet points, Olympiad scores, and certificate titles from Alya Rafifah Shabira's CV are preserved verbatim.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Button** → `@components/button.html`: `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html`: `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Modal** → `@components/modal.html`: `modal-standard`, `modal-alert`, `modal-drawer`
- **Typography** → `@components/typography.html`: `typography-display`, `typography-body`, `typography-label`
