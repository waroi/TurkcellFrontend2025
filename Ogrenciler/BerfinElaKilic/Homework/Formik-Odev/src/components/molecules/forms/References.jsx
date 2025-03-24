import React from "react";
import CustomComponent from "../../atoms/CustomComponent";

const References = () => {
  return (
    <div className="container p-4">
      <h2 className="mb-4">Referanslar</h2>

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="İsim Soyisim"
        name="referenceName"
        id="referenceName"
        type="text"
        placeholder="Referans Kişinin İsmi"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Telefon"
        name="referencePhone"
        id="referencePhone"
        type="tel"
        placeholder="Telefon Numarası"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Email"
        name="referenceEmail"
        id="referenceEmail"
        type="email"
        placeholder="Email Adresi"
      />
    </div>
  );
};

export default References;
