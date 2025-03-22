import { useField } from "formik";

import Validation from "./Validation";

export default function Select({ label, children, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <Validation meta={meta} />
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
