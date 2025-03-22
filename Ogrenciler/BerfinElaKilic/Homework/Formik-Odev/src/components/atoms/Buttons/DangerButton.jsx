import BaseButton from "./BaseButton";
import clsx from 'clsx'
const DangerButton = ({ className, outline, children, ...props }) => (
  <BaseButton
    className={clsx(className, outline ? "outline-danger" : "btn-danger")}
    {...props}
  >
    {children}
  </BaseButton>
);
export default DangerButton;
