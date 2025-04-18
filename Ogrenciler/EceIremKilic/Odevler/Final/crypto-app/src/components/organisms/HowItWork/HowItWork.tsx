import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

type Props = {};

const HowItWork = (props: Props) => {
  return (
    <Container className="py-5">
      <Col lg={4} className="mx-auto mb-5">
        <h1 className="display-5 fw-bold mb-3 text-center">How It Work</h1>
        <p className="text-center">
          Stacks Is A Production-Ready Library Of Stackable <br />
          Content Blocks Built In React Native.
        </p>
      </Col>
      <Row>
        <Col lg={3} className="text-center px-4">
          <Image src="/hiw1.png" />
          <p className="fs-6 fw-semibold text-secondary mb-0">STEP 1</p>
          <h5>Download</h5>
          <p className="text-center">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks{" "}
            <br />
            Built In React Native.
          </p>
        </Col>
        <Col lg={3} className="text-center px-4">
          <Image src="/hiw2.png" />
          <p className="fs-6 fw-semibold text-secondary mb-0">STEP 1</p>
          <h5>Connect Wallet</h5>
          <p className="text-center">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks{" "}
            <br />
            Built In React Native.
          </p>
        </Col>
        <Col lg={3} className="text-center px-4">
          <Image src="/hiw3.png" />
          <p className="fs-6 fw-semibold text-secondary mb-0">STEP 1</p>
          <h5>Start Trading</h5>
          <p className="text-center">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks{" "}
            <br />
            Built In React Native.
          </p>
        </Col>
        <Col lg={3} className="text-center px-4">
          <Image src="/hiw4.png" />
          <p className="fs-6 fw-semibold text-secondary mb-0">STEP 1</p>
          <h5>Earn Money</h5>
          <p className="text-center">
            Stacks Is A Production-Ready Library Of Stackable Content Blocks{" "}
            <br />
            Built In React Native.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default HowItWork;
