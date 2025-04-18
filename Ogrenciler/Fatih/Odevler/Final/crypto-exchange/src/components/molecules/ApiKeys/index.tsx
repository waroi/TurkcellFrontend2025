"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import styles from "./ApiKeys.module.css";
import { useTranslations } from "next-intl";

const ApiKeys = () => {
  const t = useTranslations("ApiKeys");
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="p-4 rounded-4 shadow-sm">
      <p className={`${styles.title} fw-medium mb-1`}>
        {t("enableDescription")}
      </p>
      <h4 className={`${styles.title} fw-bold mb-3`}>
        {t("statusLabel")}{" "}
        <span className="text-danger">{t("statusValue")}</span>
      </h4>

      <div className="d-flex align-items-center gap-2 mb-4">
        <Image src="/profile/email.svg" width={20} height={20} alt="Email" />
        <span className={`${styles.text} small`}>
          {user?.email || "example@mail.com"}
        </span>
      </div>

      <div className={`${styles.subWrapper} rounded-4 p-4`}>
        <h6 className={`${styles.title} fw-bold mb-1`}>{t("formTitle")}</h6>
        <p className={`${styles.text} small mb-3`}>{t("formDescription")}</p>

        <div className="row g-3 mb-3">
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
        <div className="w-25">
          <Button variant="primary">{t("submit")}</Button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeys;
