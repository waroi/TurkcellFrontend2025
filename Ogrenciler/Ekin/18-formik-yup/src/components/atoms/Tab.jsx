import { useEffect, useRef } from "react";

export function Tab({ hidden, children, ref = useRef() }) {
  useEffect(() => {
    if (ref.current && children)
      new bootstrap.Tab(ref.current.querySelector(".nav-link")).show();
  }, [ref]);

  return (
    <>
      <ul
        className={`nav nav-tabs ${hidden ? "d-none" : ""}`}
        role="tablist"
        ref={ref}
      >
        {children.length ? (
          children.map(({ props: { id, tab } }) => (
            <li key={id} className="nav-item" role="presentation">
              <button
                className="nav-link"
                data-bs-toggle="tab"
                data-bs-target={`#${id}`}
                type="button"
                role="tab"
              >
                {tab}
              </button>
            </li>
          ))
        ) : (
          <li key={children.props.id} className="nav-item" role="presentation">
            <button
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target={`#${children.props.id}`}
              type="button"
              role="tab"
            >
              {children.props.tab}
            </button>
          </li>
        )}
      </ul>
      <div className="tab-content pt-4">{children}</div>
    </>
  );
}

export function Pane({ id, children }) {
  return (
    <div className="tab-pane fade" id={id} role="tabpanel">
      {children}
    </div>
  );
}
