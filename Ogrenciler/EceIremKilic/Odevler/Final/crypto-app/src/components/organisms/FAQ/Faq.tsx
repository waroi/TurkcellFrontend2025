import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Col,
  Container,
} from "react-bootstrap";

type Props = {};

const Faq = (props: Props) => {
  return (
    <div>
      <div className="bg-light">
        <Container>
          <div className="d-flex justify-content-between py-5 ">
            <h1>FAQ</h1>
            <p className="text-secondary">Home / FAQ</p>
          </div>
          <div className="py-5">
            <Col lg={8} className="mx-auto">
              <div className="text-center">
                <h1 className="display-5 fw-semibold">
                  Frequently Asked Questions
                </h1>
                <p className="text-secondary mb-5">Learn how to get started</p>
                <hr />
              </div>
              <Accordion defaultActiveKey="0">
                <AccordionItem
                  eventKey="1"
                  className="py-2 bg-transparent border-0"
                >
                  <AccordionHeader>
                    <h4>What Is Rockie?</h4>
                  </AccordionHeader>
                  <hr />
                  <AccordionBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus aliquam parturient erat id vel, condimentum a,
                      hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                      Egestas feugiat gravida in imperdiet facilisi tortor ac
                      ultrices venenatis.{" "}
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  eventKey="2"
                  className="py-2 bg-transparent border-0"
                >
                  <AccordionHeader>
                    <h4>How To Start With Rockie?</h4>
                  </AccordionHeader>
                  <hr />
                  <AccordionBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus aliquam parturient erat id vel, condimentum a,
                      hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                      Egestas feugiat gravida in imperdiet facilisi tortor ac
                      ultrices venenatis.{" "}
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  eventKey="3"
                  className="py-2 bg-transparent border-0"
                >
                  <AccordionHeader>
                    <h4>What Cryptocurrencies can I use to purchase?</h4>
                  </AccordionHeader>
                  <hr />
                  <AccordionBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus aliquam parturient erat id vel, condimentum a,
                      hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                      Egestas feugiat gravida in imperdiet facilisi tortor ac
                      ultrices venenatis.{" "}
                    </p>
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem
                  eventKey="4"
                  className="py-2 bg-transparent border-0"
                >
                  <AccordionHeader>
                    <h4>How to buy & sell in Rockie?</h4>
                  </AccordionHeader>
                  <hr />
                  <AccordionBody>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus aliquam parturient erat id vel, condimentum a,
                      hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                      Egestas feugiat gravida in imperdiet facilisi tortor ac
                      ultrices venenatis.{" "}
                    </p>
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </Col>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Faq;
