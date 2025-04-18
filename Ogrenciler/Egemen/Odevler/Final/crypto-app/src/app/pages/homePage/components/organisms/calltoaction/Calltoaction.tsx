import React from "react";

const Calltoaction = () => {
  return (
    <div className="container-fluid call-to-action bg-primary d-flex justify-content-between align-items-center">
      <div className="call-to-action-texts">
        <p className="call-to-action-header fw-bold fs-2">
          Earn up to $25 worth of crypto
        </p>
        <p className="call-to-action-subheader">
          Discover how specific cryptocurrencies work — and get a bit of each
          crypto to try out for yourself.
        </p>
      </div>
      <button className="btn btn-light rounded-pill create-account ">
        Create Account
      </button>
    </div>
  );
};

export default Calltoaction;
