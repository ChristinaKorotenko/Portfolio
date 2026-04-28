import { useId } from "react";

export function LavaButton({ href, className = "", children, ariaLabel }) {
  const filterId = useId().replaceAll(":", "");

  return (
    <a className={`bubble lava-btn ${className}`} href={href} aria-label={ariaLabel}>
      <span className="lava-label">{children}</span>

      <div className="lava-goo" aria-hidden="true" style={{ filter: `url(#${filterId})` }}>
        <span className="lava-blob lava-blob--1" />
        <span className="lava-blob lava-blob--2" />
        <span className="lava-blob lava-blob--3" />
        <span className="lava-blob lava-blob--4" />
        <span className="lava-blob lava-blob--5" />
        <span className="lava-blob lava-blob--6" />
      </div>

      <svg className="lava-defs" width="0" height="0" aria-hidden="true" focusable="false">
        <defs>
          <filter id={filterId}>
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 18 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </a>
  );
}

