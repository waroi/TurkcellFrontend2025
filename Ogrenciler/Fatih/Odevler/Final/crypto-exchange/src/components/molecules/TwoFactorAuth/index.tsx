"use client";

import React from "react";
import styles from "./TwoFactorAuth.module.css";
import { useTranslations } from "next-intl";

const TwoFactorAuth = () => {
  const t = useTranslations("TwoFactorAuth");

  return (
    <div className="rounded-4 p-4 shadow-sm w-50">
      <h5 className={`${styles.title} fw-bold mb-1`}>
        2FA <span className="text-success">{t("enabled")}</span>
      </h5>
      <p className={`${styles.text} small`}>{t("description")}</p>

      <div className={`${styles.card} p-4 mt-4 rounded-4`}>
        <h6 className={`${styles.title} fw-bold mb-1`}>{t("disableTitle")}</h6>
        <p className={`${styles.text} small mb-4`}>{t("disableDescription")}</p>

        <div className="row g-3">
          <div className="col-md-6">
            <input
              type="password"
              className="form-control"
              placeholder={t("password")}
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder={t("code")}
            />
          </div>
        </div>

        <div className="mt-4">
          <button className="btn btn-danger fw-semibold px-4 py-2">
            {t("disableButton")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TwoFactorAuth;
