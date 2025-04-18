"use client";

import { useState } from "react";
import styles from "./Register.module.css";
import RegisterForm from "@/components/organisms/RegisterForm";
import Button from "@/components/atoms/Button";
import RegisterMobile from "@/components/organisms/RegisterMobile";
import PageHeader from "@/components/molecules/PageHeader";
import { useTranslations } from "next-intl";

const Register = () => {
  const [method, setMethod] = useState<"email" | "mobile">("email");
  const t = useTranslations("Register");

  return (
    <div className={styles.register}>
      <PageHeader title={t("title")} subtitle={t("breadcrumb")} />
      <h2 className={`text-center fw-bold py-4 ${styles.title}`}>
        {t("title")}
      </h2>
      <p className={`text-center mb-4 ${styles.subTitle}`}>{t("subtitle")}</p>

      <div className={styles.switchTabs}>
        <button
          type="button"
          className={`${styles.switchButton} ${
            method === "email" ? styles.active : ""
          }`}
          onClick={() => setMethod("email")}
        >
          {t("email")}
        </button>
        <button
          type="button"
          className={`${styles.switchButton} ${
            method === "mobile" ? styles.active : ""
          }`}
          onClick={() => setMethod("mobile")}
        >
          {t("mobile")}
        </button>
      </div>

      {method === "email" && <RegisterForm />}
      {method === "mobile" && <RegisterMobile />}

      <div className={`${styles.earnUp}`}>
        <div className="d-flex container justify-content-between align-items-center">
          <div className="d-flex flex-column">
            <h5>{t("earnTitle")}</h5>
            <p className="m-0">{t("earnDesc")}</p>
          </div>
          <div className="w-25">
            <Button>{t("cta")}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
