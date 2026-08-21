# Mohammad Hasnain Sayed — Portfolio

A dark, minimalist portfolio built around one idea: **forging raw operations into systems that scale.** The hero renders a live *molten titanium* liquid-metal shader (WebGL), cards animate in on scroll, and the experience section flows company-by-company through a scroll-pinned gallery.

Built with **Next.js 14 (App Router) · TypeScript · Three.js · Framer Motion · Lenis · Tailwind CSS**.

---

## Quick start

> Requires **Node.js 18.17+** (Node 20 LTS recommended) and npm.

```bash
# 1. install dependencies
npm install

# 2. run the dev server
npm run dev
# → open http://localhost:3000

# 3. production build + serve
npm run build
npm start
```

> **Note:** dependencies were **not** pre-installed and the build was **not** run in the environment that generated this project (its package registry was blocked). Run `npm install` on your own machine first — the versions in `package.json` are pinned to a known-compatible set.

---

## ⚠️ Before you publish — update these

1. **LinkedIn URL** — `lib/data.ts`, `profile.linkedin` (line ~20) is a placeholder (`https://www.linkedin.com/in/`). Swap in your real profile URL.
2. **Contact details** — email and phone in `lib/data.ts` (`profile.email`, `profile.phone`, `profile.phoneHref`) are wired from your résumé; double-check them.
3. **Domain** — `app/layout.tsx` uses `metadataBase: new URL("https://hasnainsayed.dev")` for social/OG tags. Point it at your real domain.

_GitHub was intentionally left off per your choice; only Email, Phone and LinkedIn are shown._

---

## Editing your content

**All copy lives in one file: [`lib/data.ts`](lib/data.ts).** No need to touch components to update text.

| What | Where in `lib/data.ts` |
| --- | --- |
| Name, role, thesis line, contacts | `profile` |
| Headline stat band (45+, 98%+, …) | `stats` |
| Nav labels/anchors | `navItems` |
| "Selected Impact" cards | `caseStudies` |
| Experience gallery (companies) | `experiences` |
| Skills / tools chips | `toolkit` |
| Certificates & education | `certificates`, `education` |

The experience gallery advances one company per scroll step and shows a giant ghost year in the background; each entry's `year` field (e.g. `'26`) drives that.

---

## Changing the look

- **Colours & type scale** — [`tailwind.config.ts`](tailwind.config.ts). The molten palette lives under `theme.extend.colors` (`gold`, `bronze`, `ember`, `titanium`, `void`, …).
- **Global styles & utilities** — [`app/globals.css`](app/globals.css): `.metal-text` (shimmering gradient text), `.panel`, `.eyebrow`, `.grain` film overlay, Lenis styles.
- **Liquid-metal shader** — [`components/LiquidMetal.tsx`](components/LiquidMetal.tsx). The GLSL fragment shader's `metalRamp()` defines the bronze → gold → hot-white colour ramp; tune those stops to shift the mood. `uTime * 0.05` controls flow speed.
- **Favicon** — [`app/icon.svg`](app/icon.svg) (a molten "M" monogram). Replace to rebrand.
- **Fonts** — Clash Display + Satoshi (Fontshare) and JetBrains Mono (Google Fonts), loaded via `<link>` in [`app/layout.tsx`](app/layout.tsx). **Requires an internet connection at runtime** to fetch fonts; there's a system-font fallback if offline.

---

## How it's structured

```
hasnain-portfolio/
├─ app/
│  ├─ layout.tsx        # <head>, fonts, metadata, smooth-scroll provider
│  ├─ page.tsx          # composes all sections
│  ├─ globals.css       # design tokens + utilities
│  └─ icon.svg          # favicon
├─ components/
│  ├─ LiquidMetal.tsx   # WebGL molten-titanium hero shader (R3F)
│  ├─ Hero.tsx          # landing (parallax, dynamic import of shader)
│  ├─ DottedSurface.tsx # ambient dotted canvas background
│  ├─ LimelightNav.tsx  # floating pill nav with animated beam
│  ├─ StatsBand.tsx     # headline metrics
│  ├─ SelectedImpact.tsx# sticky-stacking case-study cards
│  ├─ Experience.tsx    # scroll-pinned company gallery
│  ├─ Toolkit.tsx       # skills + certs + education
│  ├─ Footer.tsx        # motion footer + contact + giant signature
│  └─ SmoothScroll.tsx  # Lenis provider
└─ lib/
   ├─ data.ts           # ← ALL content
   ├─ hooks.ts          # useMounted, usePrefersReducedMotion
   └─ scroll.ts         # scrollToId helper (via Lenis)
```

### Inspiration → section mapping
| Section | Inspiration |
| --- | --- |
| Hero + liquid-metal background | Horizon Hero Section |
| Selected Impact cards | Card Stack |
| Experience gallery | Circular Gallery (scroll-driven) |
| Floating nav | Limelight Nav |
| Ambient background | Dotted Surface |
| Footer | Motion Footer |

---

## Accessibility & performance
- **Reduced motion** — respects `prefers-reduced-motion`: the shader freezes on a static frame, the dotted canvas draws once, and animations are neutralised.
- **WebGL is client-only** — `LiquidMetal` is dynamically imported with `ssr: false` and a lightweight gradient fallback, so it never blocks server rendering.
- Keyboard focus rings, semantic landmarks, and reduced DPR caps on the canvases keep it responsive on lower-end GPUs.

---

## Deploy

**Vercel (recommended):** push to a Git repo → "Import Project" on Vercel → it auto-detects Next.js. No config needed.

**Netlify:** build command `npm run build`, publish via the official Next.js runtime/plugin.

Any Node host works with `npm run build && npm start`.

---

_Generated as a starting point — the content is yours to refine in `lib/data.ts`._
