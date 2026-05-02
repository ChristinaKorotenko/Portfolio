import { siteContent } from "../../content/siteContent";
import { useMemo, useState } from "react";
import { Modal } from "../../components/Modal/Modal";

export function TestimonialsSection() {
  const { testimonials } = siteContent;
  const [active, setActive] = useState(null);
  const items = useMemo(() => testimonials.items, [testimonials.items]);

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
                {t.quote}
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
        className={active?.modalPdfSrc ? "modal--pdf" : ""}
        onClose={() => setActive(null)}
      >
        {active ? (
          active.modalPdfSrc ? (
            <>
              <iframe
                className="modal-pdf-frame"
                title="Educate Online review (PDF)"
                src={active.modalPdfSrc}
              />
              <p className="modal-pdf-fallback">
                <a href={active.modalPdfSrc} target="_blank" rel="noopener noreferrer">
                  Open PDF in a new tab
                </a>
              </p>
            </>
          ) : (
            <>
              <p className="modal-quote">
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                {active.quote}
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

