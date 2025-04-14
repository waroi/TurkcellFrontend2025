import React from "react";
import Input from "../../atoms/Input";

const InputGroup = ({
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  id,
  ...props
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="form-label fw-semibold">
          {label}
        </label>
      )}
      <div className="input-group">
        <Input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};

export default InputGroup;
