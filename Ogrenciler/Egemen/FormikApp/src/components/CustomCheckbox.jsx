import { useField } from "formik";

function CustomCheckbox({ label, children, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <div className="checkbox">
        <label htmlFor="">{label}</label>

        <input
          {...field}
          {...props}
          className={meta.error ? "input-error" : ""}
        />
        <span>{children}</span>
      </div>

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckbox;
