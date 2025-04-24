"use client";
import NavbarComponent from "@/components/organisms/Navbar/NavbarComponent";
import React, { useEffect } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Table,
} from "react-bootstrap";
import "../../style/main.scss";
import { useCoinStore } from "@/store/useCoinStore";
import ProtectedRoute from "@/components/ProtectedRoute";

const Wallet = () => {
  const { coins, fetchData } = useCoinStore();
  useEffect(() => {
    fetchData();
    console.log("aa", coins);
  }, [coins]);
  return (
    <ProtectedRoute>
      <div>
        <NavbarComponent />
        <div className="bg-light">
          <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center">
              <h1 className="fw-bold">Wallet</h1>
              <p className="text-secondary">Home / Wallet</p>
            </div>
          </Container>
        </div>
        <Container>
          <Row>
            <Col lg={2} className="bg-light vh-100 py-4">
              <div className="d-flex flex-column align-items-start px-3">
                <Button variant="primary" className="mb-3 w-100 text-start">
                  Overview
                </Button>
                <Button variant="light" className="mb-3 w-100 text-start">
                  Buy Crypto
                </Button>
                <Button variant="light" className="w-100 text-start">
                  Sell Crypto
                </Button>
              </div>
            </Col>
            <Col lg={10} className="py-4 px-5">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h3 className="fw-bold">Overview</h3>
                  <div className="d-flex align-items-center">
                    <h4 className="me-2">0.79253864</h4>
                    <span className="badge bg-success">BTC</span>
                  </div>
                  <p className="text-muted">$12,068.83</p>
                </div>
                <div className="w-50">
                  <div className="d-flex gap-3 mb-3">
                    <InputGroup>
                      <Form.Control placeholder="Search" />
                    </InputGroup>
                    <Form.Select>
                      <option>USD</option>
                      <option>BTC</option>
                    </Form.Select>
                  </div>
                  <Button variant="primary" className="w-100 rounded-pill">
                    Show balance
                  </Button>
                </div>
              </div>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Asset</th>
                    <th>Earn</th>
                    <th>On Orders</th>
                    <th>Available Balance</th>
                    <th>Total Balance</th>
                  </tr>
                </thead>
                <tbody>
                  {coins.map((coin, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td className="d-flex align-items-center gap-2">
                        <img
                          src={coin.image}
                          alt="icon"
                          width={24}
                          height={24}
                        />
                        <div>
                          <div className="fw-semibold">{coin.name}</div>
                          <small className="text-muted">{coin.name} USD</small>
                        </div>
                      </td>
                      <td className="text-success">7.46% APR</td>
                      <td>
                        0.2785689852 BTC
                        <br />
                        <small>$1002.36</small>
                      </td>
                      <td>
                        0.2785689852 BTC
                        <br />
                        <small>$1002.36</small>
                      </td>
                      <td>
                        0.2785689852 BTC
                        <br />
                        <small>$1002.36</small>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </ProtectedRoute>
  );
};

export default Wallet;
