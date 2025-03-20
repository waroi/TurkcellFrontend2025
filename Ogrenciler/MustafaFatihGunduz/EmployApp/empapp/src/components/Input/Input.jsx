import React from "react";

const Input = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  name,
}) => {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="form-control"
        id={id}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
