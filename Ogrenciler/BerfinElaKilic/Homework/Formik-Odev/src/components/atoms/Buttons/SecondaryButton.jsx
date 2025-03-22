const SecondaryButton = ({ className, outline, children, ...props }) => (
  <BaseButton
    className={clsx(className, outline ? "outline-secondary" : "btn-secondary")}
    {...props}
  >
    {children}
  </BaseButton>
);
