"use client";
import React from "react";
import { Container, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "@/components/atoms/CustomButton";
import { useTranslations } from "next-intl";

const WhatIsRockie = () => {
  const t = useTranslations();
  return (
    <div>
      <Container className="py-5">
        <div className="row">
          <div className="col-lg-7">
            <Image src="/Rockiea.png" width={716} height={540} />
          </div>
          <div className="col-lg-5 px-2">
            <h1 className="display-5 fw-bold pe-5 mb-3">{t("wir.title")}</h1>
            <p className="pe-5 mb-3">{t("wir.text")}</p>
            <div>
              <h5 className="mb-3">
                <span className="text-primary me-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                {t("wir.c1")}
              </h5>
              <p className="text-secondary">{t("wir.text")}</p>
              <h5 className="mb-3">
                <span className="text-primary me-2">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
                {t("wir.c2")}
              </h5>
              <p className="text-secondary">{t("wir.text")}</p>
            </div>
            <CustomButton
              variant="primary"
              label={t("wir.btn")}
              className="px-4 py-2 rounded-pill text-white mt-3"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhatIsRockie;
