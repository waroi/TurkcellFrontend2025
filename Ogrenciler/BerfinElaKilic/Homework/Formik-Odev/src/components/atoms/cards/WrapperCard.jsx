import clsx from "clsx";

const WrapperCard = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        className,
        "shadow-sm p-3 border border-secondary rounded-3 bg-transparent wrapper-card"
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default WrapperCard;
