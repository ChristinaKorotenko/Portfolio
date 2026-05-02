import { useEffect, useRef, useState } from "react";

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
        const maxCssW =
          typeof window !== "undefined" ? Math.min(860, Math.max(280, window.innerWidth - 72)) : 860;

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const baseVp = page.getViewport({ scale: 1 });
          const cssScale = maxCssW / baseVp.width;
          const viewport = page.getViewport({ scale: cssScale });

          const canvas = document.createElement("canvas");
          canvas.className = "modal-pdf-canvas";
          const ctx = canvas.getContext("2d", { alpha: false });

          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);
          canvas.style.display = "block";
          canvas.style.width = "100%";
          canvas.style.height = "auto";

          await page.render({ canvasContext: ctx, viewport }).promise;
          if (cancelled) return;

          wrap.appendChild(canvas);

          if (pageNum < pdf.numPages) {
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
