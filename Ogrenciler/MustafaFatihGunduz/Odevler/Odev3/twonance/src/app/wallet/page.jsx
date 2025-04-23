"use client";
import React from "react";
import Overlay from "../../components/components/Overlay";
import CustomButton from "../../components/components/Button";
import SearchInput from "../../components/SearchInput/SearchInput";
import { useLanguage } from "../../context/LanguageContext";
const WalletPage = () => {
  const { translations } = useLanguage();
  return (
    <div>
      <div className="container my-21">
        <div className="row ">
          <div className="col-md-3">
            <div className="d-flex flex-column">
              <CustomButton
                label={translations.overview}
                textColor="text-white"
                color="primary"
                padding={"py-11 ps-16 pe-27"}
                isBold={true}
              />
              <CustomButton
                label={translations.buyCrypto}
                textColor="text-dark"
                color="white"
                padding={"py-11 ps-16 pe-27"}
                isBold={true}
              />
              <CustomButton
                label={translations.sellCrypto}
                textColor="text-dark"
                color="white"
                padding={"py-11 ps-16 pe-27"}
                isBold={true}
              />
            </div>
          </div>
          <div className="col-md-9 px-12">
            <div className="container-fluid bg-secondary position-relative authContainer">
              <Overlay />
              <div className="container position-relative z-1">
                <div className="row py-12">
                  <div className="col-md-4">
                    <h2 className="fs-2 text-dark fw-bold">
                      {translations.overview}
                    </h2>
                    <p className="fs-6 text-secondary fw-normal pt-11 pb-98">
                      {translations.totalBalance}
                    </p>
                    <div className="d-flex align-items-center">
                      <p className="fs-3 text-dark fw-bold pb-98 pe-93">
                        0.79253864
                      </p>
                      <span className="text-white display-3 fw-bold badge bg-success px-99 py-99 mb-11">
                        BTC
                      </span>
                    </div>
                    <p className="text-secondary fs-6 fw-normal">$12,068.83</p>
                  </div>
                  <div className="col-md-8">
                    <div className="d-flex gap-1 pt-15 pb-11">
                      <div className="w-100">
                        <SearchInput
                          placeholder={translations.search}
                          rounded={true}
                        />
                      </div>
                      <button
                        className="btn bg-white border-1 rounded text-primary dropdown-toggle ms-11"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        TRY
                      </button>
                      <ul className="dropdown-menu dropdownScroll">
                        <li className="dropdown-item">USD</li>
                        <li className="dropdown-item">EUR</li>
                        <li className="dropdown-item">GPY</li>
                        <li className="dropdown-item">YEN</li>
                        <li className="dropdown-item">VCD</li>
                      </ul>
                    </div>
                    <CustomButton
                      label={translations.showBalance}
                      isBold={true}
                      color="primary"
                      textColor="white"
                      padding={"py-11 px-35"}
                      margin="mt-0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
