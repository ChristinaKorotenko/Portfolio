import { useEffect, useRef, useState } from "react";

function measureFitScale(widthsPts, heightsPts, innerMaxWPx, innerMaxHPx, gapPx) {
  const n = widthsPts.length;
  if (!n) return 1;
  const maxW = Math.max(...widthsPts);
  const sumH = heightsPts.reduce((a, h) => a + h, 0);
  const gapTotalPx = Math.max(0, n - 1) * gapPx;
  const denomH = Math.max(sumH, 1e-6);

  /** PDF points × scale ≈ css px for default 72 DPI convention used by viewport */
  const byWidth = innerMaxWPx / maxW;
  const byHeight = (innerMaxHPx - gapTotalPx) / denomH;

  let mult = Math.min(byWidth, byHeight);
  if (!Number.isFinite(mult) || mult <= 0) mult = byWidth;

  /** Allow quite small scales so tall multi-page docs still fit without inner scroll */
  return Math.min(Math.max(mult, 0.18), 3);
}

/**
 * Renders each PDF page to stacked canvases (no iframe / built-in PDF UI).
 */
export function PdfRasterPages({ src }) {
  const wrapRef = useRef(null);
  const [phase, setPhase] = useState("loading");
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap || !src) return undefined;

    wrap.replaceChildren();
    setPhase("loading");
    setErrorMessage(null);

    let cancelled = false;

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist/legacy/build/pdf.js");
        pdfjs.GlobalWorkerOptions.workerSrc = (
          await import("pdfjs-dist/legacy/build/pdf.worker.min.js?url")
        ).default;

        const pdf = await pdfjs.getDocument({ url: src }).promise;
        const n = pdf.numPages;
        const gapPx = 6;

        /** Space under title + paddings (~modal head + margins) */
        const chromePx =
          typeof window !== "undefined" ? Math.min(148, Math.max(108, Math.round(window.innerHeight * 0.12))) : 132;
        const innerMaxWPx =
          typeof window !== "undefined" ? Math.min(760, Math.max(240, window.innerWidth - 56)) : 760;
        const innerMaxHPx =
          typeof window !== "undefined"
            ? Math.max(
                200,
                Math.min(window.innerHeight * 0.86 - chromePx, window.innerHeight * 0.68 - chromePx / 2)
              )
            : 520;

        const widthsPts = [];
        const heightsPts = [];
        const pageRefs = [];

        for (let pageNum = 1; pageNum <= n; pageNum++) {
          const page = await pdf.getPage(pageNum);
          if (cancelled) return;
          const base = page.getViewport({ scale: 1 });
          widthsPts.push(base.width);
          heightsPts.push(base.height);
          pageRefs.push(page);
        }

        const mult = measureFitScale(widthsPts, heightsPts, innerMaxWPx, innerMaxHPx, gapPx);

        for (let idx = 0; idx < n; idx++) {
          const page = pageRefs[idx];
          const viewport = page.getViewport({ scale: mult });

          const canvas = document.createElement("canvas");
          canvas.className = "modal-pdf-canvas";
          const ctx = canvas.getContext("2d", { alpha: false });

          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.style.display = "block";
          canvas.style.width = "auto";
          canvas.style.maxWidth = "100%";
          canvas.style.marginLeft = "auto";
          canvas.style.marginRight = "auto";
          canvas.style.height = "auto";

          await page.render({ canvasContext: ctx, viewport }).promise;
          if (cancelled) return;

          wrap.appendChild(canvas);

          if (idx < n - 1) {
            const spacer = document.createElement("div");
            spacer.className = "modal-pdf-page-gap";
            wrap.appendChild(spacer);
          }
        }

        if (!cancelled) setPhase("done");
      } catch (e) {
        if (!cancelled) {
          setErrorMessage(e?.message ?? String(e));
          setPhase("error");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div className="modal-pdf-wrap">
      {phase === "loading" ? <p className="modal-pdf-loading">Loading…</p> : null}
      {phase === "error" ? (
        <p className="modal-pdf-error" role="alert">
          Could not show this PDF. {errorMessage}
        </p>
      ) : null}
      <div ref={wrapRef} className="modal-pdf-pages" />
    </div>
  );
}
