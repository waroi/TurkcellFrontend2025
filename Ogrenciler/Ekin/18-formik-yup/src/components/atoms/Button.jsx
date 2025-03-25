export default function Button({
  variant = "primary",
  type = "submit",
  disabled,
  children,
  onClick,
}) {
  return variant == "nav-link" ? (
    <button className="nav-link" onClick={onClick}>
      {children}
    </button>
  ) : (
    <button disabled={disabled} className={`btn btn-${variant}`} type={type}>
      {children}
    </button>
  );
}
