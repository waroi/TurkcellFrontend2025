import React from "react";
import CustomComponent from "../../atoms/CustomComponent";

const ProfileForm = () => {
  return (
    <div className="container p-4">
      <h2 className="mb-4">Kişisel Bilgiler</h2>

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="İsim"
        name="firstName"
        type="text"
        placeholder="Adınızı Giriniz"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Soyisim"
        name="lastName"
        type="text"
        placeholder="Soyadınızı Giriniz"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Adres"
        name="address"
        type="text"
        placeholder="Adresinizi Giriniz"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Telefon"
        name="phone"
        type="tel"
        placeholder="Telefon Numaranızı Giriniz"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Şehir"
        name="city"
        type="text"
        placeholder="Şehrinizi Giriniz"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Doğum Tarihi"
        name="dateOfBirth"
        type="date"
        placeholder="Doğum Tarihinizi Giriniz"
      />

      <h4 class="mt-4">Cinsiyet</h4>
      <div class="form-check form-check-inline">
        <CustomComponent
          className="form-check-input"
          type="radio"
          id="female"
          name="gender"
          value="female"
          labelClass="form-check-label"
          label="Kadın"
        />
      </div>

      <div class="form-check form-check-inline">
        <CustomComponent
          className="form-check-input"
          type="radio"
          id="male"
          name="gender"
          value="male"
          labelClass="form-check-label"
          label="Erkek"
        />
      </div>

      <div class="form-check form-check-inline">
        <CustomComponent
          className="form-check-input"
          type="radio"
          id="nogender"
          name="gender"
          value="noPreference"
          labelClass="form-check-label"
          label="Belirtmek İstemiyorum"
        />
      </div>
    </div>
  );
};

export default ProfileForm;
