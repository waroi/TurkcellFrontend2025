import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="container about-container">
      <div className="row">
        <div className="col col-md-7">
          <Image
            src="/assets/header/aboutlaptop.svg"
            width={716}
            height={540}
            alt="aboutlaptop"
          ></Image>
        </div>
        <div className="col col-md-5  mt-5">
          <h2 className="fw-bold fs-1">What is Rockie</h2>
          <p className="text-secondary fs-5">
            Experience a variety of trading on Bitcost. You can use various
            types of coin transactions such as Spot Trade, Futures Trade, P2P,
            Staking, Mining, and margin.
          </p>

          <h5 className="fw-bold">
            <Image
              src="/assets/header/mavitik.svg"
              alt="mavitik"
              height={20}
              width={20}
            ></Image>
            View real-time cryptocurrency prices
          </h5>
          <p className="text-secondary fs-6">
            Experience a variety of trading on Bitcost. You can use various
            types of coin transactions such as Spot Trade, Futures Trade, P2P,
            Staking, Mining, and margin.
          </p>
          <h5 className="fw-bold ">
            <Image
              src="/assets/header/mavitik.svg"
              alt="mavitik"
              height={20}
              width={20}
            ></Image>
            Buy and sell BTC, ETH, XRP, OKB, Etc...
          </h5>
          <p className="text-secondary fs-6">
            Experience a variety of trading on Bitcost. You can use various
            types of coin transactions such as Spot Trade, Futures Trade, P2P,
            Staking, Mining, and margin.
          </p>

          <button className="btn btn-primary rounded-pill mt-4">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
