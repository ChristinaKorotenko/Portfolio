import { siteContent } from "../../content/siteContent";
import { LavaButton } from "../../components/LavaButton/LavaButton";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const { hero } = siteContent;
  const actionsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) return;

    const actionsEl = actionsRef.current;
    if (!actionsEl) return;

    const buttons = Array.from(actionsEl.querySelectorAll(".bubble"));
    if (buttons.length === 0) return;

    if (typeof document === "undefined") return;

    let cancelled = false;
    const clones = [];

    const cleanup = () => {
      for (const c of clones) c.remove();
      actionsEl.classList.remove("is-drop-hidden");
      actionsEl.style.pointerEvents = "";
    };

    const run = () => {
      if (cancelled) return;

      // Measure visual center point (rect) but use layout size (offset)
      // to avoid any "bbox shrink" when swapping clone → original.
      const finalRects = buttons.map((el) => {
        const rect = el.getBoundingClientRect();
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        return {
          left: rect.left + rect.width / 2 - w / 2,
          top: rect.top + rect.height / 2 - h / 2,
          width: w,
          height: h
        };
      });

      // Keep layout stable, but hide originals while clones fall.
      actionsEl.classList.add("is-drop-hidden");
      actionsEl.style.pointerEvents = "none";
      const startOffset = 180;

      let maxDelay = 0;
      const anims = [];

      for (let i = 0; i < buttons.length; i++) {
        const el = buttons[i];
        const r = finalRects[i];
        const startTop = -r.height - startOffset;
        const dy = r.top - startTop;
        const delay = i * 140;
        maxDelay = Math.max(maxDelay, delay);

        const clone = el.cloneNode(true);
        clone.style.position = "fixed";
        clone.style.left = `${r.left}px`;
        clone.style.top = `${startTop}px`;
        clone.style.width = `${r.width}px`;
        clone.style.height = `${r.height}px`;
        clone.style.margin = "0";
        clone.style.zIndex = "9999";
        clone.style.pointerEvents = "none";
        clone.style.willChange = "transform, opacity";
        document.body.appendChild(clone);
        clones.push(clone);

        if (typeof clone.animate === "function") {
          const a = clone.animate(
            [
              { transform: "translate3d(0,0,0) rotate(-8deg) scale(0.98)" },
              { transform: `translate3d(0, ${dy}px, 0) rotate(-8deg) scale(1.02)`, offset: 0.62 },
              { transform: `translate3d(0, ${dy - 12}px, 0) rotate(-8deg) scale(1.0)`, offset: 0.74 },
              { transform: `translate3d(0, ${dy}px, 0) rotate(-8deg) scale(1.0)`, offset: 0.82 },
              { transform: `translate3d(0, ${dy}px, 0) rotate(-8deg) scale(1.0)` }
            ],
            {
              duration: 2200,
              delay,
              easing: "cubic-bezier(0.2, 0.9, 0.25, 1)",
              fill: "both"
            }
          );
          anims.push(a);
        } else {
          // Fallback: just don't animate (avoid flicker)
          clone.style.top = `${r.top}px`;
        }
      }

      if (anims.length > 0) {
        Promise.all(anims.map((a) => a.finished.catch(() => null))).then(() => {
          if (cancelled) return;
          requestAnimationFrame(() => {
            if (!cancelled) cleanup();
          });
        });
      } else {
        window.setTimeout(() => {
          if (cancelled) return;
          cleanup();
        }, 1800 + maxDelay + 120);
      }
    };

    const start = () => {
      // Wait for layout to settle (2 frames).
      const raf1 = requestAnimationFrame(() => {
        const raf2 = requestAnimationFrame(run);
        actionsEl.dataset._raf2 = String(raf2);
      });
      actionsEl.dataset._raf1 = String(raf1);
    };

    // Wait for fonts to be ready; otherwise heading reflow shifts final position.
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) start();
      });
    } else {
      start();
    }

    return () => {
      cancelled = true;
      const raf1 = Number(actionsEl.dataset._raf1);
      if (raf1) cancelAnimationFrame(raf1);
      const raf2 = Number(actionsEl.dataset._raf2);
      if (raf2) cancelAnimationFrame(raf2);
      cleanup();
    };
  }, []);

  return (
    <section
      id="top"
      className="section hero"
      data-gradient-a="0,120,255"
      data-gradient-b="255,0,170"
      data-gradient-c="255,230,0"
      ref={sectionRef}
    >
      <div className="section-bg-orb" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-heading">
          <h1 className="hero-title hero-title--ref">
            <span className="hero-hi">Hi there!</span>{" "}
            <span className="hero-scribble" aria-hidden="true">
              〰〰〰
            </span>{" "}
            <span className="hero-main">I’m Kristina.</span>
            <br />
            <span className="hero-main">
              Product &amp; Project Manager based in Berlin
            </span>
          </h1>
        </div>

        <div className="hero-content">
          <div className="hero-left-col">
            <p className="hero-left">{hero.subtitle}</p>
          </div>
          <div className="hero-right-col">
            <div
              ref={actionsRef}
              className="hero-actions-inline"
              aria-label="Quick links"
            >
              <LavaButton
                className="bubble--pill bubble--yellow"
                href="#projects"
                ariaLabel="Projects"
              >
                Projects
              </LavaButton>
              <LavaButton
                className="bubble--flower bubble--green"
                href="#about"
                ariaLabel="About me"
              >
                About me
              </LavaButton>
              <LavaButton
                className="bubble--star bubble--pink"
                href="#footer"
                ariaLabel="Contact"
              >
                Contact
              </LavaButton>
            </div>
            <p className="hero-right">{hero.aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

