import React from "react";
import CustomComponent from "../../atoms/CustomComponent";


const CoverLetter = () => {
  return (
    <div class="container p-4">
      <h2 class="mb-4">Cover Letter</h2>

      <CustomComponent
        as="textarea"
        className="form-control mb-3"
        label="Cover Letter"
        name="coverLetter"
        rows="5"
        placeholder="Kendinizi Kısaca Tanıtın"
      />
    </div>
  );
};

export default CoverLetter;
