import { Field, FieldArray } from "formik";

function ArrayInput({ field, values, errors, touched, setFieldValue, label }) {
  return (
    <FieldArray key={field} name={field}>
      {({ push, remove }) => (
        <div className="mb-3">
          <label htmlFor={field} className="text-start d-block fs-5">{`${label}:`}</label>
          <div className="d-flex gap-2">
            <Field className="form-control" name={`${field}Input`} placeholder={`${label} Giriniz...`} />
            <button
              type="button"
              onClick={() => {
                if (values[`${field}Input`]?.trim()) {
                  push(values[`${field}Input`]);
                  setFieldValue(`${field}Input`, "");
                }
              }}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </div>

          {errors[field] && touched[field] && (
            <div className="error">{errors[field]}</div>
          )}

          {values[field].length > 0 && (
            <ul>
              {values[field].map((item, index) => (
                <li className="d-inline-flex gap-2 btn btn-primary" key={index}>
                  {item}

                  <button className="btn btn-primary" type="button" onClick={() => remove(index)} >


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
