import clsx from "clsx";
import BaseButton from "./BaseButton";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} &React.ButtonHTMLAttributes<HTMLButtonElement>

const LinkButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <BaseButton className={clsx(className,"fw-bold btn-link")} {...props}>
      {children}
    </BaseButton>
  );
};

export default LinkButton;
