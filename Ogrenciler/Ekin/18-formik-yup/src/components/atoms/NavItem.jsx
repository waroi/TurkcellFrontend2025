import { NavLink } from "react-router";

export default function Item({ display = true, to, children }) {
  if (display)
    return (
      <li className="nav-item">
        {to ? (
          <NavLink className="nav-link" to={to}>
            {children}
          </NavLink>
        ) : (
          children
        )}
      </li>
    );
}
