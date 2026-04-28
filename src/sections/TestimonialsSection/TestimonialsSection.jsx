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
      className="section"
      data-gradient-a="140,0,255"
      data-gradient-b="255,60,200"
      data-gradient-c="0,255,240"
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
                if (e.key === "Enter" || e.key === " ") setActive(t);
              }}
            >
              <div className="quote-bg" aria-hidden="true" />
              <blockquote>“{t.quote}”</blockquote>
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
        onClose={() => setActive(null)}
      >
        {active ? (
          <>
            <p className="modal-quote">“{active.quote}”</p>
            {active.details?.map((p) => (
              <p key={p} className="modal-text">
                {p}
              </p>
            ))}
          </>
        ) : null}
      </Modal>
    </section>
  );
}

