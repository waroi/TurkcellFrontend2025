"use client";

import React from "react";
import styles from "./EarnUp.module.css";
import Button from "@/components/atoms/Button";
import { useTranslations } from "next-intl";

const EarnUp = () => {
  const t = useTranslations("Home.EarnUp");

  return (
    <div className={styles.earnUp}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 py-4">
        <div className="flex-grow-1">
          <h5 className="fw-bold">{t("title")}</h5>
          <p className="m-0 text">{t("description")}</p>
        </div>
        <div className="w-25">
          <Button variant="secondary">{t("button")}</Button>
        </div>
      </div>
    </div>
  );
};

export default EarnUp;
