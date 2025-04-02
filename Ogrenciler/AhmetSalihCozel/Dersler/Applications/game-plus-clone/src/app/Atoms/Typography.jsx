import React from "react";

const Typography = ({ variant = "p", className = "", children, after = false }) => {
  const baseStyles = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-semibold",
    h3: "text-2xl font-medium",
    h4: "text-xl font-medium",
    p: "text-base",
    span: "text-sm",
  };
  const afterBar = after?"relative after:content-[''] mb-5 after:block after:w-20 after:h-1 after:bg-lime-500 after:absolute after:left-1/2 after:transform after:-translate-x-1/2 after:mt-5":""
  const mutualCss = ""
  const Component = variant;

  return <Component className={`${baseStyles[variant]} ${className} ${afterBar} ${mutualCss}`}>{children}</Component>;
};

export default Typography;
