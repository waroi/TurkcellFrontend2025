import { ErrorMessage, Field } from "formik";

function FormInput({ field }) {
  return (
    <div key={field}>
      <label htmlFor={field}>{field}</label>
      <Field className="form-control"  name={field} placeholder={`Enter ${field}`} />
      <ErrorMessage name={field} component="div" className="error" />
    </div>
  );
}

export default FormInput;
