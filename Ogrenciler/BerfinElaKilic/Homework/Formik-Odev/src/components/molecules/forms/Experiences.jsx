import React from "react";
import CustomComponent from "../../atoms/CustomComponent";

const Experiences = () => {
  return (
    <div className="container p-4">
      <h2 className="mb-4">Deneyim</h2>

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Çalıştığı Yer"
        name="workPlace"
        id="workPlace"
        type="text"
        placeholder="Çalıştığınız Yer"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Başlama Tarihi"
        name="startDate"
        id="startDate"
        type="date"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Bitiş Tarihi"
        name="endDate"
        id="endDate"
        type="date"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Pozisyon"
        name="position"
        id="position"
        type="text"
        placeholder="Pozisyonunuz"
      />
    </div>
  );
};

export default Experiences;
