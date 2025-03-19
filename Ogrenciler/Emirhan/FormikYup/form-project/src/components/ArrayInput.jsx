import { Field, FieldArray } from "formik";

function ArrayInput({ field, values, errors, touched, setFieldValue }) {
  return (
    <FieldArray key={field} name={field}>
      {({ push, remove }) => (
        <div>
          <label htmlFor={field}>{field}</label>
          <Field name={`${field}Input`} placeholder={`Enter ${field}`} />
          <button
            type="button"
            onClick={() => {
              if (values[`${field}Input`]?.trim()) {
                push(values[`${field}Input`]);
                setFieldValue(`${field}Input`, "");
              }
            }}
          >
            Add
          </button>

          {errors[field] && touched[field] && (
            <div className="error">{errors[field]}</div>
          )}

          {values[field].length > 0 && (
            <ul>
              {values[field].map((item, index) => (
                <li key={index}>
                  {item}
                  <button type="button" onClick={() => remove(index)}>
                    ❌
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
