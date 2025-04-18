"use client";
import Button from "@/components/components/Button";
import Image from "next/image";
import Overlay from "@/components/components/Overlay";
import CryptoBox from "./components/CryptoBox";
import CryptoMarket from "@/components/CryptoMarket/CryptoMarket";
import HowItWorks from "./components/HowItWorks";
import WhatIsTwonance from "./components/WhatIsTwonance";
import DownloadLinks from "./components/DownloadLinks";
import Testimonials from "./components/Testimonials";
import { useLanguage } from "@/context/LanguageContext";
const HomePage = () => {
  const { translations } = useLanguage();
  return (
    <div>
      <header className="py-11">
        <div className="container-fluid bg-secondary position-relative">
          <Overlay />
          <div className="container position-relative z-1">
            <div className="row pt-20">
              <div className="col-md-7">
                <h1 className="display-4 text-dark fw-bold">
                  {translations.buyAndSellDigitals} <br />{" "}
                  {translations.assetsInTwonance}
                </h1>
                <p className="text-secondary fw-normal fs-4 mb-13 mt-12">
                  {translations.coinRocketIsTheEasiest}
                </p>
                <Button
                  label={translations.getStartedNow}
                  padding="py-11 px-92"
                />
                <h4 className="fs-3 text-dark fw-bold mt-12 mb-16">
                  {translations.ourPartners}
                </h4>
                <div className="d-flex">
                  <Image
                    src="/assets/company1.svg"
                    width={130}
                    height={28}
                    alt="company1"
                  />
                  <Image
                    src="/assets/company2.svg"
                    width={130}
                    height={28}
                    alt="company2"
                  />
                  <Image
                    src="/assets/company3.svg"
                    width={130}
                    height={28}
                    alt="company3"
                  />
                  <Image
                    src="/assets/company4.svg"
                    width={130}
                    height={28}
                    alt="company4"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <Image
                  width={570}
                  height={448}
                  src="/assets/banner.svg"
                  alt="banner"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container bg-white position-absolute start-50 translate-middle-x cryptoBox ">
          <CryptoBox />
        </div>
      </header>
      <CryptoMarket />
      <HowItWorks />
      <WhatIsTwonance />
      <DownloadLinks />
      <Testimonials />
    </div>
  );
};

export default HomePage;
