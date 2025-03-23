import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <div>
        <label htmlFor="" className="me-3">
          {label}
        </label>

        <input
          {...field}
          {...props}
          className={`${
            meta.error ? "input-error" : ""
          } rounded-3 border-1 border-secondary px-3 py-2`}
        />
      </div>

      {meta.error && <div className="error mt-0">{meta.error}</div>}
    </>
  );
};

export default CustomInput;
