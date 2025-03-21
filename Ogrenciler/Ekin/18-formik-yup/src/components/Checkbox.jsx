import { useField } from "formik";

export default function Checkbox({ children, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mb-3">
      <p
        className={`text-danger small fw-bold mb-0 ${
          meta.touched && meta.error ? "active" : ""
        }`}
      >
        {meta.touched && meta.error ? meta.error : ""}
      </p>
      <div className="form-check">
        <input
          {...field}
          {...props}
          className="form-check-input"
          type="checkbox"
          value=""
          id={props.name}
        />
        <label className="form-check-label" htmlFor={props.name}>
          {children}
        </label>
      </div>
    </div>
  );
}
