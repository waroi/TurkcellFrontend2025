import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const MarketBanner = () => {
  return (
    <div className="m-banner">
      <Container className="py-5">
        <Row className="justify-content-between align-items-center">
          <Col lg={5}>
            <h1 className="display-3 fw-semibold">
              Today's Cryptocurrency prices
            </h1>
            <h4 className="text-secondary">
              The global crypto market cap is{" "}
              <strong className="text-black">$1.86 T</strong>
            </h4>
          </Col>
          <Col lg={5} className="d-flex justify-content-end">
            <Image src="/market-banner.png" width={478} height={339} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MarketBanner;
