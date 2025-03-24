import BaseButton from "./BaseButton";
import clsx from "clsx";

const PrimaryButton = ({ className, outline, children, ...props }) => (
  <BaseButton
    className={clsx(className, outline ? "outline-primary" : "btn-primary")}
    {...props}
  >
    {children}
  </BaseButton>
);
export default PrimaryButton;
