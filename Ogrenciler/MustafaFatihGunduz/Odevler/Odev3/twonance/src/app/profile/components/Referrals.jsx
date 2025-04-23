"use client";
import React from "react";
import Overlay from "../../../components/components/Overlay";
import Button from "../../../components/components/Button";
import Input from "../../../components/Input/Input";
import { useLanguage } from "../../../context/LanguageContext";
const Referrals = () => {
  const { translations } = useLanguage();
  return (
    <div>
      <div className="container">
        <h4 className="text-dark fs-3 fw-bold">
          {" "}
          {translations.totalRewards}{" "}
        </h4>
        <h2 className="text-dark fs-2 fw-bold py-93 pe-11">
          $1,056.00 <span className="text-success">USD</span>
        </h2>
        <p className="text-secondary fs-6 fw-normal mb-91">
          {translations.youAreEarning}
        </p>
        <div className="container-fluid bg-secondary position-relative authContainer">
          <Overlay />
          <div className="container position-relative z-1 px-12">
            <h5 className="text-dark fs-3 fw-bold pt-96 pb-98">
              {translations.inviteFriend}
            </h5>
            <div className="d-flex align-items-center gap-5 pb-96">
              <div className="w-100">
                <Input
                  id={"referralLink"}
                  label={translations.referralLink}
                  type="text"
                  placeholder="https://accounts.twonance.com/login"
                  isBuyPage={true}
                  padding="mt-0"
                />
              </div>
              <div className="w-100">
                <Input
                  id={"referralCode"}
                  label={translations.referralCode}
                  type="text"
                  placeholder="BJMNFTH98"
                  isBuyPage={true}
                  padding="mt-0"
                />
              </div>
            </div>
          </div>
        </div>
        <Button
          label={translations.myWallet}
          padding={"px-33 py-93"}
          color="primary"
          textColor="text-white"
          margin="mt-96 mb-12"
        />
      </div>
    </div>
  );
};

export default Referrals;
