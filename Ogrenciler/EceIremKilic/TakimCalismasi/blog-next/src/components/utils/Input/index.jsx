import React from "react";

const Input = ({
  type = "text",
  id = "",
  value = { value },
  onChange = { onChange },
}) => {
  return (
    <div>
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
