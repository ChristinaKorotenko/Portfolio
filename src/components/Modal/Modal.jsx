import { useEffect, useId } from "react";
import { createPortal } from "react-dom";

export function Modal({ open, title, children, onClose, className = "" }) {
  const titleId = useId().replaceAll(":", "");

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="modal-overlay"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
    >
      <div
        className={["modal", className].filter(Boolean).join(" ")}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="modal-bg" aria-hidden="true" />
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close">
          <svg className="modal-close-icon" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M3.5 3.5l7 7M10.5 3.5l-7 7"
            />
          </svg>
        </button>
        <div className="modal-head">
          <h3 id={titleId} className="modal-title">
            {title}
          </h3>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>,
    document.body
  );
}

