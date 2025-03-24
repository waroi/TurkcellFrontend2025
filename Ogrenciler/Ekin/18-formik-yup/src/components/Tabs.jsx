import { useEffect, useRef } from "react";

export function Tab({ children }) {
  const tabs = useRef();

  useEffect(() => {
    if (tabs.current)
      new bootstrap.Tab(tabs.current.querySelector(".nav-link")).show();
  }, [tabs]);

  return (
    <>
      <ul className="nav nav-tabs" role="tablist" ref={tabs}>
        {children.map(({ props: { id, tab } }) => (
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
        ))}
      </ul>
      <div className="tab-content pt-4">{children}</div>
    </>
  );
}

export function Pane({ id, children }) {
  return (
    <div className="tab-pane" id={id} role="tabpanel">
      {children}
    </div>
  );
}
