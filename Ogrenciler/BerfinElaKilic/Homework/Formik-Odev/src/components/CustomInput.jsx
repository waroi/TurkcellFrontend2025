import { useField } from "formik";

function CustomComponent({ label, labelClass, as:Component="input", ...props}) {
  const [field, meta] = useField(props);

  return (
    <>
      <label className={labelClass}>{label}</label>
      <Component
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      />

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomComponent;