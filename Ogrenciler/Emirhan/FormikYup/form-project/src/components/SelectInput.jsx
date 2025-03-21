import { Field, ErrorMessage } from "formik";
import React from "react";

function SelectInput({
  errors,
  touched,
  setFieldValue,
  options,
  field,
  label,
}) {
  return (
    <div className="w-75">
      <label
        htmlFor={field}
        className="text-start d-block fs-5 text-white mb-2 fs-6"
      >
        {`${label}:`}
      </label>
      <Field
        as="select"
        name={field} 
        className={`form-select form-control ${
          errors[field] && touched[field] ? "is-invalid" : ""
        }`}
        onChange={(e) => setFieldValue(field, e.target.value)} 
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Field>
      <div className="error-text">
        <ErrorMessage name={field} component="div" className="error" />
      </div>
    </div>
  );
}

export default SelectInput;
