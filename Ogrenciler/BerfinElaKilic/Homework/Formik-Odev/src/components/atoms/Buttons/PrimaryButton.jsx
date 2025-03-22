const PrimaryButton = ({ className, outline, children, ...props }) => (
  <BaseButton
    className={clsx(className, outline ? "outline-primary" : "btn-primary")}
    {...props}
  >
    {children}
  </BaseButton>
);
export default PrimaryButton;
