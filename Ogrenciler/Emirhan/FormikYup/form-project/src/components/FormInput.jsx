import { ErrorMessage, Field } from "formik";

function FormInput({ field, type, label }) {
  return (
    <div key={field} className="w-75">
      <label htmlFor={field} className="text-start d-block fs-5 text-white mb-2 fs-6">{`${label}:`}</label>
      <Field className="form-control outline-0" name={field} placeholder={`${label} Giriniz...`} type={type} />
      <div className="error-text">
        <ErrorMessage name={field} component="div" className="error" />
      </div>

    </div>
  );
}

export default FormInput;
