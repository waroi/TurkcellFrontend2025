"use client";
import React from "react";
import Overlay from "../../components/components/Overlay";
import SearchInput from "../SearchInput/SearchInput";
import CustomButton from "../components/Button";
import CryptoTable from "../CryptoTable/CryptoTable";
import { Button } from "@mui/material";
import { useLanguage } from "../../context/LanguageContext";
const SelectCrypto = ({ cryptos, activeStep, steps, handleNext }) => {
  const { translations } = useLanguage();
  return (
    <div>
      <div className="bg-secondary position-relative mt-12 mb-12">
        <Overlay />
        <div className=" position-relative z-1 px-12">
          <div className="d-flex flex-column py-96">
            <div className="d-flex align-items-center justify-content-between">
              <h4 className="text-dark fw-bold fs-3">
                {" "}
                {translations.selectCrypto}{" "}
              </h4>
              <div className="d-flex gap-1">
                <SearchInput placeholder={translations.search} rounded={true} />
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
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-secondary fw-normal fs-6">
                {translations.whichCryptoWannaSearch}
              </p>
              <CustomButton
                label={translations.search}
                color="primary"
                textColor="text-white"
                padding={"px-30 py-11"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="crypto-box border-1 bg-white">
        <CryptoTable
          isLast7DaysAvaible={false}
          isMarketCapAvaible={false}
          cryptos={cryptos}
          isHomePage={false}
          isHasStars={false}
        />
      </div>
      <div>
        <div>
          <div className="d-flex justify-content-end">
            <Button
              variant="contained"
              color="primary"
              onClick={handleNext}
              className="rounded-pill py-94 px-29 mb-12 mt-96 me-12"
              disabled={activeStep === steps.length - 1}
            >
              {translations.continue}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCrypto;
