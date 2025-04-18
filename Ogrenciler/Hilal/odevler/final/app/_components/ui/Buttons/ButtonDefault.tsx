import clsx from "clsx";
import BaseButton from "./BaseButton";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} &React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonDefault = ({ children, className, ...props }: ButtonProps) => {
  return (
    <BaseButton className={clsx(className)} {...props}>
      {children}
    </BaseButton>
  );
};

export default ButtonDefault;
