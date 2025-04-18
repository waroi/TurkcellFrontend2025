"use client";

import { useState } from "react";
import styles from "./PasswordInput.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordInput = ({ label, name, formik, placeholder }: any) => {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.formGroup}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.passwordWrapper}>
        <input
          id={name}
          name={name}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          className={styles.input}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className={styles.eyeBtn}
        >
          {show ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {formik.touched[name] && formik.errors[name] ? (
        <div className={styles.error}>{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default PasswordInput;
