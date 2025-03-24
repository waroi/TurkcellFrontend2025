import clsx from "clsx";

const WrapperCard = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        className,
        "shadow-sm p-3 rounded-3 bg-transparent wrapper-card"
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default WrapperCard;
