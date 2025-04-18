"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./HowItWork.module.css";

const HowItWorks = () => {
  const t = useTranslations("Home.HowItWorks");

  const steps = [
    {
      title: t("steps.download.title"),
      description: t("steps.download.description"),
      image: "/howItWork/Bitcoin Cloud.png",
    },
    {
      title: t("steps.connectWallet.title"),
      description: t("steps.connectWallet.description"),
      image: "/howItWork/Bitcoin Wallet.png",
    },
    {
      title: t("steps.startTrading.title"),
      description: t("steps.startTrading.description"),
      image: "/howItWork/Bitcoin Mining.png",
    },
    {
      title: t("steps.earnMoney.title"),
      description: t("steps.earnMoney.description"),
      image: "/howItWork/Bitcoin Comparison.png",
    },
  ];

  return (
    <section className={`${styles.wrapper} py-5 text-center`}>
      <div className="container">
        <h2 className="fw-bold mb-2">{t("title")}</h2>
        <p className="mb-5">{t("description")}</p>

        <div className="d-flex flex-wrap justify-content-center gap-5">
          {steps.map((step, index) => (
            <div
              key={index}
              className="d-flex flex-column align-items-center text-center"
              style={{ maxWidth: 220 }}
            >
              <Image
                src={step.image}
                alt={step.title}
                width={96}
                height={96}
                className="mb-3"
              />
              <small className=" text-uppercase">
                {t("step")} {index + 1}
              </small>
              <h5 className="fw-semibold mt-2 mb-1">{step.title}</h5>
              <p className=" small">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
