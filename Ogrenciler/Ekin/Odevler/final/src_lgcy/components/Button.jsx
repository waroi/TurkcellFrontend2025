export default function Button({
  variant = "primary",
  className = "",
  children,
}) {
  return (
    <button
      className={`btn btn-${variant} rounded-pill ${className} text-white`}
    >
      {children}
    </button>
  );
}
