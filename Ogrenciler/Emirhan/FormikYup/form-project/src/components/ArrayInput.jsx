import { useState } from "react";
import { FieldArray } from "formik";

function ArrayInput({ field, values, errors, touched, setFieldValue, label }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <FieldArray key={field} name={field}>
      {({ push, remove }) => (
        <div className="mb-1">
          <label htmlFor={field} className="text-start d-block fs-5">
            {`${label}:`}
          </label>
          <div className="d-flex gap-2">
            <input
              className="form-control"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`${label} Giriniz...`}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (inputValue.trim()) {
                  push(inputValue);
                  setInputValue("");
                }
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          <div className="error-text">
            {errors[field] && touched[field] && (
              <div className="error text-danger">{errors[field]}</div>
            )}
          </div>


          {values[field]?.length > 0 && (
            <ul>
              {values[field].map((item, index) => (
                <li className="d-inline-flex gap-2" key={index}>
                  {item}
                  <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </FieldArray>
  );
}

export default ArrayInput;
