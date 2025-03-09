import React from "react";

const SubscribeView = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center subscribe py-4">
      <h4 className="text-uppercase fs-3  fw-bold">Abone Ol</h4>
      <p className=" fw-semi">
        Kaçırılmıyacak fırsatlar için sizde hemen abone olun ve size özel
        indirimlerden faydalanın
      </p>
      <div className="row">
        <div className="col-12 align-items-center d-flex justify-content-center">
          <input type="email" name="email" id="email" className="me-0" />
          <button type="submit" className="btn btn-primary ms-0 py-2 ms-2 b-0">
            Abone Ol
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeView;
