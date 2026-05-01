import { siteContent } from "../../content/siteContent";
import { TOOL_ICON_BY_NAME } from "../../utils/toolIcons";

function ToolChipIcon({ name }) {
  const src = TOOL_ICON_BY_NAME[name];
  if (!src) return null;
  return (
    <span className="tool-chip-icon" aria-hidden="true">
      <img className="tool-chip-img" src={src} alt="" loading="lazy" decoding="async" />
    </span>
  );
}

export function HowIWorkSection() {
  const { howIWork } = siteContent;

  return (
    <section
      id="about"
      className="section orb-left"
      data-gradient-a="0,255,240"
      data-gradient-b="140,0,255"
      data-gradient-c="255,60,200"
      style={{
        "--sga": "0,255,240",
        "--sgb": "140,0,255",
        "--sgc": "255,60,200"
      }}
    >
      <div className="section-bg-orb" aria-hidden="true" />
      <div className="container">
        <div className="section-head">
          <h2>{howIWork.title}</h2>
          <p>{howIWork.subtitle}</p>
        </div>

        <div className="manifesto-grid">
          {howIWork.cards.map((card) => (
            <article key={card.title} className="manifesto-card">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
              {Array.isArray(card.tools) && card.tools.length > 0 ? (
                <div className="tool-chips" aria-label={`${card.title} tools`}>
                  {card.tools.map((tool) => (
                    <span className="tool-chip" key={tool}>
                      <ToolChipIcon name={tool} />
                      <span className="tool-chip-name">{tool}</span>
                    </span>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

