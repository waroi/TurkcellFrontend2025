import { NavLink } from "react-router";

export default function Button({
  variant = "primary",
  type = "submit",
  disabled,
  children,
  onClick,
  to,
}) {
  if (variant == "nav-link")
    return (
      <button className="nav-link" onClick={onClick}>
        {children}
      </button>
    );
  else if (to)
    return (
      <NavLink to={to}>
        <button className={`btn btn-${variant}`}>{children}</button>
      </NavLink>
    );
  else
    return (
      <button
        disabled={disabled}
        className={`btn btn-${variant}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
}
