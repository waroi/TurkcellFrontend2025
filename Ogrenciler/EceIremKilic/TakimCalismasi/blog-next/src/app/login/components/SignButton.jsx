import React from "react";

const SignButton = ({ title }) => {
  return (
    <div>
      <button type="submit" className="btn btn-primary mb-4 btn-lg w-100">
        {title}
      </button>
    </div>
  );
};

export default SignButton;
