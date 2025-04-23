"use client";
import React from "react";
import Input from "../../../components/Input/Input";
import Button from "../../../components/components/Button";
import { useLanguage } from "../../../context/LanguageContext";
import FeatureSwitch from "./components/FeatureSwitch";
const UserProfile = () => {
  const { translations } = useLanguage();
  return (
    <div>
      <div className="container">
        <h2 className="text-dark fs-2 fw-bold"> {translations.userProfile} </h2>
        <h6 className="text-dark fs-3 fw-bold pt-16 pb-13">
          {translations.information}
        </h6>
        <div className="d-flex flex-column">
          <div className="d-flex gap-5 align-items-center">
            <div className="w-100">
              <Input
                id={"name"}
                isLabelAvaible={false}
                type="text"
                placeholder="Mustafa Fatih"
              />
            </div>
            <div className="w-100">
              <Input
                id={"lastName"}
                isLabelAvaible={false}
                type="text"
                placeholder="Gündüz"
              />
            </div>
          </div>
          <div className="d-flex gap-5 align-items-center">
            <div className="w-100">
              <Input
                id={"email"}
                isLabelAvaible={false}
                type="email"
                placeholder="mustafatihgunduz@gmail.com"
              />
            </div>
            <div className="d-flex gap-2 align-items-center">
              <div className="w-25">
                <Input
                  id={"lastName"}
                  isLabelAvaible={false}
                  type="text"
                  placeholder="+1"
                />
              </div>
              <div className="w-75">
                <Input
                  id={"phone"}
                  isLabelAvaible={false}
                  type="number"
                  placeholder="531 960 00 00"
                />
              </div>
            </div>
          </div>
          <div className="d-flex gap-5 align-items-center">
            <div className="w-100">
              <Input
                id={"country"}
                isLabelAvaible={false}
                type="text"
                placeholder="Turkey"
              />
            </div>
            <div className="d-flex gap-2 align-items-center">
              <div className="w-50">
                <Input
                  id={"gender"}
                  isLabelAvaible={false}
                  type="text"
                  placeholder="Male"
                />
              </div>
              <div className="w-50">
                <Input
                  id={"birthday"}
                  isLabelAvaible={false}
                  type="date"
                  placeholder=""
                />
              </div>
            </div>
          </div>
          <h4 className="text-dark fw-bold fs-3 pb-16">
            {translations.features}
          </h4>
          <div className="row">
            <div className="col-md-6">
              <h6 className="text-dark fw-normal display-2 border-bottom border-2 text-uppercase pb-93">
                Level 1
              </h6>
              <FeatureSwitch
                label={translations.depositAssets}
                checked={true}
              />
              <div className="d-flex algin-items-center justify-content-between py-93">
                <p className="text-dark fw-bold display-2">
                  {translations.withdrawAssets}
                </p>
                <p className="text-secondary fw-normal display-2">
                  Enabled $1,000,000/day
                </p>
              </div>
              <FeatureSwitch
                label={translations.cardPurchases}
                checked={false}
              />
              <FeatureSwitch label={translations.bankDeposit} checked={false} />
            </div>
            <div className="col-md-6">
              <h6 className="text-dark fw-normal display-2 border-bottom border-2 text-uppercase pb-93">
                Level 2
              </h6>
              <FeatureSwitch label={"Fiat and Spot wallet"} checked={true} />
              <div className="d-flex algin-items-center justify-content-between py-93">
                <p className="text-dark fw-bold display-2">
                  {" "}
                  {translations.marginWallet}{" "}
                </p>
                <p className="text-secondary fw-normal display-2">
                  {translations.enableHundredLeverage}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Button
          label={"Update Profile"}
          padding={"py-93 px-32"}
          textColor="text-white"
          isBold={true}
          color="primary"
        />
      </div>
    </div>
  );
};

export default UserProfile;
