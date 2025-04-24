"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

type Props = {};

const HowItWork = (props: Props) => {
  const t = useTranslations();
  return (
    <Container className="py-5">
      <Col lg={4} className="mx-auto mb-5">
        <h1 className="display-5 fw-bold mb-3 text-center">{t("hiw.title")}</h1>
        <p className="text-center">{t("hiw.text")}</p>
      </Col>
      <Row>
        <Col lg={3} className="text-center px-4">
          <Image src="/hiw1.png" />
          <p className="fs-6 fw-semibold text-secondary mb-0">
            {t("hiw.step")} 1
          </p>
          <h5>{t("hiw.s1")}</h5>
          <p className="text-center">{t("hiw.text")}</p>
        </Col>
        <Col lg={3} className="text-center px-4">
          <Image src="/hiw2.png" />
          <p className="fs-6 fw-semibold text-secondary mb-0">
            {" "}
            {t("hiw.step")} 2
          </p>
          <h5>{t("hiw.s2")}</h5>
          <p className="text-center">{t("hiw.text")}</p>
        </Col>
        <Col lg={3} className="text-center px-4">
          <Image src="/hiw3.png" />
          <p className="fs-6 fw-semibold text-secondary mb-0">
            {" "}
            {t("hiw.step")} 3
          </p>
          <h5>{t("hiw.s3")}</h5>
          <p className="text-center">{t("hiw.text")}</p>
        </Col>
        <Col lg={3} className="text-center px-4">
          <Image src="/hiw4.png" />
          <p className="fs-6 fw-semibold text-secondary mb-0">
            {" "}
            {t("hiw.step")} 4
          </p>
          <h5>{t("hiw.s4")}</h5>
          <p className="text-center">{t("hiw.text")}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default HowItWork;
