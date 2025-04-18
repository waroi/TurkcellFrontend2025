"use client";

import React, { useState } from "react";
import UserSidebar from "@/components/organisms/UserSidebar";
import PageHeader from "@/components/molecules/PageHeader";
import UserProfileForm from "@/components/organisms/UserProfileForm";
import Referrals from "@/components/molecules/ReferralCard";
import ApiKeys from "@/components/molecules/ApiKeys";
import LoginHistory from "@/components/molecules/LoginHistory";
import TwoFactorAuth from "@/components/molecules/TwoFactorAuth";
import ChangePassword from "@/components/molecules/ChangePassword";
import EarnUp from "@/components/molecules/EarnUp";
import { useTranslations } from "next-intl";
import styles from "./user.module.css";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const t = useTranslations("UserPage");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <UserProfileForm />;
      case "referrals":
        return <Referrals />;
      case "apiKeys":
        return <ApiKeys />;
      case "loginHistory":
        return <LoginHistory />;
      case "twoFactor":
        return <TwoFactorAuth />;
      case "changePassword":
        return <ChangePassword />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.wrapper}>
      <PageHeader title={t("title")} subtitle={`Home / ${t("title")}`} />

      <div className="container py-5">
        <div className="row">
          <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
            <UserSidebar activeTab={activeTab} onChange={setActiveTab} />
          </div>
          <div className="col-md-8 col-lg-9">{renderContent()}</div>
        </div>
      </div>
      <EarnUp />
    </div>
  );
};

export default UserPage;
