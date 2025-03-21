import { useField } from "formik";

const CustomCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <div className="form-check mb-3">
      <input
        {...field}
        {...props}
        type="checkbox"
        className="form-check-input"
      />
      <label className="form-check-label">{label}</label>
      {meta.touched && meta.error ? (
        <div className="invalid-feedback d-block">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomCheckbox;
