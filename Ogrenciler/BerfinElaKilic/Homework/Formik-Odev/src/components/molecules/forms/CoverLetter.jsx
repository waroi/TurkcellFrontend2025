import React from "react";
import CustomComponent from "../../atoms/CustomComponent";


const CoverLetter = () => {
  return (
    <div className="container p-4">
      <h2 className="mb-4">Cover Letter</h2>

      <CustomComponent
        as="textarea"
        className="form-control mb-3"
        label="Cover Letter"
        name="coverLetter"
        id="coverLetter"
        rows="5"
        placeholder="Kendinizi Kısaca Tanıtın"
      />
    </div>
  );
};

export default CoverLetter;
