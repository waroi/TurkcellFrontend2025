const Button = ({
  children,
  onClick,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} fw-semibold px-4 py-2 rounded-3 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
