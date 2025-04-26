interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean
}

export const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  disabled = false

}: ButtonProps) => {
  return (
    <button onClick={onClick} type={type} className={className} disabled={disabled}>
      {children}
    </button>
  );
};