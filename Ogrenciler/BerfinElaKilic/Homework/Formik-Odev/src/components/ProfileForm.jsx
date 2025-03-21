import React from "react";
import CustomComponent from "./CustomInput";

const ProfileForm = () => {
  return (
    <div>
      <CustomComponent
        as="input"
        className="form-control"
        label="Kullancı Adı"
        name="username"
        type="text"
        placeholder="Kullanıcı Adınızı Giriniz"
      />
      <CustomComponent
        className="form-control"
        label="doğum Tarihi"
        name="dateofBirth"
        type="date"
        placeholder="Doğum Tarhinizi Giriniz"
      />
      <div className="form-check form-check-inline">
        <CustomComponent
          className="form-check-input"
          type="radio"
          id="female"
          name="gender"
          value="option1"
          labelClass="form-check-label"
          label="Kadın"
        />
      </div>
      <div className="form-check form-check-inline">
        <CustomComponent
          className="form-check-input"
          type="radio"
          id="male"
          name="gender"
          value="option2"
          labelClass="form-check-label"
          label="Erkek"
        />
      </div>
      <div className="form-check form-check-inline">
        <CustomComponent
          className="form-check-input"
          type="radio"
          id="nogender"
          name="gender"
          value="option3"
          labelClass="form-check-label"
          label="Belirtmek İstemiyorum"
        />
      </div>
    </div>
  );
};

export default ProfileForm;
