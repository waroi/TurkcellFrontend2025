import { useField } from "formik";

import Validation from "#/atoms/Validation";
import Label from "#/atoms/Label";

export default function Input({ label, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <Validation meta={meta} />
      <div className="form-floating mb-3">
        <input
          className={`form-control border border-2 ${
            meta.touched || field.value
              ? meta.error
                ? "border-danger-subtle"
                : "border-success-subtle"
              : ""
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
