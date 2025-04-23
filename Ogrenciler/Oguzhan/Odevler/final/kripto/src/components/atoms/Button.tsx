interface ButtonProps {
    children?: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
  }
  
  export const Button = ({
    children,
    onClick,
    type = "button",
    className = ""
  }: ButtonProps) => {
    return (
      <button onClick={onClick} type={type} className={className}>
        {children}
      </button>
    );
  };