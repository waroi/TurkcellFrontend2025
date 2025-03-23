import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const SkillsInfo = () => {
  return (
    <div className="row g-3">
      <div className="col-12">
        <label className="form-label me-3">Diller</label>
        <div className="d-flex gap-3">
          <CustomCheckbox label="Turkçe" name="skills.languages.turkish" />
          <CustomCheckbox label="İngilizce" name="skills.languages.english" />
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
};

export default SkillsInfo;
