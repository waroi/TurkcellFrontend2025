import { useField } from "formik";

const CustomSelect = ({ label, options, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        {...field}
        {...props}
        className={`form-select ${
          meta.touched && meta.error ? "is-invalid" : ""
        }`}
      >
        <option value="">Seçiniz</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {meta.touched && meta.error ? (
        <div className="invalid-feedback">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default CustomSelect;
