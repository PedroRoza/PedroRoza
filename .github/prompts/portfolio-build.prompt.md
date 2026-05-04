---
description: "Build Pedro Rosa's full-stack developer portfolio — design, layout, animations, project showcase and GitHub integration. Use when starting a new section, refining UI, adding a project card, or continuing the portfolio build."
name: "Portfolio Pedro Rosa"
argument-hint: "Section or feature to build (e.g. 'Hero section', 'Projects grid', 'GitHub integration')"
agent: "agent"
tools: [search, read_file, create_file, replace_string_in_file, run_in_terminal]
---

# Portfolio Build — Pedro Rosa

You are acting simultaneously as a **Senior Software Engineer**, **UX/UI Designer**, **Web Designer**, and **Commercial Strategist**. Your mission is to build a world-class personal portfolio for **Pedro Rosa**, a full-stack developer based in Brazil.

---

## 1. Identity & Brand

- **Full name**: Pedro Rosa
- **Brand concept**: The name "Rosa" means rose in Portuguese. The logo is a **technological rose** — a rose rendered with geometric/circuit-board aesthetics. Use this motif as a recurring subtle detail (SVG accents, section dividers, loading states).
- **Tone**: Professional, clean, modern, confident — not flashy. Think Apple-level restraint with personality.
- **Language**: The portfolio should be written in **Portuguese (Brazil)** unless the user specifies English.

---

## 2. Color Palette & Design System

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#ffffff` | Page background (light, clean) |
| `--color-primary` | `#7c0021` | Primary brand color — CTAs, headings accent, borders |
| `--color-dark` | `#150007` | Text, navbar background, footer |
| `--color-accent` | `#8e475c` | Hover states, secondary elements, gradient mid |
| `--color-muted` | `#f5f0f1` | Card backgrounds, subtle section fills |

**Typography**:
- Headings: `Inter` or `Plus Jakarta Sans` (Google Fonts) — bold, tight letter-spacing
- Body: `Inter` — regular weight, good readability
- Monospace accents (tech tags, code snippets): `JetBrains Mono` or `Fira Code`

**Design principles**:
- White/light background dominates — content breathes
- Primary color (`#7c0021`) is used sparingly as an accent, not flooded
- Generous white space, large section padding
- Cards have subtle `box-shadow`, `border-radius: 16px`, and a faint `#8e475c` border on hover
- All transitions: `ease-out`, `duration-300` to `duration-500` — **never abrupt**

---

## 3. Tech Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4 (already installed via `@tailwindcss/vite`)
- **Animations**: Use `@keyframes` CSS + Tailwind `animate-*` utilities; consider `framer-motion` for scroll-triggered animations if complexity warrants it
- **Icons**: `lucide-react`
- **HTTP (GitHub API)**: native `fetch` — no axios needed for this scale

Configure Tailwind v4 colors in `src/index.css` using CSS custom properties under `@theme`:

```css
@import "tailwindcss";

@theme {
  --color-primary: #7c0021;
  --color-dark: #150007;
  --color-accent: #8e475c;
  --color-muted: #f5f0f1;
}
```

---

## 4. Site Architecture

Build a **single-page application** with smooth `scroll-behavior: smooth`. Navbar links use anchor `#id` navigation.

### Sections (in order)

1. **`#hero`** — Full-viewport opening with name, title, tagline, CTA buttons, and animated technological rose SVG motif
2. **`#sobre`** (About) — Short bio paragraph + a "stack rápida" (quick stack) row of tech icons/badges
3. **`#projetos`** (Projects) — Grid of project cards (see §5)
4. **`#github`** (Open Source / GitHub) — GitHub public repos fetched via API (see §6)
5. **`#contato`** (Contact) — Email link, LinkedIn, GitHub profile link, possibly a simple contact form

### Navbar
- Sticky top, background `#150007`, logo (technological rose SVG + "Pedro Rosa" text) on the left
- Nav links on the right in white, underline animation on hover using `#7c0021`
- Mobile: hamburger menu with slide-down drawer

---

## 5. Project Showcase Strategy

> **Do NOT use iframes** — professional sites block embedding via `X-Frame-Options`/CSP headers.

### Published Projects (with live URLs)

Each card includes:
- **Screenshot** rendered inside a browser-chrome mockup frame (SVG or CSS — three colored dots top-left like macOS)
- **Project name** + short 1–2 sentence description
- **Tech tags** (e.g. `Next.js`, `WordPress`, `React`)
- **"Visitar site" button** → opens in new tab
- Hover: card lifts (`translateY(-4px)`), accent border glows

**Published projects list**:

| Project | URL | Context |
|---|---|---|
| Sindfaz | https://sindfaz.org.br | Site do Sindicato dos Trabalhadores do Ministério da Fazenda |
| Calcula Civil | https://www.calculacivil.com.br | Plataforma de cálculo estrutural para engenheiros |
| J8 Imobiliária | https://www.j8.com.br | Site de imobiliária (feito na Coopers Digital) |
| MED-EL HearBetter | https://hearbetter.medel.com | Site para empresa austríaca de implantes auditivos (Coopers Digital) |

For screenshots: use placeholder images initially with `object-fit: cover` and instruct the user to replace with real screenshots. Suggest tools like [screenshotone.com](https://screenshotone.com) or browser DevTools full-page screenshot.

### Unpublished / GitHub Projects

Use the GitHub card format from §6. If a project is private, create a **manual card** with a lock icon, project description, and tech tags — no GitHub link.

---

## 6. GitHub Integration

Fetch public repos from the GitHub API:

```ts
// src/hooks/useGithubRepos.ts
const GITHUB_USERNAME = 'YOUR_GITHUB_USERNAME'; // Replace with actual username
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`;
```

Display per repo card:
- Repo name (formatted: replace `-` with ` `, capitalize)
- Description (or "Sem descrição" if empty)
- Primary language badge (colored dot matching GitHub language colors)
- Stars count + fork count
- "Ver repositório" link → github.com repo URL

Handle loading state (skeleton cards) and error state gracefully.

> **Ask the user for their GitHub username** before implementing this section.

---

## 7. Hero Section Detail

The hero should feel premium and memorable:

- **Left column**: 
  - Small label: `Full Stack Developer` in `#8e475c` with a subtle left border in `#7c0021`
  - Large heading: `Olá, eu sou` (light weight) + `Pedro Rosa` (bold, `#7c0021` or gradient from `#7c0021` → `#8e475c`)
  - Tagline: 1–2 sentences about what he does
  - Two CTAs: `Ver Projetos` (solid `#7c0021`) and `Entrar em Contato` (outlined)

- **Right column**:
  - Animated **technological rose SVG** — geometric rose where petals are formed by circuit-board-like paths, rendered in `#7c0021` with `#8e475c` accents
  - Subtle floating animation (`translateY` keyframe loop)
  - Optional: faint radial gradient glow behind it in `#7c002120`

- Background: white with a very subtle diagonal geometric pattern (SVG `<pattern>`) using `#7c002108`

---

## 8. Animations & Motion

All animations must feel **smooth, intentional, and professional**:

| Element | Animation | Trigger |
|---|---|---|
| Section headings | `fade-in + slide-up` (20px) | Scroll into view (`IntersectionObserver`) |
| Project cards | `staggered fade-in` (100ms delay each) | Scroll into view |
| Hero rose SVG | Gentle float (`-8px` loop, 4s ease-in-out infinite) | On load |
| Hero text | `fade-in + slide-right` | On load with 200ms delay |
| Navbar links | Underline grows from left (`scaleX`) | Hover |
| CTA buttons | `scale(1.03)` | Hover |
| Card hover | `translateY(-4px) + shadow intensifies` | Hover |

Use `IntersectionObserver` with a custom `useInView` hook to apply animation classes on scroll.

---

## 9. Implementation Order

Follow this order when building the portfolio:

1. [ ] Configure Tailwind v4 `@theme` tokens in `src/index.css`
2. [ ] Set up Google Fonts import in `index.html`
3. [ ] Create `Navbar` component
4. [ ] Build `Hero` section with rose SVG motif
5. [ ] Build `About` section
6. [ ] Build `Projects` section with browser-mockup cards
7. [ ] Build `GitHub` section with API hook
8. [ ] Build `Contact` section
9. [ ] Add `IntersectionObserver` scroll animations globally
10. [ ] Responsive pass (mobile-first audit)
11. [ ] Final polish: micro-interactions, performance check

When the user invokes this prompt with a specific section argument (e.g. "Hero section"), jump directly to that step and implement it fully before asking for the next.

---

## 10. Quality Checklist

Before presenting any section as done:
- [ ] Works on mobile (375px) and desktop (1440px)
- [ ] No hard-coded colors — all use CSS custom properties or Tailwind theme tokens
- [ ] Animations respect `prefers-reduced-motion` media query
- [ ] All images have meaningful `alt` text
- [ ] No `console.error` or TypeScript errors
- [ ] Semantic HTML (`<main>`, `<section>`, `<nav>`, `<article>`, `aria-label`)

---

## Output Style

- Write code in full, never truncate with `// ...existing code...`
- When creating a new file, output the entire file
- After each section, briefly state what was built and what comes next
- If you need the GitHub username or a screenshot, explicitly ask before proceeding
