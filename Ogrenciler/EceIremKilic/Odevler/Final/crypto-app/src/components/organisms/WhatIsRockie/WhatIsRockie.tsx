import React from "react";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "@/components/atoms/CustomButton";

const WhatIsRockie = () => {
  return (
    <div>
      <Container className="py-5">
        <div className="row">
          <div className="col-lg-7">
            <Image src="/Rockiea.png" width={716} height={540} />
          </div>
          <div className="col-lg-5 px-2">
            <h1 className="display-5 fw-bold pe-5 mb-3">What Is Rockie</h1>
            <p className="pe-5 mb-3">
              Experience a variety of trading on Bitcost. You can use various
              types of coin transactions such as Spot Trade, Futures Trade, P2P,
              Staking, Mining, and margin.
            </p>
            <div>
              <h5 className="mb-3">
                <span className="text-primary me-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                View real-time cryptocurrency prices
              </h5>
              <p className="text-secondary">
                Experience a variety of trading on Bitcost. You can use various
                types of coin transactions such as Spot Trade, Futures Trade,
                P2P, Staking, Mining, and margin.
              </p>
              <h5 className="mb-3">
                <span className="text-primary me-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                Buy and sell BTC, ETH, XRP, OKB, Etc...
              </h5>
              <p className="text-secondary">
                Experience a variety of trading on Bitcost. You can use various
                types of coin transactions such as Spot Trade, Futures Trade,
                P2P, Staking, Mining, and margin.
              </p>
            </div>
            <CustomButton
              variant="primary"
              label="Explore More"
              className="px-4 py-2 rounded-pill text-white mt-3"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatIsRockie;
