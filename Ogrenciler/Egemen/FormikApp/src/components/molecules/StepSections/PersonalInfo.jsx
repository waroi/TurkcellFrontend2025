import CustomInput from "../CustomInput/CustomInput";

const PersonalInfo = () => {
  return (
    <div className="row g-3">
      <CustomInput
        label="Ad - Soyad"
        name="personal.fullname"
        type="text"
        placeholder="Adınızı ve soyadınızı giriniz"
        className="col-md-6"
      />
      <CustomInput
        label="Email"
        name="personal.email"
        type="email"
        placeholder="Mail adresinizi giriniz"
        className="col-md-6"
      />
      <CustomInput
        label="Telefon"
        name="personal.phone"
        type="tel"
        placeholder="Telefon numaranızı giriniz"
        className="col-md-6"
      />
      <CustomInput
        label="Doğum Tarihi"
        name="personal.birthDate"
        type="date"
        className="col-md-6"
      />
      <CustomInput
        label="Adres"
        name="personal.address"
        type="textarea"
        placeholder="Adresinizi giriniz"
        className="col-12"
      />
    </div>
  );
};

export default PersonalInfo;
