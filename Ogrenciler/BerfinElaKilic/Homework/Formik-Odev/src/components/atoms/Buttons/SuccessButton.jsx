import BaseButton from "./BaseButton";
import clsx from "clsx";

const SuccessButton = ({ className, outline, children, ...props }) => (
  <BaseButton
    className={clsx(className, outline ? "outline-success" : "btn-success")}
    {...props}
  >
    {children}
  </BaseButton>
);
export default SuccessButton;
