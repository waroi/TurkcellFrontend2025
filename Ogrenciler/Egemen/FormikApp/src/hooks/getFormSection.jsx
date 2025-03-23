import CustomCheckbox from "../components/molecules/CustomCheckbox/CustomCheckbox";
import CustomInput from "../components/molecules/CustomInput/CustomInput";
import CustomSelect from "../components/molecules/CustomSelect/CustomSelect";

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div className="row g-3">
          <CustomInput
            label="Ad - Soyad"
            name="fullname"
            type="text"
            placeholder="Adınızı ve soyadınızı giriniz"
            className="col-md-6"
          />
          <CustomInput
            label="Email"
            name="email"
            type="email"
            placeholder="Mail adresinizi giriniz"
            className="col-md-6"
          />
          <CustomInput
            label="Telefon"
            name="phone"
            type="tel"
            placeholder="Telefon numaranızı giriniz"
            className="col-md-6"
          />
          <CustomInput
            label="Doğum Tarihi"
            name="birthDate"
            type="date"
            className="col-md-6"
          />
          <CustomInput
            label="Adres"
            name="address"
            type="textarea"
            placeholder="Adresinizi giriniz"
            className="col-12"
          />
        </div>
      );
    case 1:
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
            <option value="odtu">
              Middle East Technical University (ODTÜ)
            </option>
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
    case 2:
      return (
        <div className="row g-3">
          <CustomInput
            label="Deneyim Yılı"
            name="experience.years"
            type="number"
            placeholder="Deneyim sürenizi yazınız"
            className="col-md-6"
          />
          <CustomInput
            label="Çalışılan Şirket"
            name="experience.currentCompany"
            type="text"
            placeholder="Şuan çalıştığınız şirketi yazınız"
            className="col-md-6"
          />
          <CustomInput
            label="Ünvan"
            name="experience.position"
            type="text"
            placeholder="Ünvanınızı yazınız"
            className="col-12"
          />
        </div>
      );
    case 3:
      return (
        <div className="row g-3">
          <div className="col-12">
            <label className="form-label me-3">Diller</label>
            <div className="d-flex gap-3">
              <CustomCheckbox label="Turkçe" name="skills.languages.turkish" />
              <CustomCheckbox
                label="İngilizce"
                name="skills.languages.english"
              />
              <CustomCheckbox label="Almanca" name="skills.languages.german" />
            </div>
          </div>
          <div className="col-12">
            <label className="form-label me-3">Programlama Dilleri</label>
            <div className="d-flex gap-3">
              <CustomCheckbox
                label="JavaScript"
                name="skills.programmingLanguages.javascript"
              />
              <CustomCheckbox
                label="Python"
                name="skills.programmingLanguages.python"
              />
              <CustomCheckbox
                label="Java"
                name="skills.programmingLanguages.java"
              />
            </div>
          </div>
        </div>
      );
    case 4:
      return (
        <div className="row g-3">
          <CustomInput
            label="Beklenen Maaş"
            name="expectedSalary"
            type="number"
            placeholder="Beklentiniz olan maaş ücretini giriniz"
            className="col-md-6"
          />
          <div className="col-12 mt-3">
            <CustomCheckbox
              label="Kullanım koşullarını kabul ediyorum."
              name="isAccepted"
            />
          </div>
        </div>
      );
    default:
      return "Unknown step";
  }
}
export default getStepContent;
