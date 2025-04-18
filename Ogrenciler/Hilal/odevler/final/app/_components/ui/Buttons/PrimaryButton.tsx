import clsx from "clsx";
import BaseButton from "./BaseButton";

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
} &React.ButtonHTMLAttributes<HTMLButtonElement>

const PrimaryButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <BaseButton className={clsx(className, "btn-primary")} {...props}>
      {children}
    </BaseButton>
  );
};

export default PrimaryButton;
