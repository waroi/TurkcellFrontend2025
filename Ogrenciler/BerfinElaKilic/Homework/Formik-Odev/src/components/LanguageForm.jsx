import React, { useState } from "react";
import { Formik, Form } from "formik";
import CustomComponent from "./CustomInput";
import { LANGUAGES, levels } from "../constants/constants";

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
  actions.resetForm();
};

const LanguageForm = ({ index }) => {
  const [language, setLanguage] = useState("");
  return (
    <>
      <div>
        <CustomComponent
          as="select"
          className="form-control"
          label="Yabancı Dil"
          name={`language${index}`}
        >
          <option defaultValue="">Yabancı Dil Seçiniz</option>
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </CustomComponent>
        <CustomComponent
          as="select"
          className="form-control"
          label="Seviye Seçiniz"
          name={`level${index}`}
        >
          <option defaultValue="">Seviyenizi Seçiniz</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </CustomComponent>
      </div>
    </>
  );
};

export default LanguageForm;
