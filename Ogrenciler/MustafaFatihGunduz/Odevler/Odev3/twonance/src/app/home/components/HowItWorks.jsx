"use client";
import React from "react";
import Image from "next/image";
import Overlay from "@/components/components/Overlay";
import { useLanguage } from "@/context/LanguageContext";
const HowItWorks = () => {
  const { translations } = useLanguage();
  return (
    <section>
      <div className="container-fluid bg-secondary position-relative">
        <Overlay />
        <div className="container position-relative z-1 py-21">
          <div className="d-flex flex-column align-items-center">
            <h2 className="text-dark fs-1 fw-bold">{translations.howItWork}</h2>
            <p className="text-secondary fs-4 fw-normal">
              {translations.stackIsProduction}
            </p>

            <div className="row align-items-center justify-content-center">
              <div className="col-md-3">
                <div className="d-flex align-items-center">
                  <Image
                    src={"/assets/png/cloud.png"}
                    width={96}
                    height={96}
                    alt="bitcoin-cloud"
                  />
                  <Image
                    src={"/assets/png/line.png"}
                    width={123}
                    height={10}
                    className="mx-31"
                    alt="line"
                  />
                </div>
                <p className="display-3 text-secondary fw-normal">
                  {translations.stepOne}
                </p>
                <p className="text-dark fw-bold fs-4">
                  {translations.download}
                </p>
                <p className="fs-6 text-secondary fw-normal">
                  {translations.stackIsProduction}
                </p>
              </div>
              <div className="col-md-3">
                <div className="d-flex align-items-center">
                  <Image
                    src={"/assets/png/wallet.png"}
                    width={96}
                    height={96}
                    alt="bitcoin-wallet"
                  />
                  <Image
                    src={"/assets/png/line.png"}
                    width={123}
                    height={10}
                    className="mx-31"
                    alt="line"
                  />
                </div>
                <p className="display-3 text-secondary fw-normal">
                  {translations.stepTwo}
                </p>
                <p className="text-dark fw-bold fs-4">
                  {translations.connectWallet}
                </p>
                <p className="fs-6 text-secondary fw-normal">
                  {translations.stackIsProduction}
                </p>
              </div>
              <div className="col-md-3">
                <div className="d-flex align-items-center">
                  <Image
                    src={"/assets/png/mining.png"}
                    width={96}
                    height={96}
                    alt="bitcoin-mining"
                  />
                  <Image
                    src={"/assets/png/line.png"}
                    width={123}
                    height={10}
                    className="mx-31"
                    alt="line"
                  />
                </div>
                <p className="display-3 text-secondary fw-normal">
                  {translations.stepThree}
                </p>
                <p className="text-dark fw-bold fs-4">
                  {translations.startTrading}
                </p>
                <p className="fs-6 text-secondary fw-normal">
                  {translations.stackIsProduction}
                </p>
              </div>
              <div className="col-md-3">
                <Image
                  src={"/assets/png/comparision.png"}
                  width={96}
                  height={96}
                  alt="bitcoin-comparision"
                />
                <p className="display-3 text-secondary fw-normal">
                  {translations.stepFour}
                </p>
                <p className="text-dark fw-bold fs-4">
                  {translations.earnMoney}
                </p>
                <p className="fs-6 text-secondary fw-normal">
                  {translations.stackIsProduction}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
