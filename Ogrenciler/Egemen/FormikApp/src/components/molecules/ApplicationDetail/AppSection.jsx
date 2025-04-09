import React, { useEffect, useState } from "react";
import { getFormSchema } from "../../../../firebase/dbController";

const AppSection = ({ section, id }) => {
  const [sectionSchema, setSectionSchema] = useState();
  async function setSchema() {
    setSectionSchema(await getFormSchema(id));
  }
  useEffect(() => {
    setSchema();
  }, []);
  return (
    sectionSchema && (
      <div className="col-lg-3">
        <h5 className="fw-bold text-secondary">{sectionSchema.title}</h5>
        {Object.entries(section).map(([key, value]) => (
          <p key={key}>
            <strong>{sectionSchema[`${key}`]}</strong>{" "}
            {value == "" ? "Bilgi girilmemiş" : value}
          </p>
        ))}
      </div>
    )
  );
};

export default AppSection;
