import { useState } from "react";
import { FieldArray } from "formik";

function ArrayInput({ field, values, errors, touched, label }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <FieldArray name={field}>
      {({ push, remove }) => (
        <div className="w-75">
          <label
            htmlFor={field}
            className="text-start d-block fs-5 text-black mb-2 fs-6"
          >
            {`${label}:`}
          </label>

          <div className="d-flex gap-2 w-100">
            <input
              className="custom-input outline-0 flex-grow-1"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={`${label} Giriniz...`}
            />
            <button
              type="button"
              className="primary-button inline-button"
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

          {errors && errors[field] && touched && touched[field] && (
            <div className="error" style={{ color: "red", fontSize: "12px" }}>
              {errors[field]}
            </div>
          )}

          {values[field]?.length > 0 && (
            <div className="d-flex gap-2 mt-2">
              {values[field].map((item, index) => (
                <div
                  className="d-inline-flex gap-2 array-item text-black my-2"
                  key={index}
                >
                  <span>{item}</span>
                  <button
                    className="array-button"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    <i className="fa-solid fa-circle-xmark"></i>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </FieldArray>
  );
}

export default ArrayInput;
