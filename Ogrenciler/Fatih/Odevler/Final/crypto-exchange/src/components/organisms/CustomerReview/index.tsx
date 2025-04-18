"use client";

import React from "react";
import Image from "next/image";
import styles from "./CustomerReview.module.css";
import { useTranslations } from "next-intl";

const CustomerReview = () => {
  const t = useTranslations("Home.CustomerReview");

  return (
    <section className="container my-5">
      <div className="row gx-5 align-items-stretch">
        <div className="col-lg-6 d-flex flex-column justify-content-between">
          <h2 className="fw-bold">{t("title")}</h2>
          <h6 className="fw-semibold text">{t("subtitle")}</h6>
          <p className="text">{t("text")}</p>

          <div className="d-flex flex-column align-items-start gap-2 mt-4">
            <div className="d-flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="rounded-circle"
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: "var(--secondary2)",
                  }}
                ></div>
              ))}
            </div>
            <small className="fw-semibold">
              <span className="text-primary">30+</span>
              {t("reviewCount")}
            </small>
          </div>
        </div>

        <div className="col-lg-6">
          <div className={`p-4 rounded-4 ${styles.card} shadow-sm h-100`}>
            <p className="fw-semibold">{t("review")}</p>
            <div className="d-flex align-items-center mt-4">
              <div
                className="rounded-circle"
                style={{
                  width: 44,
                  height: 44,
                  backgroundColor: "var(--secondary2)",
                }}
              ></div>
              <div className="ms-2">
                <strong>{t("name")}</strong>
                <p className="text small m-0">{t("position")}</p>
              </div>
              <div className="ms-auto">
                <Image
                  src="/customerReview/Logo.svg"
                  alt="brand"
                  width={80}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
