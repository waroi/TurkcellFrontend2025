import React from "react";

const FormInput = ({ id, label, type = "text", value, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label fw-bold">
        {label}
      </label>
      <input
        type={type}
        className="form-control form-control-lg"
        id={id}
        aria-describedby="emailHelp"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
