export default function Button({
  variant = "primary",
  className = "",
  children,
  onClick = () => {},
}) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant} rounded-pill ${className} text-white`}
    >
      {children}
    </button>
  );
}
