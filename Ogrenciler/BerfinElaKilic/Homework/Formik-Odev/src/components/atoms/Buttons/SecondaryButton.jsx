import BaseButton from "./BaseButton";
import clsx from "clsx";

const SecondaryButton = ({ className, outline, children, ...props }) => (
  <BaseButton
    className={clsx(className, outline ? "outline-secondary" : "btn-secondary")}
    {...props}
  >
    {children}
  </BaseButton>
);
export default SecondaryButton;
