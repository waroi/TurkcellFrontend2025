import clsx from "clsx";
import BaseButton from "./BaseButton";
import clsx from "clsx";
const LinkButton = ({ className, children, ...props }) => (
  <BaseButton className={clsx(className, "btn-link")} {...props}>
    {children}
  </BaseButton>
);
export default LinkButton;
