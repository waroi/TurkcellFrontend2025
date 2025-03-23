import BaseButton from "./BaseButton";
import clsx from "clsx";

const WarningButton = ({ className, outline, children, ...props }) => (
  <BaseButton
    className={clsx(className, outline ? "outline-warning" : "btn-warning")}
    {...props}
  >
    {children}
  </BaseButton>
);
export default WarningButton;
