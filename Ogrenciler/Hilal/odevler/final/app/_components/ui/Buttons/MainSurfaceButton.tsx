import clsx from "clsx";
import BaseButton from "./BaseButton";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} &React.ButtonHTMLAttributes<HTMLButtonElement>

const MainSurfaceButton= ({ children, className, ...props }: ButtonProps) => {
  return (
    <BaseButton className={clsx(className, "btn-main-surface")} {...props}>
      {children}
    </BaseButton>
  );
};

export default MainSurfaceButton;
