import { useField } from "formik";

import Validation from "#/atoms/Validation";
import Label from "#/atoms/Label";

export default function Checkbox({ children, ...props }) {
  const [field, meta] = useField(props);

  return (
    <div className="mb-3">
      <Validation meta={meta} />
      <div className="form-check">
        <input
          {...field}
          {...props}
          className="form-check-input"
          type="checkbox"
          value=""
          id={props.name}
        />
        <Label htmlFor={props.name}>{children}</Label>
      </div>
    </div>
  );
}
