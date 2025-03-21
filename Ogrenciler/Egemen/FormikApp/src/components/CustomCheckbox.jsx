import { useField } from "formik";

function CustomCheckbox({ label, ...props }) {
  const [field, meta] = useField({ ...props, type: "checkbox" });

  return (
    <>
      <div className="form-check">
        <input
          type="checkbox"
          className={`form-check-input ${meta.error ? "is-invalid" : ""}`}
          {...field}
          {...props}
          id={props.name}
        />
        <label className="form-check-label" htmlFor={props.name}>
          {label}
        </label>
      </div>
      {meta.touched && meta.error ? (
        <div className="text-danger">{meta.error}</div>
      ) : null}
    </>
  );
}

export default CustomCheckbox;
