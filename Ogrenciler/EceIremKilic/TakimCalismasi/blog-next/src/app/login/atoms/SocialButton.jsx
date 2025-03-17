import React from "react";

const SocialButton = ({ style, brand, title }) => {
  return (
    <div>
      <button className={`${style} btn btn-light btn-lg text-white w-100`}>
        <i className={brand}></i> {title}
      </button>
    </div>
  );
};

export default SocialButton;
