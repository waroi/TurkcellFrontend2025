import "./slider.scss";
import Image from "next/image";
const Slider = () => {
  return (
    <div className="container-fluid">
      <div className="row market-header-row">
        <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
          <div className="market-heading">
            <p className="market-header">Today's Cryptocurrency prices</p>
            <p className="market-subheader">
              The global crypto market cap is{" "}
              <span className="dollar-span">$1.86T</span>
            </p>
          </div>
        </div>
        <div className="col col-12 col-md-6 col-lg-6 col-xl-6">
          <div className="market-img">
            <Image
              src="/assets/header/marketimg.svg"
              alt="marketimg"
              height={338.93}
              width={478}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
