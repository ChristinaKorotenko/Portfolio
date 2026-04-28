import { useEffect } from "react";

function parseRgb(str) {
  const [r, g, b] = String(str)
    .split(",")
    .map((x) => Number(x.trim()));
  if ([r, g, b].some((n) => Number.isNaN(n))) return null;
  return { r, g, b };
}

function readColors(el) {
  const a = parseRgb(el.getAttribute("data-gradient-a"));
  const b = parseRgb(el.getAttribute("data-gradient-b"));
  const c = parseRgb(el.getAttribute("data-gradient-c"));
  if (!a || !b || !c) return null;
  return { a, b, c };
}

function setSectionRgbVars(sectionEl, colors) {
  sectionEl.style.setProperty("--sga", `${colors.a.r},${colors.a.g},${colors.a.b}`);
  sectionEl.style.setProperty("--sgb", `${colors.b.r},${colors.b.g},${colors.b.b}`);
  sectionEl.style.setProperty("--sgc", `${colors.c.r},${colors.c.g},${colors.c.b}`);
}

/**
 * Per-section gradient "travels through the section":
 * - each section owns its colors (from data-gradient-*)
 * - orb moves top → bottom based on how far you've scrolled through that section
 * - orb position alternates left/right by section index
 */
export function useSectionGradientFlow() {
  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) return;

    const sections = Array.from(document.querySelectorAll("section[data-gradient-a], footer[data-gradient-a]"));
    if (sections.length === 0) return;

    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      const colors = readColors(s);
      if (!colors) continue;
      setSectionRgbVars(s, colors);
      // default progress
      s.style.setProperty("--sgp", "0.5");
      // 0 = left, 1 = right (alternating)
      s.style.setProperty("--sg-side", String(i % 2));
    }

    let raf = 0;

    const clamp01 = (n) => Math.min(1, Math.max(0, n));

    const tick = () => {
      raf = 0;
      const vh = window.innerHeight || 1;

      for (const s of sections) {
        const r = s.getBoundingClientRect();
        // progress: 0 when section just enters from bottom, 1 when it leaves at top
        const denom = (r.height + vh) || 1;
        const p = clamp01((vh - r.top) / denom);
        s.style.setProperty("--sgp", String(p));
      }
    };

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      onScroll();
    };

    tick();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);
}

