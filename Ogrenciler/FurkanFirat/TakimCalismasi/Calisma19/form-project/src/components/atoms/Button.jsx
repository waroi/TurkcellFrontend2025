export const Button = ({
  children,
  type,
  className,
  onClick,
  disabled,
  size = '',
  variant = '',
}) => {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${size ? `btn-${size}` : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
