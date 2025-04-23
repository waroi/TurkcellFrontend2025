import React from "react";
import Image from "next/image";
import Overlay from "@/components/components/Overlay";
import { useLanguage } from "@/context/LanguageContext";
const DownloadLinks = () => {
  const { translations } = useLanguage();
  return (
    <section>
      <div className="container-fluid bg-secondary position-relative">
        <Overlay />
        <div className="container position-relative z-1">
          <div className="row">
            <div className="col-md-6">
              <h2 className="fs-1 text-dark fw-bold mt-21 mb-11">
                {translations.freeYourMoney}
              </h2>
              <p className="fs-4 text-secondary fw-normal mb-12">
                {translations.withCryptoTrades}
              </p>
              <div className="d-flex align-items-center">
                <Image
                  src={"/assets/check.svg"}
                  width={20}
                  height={20}
                  alt="check"
                />
                <h6 className="fs-3 text-dark fw-bold ps-93 pb-98">
                  {translations.buySellAndTrade}
                </h6>
              </div>
              <p className="fs-6 text-secondary fw-normal pb-16">
                {translations.manageYourHoldings}
              </p>
              <div className="d-flex align-items-center">
                <Image
                  src={"/assets/check.svg"}
                  width={20}
                  height={20}
                  alt="check"
                />
                <h6 className="fs-3 text-dark fw-bold ps-93 pb-98">
                  {translations.takeControlOfYour}
                </h6>
              </div>
              <p className="fs-6 text-secondary fw-normal pb-12">
                {translations.restAssuredYou}
              </p>
              <Image
                src={"/assets/storeIcons.svg"}
                width={271}
                height={40}
                alt="store-links"
                className="mb-21"
              />
            </div>
            <div className="col-md-6">
              <Image
                src={"/assets/exploreImage.svg"}
                width={618}
                height={512}
                alt="explore"
                className="mb-0 mt-21"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadLinks;
