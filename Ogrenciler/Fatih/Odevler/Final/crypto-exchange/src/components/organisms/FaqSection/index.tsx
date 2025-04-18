"use client";

import React from "react";
import FaqItem from "../../molecules/FaqItem";
import { useTranslations } from "next-intl";
import styles from "./FaqSection.module.css";

const FaqSection = () => {
  const t = useTranslations("Faq");

  return (
    <div className="container py-5 w-50">
      <h2 className={`${styles.title} fw-bold text-center mb-2`}>
        {t("title")}
      </h2>
      <p className={`${styles.text} text-center mb-4`}>{t("subtitle")}</p>

      <div className="border-top">
        <FaqItem
          question={t("questions.q1")}
          answer={t("answers.a1")}
          defaultOpen
        />
        <FaqItem question={t("questions.q2")} answer={t("answers.a2")} />
        <FaqItem question={t("questions.q3")} answer={t("answers.a3")} />
        <FaqItem question={t("questions.q4")} answer={t("answers.a4")} />
      </div>
    </div>
  );
};

export default FaqSection;
