import React from "react";

const TextArea = ({ id, label, rows, cols, placeholder }) => {
  return (
    <div className="d-flex flex-column py-96">
      <label htmlFor={id} className="text-secondary fs-4 mb-93">
        {label}
      </label>
      <textarea
        name={id}
        id={id}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        className="fs-5 text-secondary fw-normal px-16 py-95 w-100"
      ></textarea>
    </div>
  );
};

export default TextArea;
