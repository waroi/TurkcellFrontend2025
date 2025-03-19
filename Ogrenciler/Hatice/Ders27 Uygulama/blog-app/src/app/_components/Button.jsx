import clsx from "clsx";
import { uiTexts } from "../../../constants/index";

const Button = ({ children, variant, className, ...props }) => {
  const { buttons } = uiTexts;
  return (
    <button
      className={clsx(
        "btn ",
        !variant && "btn-primary",
        variant === "delete" && "btn-danger",
        variant === "edit" && "btn-warning",
        variant === "outline" && "btn-outline-secondary",
        variant === "link" && "link-primary",
        className
      )}
      {...props}
    >
      {children ? children : buttons[variant]}
    </button>
  );
};

export default Button;
