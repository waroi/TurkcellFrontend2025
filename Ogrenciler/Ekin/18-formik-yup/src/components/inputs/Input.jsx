import { useField } from "formik";

import Validation from "./Validation";
import Label from "./Label";

export default function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <Validation meta={meta} />
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
        <Label htmlFor={props.name}>{label}</Label>
      </div>
    </>
  );
}
