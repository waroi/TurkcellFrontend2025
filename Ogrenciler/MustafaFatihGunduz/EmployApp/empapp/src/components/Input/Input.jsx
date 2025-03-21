import React from "react";

const Input = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  name,
  error,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className={`form-control ${error ? "is-invalid" : ""}`}
        id={id}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default Input;
