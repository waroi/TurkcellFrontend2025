import clsx from "clsx";
import { uiTexts } from "../../../constants/index";

const Button = ({ children, type, className, ...props }) => {
  const { buttons } = uiTexts;
  console.log(type === "delete");
  return (
    <button
      className={clsx(
        "btn ",
        !type && "btn-primary",
        type === "delete" && "btn-danger",
        type === "edit" && "btn-warning",
        type === "outline" && "btn-outline-secondary",
        type === "link" && "link-primary",
        className
      )}
      {...props}
    >
      {children ? children : buttons[type]}
    </button>
  );
};

export default Button;
