"use client";
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useTranslations } from "next-intl";

export default function LearnAndEarn() {
  const cards = [1, 2, 3];
  const t = useTranslations()

  return (
    <section className="container text-center my-5">
      <h2 className="fw-bold fs-48">{t("Learn And Earn")}</h2>
      <p className="text-muted fs-3">
        {t("Stacks is a production-ready library of stackable content blocks built in React Native")}
      </p>

      <div className="row justify-content-center mt-5">
        {cards.map((card, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card border-0">
              <div className="ratio ratio-16x9 mb-3 rounded bg-dark">
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                  <span className="p-2 rounded-circle bg-secondary play-button d-flex justify-content-center align-items-center">
                    <Image src="/play.svg" width={16} height={16} alt="play" />
                  </span>
                </div>
              </div>

              <div className="card-body text-start p-0 d-flex flex-column gap-3">
                <div>
                  <span className="badge bg-primary text-uppercase fs-6 fw-normal d-inline">
                    {t("Learn & Earn")}
                  </span>
                </div>
                <h6 className="fw-semibold fs-2">
                  {t("Learn about U18 coin and earn an All_Access Pass")}
                </h6>
                <div className="d-flex align-items-center justify-content-between text-muted small">
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className="rounded-circle bg-success"
                      style={{ width: 15, height: 15 }}
                    />
                    <span className="fs-5">Floyd Buckridge</span>
                  </div>
                  <span>{t("Feb 03, 2021")}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 mb-5 d-flex justify-content-center">
        <Button className="btn-white border d-flex align-items-center justify-content-center gap-1">
          <Image
            src="/loading.svg"
            width={16}
            height={16}
            alt="plus"
            className="me-2"
          />
          {t("Load more")}
        </Button>
      </div>
    </section>
  );
}