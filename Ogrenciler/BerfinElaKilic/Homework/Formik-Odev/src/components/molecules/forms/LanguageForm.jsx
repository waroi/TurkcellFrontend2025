import React, { useState } from "react";
import { LANGUAGES, levels} from "../../../constants/constants";

const LanguageForm = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  const handleAddLanguage = () => {
    if (selectedLanguage && selectedLevel) {
      setLanguages([...languages, { language: selectedLanguage, level: selectedLevel }]);
      setSelectedLanguage("");
      setSelectedLevel("");
    }
  };

  const handleRemoveLanguage = (index) => {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setLanguages(updatedLanguages);
  };

  return (
    <div className="container p-4">
      <h2 className="mb-4">Yabancı Diller</h2>

      <div className="mb-3 d-flex align-items-center justify-content-center gap-2">
        <select
          className="form-select mb-2"
          value={selectedLanguage}
          name="language"
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="">Yabancı Dil Seçiniz</option>
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>

        <select
          className="form-select mb-2"
          value={selectedLevel}
          name="level"
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="">Seviyenizi Seçiniz</option>
          {levels.map((level) => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>

        <button onClick={handleAddLanguage} className="mb-2 btn btn-dark">
          Ekle
        </button>
      </div>

      <ul className="list-group">
        {languages.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
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
