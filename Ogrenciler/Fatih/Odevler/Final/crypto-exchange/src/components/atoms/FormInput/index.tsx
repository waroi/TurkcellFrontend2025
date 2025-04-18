"use client";

import styles from "./FormInput.module.css";

const FormInput = ({
  label,
  name,
  type,
  formik,
  disabled = false,
  required = true,
  placeholder = "",
}: any) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        disabled={disabled}
        onChange={formik.handleChange}
        placeholder={placeholder}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className={styles.input}
        required={required}
      />
      {formik.touched[name] && formik.errors[name] ? (
        <div className={styles.error}>{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default FormInput;
