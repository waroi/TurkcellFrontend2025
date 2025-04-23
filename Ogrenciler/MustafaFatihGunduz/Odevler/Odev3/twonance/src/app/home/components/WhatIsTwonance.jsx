"use client";
import React from "react";
import Image from "next/image";
import Button from "@/components/components/Button";
import { useLanguage } from "@/context/LanguageContext";
const WhatIsTwonance = () => {
  const { translations } = useLanguage();
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-23 mb-25">
            <Image
              src={"/assets/computer.svg"}
              width={716}
              height={404}
              alt="computer"
            />
          </div>
          <div className="col-md-6 mt-24 mb-21">
            <h2 className="text-dark fs-1 fw-bold pb-11">
              {" "}
              {translations.whatIsTwonance}{" "}
            </h2>
            <p className="text-secondary fs-4 fw-regular pb-12">
              {translations.experienceAVariety}
            </p>
            <div className="d-flex align-items-center">
              <Image
                src={"/assets/check.svg"}
                width={20}
                height={20}
                alt="check"
              />
              <h6 className="text-dark fs-3 fw-bold ps-93 pb-98">
                {translations.viewRealTime}
              </h6>
            </div>
            <p className="text-secondary fs-6 fw-regular pb-16">
              {translations.experienceAVariety}
            </p>
            <div className="d-flex align-items-center">
              <Image
                src={"/assets/check.svg"}
                width={20}
                height={20}
                alt="check"
              />
              <h6 className="text-dark fs-3 fw-bold ps-93 pb-98">
                {translations.buyAndSellBtcEth}
              </h6>
            </div>
            <p className="text-secondary fs-6 fw-regular pb-12">
              {translations.experienceAVariety}
            </p>
            <Button
              label={translations.exploreMore}
              padding={"py-11 px-91"}
              color="primary"
              isBold={true}
              textColor="white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsTwonance;
