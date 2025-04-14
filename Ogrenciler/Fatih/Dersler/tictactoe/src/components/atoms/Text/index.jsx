const Text = ({ children, color = "dark", className = "", as = "p" }) => {
  const Tag = as;
  const colorClass =
    {
      dark: "text-dark",
      light: "text-light",
      danger: "text-danger",
      primary: "text-primary",
      muted: "text-muted",
    }[color] || "text-dark";

  return <Tag className={`${colorClass} ${className}`}>{children}</Tag>;
};

export default Text;
