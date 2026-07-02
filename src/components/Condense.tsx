import { useState, type ReactNode } from 'react';

/**
 * Condense — full prose on desktop; short copy + a "More" toggle on mobile.
 * Both variants render into the DOM (CSS `.d-only`/`.m-only` picks one by
 * viewport), so the prerendered HTML and the client's first render match and
 * hydration stays clean. The toggle only affects the mobile variant.
 */
export function Condense({ short, children }: { short: ReactNode; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <span className="d-only">{children}</span>
      <span className="m-only">
        {open ? children : short}
        <button
          type="button"
          className="more-btn"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? 'Less −' : 'More +'}
        </button>
      </span>
    </>
  );
}
