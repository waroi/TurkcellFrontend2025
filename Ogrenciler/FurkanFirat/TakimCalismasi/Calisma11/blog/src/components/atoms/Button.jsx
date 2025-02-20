import React from "react";
//TODO: rorward ref deprecated olmuş değiştireceğim refe.

const Button = React.forwardRef(function Button(
  { children, variant = "primary", className, ...props },
  ref
) {
  return (
    <button ref={ref} className={`btn ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
});

export default Button;
