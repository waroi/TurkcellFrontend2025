import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div>
        <label htmlFor="">{label}</label>
        <input
          {...field}
          {...props}
          className={meta.error ? "input-error" : ""}
        />
      </div>

      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default CustomInput;



