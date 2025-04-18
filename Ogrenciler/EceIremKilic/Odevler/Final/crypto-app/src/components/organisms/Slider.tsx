import React from "react";
import { Container, Image } from "react-bootstrap";
import SliderText from "../molecules/SliderText";
import Partners from "../molecules/Partners";

const Slider = () => {
  return (
    <Container>
      <div className="row align-items-center">
        <div className="col-lg-6 col-12 py-5">
          <SliderText />
          <Partners />
        </div>
        <div className="col-lg-6 col-12 d-flex justify-content-end">
          <Image src="/sliderImg.png" />
        </div>
      </div>
    </Container>
  );
};

export default Slider;
