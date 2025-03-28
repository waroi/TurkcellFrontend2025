import { useState, useEffect } from "react";
import CustomComponent from "../../atoms/CustomComponent";
import { useFormikContext } from "formik";
import PrimaryButton from "../../atoms/Buttons/PrimaryButton";
import { QUESTION_LEVELS } from "../../../constants/constants";
import DangerButton from "../../atoms/Buttons/DangerButton";

const ExamSelection = ({
  questions,
  maxQuestionCount,
  setMaxQuestionCount,
  setSelection,
  selection,
}) => {
  const { setFieldValue, values } = useFormikContext();

  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("10");
  const [questionCount, setQuestionCount] = useState(10);

  useEffect(() => {
    const uniqueCategories = [...new Set(questions.map((q) => q.category))];
    setCategories(uniqueCategories);
  }, [questions]);

  useEffect(() => {
    if (!values.category) {
      setSubcategories([]);
      return;
    }

    const subs = [
      ...new Set(
        questions
          .filter((q) => q.category === values.category)
          .map((q) => q.subcategory)
      ),
    ];
    setSubcategories(subs);
  }, [values.category]);

  const handleAddSelection = () => {
    if (
      values.category &&
      values.subcategory &&
      values.questionCount &&
      values.difficultyLevel
    ) {
      const newSelection = {
        category: values.category,
        subcategory: values.subcategory,
        difficultyLevel: values.difficultyLevel,
        questionCount: values.questionCount,
      };

      setSelection((prevSelection) => [...prevSelection, newSelection]);

      setMaxQuestionCount(maxQuestionCount - values.questionCount);
    }
  };

  const handleRemoveSelection = (index) => {
    const updatedSelections = selection.filter((_, i) => i !== index);
    setSelection(updatedSelections);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      {/* Kategori */}
      <CustomComponent
        id="category"
        as="select"
        className="form-select mb-3"
        label="Kategori"
        name="category"
        value={values.category || ""}
        onChange={(e) => setFieldValue("category", e.target.value)}
      >
        <option defaultValue="">Kategori Seçiniz</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </CustomComponent>

      {/* Alt Kategori */}
      <CustomComponent
        id="subcategory"
        as="select"
        className="form-select mb-3"
        value={values.subcategory}
        label="Alt Kategori"
        name="subcategory"
        onChange={(e) => setFieldValue("subcategory", e.target.value)}
      >
        <option defaultValue="">Alt Kategori Seçiniz</option>
        {subcategories.map((subcategory) => (
          <option key={subcategory} value={subcategory}>
            {subcategory}
          </option>
        ))}
      </CustomComponent>

      {/* Zorluk Seviyesi */}
      <CustomComponent
        id="difficultyLevel"
        as="select"
        className="form-select mb-3"
        label="Zorluk Seviyesi"
        name="difficultyLevel"
        value={values.difficultyLevel}
        onChange={(e) => setFieldValue("difficultyLevel", e.target.value)}
      >
        <option defaultValue="">Zorluk Seviyesi Seçiniz</option>
        {QUESTION_LEVELS.map((level) => (
          <option key={level} value={level}>
            {level}
          </option>
        ))}
      </CustomComponent>

      {/* Soru Sayısı */}
      <CustomComponent
        id="questionCount"
        as="input"
        className="form-select mb-3"
        label="Soru Sayısı"
        value={values.questionCount}
        name="questionCount"
        onChange={(e) => setFieldValue("questionCount", e.target.value)}
      />

      <PrimaryButton
        onClick={handleAddSelection}
        type="button"
        className="mt-4"
      >
        Ekle
      </PrimaryButton>

      <ul className="list-group">
        {selection &&
          selection.length > 0 &&
          selection?.map((item, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center bg-transparent"
            >
              {item.category} - {item.subcategory} - {item.difficultyLevel} -{" "}
              {item.questionCount}
              <DangerButton
                className="btn-sm"
                onClick={() => handleRemoveSelection(index)}
              >
                Sil
              </DangerButton>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ExamSelection;
