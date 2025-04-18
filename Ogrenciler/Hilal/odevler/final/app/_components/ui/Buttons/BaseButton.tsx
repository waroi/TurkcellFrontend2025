import clsx from "clsx";

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} &React.ButtonHTMLAttributes<HTMLButtonElement>

const BaseButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button className={clsx(className, "btn rounded-pill")} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;
