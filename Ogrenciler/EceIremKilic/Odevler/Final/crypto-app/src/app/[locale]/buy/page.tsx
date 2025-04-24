import NavbarComponent from "@/components/organisms/Navbar/NavbarComponent";
import React from "react";
import "@/style/main.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import btc from "cryptocurrency-icons/svg/color/btc.svg";
import vnd from "cryptocurrency-icons/svg/color/bnb.svg";
import CreateAccount from "@/components/organisms/CreateAccount/CreateAccount";
import Footer from "@/components/organisms/Footer/Footer";
import ProtectedRoute from "@/components/ProtectedRoute";

const Buy = () => {
  return (
    <ProtectedRoute>
      <div>
        <NavbarComponent />
        <div className="bg-light">
          <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="fw-bold">Buy Crypto</h1>
              <p className="text-secondary">Home / Buy Crypto</p>
            </div>
          </Container>
        </div>
        <Container className="py-5">
          <Row className="pe-5">
            <Col lg={4}>
              <div className="d-flex flex-column">
                <Button variant="light" className="mb-4">
                  Overwiew
                </Button>
                <Button variant="light" className="mb-4">
                  Buy Crypto
                </Button>
                <Button variant="light">Sell Crypto</Button>
              </div>
            </Col>
            <Col lg={8} className="ps-5">
              <div className="d-flex justify-content-between">
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label className="form-check-label">Select currency</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label className="form-check-label">Important notes</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                  <label className="form-check-label">Payment details</label>
                </div>
              </div>
              <div className="p-4 rounded bg-light shadow-sm">
                <h5 className="fw-bold mb-1">Select Currency</h5>
                <p className="text-secondary mb-4">
                  Reference Price: <strong>1,450,939,280.43 VND/BTC</strong>
                </p>

                <Row className="align-items-center mb-3">
                  <Col md={5}>
                    <label className="form-label fw-bold">Pay</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value="3,000,000"
                        readOnly
                      />
                      <span className="input-group-text">
                        <img src={vnd} alt="VND" width="20" className="me-1" />
                        VND
                      </span>
                    </div>
                  </Col>

                  <Col md={2} className="text-center">
                    <i className="bi bi-arrow-left-right fs-4 text-primary"></i>
                  </Col>

                  <Col md={5}>
                    <label className="form-label fw-bold">Receive</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        value="0.00207026"
                        readOnly
                      />
                      <span className="input-group-text">
                        <img src={btc} alt="BTC" width="20" className="me-1" />
                        BTC
                      </span>
                    </div>
                  </Col>
                </Row>

                <div className="text-end">
                  <Button variant="primary">Continue</Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <CreateAccount />
        <Footer />
      </div>
    </ProtectedRoute>
  );
};

export default Buy;
