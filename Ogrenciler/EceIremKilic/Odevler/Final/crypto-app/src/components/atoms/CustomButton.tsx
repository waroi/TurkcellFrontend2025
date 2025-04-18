import React from "react";
import { Button } from "react-bootstrap";

type CustomButtonProps = {
  label: string;
  variant: string;
  className?: string;
  size?: any;
  onClick?: () => void;
};
const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  variant,
  className,
  onClick,
  size,
}) => {
  return (
    <div>
      <Button
        className={` ${className}`}
        variant={variant}
        onClick={onClick}
        size={size}
      >
        {label}
      </Button>
    </div>
  );
};

export default CustomButton;
