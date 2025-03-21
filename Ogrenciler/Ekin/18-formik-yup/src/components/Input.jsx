import { useField } from "formik";

export default function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <p
        className={`text-danger small fw-bold mb-0 ${
          meta.touched && meta.error ? "active" : ""
        }`}
      >
        {meta.touched && meta.error ? meta.error : ""}
      </p>
      <div className="form-floating mb-3">
        <input
          className={`form-control border border-2 ${
            meta.touched && meta.error
              ? "border-danger-subtle"
              : "border-success-subtle"
          }`}
          id={props.name}
          placeholder=""
          {...field}
          {...props}
        />
        <label htmlFor={props.name}>{label}</label>
      </div>
    </>
  );
}
