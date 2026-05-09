import { siteContent } from "../../content/siteContent";

export function FooterSection() {
  const { footer } = siteContent;

  return (
    <footer
      id="footer"
      className="section footer orb-left"
      data-gradient-a="0,255,240"
      data-gradient-b="255,0,170"
      data-gradient-c="0,120,255"
      style={{
        "--sga": "0,255,240",
        "--sgb": "255,0,170",
        "--sgc": "0,120,255"
      }}
    >
      <div className="section-bg-orb" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-actions" aria-label="Contacts">
          <a className="footer-link footer-link--left" href={`mailto:${footer.email}`} aria-label="Email">
            Email
          </a>
          {footer.links.map((l) => {
            const isExternal = /^https?:\/\//i.test(l.href);
            return (
              <a
                key={l.label}
                className="footer-link"
                href={l.href}
                aria-label={`${l.label} link`}
                {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {l.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

