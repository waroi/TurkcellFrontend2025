import { useField } from "formik";
import clsx from 'clsx'

function CustomComponent({ label, labelClass, className, as:Component="input", ...props}) {
  const [field, meta] = useField(props);

  return (
    <>
      <label className={labelClass}>{label}</label>
      <Component
        {...field}
        {...props}
        className={clsx(meta.error && "input-error",
          className
        )}
      />

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomComponent;