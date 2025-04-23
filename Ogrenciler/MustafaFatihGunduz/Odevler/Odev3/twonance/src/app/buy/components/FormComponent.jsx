import React from "react";
import Image from "next/image";
const FormComponent = ({ label, text }) => {
  return (
    <div className="form-element">
      <div className="d-flex align-items-center justify-content-between py-93">
        <p className="text-secondary fw-normal display-2">{label}</p>
        <div className="d-flex ">
          <p className="text-dark fw-bold display-2 pe-98">{text}</p>
          <Image
            src={"/assets/circle.svg"}
            width={20}
            height={20}
            alt="circle"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default FormComponent;
