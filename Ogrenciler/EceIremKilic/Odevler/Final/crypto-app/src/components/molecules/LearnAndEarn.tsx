import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const LearnAndEarn = () => {
  return (
    <div>
      <Container className="py-5">
        <Col lg={4} className="mx-auto">
          <h1 className="text-center mb-3">Learn And Earn</h1>
          <p className="text-center text-secondary">
            Stacks is a production-ready library of stackable content blocks
            built in React Native.
          </p>
        </Col>
        <Row>
          {Array.from({ length: 3 }).map((_, i) => (
            <Col lg={4} key={i} className="mt-3">
              <Image src="/video.png" width={415} />
              <p className="badge bg-primary px-3 py-2 mt-4">LEARN & EARN</p>
              <h4 className="my-3">
                Learn about UI8 coin and earn an All-Access Pass
              </h4>
              <div className="d-flex align-items-center justify-content-between mt-4">
                <div className="d-flex align-items-center ">
                  <div className="rounded-circle p-3 bg-success"></div>
                  <h6 className="ps-2 mb-0 text-secondary">Floyd Buckridge</h6>
                </div>
                <p className="mb-0 text-secondary">Feb 03, 2021</p>
              </div>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
          <Button
            className="mt-4 rounded-pill px-3 py-2 mb-4"
            variant="outline-secondary"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faSpinner} />
              <p className="ms-3 mb-0">Load more</p>
            </div>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LearnAndEarn;
