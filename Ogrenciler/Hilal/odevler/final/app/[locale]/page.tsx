import React from "react";
import Slider from "./_components/Slider";
import Crypto from "./_components/Crypto";
import { Container } from "react-bootstrap";
import MarketUpdate from "./_components/MarketUpdate";
import Testimonials from "./_components/Testimonials";
import HowItWorks from "./_components/HowItWork";
import Rockie from "./_components/WhatIsRockie";
import DownloadInfo from "./_components/DownloadInfo";
import CallToAction from "./_components/CallToAction";

const page = async () => {
  return (
    <main>
      <section className="position-relative py-3 ">
        <div className="position-absolute top-0 start-0 end-0 bg-surface w-100 h-75"></div>
        <Container className="position-relative">
          <Slider />
          <Crypto />
        </Container>
      </section>
      <section>
        <Container className="mt-9">
          <MarketUpdate />
        </Container>
      </section>
      <section className="py-5 my-4 bg-surface">
        <Container>
          <HowItWorks />
        </Container>
      </section>
      <section className="py-9 my-4">
        <Container>
          <Rockie />
        </Container>
      </section>
      <section className="py-5 my-4">
        <Container>
          <DownloadInfo />
        </Container>
      </section>
      <section className="py-5 my-4">
        <Container>
          <Testimonials />
        </Container>
      </section>
      <section>
        <CallToAction />
      </section>
    </main>
  );
};

export default page;
