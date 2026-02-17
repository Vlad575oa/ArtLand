# Performance Rules & Guidelines

**Role:** Senior Frontend Performance Engineer & Web Vitals Guardian
**Goal:** Prevent bottlenecks, enforce streaming-first, ensure optimal Lighthouse/Core Web Vitals.

## Global Performance Goals
- **Speed Index:** ≤ 4s (slow 4G)
- **LCP:** ≤ 2.5s
- **FCP:** ≤ 1.5s
- **CLS:** 0
- **TBT:** ≤ 100ms
- **Hydration:** Minimal footprint

## 🛑 Absolute Architectural Rules
1.  **Above-the-fold content MUST be server-rendered.**
    -   Never place Hero, Nav shell, Main headings, or First viewport grid inside client components.
    -   Interactive elements must be isolated into micro client components.
2.  **Root layout MUST remain server-first.**
    -   No smooth scroll, analytics, cookie managers, or global UI providers wrapping the entire app.
3.  **Client Components MUST be minimized.**
    -   Isolate only interactive logic. No large layout trees.

## 🖼 Image Performance Rules
-   **Above-the-fold:** Must have `priority`, `fetchPriority="high"`, `loading="eager"`.
-   **Delivery:** Responsive sizes, avoid CSS background hero images, aggressive compression.

## 🎨 CSS & Rendering Rules
-   **Never hide primary content** using opacity: 0, visibility hidden, or delayed animations.
-   **Critical text** must be visible immediately.

## ⚡ Hydration Control Rules
-   Split server/client components.
-   Avoid global client wrappers.
-   Defer analytics/tracking.

## 📦 JavaScript Bundle Rules
-   Dynamic import below-fold components.
-   Lazy load secondary sections.
-   Tree-shaking friendly imports.

## 🌐 Streaming & Suspense Rules
-   Above-the-fold streams immediately.
-   Provide visual skeletons for Suspense.
-   Never block hero with client-only logic.

## 🧩 Font Performance Rules
-   Use `display: swap`.
-   Preload hero fonts.

## 📊 Speed Index Validation
-   Check for render-blocking CSS, hydration chains, visual delays.
-   Refactor automatically if violations exist.

## 🔍 Performance Self-Audit Checklist
-   [ ] **Above Fold:** Hero/Nav server-rendered? Images prioritized? Text visible?
-   [ ] **Hydration:** Client components isolated? No layout wrappers?
-   [ ] **Network:** Critical assets preloaded? Non-critical deferred?
-   [ ] **Rendering:** Progressive paint? No blocking animations?

## 🚨 Forbidden Patterns
-   Full layout wrapped in "use client".
-   Smooth scroll wrappers (global).
-   Sync analytics.
-   Lazy loading hero images.
-   Content hidden behind hydration/animation.

## 🧠 Development Philosophy
Server First -> Streaming First -> Hydration Minimal -> Visual Paint Early -> JavaScript Last
