import React from "react";
import "./LearnEarnBlog.scss";
import Image from "next/image";

const LearnEarnBlog = () => {
  return (
    <div className="blog-wrapper">
      <div className="blog-heading text-center">
        <p className="blog-header">Learn And Earn</p>
        <p className="blog-subheader">
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </p>
      </div>
      <div className="row">
        <div className="col col-md-4">
          <div className="media-container d-flex justify-content-center align-items-center">
            <div className="play-button d-flex justify-content-center align-items-center">
              <Image
                src="/assets/header/play.svg"
                alt="play"
                width={12}
                height={14}
              ></Image>
            </div>
          </div>
          <div className="frame-1163">
            <button className="learn-button">
              <p className="button-text">LEARN & EARN</p>
            </button>
            <p className="learn-earn">
              Learn about UI8 coin and earn an All-Access Pass
            </p>
            <div className="frame-823 d-flex justify-content-between ">
              <div className="floyd d-flex  ">
                <div className="green-circle"></div>
                <p className="floyd-name">Floyd Buckridge</p>
              </div>
              <div className="date">
                <p>Feb 03, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4">
          <div className="media-container d-flex justify-content-center align-items-center">
            <div className="play-button d-flex justify-content-center align-items-center">
              <Image
                src="/assets/header/play.svg"
                alt="play"
                width={12}
                height={14}
              ></Image>
            </div>
          </div>
          <div className="frame-1163">
            <button className="learn-button">
              <p className="button-text">LEARN & EARN</p>
            </button>
            <p className="learn-earn">
              Learn about UI8 coin and earn an All-Access Pass
            </p>
            <div className="frame-823 d-flex justify-content-between ">
              <div className="floyd d-flex  ">
                <div className="green-circle"></div>
                <p className="floyd-name">Floyd Buckridge</p>
              </div>
              <div className="date">
                <p>Feb 03, 2021</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-md-4">
          <div className="media-container d-flex justify-content-center align-items-center">
            <div className="play-button d-flex justify-content-center align-items-center">
              <Image
                src="/assets/header/play.svg"
                alt="play"
                width={12}
                height={14}
              ></Image>
            </div>
          </div>
          <div className="frame-1163">
            <button className="learn-button">
              <p className="button-text">LEARN & EARN</p>
            </button>
            <p className="learn-earn">
              Learn about UI8 coin and earn an All-Access Pass
            </p>
            <div className="frame-823 d-flex justify-content-between ">
              <div className="floyd d-flex  ">
                <div className="green-circle"></div>
                <p className="floyd-name">Floyd Buckridge</p>
              </div>
              <div className="date">
                <p>Feb 03, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnEarnBlog;
