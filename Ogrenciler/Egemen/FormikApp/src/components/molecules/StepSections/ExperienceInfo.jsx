import CustomInput from "../CustomInput/CustomInput";

const ExperienceInfo = () => {
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
};

export default ExperienceInfo;
