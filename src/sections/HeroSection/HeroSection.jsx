import { siteContent } from "../../content/siteContent";

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section
      id="top"
      className="section hero orb-left"
      data-gradient-a="0,120,255"
      data-gradient-b="255,0,170"
      data-gradient-c="255,230,0"
      style={{
        "--sga": "0,120,255",
        "--sgb": "255,0,170",
        "--sgc": "255,230,0"
      }}
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
              className="hero-actions-inline"
              aria-label="Quick links"
            >
              <a className="hero-action-link hero-action-link--1" href="#projects" aria-label="Projects">
                <span className="hero-action-text">Projects</span>
              </a>
              <a className="hero-action-link hero-action-link--2" href="#about" aria-label="About me">
                <span className="hero-action-text">About me</span>
              </a>
              <a className="hero-action-link hero-action-link--3" href="#footer" aria-label="Contact">
                <span className="hero-action-text">Contact</span>
              </a>
            </div>
            <p className="hero-right">{hero.aboutText}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

