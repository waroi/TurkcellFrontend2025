"use client";

import React, { useState } from "react";
import Button from "@/components/atoms/Button";
import styles from "./UserProfileForm.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { useTranslations } from "next-intl";

const UserProfileForm = () => {
  const t = useTranslations("UserProfile");
  const user = useSelector((state: RootState) => state.auth.user);
  const theme = useSelector((state: RootState) => state.theme.mode);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    gender: "",
    birthdate: "",
    phoneCode: "+1",
    phoneNumber: "",
  });

  const [features, setFeatures] = useState({
    deposit: true,
    withdraw: false,
    cardPurchase: false,
    bankDeposit: false,
    fiatWallet: true,
    marginWallet: false,
  });

  const handleInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleToggle = (key: keyof typeof features) => {
    setFeatures({ ...features, [key]: !features[key] });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user?.uid) return alert(t("noUser"));

    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          profile: form,
          features,
          updatedAt: new Date().toISOString(),
        },
        { merge: true }
      );
      alert(t("updateSuccess"));
    } catch (error) {
      console.error("Firestore update error:", error);
      alert(t("updateError"));
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" p-4 rounded-4 shadow-sm">
      <h4 className={`${styles.title} fw-bold mb-4`}>{t("title")}</h4>
      <h5 className={`${styles.title} fw-semibold mb-4`}>{t("info")}</h5>

      <div className="row g-3">
        <div className="col-md-6">
          <input
            className={`form-control ${
              theme === "dark" ? "bg-dark text-white" : ""
            }`}
            placeholder={t("firstName")}
            name="firstName"
            value={form.firstName}
            onChange={handleInput}
          />
        </div>
        <div className="col-md-6">
          <input
            className={`form-control ${
              theme === "dark" ? "bg-dark text-white darkInput" : ""
            }`}
            placeholder={t("lastName")}
            name="lastName"
            value={form.lastName}
            onChange={handleInput}
          />
        </div>
        <div className="col-md-6">
          <input
            className={`form-control ${
              theme === "dark" ? "bg-dark text-white" : ""
            }`}
            placeholder={t("email")}
            name="email"
            value={form.email}
            onChange={handleInput}
          />
        </div>
        <div className="col-md-3">
          <select
            className={`form-select ${
              theme === "dark" ? "bg-dark text-white" : ""
            }`}
            name="phoneCode"
            value={form.phoneCode}
            onChange={handleInput}
          >
            <option value="+1">+1</option>
            <option value="+90">+90</option>
            <option value="+44">+44</option>
          </select>
        </div>
        <div className="col-md-3">
          <input
            className={`form-control ${
              theme === "dark" ? "bg-dark text-white" : ""
            }`}
            placeholder={t("phone")}
            name="phoneNumber"
            value={form.phoneNumber}
            onChange={handleInput}
          />
        </div>
        <div className="col-md-4">
          <select
            className={`form-select ${
              theme === "dark" ? "bg-dark text-white" : ""
            }`}
            name="country"
            value={form.country}
            onChange={handleInput}
          >
            <option value="">{t("selectCountry")}</option>
            <option value="South Korean">South Korean</option>
            <option value="Turkey">Turkey</option>
          </select>
        </div>
        <div className="col-md-4">
          <select
            className={`form-select ${
              theme === "dark" ? "bg-dark text-white" : ""
            }`}
            name="gender"
            value={form.gender}
            onChange={handleInput}
          >
            <option value="">{t("gender")}</option>
            <option value="Male">{t("male")}</option>
            <option value="Female">{t("female")}</option>
          </select>
        </div>
        <div className="col-md-4">
          <input
            className={`form-control ${
              theme === "dark" ? "bg-dark text-white" : ""
            }`}
            type="date"
            name="birthdate"
            value={form.birthdate}
            onChange={handleInput}
          />
        </div>
      </div>

      <h5 className={`${styles.title} fw-bold mt-5 mb-3`}>{t("features")}</h5>
      <div className="row">
        <div className="col-md-6">
          <h6 className={`${styles.text} fw-bold mb-2 border-bottom pb-1 `}>
            {t("level1")}
          </h6>

          <FeatureSwitch
            label={t("deposit")}
            value={features.deposit}
            onToggle={() => handleToggle("deposit")}
          />
          <FeatureSwitch
            label={t("withdraw")}
            value={features.withdraw}
            onToggle={() => handleToggle("withdraw")}
            hint="Enabled $1,000,000/day"
          />
          <FeatureSwitch
            label={t("cardPurchase")}
            value={features.cardPurchase}
            onToggle={() => handleToggle("cardPurchase")}
          />
          <FeatureSwitch
            label={t("bankDeposit")}
            value={features.bankDeposit}
            onToggle={() => handleToggle("bankDeposit")}
          />
        </div>
        <div className="col-md-6">
          <h6
            className={`${styles.title} fw-bold text-muted mb-2 border-bottom pb-1 `}
          >
            {t("level2")}
          </h6>

          <FeatureSwitch
            label={t("fiatWallet")}
            value={features.fiatWallet}
            onToggle={() => handleToggle("fiatWallet")}
          />
          <FeatureSwitch
            label={t("marginWallet")}
            value={features.marginWallet}
            onToggle={() => handleToggle("marginWallet")}
            hint="Enabled 100x Leverage"
          />
        </div>
      </div>

      <div className="mt-4 w-25">
        <Button type="submit" variant="primary">
          {t("update")}
        </Button>
      </div>
    </form>
  );
};

const FeatureSwitch = ({
  label,
  value,
  onToggle,
  hint,
}: {
  label: string;
  value: boolean;
  onToggle: () => void;
  hint?: string;
}) => (
  <div className="d-flex justify-content-between align-items-center mb-3">
    <div className="form-check form-switch m-0">
      <input
        className="form-check-input"
        type="checkbox"
        checked={value}
        onChange={onToggle}
      />
      <label className={`${styles.title} form-check-label`}>{label}</label>
    </div>
    {hint && <span className={`${styles.title} small`}>{hint}</span>}
  </div>
);

export default UserProfileForm;
