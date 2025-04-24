"use client";
import React from "react";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

const DownloadApp = () => {
  const t = useTranslations();
  return (
    <div className="pt-5">
      <Container className="py-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="mb-4">
              <h1 className="display-5 fw-bold pe-5 mb-3">{t("down.title")}</h1>
              <p className="mb-3 text-secondary">{t("down.text")}</p>
            </div>
            <div>
              <h5 className="mb-3">
                <span className="text-primary me-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                {t("down.c1")}
              </h5>
              <p className="text-secondary">{t("down.c1t")}</p>
              <h5 className="mb-3">
                <span className="text-primary me-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                {t("down.c2")}
              </h5>
              <p className="text-secondary">{t("down.c2t")}</p>
            </div>
            <Image src="/Download.png" className="mt-3" />
          </div>
          <div className="col-lg-6">
            <Image src="/DownImg.png" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DownloadApp;
