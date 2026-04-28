import { useEffect, useMemo, useState } from "react";

const NAV = [
  { href: "#about", label: "About", id: "about" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#testimonials", label: "Testimonials", id: "testimonials" },
  { href: "#footer", label: "Contact", id: "footer" }
];

export function SiteHeader() {
  const [elevated, setElevated] = useState(false);
  const sectionIds = useMemo(() => NAV.map((x) => x.id), []);
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const onScroll = () => setElevated(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || sections.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible?.target?.id) return;
        setActiveId(visible.target.id);
      },
      { threshold: [0.2, 0.35, 0.5] }
    );

    for (const s of sections) io.observe(s);
    return () => io.disconnect();
  }, [sectionIds]);

  return (
    <header className={`site-header ${elevated ? "is-elevated" : ""}`}>
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-dot" aria-hidden="true" />
          <span className="brand-text">Kristina</span>
        </a>

        <nav className="nav" aria-label="On-page navigation">
          {NAV.map((item) => (
            <a
              key={item.id}
              className="nav-link"
              href={item.href}
              aria-current={activeId === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-cta">
          <a className="btn btn-ghost" href="#projects">
            View projects
          </a>
          <a className="btn btn-primary" href="#footer">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}

