# Gem Solar Design & Architecture Standards

This document serves as the absolute source of truth for design patterns, motion engineering, component architecture, and the visual brand kit for the Gem Solar project. It adheres strictly to the `@design-taste-frontend` specifications.

## 1. Visual Brand Identity

The brand follows a **Dark Nature / Calm System** mode, meant to evoke trust, environmental connection, and premium architectural taste.

* **Primary Backgrounds:** Forest Green (`#1E2D24` / `bg-forest`), Sage (`#A3B19B` / `bg-sage`)
* **Text / Neutrals:** Cream (`#E5D9BD` / `text-cream`), Soft White (`#FFFFFF`)
* **Accent / Action:** Terracotta (`#C26D50` / `text-terracotta`)
* **Warm Section BG:** Adobe (`#86462a` / `bg-adobe`), Adobe Deep (`#6E3822` / `bg-adobe-deep`)
* **Typography Stack:** 
  * Display/Headers: `Geist`, `Satoshi`, or `Cabinet Grotesk` (Strictly high-end Sans-Serif; Serifs allowed ONLY for specific editorial moments). Banned: `Inter`.
  * Body: `Geist` or `Geist Mono` for technical readouts.

## 2. Component Architecture

We will utilize a hybrid approach to maximize speed while maintaining premium customizability:

* **Base UI (shadcn/ui):** We will use shadcn/ui for fundamental accessible primitives (Dropdowns, Dialogs, Selects, Forms). 
  * *CRITICAL RULE:* NEVER use shadcn components in their generic default state. Radii, shadows, and colors MUST be heavily customized to match the Gem Solar theme (e.g., using `rounded-[20px]`, tinted borders, and omitting pure `#000000`).
* **Micro-Interactions (21st.dev / Custom):** For premium, high-end interactions (magnetic buttons, liquid glass panels, perpetual bento animations), we will pull inspiration from 21st.dev and implement them as isolated Framer Motion components.
* **Icons:** `@phosphor-icons/react` ONLY. Consistent stroke width (e.g., `1.5` or `2.0`). Banned: `lucide-react`.

## 3. Motion & Animation Engine

* **Framer Motion (Default UI/Bento):** Use Framer Motion for all UI-level interactions. This includes layout transitions (`layoutId`), magnetic hover effects (via `useMotionValue`), staggered list load-ins, and continuous micro-physics (springs). 
* **GSAP / ScrollTrigger (Specialized Scrolltelling):** Use GSAP *exclusively* for full-page, complex scrolltelling sequences (like a central background image zooming in/out seamlessly as you scroll, or horizontal scroll hijacks).
* *CRITICAL RULE:* Never mix GSAP and Framer Motion in the same component tree.
* **Performance:** Never use React `useState` coupled with `IntersectionObserver` to drive scroll animations. Use Framer Motion's `useScroll` + `useTransform` outside the React render cycle.

## 4. Current Audit & Fixes Required

Moving forward, the existing `page.tsx` must be refactored to resolve these identified slop patterns:

1. **Architecture:** Remove `"use client"` from the top of the page. The layout must be a Server Component (RSC), and interactive elements (like the scroll-spy process) must be isolated into leaf components.
2. **Layout Diversification:** Break the generic 3-column equal grid in the "Why Choose Gem Solar" section into an asymmetric Bento Grid or Zig-Zag layout.
3. **AI Signatures:** Eradicate "Jane Doe" / "jane@example.com" placeholders. Use highly creative, realistic-sounding data.
4. **Viewport Stability:** Replace all instances of `h-screen` with `min-h-[100dvh]` to prevent iOS Safari layout collapse.
5. **Liquid Glass:** Replace basic `backdrop-blur-sm` with true physical edge refraction (1px inner border + inset shadow).

## 5. The Output Standard

Every feature shipped must feel intentional, visually expensive, and strictly anti-generic. Empty spaces should breathe, animations should use spring physics, and the code should be ruthlessly optimized.

## 6. Adobe Color Usage Rules

The `#86462a` (`bg-adobe`) token is a deep burnt sienna — the warm counterpart to forest green. Use it in exactly three modes:

* **Mode 1 — Full Section BG:** `ProcessSection` + `FAQSection` use `bg-adobe` as full-bleed backgrounds. Text on adobe = `text-cream` only. Max 2 warm sections per page; never place them consecutively.
* **Mode 2 — Spot Accent on Neutral:** On cream or forest sections (e.g. `TechnologySection`), use `bg-adobe/10` for icon chip backgrounds, `text-adobe` for icons, `border-adobe/20` for borders, and `hover:bg-adobe` for ghost buttons. Never use `bg-adobe` as a full BG on these sections.
* **Mode 3 — Warm Gradient Bleed:** A `linear-gradient` from `cream` to `rgba(134,70,42,0.06)` at the bottom of cream sections that precede a full adobe section — creates a thermal visual transition without a hard cut.
* **Anti-Riot Rule:** `#86462a` is NEVER used as a button accent color (that role stays with `terracotta #A65D43`). On adobe-BG sections, the CTA is `bg-cream text-adobe` (inverted).
