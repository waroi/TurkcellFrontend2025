"use client";

import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import { useTranslations } from "next-intl";
import styles from "./ReferralCard.module.css";

const ReferralCard = () => {
  const t = useTranslations("ReferralCard");
  const [copied, setCopied] = useState(false);
  const referralLink = "https://accounts.rockie.com/login";
  const referralCode = "N84CRDKK";

  const handleCopy = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="p-4 rounded-4 shadow-sm">
      <h5 className={`${styles.title} fw-bold mb-2`}>{t("totalRewards")}</h5>
      <h3 className={`${styles.title} fw-bold mb-2`}>
        $1,056.00 <span className="text-success">USD</span>
      </h3>
      <p className={`${styles.text} small mb-4`}>{t("earningDescription")}</p>

      <div
        className={`${styles.card} p-4 rounded-4 d-flex flex-column gap-3 mb-4`}
      >
        <h6 className={`${styles.title} fw-bold`}>{t("inviteTitle")}</h6>

        <div className="d-flex flex-column flex-md-row gap-3">
          <div className="w-100">
            <label className={`${styles.title} small`}>
              {t("referralLink")}
            </label>
            <input className="form-control" readOnly value={referralLink} />
          </div>

          <div className="w-100">
            <label className={`${styles.title} small`}>
              {t("referralCode")}
            </label>
            <div className="d-flex">
              <input className="form-control" readOnly value={referralCode} />
              <button
                className="btn btn-outline-primary ms-2"
                onClick={handleCopy}
              >
                {copied ? t("copied") : t("copy")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-25">
        <Button variant="primary">{t("walletButton")}</Button>
      </div>
    </div>
  );
};

export default ReferralCard;
