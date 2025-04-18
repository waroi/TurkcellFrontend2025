import React from "react";
import { Container, Image } from "react-bootstrap";

const Testimonials = () => {
  return (
    <div>
      <Container>
        <div className="row py-5">
          <div className="col-lg-6 pe-5">
            <div className="pe-5">
              <h1 className="display-5 fw-bold pe-5 mb-3">
                Our Customers Love What We Do
              </h1>
              <h5 className="mb-3">
                Transform Your Idea Into Reality With Finsweet
              </h5>
              <p className="pe-5 mb-3">
                It Is A Long Established Fact That A Reader Will Be Distracted
                By The Readable Content Of A Page When Looking At Its Layout.
              </p>
            </div>
            <div className="py-2">
              <div className="d-flex mb-4">
                <div className="rounded-circle bg-secondary p-4 me-2"></div>
                <div className="rounded-circle bg-secondary p-4 me-2"></div>
                <div className="rounded-circle bg-secondary p-4"></div>
              </div>
              <p className="fw-semibold">
                <span className="text-primary fw-bold">30+</span> Customer
                Reviews
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col ps-4">
                <div className="d-flex">
                  <Image src="/Shapes.png" className="pe-5" />
                  <div className="d-flex flex-column align-items-end justify-content-between">
                    <div className="pe-1">
                      <Image src="/Quote.png" />
                    </div>
                    <div className="py-4">
                      <h4 className="fw-semibold mb-5">
                        “Great course I really enjoyed it and the course was way
                        easy to learn with very good explanations of the code, I
                        could easily understand and develop applications with
                        the knowledge gathered during the course.”
                      </h4>
                      <div className="w-100">
                        <div className="d-flex justify-content-between mb-2">
                          <div className="d-flex">
                            <div className="my-auto">
                              <div className="rounded-circle bg-secondary p-4"></div>
                            </div>
                            <div className="ms-2">
                              <p className="fs-5 fw-semibold mb-0">
                                Johnny Andro
                              </p>
                              <p className="text-secondary mb-0">
                                Director, Company
                              </p>
                            </div>
                          </div>
                          <Image
                            src="/logoipsum.png"
                            width={113}
                            height={26}
                            className="my-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonials;
