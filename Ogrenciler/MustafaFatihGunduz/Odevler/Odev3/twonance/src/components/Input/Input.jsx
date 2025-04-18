import { useLanguage } from "@/context/LanguageContext";
import React from "react";

const Input = ({
  id,
  label,
  type = "text",
  isLabelAvaible = true,
  placeholder = "",
  padding = "py-96",
  isRegister = false,
  isRegisterPassword = false,
  isBuyPage = false,
  value = null,
  onChange = null,
  error,
}) => {
  const { translations } = useLanguage();
  return (
    <div className={`d-flex flex-column ${isRegisterPassword ? "" : padding}`}>
      {isLabelAvaible ? (
        <label
          htmlFor={id}
          className={`${
            isBuyPage
              ? "text-dark display-2 fw-bold mb-98"
              : "text-secondary fs-4 mb-93"
          }`}
        >
          {label}
        </label>
      ) : null}
      <div className="d-flex">
        <input
          type={type}
          name={id}
          value={value}
          onChange={onChange}
          className={`${
            isBuyPage
              ? "text-secondary fs-6 fw-normal px-16 py-95 w-100"
              : "fs-5 text-secondary fw-normal px-16 py-95 w-100"
          }`}
          id={id}
          placeholder={placeholder}
        />
        {isRegister ? (
          <button className="btn btn-primary rounded-pill-start text-white fs-6 fw-bold">
            {translations.authenticate}
          </button>
        ) : null}
      </div>
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
};

export default Input;
