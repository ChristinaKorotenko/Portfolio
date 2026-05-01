import { siteContent } from "../../content/siteContent";
import aboutImg from "../../images/unnamed.png";

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
            Professionally, I come from Applied Linguistics, which means I think about problems the
            way a linguist does: in patterns, structures, and meaning.
          </p>

          <p className="about-me-text">
            Since 2018, I&apos;ve been deep in educational research and analysis, and I&apos;m
            currently finishing my Master&apos;s at the University of Bonn — one of Germany&apos;s
            top universities — with an average grade of 1.7. Professors describe my papers as
            &quot;well-rounded and carefully designed.”
          </p>

          <details className="about-me-accordion">
            <summary className="about-me-accordion-summary">Some of my recent papers</summary>
            <ul className="about-me-papers">
              <li>
                <em>Semantic Shifts in Euro-English: A Corpus-Based Analysis of Political Discourse</em>
              </li>
              <li>
                <em>
                  How Obligation Is Expressed Across Languages: English “must” and its German
                  equivalents
                </em>
              </li>
              <li>A corpus-based study of discourse categories in British news (2022)</li>
              <li>A longitudinal study of interpersonal markers in online discussions (2018–2023)</li>
              <li>A case study on ambiguity and dominance in Russian L2 speakers of English</li>
              <li>Poster</li>
            </ul>
          </details>

          <p className="about-me-text">
            Besides, I like diving into topics that genuinely interest me — researching and breaking
            down complex ideas. During my time at Everypixel, I also published several
            research-backed pieces on AI.
          </p>

          <details className="about-me-accordion">
            <summary className="about-me-accordion-summary">Some articles</summary>
            <ul className="about-me-papers">
              <li>
                <a className="about-me-link" href="https://journal.everypixel.com/ai-glossary">
                  https://journal.everypixel.com/ai-glossary
                </a>
              </li>
              <li>
                <a
                  className="about-me-link"
                  href="https://journal.everypixel.com/basics-of-image-recognition"
                >
                  https://journal.everypixel.com/basics-of-image-recognition
                </a>
              </li>
              <li>
                <a
                  className="about-me-link"
                  href="https://journal.everypixel.com/ai-training-data-standards"
                >
                  https://journal.everypixel.com/ai-training-data-standards
                </a>
              </li>
            </ul>
          </details>

          <p className="about-me-text">
            Along the way, I&apos;ve explored areas like basics of frontend development, taken
            product management and unit economics courses at Yandex Practicum to better understand
            how products work end-to-end.
          </p>

          <details className="about-me-accordion">
            <summary className="about-me-accordion-summary">Pet projects</summary>
            <ul className="about-me-papers">
              <li>First</li>
              <li>Second</li>
              <li>Third</li>
            </ul>
          </details>

          <p className="about-me-text">
            I do believe that cultivating varied interests and learning how to connect them fosters
            original thinking. I value projects that encourage curiosity, a systematic approach, and
            a bit of creativity. Reach me out at{" "}
            <a className="about-me-link" href={`mailto:${footer.email}`}>
              {footer.email}
            </a>
            .
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

