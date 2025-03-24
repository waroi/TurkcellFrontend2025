import React from "react";
import { useFormikContext } from "formik";
import { LANGUAGES, levels } from "../../../constants/constants";
import CustomComponent from "../../atoms/CustomComponent";

const LanguageForm = () => {
  const { values, setFieldValue } = useFormikContext();

  const handleAddLanguage = () => {
    if (values.selectedLanguage && values.selectedLevel) {
      const newLanguage = {
        language: values.selectedLanguage,
        level: values.selectedLevel,
      };
      setFieldValue("languages", [...values.languages, newLanguage]);
      setFieldValue("selectedLanguage", ""); // Formik state'ini sıfırla
      setFieldValue("selectedLevel", "");
    }
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = values.languages.filter((_, i) => i !== index);
    setFieldValue("languages", updatedLanguages);
  };

  return (
    <div className="container p-4">
      <h2 className="mb-4">Yabancı Diller</h2>

      <div className="mb-3 d-flex align-items-center justify-content-center gap-2">
        <CustomComponent
          as="select"
          className="form-select mb-2"
          id="selectedLanguage"
          value={values.selectedLanguage || ""}
          name="selectedLanguage"
          onChange={(e) => setFieldValue("selectedLanguage", e.target.value)}
        >
          <option value="">Yabancı Dil Seçiniz</option>
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </CustomComponent>

        <CustomComponent
          as="select"
          className="form-select mb-2"
          value={values.selectedLevel || ""}
          name="selectedLevel"
          id="selectedLevel"
          onChange={(e) => setFieldValue("selectedLevel", e.target.value)}
        >
          <option value="">Seviyenizi Seçiniz</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </CustomComponent>

        <button
          onClick={handleAddLanguage}
          className="mb-2 btn btn-dark"
          type="button"
        >
          Ekle
        </button>
      </div>

      <ul className="list-group">
        {values.languages?.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {item.language} - {item.level}
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleRemoveLanguage(index)}
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageForm;
