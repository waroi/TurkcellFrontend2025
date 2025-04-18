"use client";

import Button from "@/components/atoms/Button";
import React from "react";
import styles from "./Login.module.css";
import LoginForm from "@/components/organisms/LoginForm";
import SecureLink from "@/components/molecules/SecureLink";
import PageHeader from "@/components/molecules/PageHeader";
import { useTranslations } from "next-intl";

const Login = () => {
  const t = useTranslations("Login");

  return (
    <div className={styles.register}>
      <PageHeader title={t("title")} subtitle={t("breadcrumb")} />
      <div className="d-flex flex-column align-items-center">
        <h2 className={`text-center fw-bold ${styles.title}`}>{t("title")}</h2>
        <p className={`text-center mb-4 ${styles.subTitle}`}>{t("subtitle")}</p>
        <SecureLink url={t("secureLink")} />
      </div>

      <LoginForm />

      <div className={`${styles.earnUp}`}>
        <div className="d-flex container justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <h5>{t("earnTitle")}</h5>
            <p className="m-0">{t("earnDesc")}</p>
          </div>
          <div className="w-25">
            <Button variant="secondary">{t("cta")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
