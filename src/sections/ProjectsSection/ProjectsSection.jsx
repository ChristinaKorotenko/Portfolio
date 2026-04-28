import { siteContent } from "../../content/siteContent";
import { useMemo, useState } from "react";
import { Modal } from "../../components/Modal/Modal";

export function ProjectsSection() {
  const { projects } = siteContent;
  const [active, setActive] = useState(null);
  const items = useMemo(() => projects.items, [projects.items]);

  return (
    <section
      id="projects"
      className="section"
      data-gradient-a="255,0,170"
      data-gradient-b="0,120,255"
      data-gradient-c="0,255,240"
    >
      <div className="section-bg-orb" aria-hidden="true" />
      <div className="container">
        <div className="section-head">
          <h2>{projects.title}</h2>
          <p>{projects.subtitle}</p>
        </div>

        <div className="projects-grid">
          {items.map((p, idx) => (
            <a
              key={p.name}
              className="project-card"
              href="#"
              aria-label={`${p.name} project`}
              onClick={(e) => {
                e.preventDefault();
                setActive(p);
              }}
            >
              <div
                className={[
                  "project-bg",
                  idx === 1 ? "project-bg-alt" : "",
                  idx === 2 ? "project-bg-ai" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden="true"
              />
              <div className="project-top">
                <span className="tag">{p.tags[0]}</span>
                <span className="tag tag-muted">{p.tags[1]}</span>
              </div>
              <h3 className="project-title">{p.name}</h3>
              <p className="project-snippet">{p.snippet}</p>

              <div className="project-hover">
                <dl className="project-meta">
                  {p.meta.map((m) => (
                    <div key={m.label}>
                      <dt>{m.label}</dt>
                      <dd>{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <span className="project-cta">{p.hoverText}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Modal
        open={Boolean(active)}
        title={active ? active.name : ""}
        onClose={() => setActive(null)}
      >
        {active ? (
          <>
            <p className="modal-subtitle">
              <span className="modal-tags">{active.tags.join(" • ")}</span>
            </p>
            <p className="modal-text">{active.snippet}</p>
            {active.details?.map((p) => (
              <p key={p} className="modal-text">
                {p}
              </p>
            ))}
            <div className="modal-meta">
              {active.meta.map((m) => (
                <div key={m.label} className="modal-meta-item">
                  <div className="modal-meta-k">{m.label}</div>
                  <div className="modal-meta-v">{m.value}</div>
                </div>
              ))}
            </div>
            {active.highlights?.length ? (
              <ul className="modal-list">
                {active.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
            <p className="modal-text">{active.hoverText}</p>
          </>
        ) : null}
      </Modal>
    </section>
  );
}

