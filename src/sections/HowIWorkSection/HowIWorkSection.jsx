import { siteContent } from "../../content/siteContent";

export function HowIWorkSection() {
  const { howIWork } = siteContent;

  return (
    <section
      id="about"
      className="section"
      data-gradient-a="0,255,240"
      data-gradient-b="140,0,255"
      data-gradient-c="255,60,200"
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

