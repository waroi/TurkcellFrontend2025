"use client";
import React, { useState } from "react";
import AuthContainer from "@/components/components/AuthContainer";
import SideBarButton from "./components/SideBarButton";
import UserProfile from "./components/UserProfile";
import Referrals from "./components/Referrals";
import APIKeys from "./components/APIKeys";
import LoginHistory from "./components/LoginHistory";
import TwoFA from "./components/TwoFA";
import ChangePassword from "./components/ChangePassword";
import { useLanguage } from "../../context/LanguageContext";
const ProfilePage = () => {
  const { translations } = useLanguage();
  const [activeTab, setActiveTab] = useState("UserProfile");
  const renderContent = () => {
    switch (activeTab) {
      case "UserProfile":
        return <UserProfile />;
      case "Referrals":
        return <Referrals />;
      case "APIKeys":
        return <APIKeys />;
      case "LoginHistory":
        return <LoginHistory />;
      case "TwoFA":
        return <TwoFA />;
      case "ChangePassword":
        return <ChangePassword />;
      default:
        return <div>Not Found</div>;
    }
  };
  return (
    <div>
      <AuthContainer authType={translations.userProfile} />
      <section className="bg-white my-21">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <div className="d-flex flex-column border-1 border-end">
                <SideBarButton
                  label={translations.userProfile}
                  value={"UserProfile"}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <SideBarButton
                  label={translations.refferals}
                  value={"Referrals"}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <SideBarButton
                  label={translations.apiKeys}
                  value={"APIKeys"}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <SideBarButton
                  label={translations.loginHistory}
                  value={"LoginHistory"}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <SideBarButton
                  label={"2FA"}
                  value={"TwoFA"}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
                <SideBarButton
                  label={translations.changePassword}
                  value={"ChangePassword"}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              </div>
            </div>
            <div className="col-md-8">{renderContent()}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
