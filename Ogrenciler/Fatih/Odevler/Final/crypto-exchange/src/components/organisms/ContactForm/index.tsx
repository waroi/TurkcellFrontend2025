"use client";

import Button from "@/components/atoms/Button";
import styles from "./ContactForm.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";

const ContactForm = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const t = useTranslations("Contact");

  const inputClass =
    theme === "dark" ? "form-control bg-dark text-white" : "form-control";
  const selectClass =
    theme === "dark" ? "form-select bg-dark text-white" : "form-select";

  return (
    <div className="container py-5">
      <div className="row g-5 align-items-start">
        <div className="col-md-6">
          <div
            style={{
              backgroundColor: "#B0B3C0",
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              minHeight: "400px",
            }}
          />
        </div>

        <div className="col-md-6">
          <h2 className={`${styles.title} fw-bold mb-1`}>{t("title")}</h2>
          <p className={`${styles.text} mb-4`}>{t("subtitle")}</p>

          <form className="d-flex flex-column gap-3">
            <input className={inputClass} placeholder={t("name")} />
            <input className={inputClass} placeholder={t("email")} />
            <select className={selectClass}>
              <option>{t("category.nft")}</option>
              <option>{t("category.security")}</option>
              <option>{t("category.withdraw")}</option>
            </select>
            <textarea
              className={inputClass}
              placeholder={t("message")}
              rows={4}
            />
            <div className="mt-3">
              <Button variant="primary" type="button">
                {t("send")}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
