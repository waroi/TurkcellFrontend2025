import React, { useState, useEffect } from "react";
import Overlay from "../components/Overlay";
import Image from "next/image";
import { Button } from "@mui/material";
import useBuy from "@/hooks/buy/useBuy";
import useAuthStore from "@/store/useAuthStore";
import { useLanguage } from "@/context/LanguageContext";
const SelectCurrencyStep = ({
  cryptos,
  coin,
  handleCoinChange,
  activeStep,
  steps,
  handleNext,
  label = "Buy",
}) => {
  const { translations } = useLanguage();
  const {
    getAmount,
    values,
    errors,
    handleChange,
    handleSubmit,
    selectedCrypto,
  } = useBuy(handleNext, cryptos, coin);
  // const { loading: authLoading } = useAuthStore();
  // if (authLoading) {
  //   return <div>{translations.userDatasLoading}</div>;
  // }
  return (
    <div className="bg-secondary position-relative mt-12 mb-21">
      <Overlay />
      <div className="position-relative z-1">
        <div className="d-flex flex-column ps-12">
          <h3 className="fs-3 text-dark fw-bold pt-96 pb-98">
            {translations.selectCurrency}
          </h3>
          <p className="fs-6 text-secondary fw-normal pb-16">
            {translations.referencePrice}:{" "}
            {/* {selectedCrypto ? selectedCrypto.price : "-"}*/ "USDT/BTC"}
          </p>

          <form onSubmit={handleSubmit}>
            <div className="d-flex align-items-end pe-12">
              <div className="position-relative w-100 pe-98">
                <div className="d-flex">
                  <label
                    htmlFor="label"
                    className="text-dark fs-6 fw-bold d-block"
                  >
                    {label}
                  </label>
                  {errors.amount && (
                    <div className="text-danger ps-98">({errors.amount})</div>
                  )}
                </div>
                <input
                  type="text"
                  className="form-control rounded-pill pe-5 fs-5 text-dark fw-bold "
                  name="amount"
                  value={values.amount}
                  onChange={handleChange}
                />
                <button
                  className="btn dropdown-toggle position-absolute top-50 translate-middle-y end-0 me-2 pt-12"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {coin.replace("USDT", " / USDT")}
                </button>

                <ul className="dropdown-menu dropdownScroll">
                  {cryptos.length > 0 &&
                    cryptos.map((crypto, index) => (
                      <li
                        className="dropdown-item"
                        key={index}
                        onClick={() => handleCoinChange(crypto.symbol)}
                      >
                        <div className="d-flex">
                          <Image
                            src={crypto.image}
                            width={24}
                            height={24}
                            alt={crypto.symbol}
                            className="pe-99"
                          />
                          <p>{crypto.symbol.replace("USDT", " / USDT")}</p>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>

              <Image
                src={"/assets/exchange.svg"}
                width={40}
                height={40}
                alt="exchange"
              />
              <div className="position-relative w-100">
                <label
                  htmlFor="label"
                  className="text-dark fs-6 fw-bold d-block"
                >
                  {translations.receive}
                </label>
                <input
                  type="text"
                  className="form-control rounded-pill pe-5 fs-5 text-dark fw-bold "
                  value={getAmount}
                  readOnly
                />
                <button
                  className="btn dropdown-toggle position-absolute top-0 bottom-0 my-auto end-0 me-2 pt-12"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BTC
                </button>
              </div>
            </div>
          </form>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography variant="h6">İşlem Tamamlandı!</Typography>
              </div>
            ) : (
              <div className="d-flex justify-content-end">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  className="rounded-pill py-94 px-29 mb-12 mt-96 me-12"
                  disabled={activeStep === steps.length - 1}
                >
                  {translations.continue}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectCurrencyStep;
