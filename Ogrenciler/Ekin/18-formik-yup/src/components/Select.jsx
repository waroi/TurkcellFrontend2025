import { useField } from "formik";

export default function Select({ label, children, ...props }) {
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
      <select
        className={`form-select py-3 border border-2 mb-3 ${
          meta.touched && meta.error
            ? "border-danger-subtle"
            : "border-success-subtle"
        }`}
        {...field}
        {...props}
      >
        <option value="" hidden>
          {label}
        </option>
        {children}
      </select>
    </>
  );
}
