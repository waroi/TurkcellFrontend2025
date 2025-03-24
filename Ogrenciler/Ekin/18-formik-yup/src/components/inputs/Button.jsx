export default function Button({
  variant = "primary",
  type = "submit",
  disabled,
  children,
}) {
  return (
    <button disabled={disabled} className={`btn btn-${variant}`} type={type}>
      {children}
    </button>
  );
}
