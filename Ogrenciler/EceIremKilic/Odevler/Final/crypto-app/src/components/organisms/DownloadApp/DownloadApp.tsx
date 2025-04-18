import React from "react";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const DownloadApp = () => {
  return (
    <div className="pt-5">
      <Container className="py-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <h1 className="display-5 fw-bold pe-5 mb-3">
                Free Your Money & Invest With Confident
              </h1>
              <p className="mb-3 text-secondary">
                With Cryptor Trade, you can be sure your trading skills are
                matched.
              </p>
            </div>
            <div>
              <h5 className="mb-3">
                <span className="text-primary me-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                Buy, Sell, And Trade On The Go
              </h5>
              <p className="text-secondary">
                Managa Your Holdings From Your Mobile Decive
              </p>
              <h5 className="mb-3">
                <span className="text-primary me-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                Take Control Of Your Wealth
              </h5>
              <p className="text-secondary">
                Rest Assured You (and only you) Have Access To Your Funds
              </p>
            </div>
            <Image src="/Download.png" className="mt-3" />
          </div>
          <div className="col-lg-6">
            <Image src="/DownImg.png" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DownloadApp;
