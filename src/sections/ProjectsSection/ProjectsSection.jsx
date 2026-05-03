import { siteContent } from "../../content/siteContent";
import { useMemo, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import tcImg from "../../images/TC.png";
import eoImg from "../../images/EO.png";
import epImg from "../../images/EP.png";
import epBg from "../../images/jSARknBdzxWTvFg09l8U.jpg";

function svgDataUri(svg) {
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function ProjectsSection() {
  const { projects } = siteContent;
  const [active, setActive] = useState(null);
  const items = useMemo(() => projects.items, [projects.items]);
  const mockCovers = useMemo(
    () => [
      svgDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#ff85f7" offset="0"/>
              <stop stop-color="#3a51ff" offset="0.55"/>
              <stop stop-color="#fff48d" offset="1"/>
            </linearGradient>
            <filter id="b" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="22" />
            </filter>
          </defs>
          <rect width="1200" height="800" fill="url(#g)"/>
          <circle cx="260" cy="520" r="220" fill="rgba(255,255,255,0.35)" filter="url(#b)"/>
          <circle cx="920" cy="260" r="260" fill="rgba(0,0,0,0.14)" filter="url(#b)"/>
        </svg>`
      ),
      svgDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="g2" x1="0" x2="1" y1="1" y2="0">
              <stop stop-color="#42c46d" offset="0"/>
              <stop stop-color="#3a51ff" offset="0.55"/>
              <stop stop-color="#ff85f7" offset="1"/>
            </linearGradient>
            <filter id="b2" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="24" />
            </filter>
          </defs>
          <rect width="1200" height="800" fill="url(#g2)"/>
          <rect x="120" y="120" width="520" height="520" rx="80" fill="rgba(255,255,255,0.26)" filter="url(#b2)"/>
          <circle cx="980" cy="590" r="220" fill="rgba(0,0,0,0.16)" filter="url(#b2)"/>
        </svg>`
      ),
      svgDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800">
          <defs>
            <linearGradient id="g3" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#00fff0" offset="0"/>
              <stop stop-color="#8c00ff" offset="0.55"/>
              <stop stop-color="#ff3cc8" offset="1"/>
            </linearGradient>
            <filter id="b3" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="26" />
            </filter>
          </defs>
          <rect width="1200" height="800" fill="url(#g3)"/>
          <circle cx="380" cy="240" r="230" fill="rgba(255,255,255,0.22)" filter="url(#b3)"/>
          <rect x="560" y="360" width="560" height="320" rx="120" fill="rgba(0,0,0,0.16)" filter="url(#b3)"/>
        </svg>`
      )
    ],
    []
  );

  return (
    <section
      id="projects"
      className="section orb-right"
      data-gradient-a="255,0,170"
      data-gradient-b="0,120,255"
      data-gradient-c="0,255,240"
      style={{
        "--sga": "255,0,170",
        "--sgb": "0,120,255",
        "--sgc": "0,255,240"
      }}
    >
      <div className="section-bg-orb" aria-hidden="true" />
      <div className="container">
        <div className="section-head">
          <h2>{projects.title}</h2>
          <p>{projects.subtitle}</p>
        </div>

        <div className="projects-grid projects-grid--progetti">
          {items.map((p, idx) => (
            <div key={p.name} className="project-item">
              <a
                className={[
                  "project-card",
                  "project-card--progetti",
                  idx === 2 ? "project-card--ep-bg" : "",
                  idx === 0 || idx === 1 ? "project-card--photo" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
                style={
                  idx === 2
                    ? {
                        backgroundImage: `url("${epBg}")`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                      }
                    : undefined
                }
                href="#"
                aria-label={`${p.name} project`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(p);
                }}
              >
                {idx === 2 ? (
                  <div className="project-tweet" aria-hidden="true">
                    <img
                      className="project-tweet-image"
                      src={epImg}
                      alt=""
                      aria-hidden="true"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ) : (
                  <div
                    className="project-cover"
                    aria-hidden="true"
                    style={{
                      backgroundImage:
                        idx === 0
                          ? `url("${tcImg}")`
                          : idx === 1
                            ? `url("${eoImg}")`
                            : `url("${mockCovers[idx % mockCovers.length]}")`
                    }}
                  />
                )}
                {idx === 0 || idx === 1 || idx === 2 ? null : (
                  <div className="project-cover-overlay" aria-hidden="true" />
                )}

                <div className="project-content">
                  <div className="project-top">
                    {p.tags.map((tag, i) => (
                      <span
                        key={`${p.name}-${tag}-${i}`}
                        className={
                          i === 0 ? "tag tag-invert" : "tag tag-invert tag-invert-muted"
                        }
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </a>

              <h3 className="project-outside-title">{p.name}</h3>
            </div>
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
              <span className="modal-tags">{active.tags.join(" · ")}</span>
            </p>
            <p className="modal-text">{active.snippet}</p>
            {active.highlightsLead ? (
              <p className="modal-highlights-lead">{active.highlightsLead}</p>
            ) : null}
            {active.highlights?.length ? (
              <ul className="modal-list">
                {active.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            ) : null}
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
          </>
        ) : null}
      </Modal>
    </section>
  );
}

