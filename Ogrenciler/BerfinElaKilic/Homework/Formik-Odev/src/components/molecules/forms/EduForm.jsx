import CustomComponent from "../../atoms/CustomComponent";
import {
  UNIVERSITIES,
  DEPARTMENTS,
  GRADUATION_YEARS,
} from "../../../constants/constants";

const EduForm = () => {
  return (
    <div className="container p-4">
      <h2 className="mt-5 mb-4">Eğitim Bilgileri</h2>

      <CustomComponent
        id="university"
        as="select"
        className="form-select mb-3"
        label="Üniversite"
        name="university"
      >
        <option defaultValue="">Üniversitenizi Seçiniz</option>
        {UNIVERSITIES.map((uni) => (
          <option key={uni} value={uni}>
            {uni}
          </option>
        ))}
      </CustomComponent>

      <CustomComponent
        id="department"
        as="select"
        className="form-select mb-3"
        label="Bölüm"
        name="department"
      >
        <option defaultValue="">Bölümünüzü Seçiniz</option>
        {DEPARTMENTS.map((dept) => (
          <option key={dept} value={dept}>
            {dept}
          </option>
        ))}
      </CustomComponent>

      <CustomComponent
        id="graduationYear"
        as="select"
        className="form-select mb-3"
        label="Mezuniyet Yılı"
        name="graduationYear"
      >
        <option defaultValue="">Mezuniyet Yılınızı Seçiniz</option>
        {GRADUATION_YEARS.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </CustomComponent>
    </div>
  );
};

export default EduForm;
