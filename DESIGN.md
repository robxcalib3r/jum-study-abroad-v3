---
name: Jum Study Abroad
description: Radical transparency higher education advisory system fusing European university registrar precision with community peer verification
colors:
  primary: "#1A56DB"
  primary-dark: "#1344AF"
  primary-light: "#EBF2FF"
  primary-subtle: "#F0F5FF"
  forest: "#0D5332"
  forest-dark: "#083B23"
  forest-light: "#EAF7EE"
  forest-badge: "#137343"
  amber: "#D97706"
  amber-dark: "#B45309"
  amber-light: "#FEF3C7"
  cream-ground: "#FBF9F5"
  cream-paper: "#F5F0E6"
  card-white: "#FFFFFF"
  ink-default: "#1E293B"
  ink-muted: "#475569"
  ink-faint: "#94A3B8"
  border-default: "#E2E8F0"
  border-dossier: "#CBD5E1"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "2rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.05em"
  sub-label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.02em"
  caption:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  "2xl": "48px"
  "3xl": "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.card-white}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
  button-secondary:
    backgroundColor: "{colors.card-white}"
    textColor: "{colors.ink-default}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
---

# Design System: Jum Study Abroad

## Overview

**Creative North Star: "The Matriculation Gazette & Embassy Dossier"**

Jum Study Abroad's design language replaces the hype, artificial urgency, and generic stock imagery of South Asian study-abroad agencies with the calm authority and institutional precision of an official European university registrar dossier. Grounded in the indigenous Jumma community of the Chittagong Hill Tracts (CHT) and serving students across Bangladesh, the interface treats every fact, tuition fee, and embassy timeline as certified public record.

The surface breathes through warm parchment and cream tones (`#FBF9F5`, `#F5F0E6`), accented by authoritative administrative royal blue (`#1A56DB`) and official verification forest green (`#0D5332`). Data density is deliberate: tabular ledgers, official visa approval stamps, dossier identifiers, and monospace financial breakdowns make the process transparent and auditable.

**Key Characteristics:**
- **Institutional Weight**: Crisp document cards, ruled margins, and certified dossier stamps convey legal integrity.
- **Tabular Precision**: Tuition waivers, living expenses, and blocked account figures are rendered in monospace numerals with zero hidden markups.
- **Warm Human Ground**: Dignified alumni portraits, authentic indigenous community representation, and candid student quotes counteract bureaucratic chill.
- **Radical Contrast**: Clear side-by-side ledgers explicitly contrasting predatory agency traps against lawful public university pathways.

## Colors

The palette balances administrative authority, verification legitimacy, and warm paper tactile grounds.

### Primary
- **Royal Administrative Blue** (`#1A56DB`): Primary interactive elements, verified institution icons, active progress indicators.
- **Deep Administrative Blue** (`#1344AF`): Hover state for primary actions.
- **Subtle Blue Wash** (`#F0F5FF`): Selected option backgrounds in interactive wizards.

### Secondary
- **Verification Forest Green** (`#0D5332`): Official visa approval seals, scholarship feasibility badges, success milestones.
- **Forest Badge Green** (`#137343`): High-contrast status badges.
- **Subtle Forest Wash** (`#EAF7EE`): Background container for verified alumni outcomes.

### Tertiary
- **Alert Amber** (`#D97706`): Urgent intake deadlines, application calendar alerts.

### Neutral
- **Warm Cream Ground** (`#FBF9F5`): Primary page canvas, warm and glare-free.
- **Document Paper Tint** (`#F5F0E6`): Dossier header plates, table title rows.
- **Card Sheet White** (`#FFFFFF`): Document container backgrounds.
- **Ink Default** (`#1E293B`): Deep slate for primary body and display text.
- **Ink Muted** (`#475569`): Secondary guidance text and explanatory notes.
- **Border Default** (`#E2E8F0`): Subtle document dividers.
- **Border Dossier** (`#CBD5E1`): Structural dossier container bounds.

### Named Rules
**The Direct Truth Rule.** Colors are assigned to denote legal and institutional reality: Blue for official university channels, Green for verified visa/scholarship credentials, and Amber for strict deadlines. Decorative gradients and multicolored fills are strictly prohibited.

## Typography

**Display Font:** Newsreader (with Georgia, serif fallback)  
**Body Font:** Inter (with system-ui, -apple-system fallback)  
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** The typography pairs the literary, editorial gravitas of Newsreader for titles with the clean, legible utility of Inter for dense information, punctuated by JetBrains Mono for certified dossier numbers, intake dates, and currency ledgers.

### Hierarchy
- **Display** (Semi-bold, 3rem–3.5rem, line-height 1.15, tracking -0.02em): Main hero admissions proposition.
- **Headline** (Semi-bold, 1.875rem–2.25rem, line-height 1.2, tracking -0.01em): Section titles.
- **Title** (Semi-bold, 1.125rem–1.25rem, line-height 1.3): Card headings and student names.
- **Body** (Regular, 0.9375rem–1rem, line-height 1.6, max measure 65–75ch): Explanatory narratives and FAQ text.
- **Label / Mono** (Medium, 0.6875rem–0.75rem, tracking 0.05em, uppercase): Dossier IDs, visa approval stamps, intake timelines, and currency figures.

### Named Rules
**The Tabular Numerals Rule.** All financial amounts, living costs, and percentage metrics must render with `font-variant-numeric: tabular-nums` to maintain aligned vertical comparisons.

## Layout

- **Container Bounds:** `max-w-7xl` (1280px) for standard viewports, with `px-4 sm:px-6 lg:px-8` fluid gutters.
- **Grid Systems:** 12-column responsive layout for Hero and Footers; 2–3 column grids for destination cards and alumni records.
- **Rhythm:** Generous section spacing (`py-16 sm:py-20 lg:py-24`) with tight element groupings (`gap-2` to `gap-4`).

## Elevation & Depth

Surfaces are tactile and layered rather than floating. Depth is achieved primarily through structural borders (`border border-registrar-ink-borderDossier`) and subtle paper tone shifts (`#FBF9F5` to `#FFFFFF` to `#F5F0E6`).

### Shadow Vocabulary
- **Dossier Container** (`0 1px 3px rgba(15, 23, 42, 0.08), 0 8px 24px -4px rgba(15, 23, 42, 0.06)`): Used on primary dossier cards and interactive evaluator containers.
- **Seal Elevation** (`0 2px 8px rgba(13, 83, 50, 0.15)`): Subtle glow beneath certified stamps and brand seals.

## Shapes

- **Card Containers:** `rounded-xl` (12px) with crisp 1px borders.
- **Action Buttons & Inputs:** `rounded-lg` (8px).
- **Status Pills & Chips:** `rounded-full` (9999px) or `rounded` (4px).

## Components

### Buttons
- **Shape:** `rounded-lg` (8px).
- **Primary:** Royal Blue (`#1A56DB`), white text, `px-6 py-3.5`, active scale `0.98`.
- **Secondary:** White background with `#E2E8F0` border, `#1E293B` text, hover `#F5F0E6`.

### Dossier Cards
- **Header:** Parchment tone `#F5F0E6` with monospace section title and certified badge.
- **Body:** White document ground with ruled borders and tab selectors.
- **Footer:** Dashed divider with dossier reference number and certified stamp.

### Interactive Wizard
- **Progress:** 3-step numbered header with filled progress bars.
- **Selection States:** White card resting, Blue-subtle with 1px Blue ring when selected.

## Do's and Don'ts

### Do:
- **Do** state exact European public tuition figures (€0 or €170–€243) and mandatory blocked account requirements.
- **Do** highlight verified alumni with real university names, degree majors, and approval dates.
- **Do** maintain a minimum contrast ratio of 4.5:1 on all text across cream and paper backgrounds.
- **Do** use authored SVG icons with uniform 1.5px/2px stroke weight.

### Don't:
- **Don't** use decorative gradient text or glassmorphic blur filters.
- **Don't** add eyebrow or kicker labels above primary headings.
- **Don't** use generic stock photography of Western students with backpacks.
- **Don't** make false "100% visa guarantee" claims or conceal university application deadlines.
