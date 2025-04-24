"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const MarketBanner = () => {
  const t = useTranslations();
  return (
    <div className="m-banner pb-4">
      <Container className="py-5">
        <Row className="justify-content-between align-items-center">
          <Col lg={5}>
            <h1 className="display-3 fw-semibold">{t("marketBanner.title")}</h1>
            <h4 className="text-secondary">
              {t("marketBanner.text")}{" "}
              <strong className="text-black">$1.86 T</strong>
            </h4>
          </Col>
          <Col lg={5} className="d-flex justify-content-end mb-5">
            <Image src="/market-banner.png" width={478} height={339} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MarketBanner;
