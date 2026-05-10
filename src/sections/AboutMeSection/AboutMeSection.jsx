import { siteContent } from "../../content/siteContent";
import aboutImg from "../../images/photo.jpg";

export function AboutMeSection() {
  const { footer } = siteContent;

  return (
    <section
      id="about-me"
      className="section about-me orb-left"
      data-gradient-a="255,133,247"
      data-gradient-b="58,81,255"
      data-gradient-c="255,244,141"
      style={{
        "--sga": "255,133,247",
        "--sgb": "58,81,255",
        "--sgc": "255,244,141"
      }}
    >
      <div className="section-bg-orb" aria-hidden="true" />
      <div className="container about-me-grid">
        <div className="about-me-left">
          <div className="section-head">
            <h2>About me</h2>
          </div>

          <p className="about-me-text">
            I&apos;m a product and project manager based in Berlin.
          </p>

          <p className="about-me-text">
            My academic background is rooted in Applied Linguistics, which means I think about
            problems the way a linguist does: in patterns, structures, and meaning.
          </p>

          <p className="about-me-text">
            Since 2018, I&apos;ve been deeply involved in educational research and analysis. I&apos;m
            currently finishing my Master&apos;s at the University of Bonn, which is consistently
            ranked among{" "}
            <a
              className="about-me-link"
              href="https://www.shanghairanking.com/institution?name=&r=Germany"
              target="_blank"
              rel="noopener noreferrer"
            >
              Germany&apos;s top 5
            </a>{" "}
            universities.
          </p>

          <p className="about-me-text">
            Besides, I enjoy breaking down complex ideas and have published several{" "}
            <a
              className="about-me-link"
              href="https://www.linkedin.com/in/kristina-korotenko-b26779337/"
              target="_blank"
              rel="noopener noreferrer"
            >
              research-backed pieces on AI
            </a>
            .
          </p>

          <p className="about-me-text">
            I believe that cultivating varied interests and learning how to connect them fosters
            original thinking. I value projects that encourage curiosity, a systematic approach, and
            creativity.
          </p>

          <p className="about-me-text">
            Reach me out at{" "}
            <a className="about-me-link" href={`mailto:${footer.email}`}>
              {footer.email}
            </a>{" "}
            <span className="about-me-signoff-smiley" aria-hidden="true">
              ☺
            </span>
          </p>
        </div>

        <div className="about-me-right" aria-label="About me visual">
          <div className="about-me-photo-wrap" aria-hidden="true">
            <img className="about-me-photo" src={aboutImg} alt="" loading="lazy" decoding="async" />
            <div className="about-me-doodles" aria-hidden="true" />
          </div>
          <div className="about-me-glow" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

