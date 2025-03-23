import CustomInput from "../CustomInput/CustomInput";
import CustomSelect from "../CustomSelect/CustomSelect";

const EducationInfo = () => {
  return (
    <div className="row g-3">
      <CustomSelect
        label="Universite"
        name="education.university"
        className="col-md-6"
      >
        <option value="">Select University</option>
        <option value="bogazici">Boğaziçi University</option>
        <option value="gsu">Galatasaray University</option>
        <option value="odtu">Middle East Technical University (ODTÜ)</option>
        <option value="itu">Istanbul Technical University (İTÜ)</option>
        <option value="hacettepe">Hacettepe University</option>
        <option value="bilkent">Bilkent University</option>
      </CustomSelect>
      <CustomInput
        label="Bölüm"
        name="education.department"
        type="text"
        placeholder="Bölümünüzü giriniz"
        className="col-md-6"
      />
      <CustomInput
        label="Mezuniyet Yılı"
        name="education.graduationYear"
        type="number"
        placeholder="Mezuniyet yılınızı giriniz"
        className="col-md-6"
      />
      <CustomInput
        label="GPA"
        name="education.gpa"
        type="number"
        step="0.01"
        placeholder="GPA notunuzu giriniz"
        className="col-md-6"
      />
    </div>
  );
};

export default EducationInfo;
