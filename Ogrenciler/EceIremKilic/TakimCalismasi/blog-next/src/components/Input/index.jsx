import React from "react";

const Input = ({
  type = "text",
  id = "",
  label = "",
  defaultValue = "",
  placeholder = "",
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
        defaultValue={defaultValue || ""}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
