import React from "react";

const Input = ({
  type = "text",
  id = "",
  label = "",
  value = { value },
  onChange = { onChange },
}) => {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
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
