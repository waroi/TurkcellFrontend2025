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
        type="text"
        placeholder="Çalıştığınız Yer"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Başlama Tarihi"
        name="startDate"
        type="date"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Bitiş Tarihi"
        name="endDate"
        type="date"
      />

      <CustomComponent
        as="input"
        className="form-control mb-3"
        label="Pozisyon"
        name="position"
        type="text"
        placeholder="Pozisyonunuz"
      />
    </div>
  );
};

export default Experiences;
