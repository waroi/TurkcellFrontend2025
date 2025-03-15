import clsx from "clsx";

const CardFooter = ({ children, className }) => {
  return (
    <div className={clsx("card-footer border-top-0 bg-transparent", className)}>
      {children}
    </div>
  );
};

export default CardFooter;
