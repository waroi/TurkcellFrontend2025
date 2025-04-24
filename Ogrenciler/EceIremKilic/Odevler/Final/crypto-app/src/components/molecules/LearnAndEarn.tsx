"use client";
import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const LearnAndEarn = () => {
  const t = useTranslations();
  return (
    <div>
      <Container className="py-5">
        <Col lg={4} className="mx-auto">
          <h1 className="text-center mb-3">{t("learn.title")}</h1>
          <p className="text-center text-secondary">{t("learn.text")}</p>
        </Col>
        <Row>
          {Array.from({ length: 3 }).map((_, i) => (
            <Col lg={4} key={i} className="mt-3">
              <Image src="/video.png" width={415} />
              <p className="badge bg-primary px-3 py-2 mt-4">{t("learn.t2")}</p>
              <h4 className="my-3">{t("learn.l1")}</h4>
              <div className="d-flex align-items-center justify-content-between mt-4">
                <div className="d-flex align-items-center ">
                  <div className="rounded-circle p-3 bg-success"></div>
                  <h6 className="ps-2 mb-0 text-secondary">{t("learn.l2")}</h6>
                </div>
                <p className="mb-0 text-secondary">
                  {t("learn.month")} 03, 2021
                </p>
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
              <p className="ms-3 mb-0">{t("learn.btn")}</p>
            </div>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default LearnAndEarn;
