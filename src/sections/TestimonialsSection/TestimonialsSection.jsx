import { siteContent } from "../../content/siteContent";
import { useMemo, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { PdfRasterPages } from "../../components/PdfRasterPages/PdfRasterPages";

function renderQuoteWithHighlight(quote, highlight) {
  if (typeof quote !== "string" || typeof highlight !== "string" || !highlight) return quote;
  const idx = quote.indexOf(highlight);
  if (idx === -1) return quote;
  const before = quote.slice(0, idx);
  const after = quote.slice(idx + highlight.length);
  return (
    <>
      {before}
      <span className="quote-highlight">{highlight}</span>
      {after}
    </>
  );
}

export function TestimonialsSection() {
  const { testimonials } = siteContent;
  const [active, setActive] = useState(null);
  const items = useMemo(() => testimonials.items, [testimonials.items]);

  const modalClassName = active?.modalPdfSrc
    ? "modal--pdf"
    : active?.modalImageSrc
      ? "modal--image"
      : "";

  return (
    <section
      id="testimonials"
      className="section orb-right"
      data-gradient-a="140,0,255"
      data-gradient-b="255,60,200"
      data-gradient-c="0,255,240"
      style={{
        "--sga": "140,0,255",
        "--sgb": "255,60,200",
        "--sgc": "0,255,240"
      }}
    >
      <div className="section-bg-orb" aria-hidden="true" />
      <div className="container">
        <div className="section-head">
          <h2>{testimonials.title}</h2>
          <p>{testimonials.subtitle}</p>
        </div>

        <div className="testimonials-grid" role="list">
          {items.map((t) => (
            <figure
              key={t.quote}
              className="quote quote-clickable"
              role="listitem"
              tabIndex={0}
              onClick={() => setActive(t)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(t);
                }
              }}
            >
              <div className="quote-bg" aria-hidden="true" />
              <blockquote>
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                {renderQuoteWithHighlight(t.quote, t.highlight)}
                <span className="quote-mark" aria-hidden="true">
                  ”
                </span>
              </blockquote>
              <figcaption>
                <span className="quote-name">{t.name}</span>
                <span className="quote-role">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      <Modal
        open={Boolean(active)}
        title={active ? `${active.name} — ${active.role}` : ""}
        className={modalClassName}
        onClose={() => setActive(null)}
      >
        {active ? (
          active.modalPdfSrc ? (
            <PdfRasterPages src={active.modalPdfSrc} />
          ) : active.modalImageSrc ? (
            <div className="modal-media">
              <img src={active.modalImageSrc} alt="" />
            </div>
          ) : (
            <>
              <p className="modal-quote">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                {renderQuoteWithHighlight(active.quote, active.highlight)}
                <span className="quote-mark" aria-hidden="true">
                  ”
                </span>
              </p>
              {active.details?.map((p) => (
                <p key={p} className="modal-text">
                  {p}
                </p>
              ))}
            </>
          )
        ) : null}
      </Modal>
    </section>
  );
}

