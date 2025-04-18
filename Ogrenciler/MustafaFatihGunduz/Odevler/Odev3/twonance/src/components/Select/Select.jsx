import React from "react";

const Select = ({ id, label, value }) => {
  return (
    <div className="d-flex flex-column py-96">
      <label htmlFor={id} className="text-secondary fs-4 mb-93">
        {label}
      </label>
      <div className="d-flex">
        <select
          name={id}
          id={id}
          className="fs-5 text-secondary fw-normal px-16 py-95 w-100"
        >
          <option value={value}>{value}</option>
        </select>
      </div>
      {/* {error && <div className="invalid-feedback">{error}</div>} */}
    </div>
  );
};

export default Select;
