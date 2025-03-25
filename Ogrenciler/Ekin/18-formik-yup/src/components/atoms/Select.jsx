import { useField } from "formik";

import Validation from "#/atoms/Validation";

import { mapValue } from "@/util/map";

export default function Select({ label, options, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <Validation meta={meta} />
      <select
        className={`form-select py-3 border border-2 mb-3 ${
          meta.touched || field.value
            ? meta.error
              ? "border-danger-subtle"
              : "border-success-subtle"
            : ""
        }`}
        {...field}
        {...props}
      >
        <option value="" hidden>
          {label}
        </option>
        {options.map((string, index) => (
          <option key={index} value={mapValue(string)}>
            {string}
          </option>
        ))}
      </select>
    </>
  );
}
