import React, { useEffect, useState } from "react";

const AppSection = ({ sections, title }) => {
  const [section, setSection] = useState(sections);

  useEffect(() => {
    console.log("sect", sections);
  });
  return (
    <div className="col-lg-4">
      <h5 className="fw-bold text-secondary">{title}</h5>

      {Object.entries(section)
        .filter(([_, value]) => value)
        .map(([key, value]) => (
          <p>
            <strong>{key}</strong> {value}
          </p>
        ))}
    </div>
  );
};

export default AppSection;
