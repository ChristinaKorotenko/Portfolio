import { useEffect, useId } from "react";

export function Modal({ open, title, children, onClose, className = "" }) {
  const titleId = useId().replaceAll(":", "");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
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
          ×
        </button>
        <div className="modal-head">
          <h3 id={titleId} className="modal-title">
            {title}
          </h3>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}

