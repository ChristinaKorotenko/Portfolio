import { siteContent } from "../../content/siteContent";

export function FooterSection() {
  const { footer } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="section footer"
      data-gradient-a="0,255,240"
      data-gradient-b="255,0,170"
      data-gradient-c="0,120,255"
    >
      <div className="section-bg-orb" aria-hidden="true" />
      <div className="container footer-grid">
        <div>
          <h2 className="footer-title">{footer.title}</h2>
          <p className="footer-subtitle">{footer.subtitle}</p>
        </div>

        <div className="footer-actions" aria-label="Contacts">
          <a className="btn btn-primary" href={`mailto:${footer.email}`}>
            {footer.email}
          </a>
          {footer.links.map((l) => (
            <a key={l.label} className="btn btn-ghost" href={l.href} aria-label={`${l.label} link`}>
              {l.label}
            </a>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="muted">© {year} Kristina</p>
          <a className="muted" href="#top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

