import React from "react";
import CustomComponent from "../../atoms/CustomComponent";

const References = () => {
  return (
    <div class="container p-4">
      <h2 class="mb-4">Referanslar</h2>

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="İsim Soyisim"
        name="referenceName"
        type="text"
        placeholder="Referans Kişinin İsmi"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Telefon"
        name="referencePhone"
        type="tel"
        placeholder="Telefon Numarası"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Email"
        name="referenceEmail"
        type="email"
        placeholder="Email Adresi"
      />
    </div>
  );
};

export default References;
