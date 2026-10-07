# Project Rules & Specification: Cyndy

## 1. Project Overview & Identity
- **Project Name:** Cyndy (Personal Editorial & Creative Journal)
- **Concept:** A modern, high-end editorial blog that bridges intimate long-form storytelling, creative musings, and curated essays.
- **Tone & Voice:** Thoughtful, chic, candid, and sophisticated.
- **Core Principle:** Anti-AI-slop. No generic cookie-cutter cards, no saturated neon purple/cyan gradients, and no sterile corporate layouts. The site must feel like an independent high-fashion / literary journal (e.g., *Kinfolk*, *Cereal*, *The Gentlewoman*, or *Substack* meets *Awwwards*).

---

## 2. Information Architecture & Pages
The platform is organized around four primary core sections, built with seamless navigation:
1. **Home (`index.html`)**:
   - Hero spotlight featuring the latest lead editorial with bold typography and prominent visual framing.
   - Curated "Editor's Picks" / Trending essays.
   - Interactive category/topic tabs.
   - Quick quote / philosophy manifesto card.
   - Atmospheric newsletter subscription capsule ("The Sunday Letter").
2. **Blogs (`blogs.html` or integrated dynamic archive)**:
   - Searchable and filterable archive by topic (e.g., *Culture, Design, Slow Living, Tech & Craft*).
   - Dual view options: Compact Editorial List vs. Magazine Masonry Grid.
   - Rich article details: Estimated reading time, publish date, author badge, reading progress indicator, pull quotes, and social share links.
3. **About (`about.html` or dedicated seamless view)**:
   - Editorial profile of Cyndy: bio, narrative backstory, and creative ethos.
   - "Behind the Desk": Interactive gear, current reads, and core influences.
   - Visual timeline or milestone snapshots.
4. **Contact (`contact.html` or dedicated seamless view)**:
   - Interactive, sleek inquiry form (collaborations, speaking, direct letters).
   - Direct correspondence details and social links with bespoke hover states.
   - Response time indicator / current availability badge ("Open for Select Collaborations").

---

## 3. Recommended Design System & Color Palette

### Primary Palette: "Warm Atelier & Obsidian Noir" (Recommended)
An earthy, tactile, editorial palette that feels organic and luxurious:
- **Base Background:** `#FAF7F2` (Warm Linen / Bone White)
- **Surface / Card Background:** `#FFFFFF` (Pure Studio White)
- **Deep Text & Headings:** `#1A1918` (Soft Charcoal / Obsidian Ink)
- **Secondary / Muted Text:** `#6E6A64` (Warm Stone Grey)
- **Borders & Dividers:** `#E5E0D8` (Muted Parchment)
- **Primary Accent:** `#C46238` (Terracotta Sienna / Rust Amber)
- **Secondary Accent:** `#2D4739` (Deep Forest Olive)
- **Tag Highlight:** `#F3EDE2` (Oat Milk)

### Typography Hierarchy
- **Editorial Headings:** `"Playfair Display"`, `"Newsreader"`, or `"Instrument Serif"`, Georgia, serif (expressive, elegant, literary).
- **Body & Interface:** `"Plus Jakarta Sans"`, `"Outfit"`, or `"Inter"`, sans-serif (clean, readable, high legibility at 16–18px with 1.65 line height).
- **Metadata & Accents:** Monospace or subtle tracked uppercase (e.g., `font-size: 0.75rem; letter-spacing: 0.12em; text-transform: uppercase;`).

### Visual Patterns & Anti-Generic Directives
- **Subtle Organic Borders:** Clean 1px borders with warm tints (`#E5E0D8`), avoiding heavy black dropshadows.
- **Tactile Depth:** Soft diffuse shadow (`box-shadow: 0 12px 34px -10px rgba(26, 25, 24, 0.06);`).
- **Dynamic Micro-Interactions:**
  - Reading progress bar pinned to the top.
  - Smooth underline hovers on editorial links.
  - Image subtle scale-down / subtle parallax zoom on card hover.
  - Interactive filter chips with instant response.

---

## 4. Technical Architecture & Folder Structure
Strict adherence to the established project structure:

```
Vibecoder/
├── Media/                  # Images, custom illustrations, avatars, icons
├── Script/                 # Modular Vanilla JavaScript files
│   ├── app.js              # Core UI interactions, navigation, mobile drawer
│   ├── blog.js             # Blog archive rendering, filtering, search, modal/detail view
│   └── data.js             # Structured blog post data, author info, and categories
├── Style/                  # Modular Vanilla CSS files
│   ├── base.css            # CSS reset, variables, typography, utility classes
│   ├── layout.css          # Navigation, header, footer, grid structures
│   ├── components.css      # Cards, badges, buttons, form elements, newsletter
│   └── main.css            # Aggregator stylesheet linking all modules
├── index.html              # Core application entry
└── RULES.md                # Project guidelines and technical specification
```

---

## 5. Technology Stack & Constraints
- **Core:** Pure HTML5, Vanilla CSS3, Modern ES6+ JavaScript.
- **No Heavy Frameworks:** No React/Vue/Tailwind bloat unless explicitly requested. Everything remains fast, lightweight, and dependency-free.
- **Accessibility & Standards:**
  - Semantic HTML (`<main>`, `<article>`, `<header>`, `<nav>`, `<aside>`, `<footer>`).
  - High contrast compliance (WCAG AA).
  - Fully responsive across mobile (320px+), tablet, and desktop (1440px+).
  - Clean ARIA labels on interactive elements and icons.
