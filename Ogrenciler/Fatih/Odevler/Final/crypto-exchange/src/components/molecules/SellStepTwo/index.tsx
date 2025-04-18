"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useCoins } from "@/hooks/useCoins";
import { setSellStepTwoData } from "@/store/slices/sellCryptoSlice";
import styles from "./SellStepTwo.module.css";
import { useTranslations } from "next-intl";

const SellStepTwo = ({ onContinue }: { onContinue: () => void }) => {
  const dispatch = useDispatch();
  const t = useTranslations("SellCrypto.StepTwo");

  const { selectedCoin } = useSelector((state: RootState) => state.sellCrypto);
  const [fromCurrency, setFromCurrency] = useState(selectedCoin);
  const [toCurrency, setToCurrency] = useState("vnd");

  const { coins, selectedCoinData } = useCoins(fromCurrency);
  const { coins: fiatCoins } = useCoins();

  const formik = useFormik({
    initialValues: {
      payAmount: "0.00000000",
      receiveAmount: "0.00",
    },
    validationSchema: Yup.object().shape({
      payAmount: Yup.number()
        .required(t("errors.required"))
        .min(0, t("errors.positive")),
    }),
    onSubmit: () => {
      dispatch(
        setSellStepTwoData({
          payAmount: formik.values.payAmount,
          receiveAmount: formik.values.receiveAmount,
          fromCurrency,
          toCurrency,
        })
      );
      onContinue();
    },
  });

  useEffect(() => {
    if (selectedCoinData && formik.values.payAmount) {
      const result =
        parseFloat(formik.values.payAmount) * selectedCoinData.current_price;
      formik.setFieldValue("receiveAmount", result.toFixed(2));
    }
  }, [formik.values.payAmount, selectedCoinData]);

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  return (
    <div className={`${styles.wrapper} rounded-4 p-4`}>
      <h5 className={`${styles.title} fw-bold mb-3`}>{t("title")}</h5>

      <form onSubmit={formik.handleSubmit}>
        <div className="d-flex flex-wrap align-items-center gap-3">
          <div className="flex-grow-1">
            <label className={`${styles.text} small mb-1`}>
              {t("sellLabel")}
            </label>
            <div className="border rounded-4 d-flex justify-content-between align-items-center px-3 py-2">
              <input
                name="payAmount"
                type="number"
                value={formik.values.payAmount}
                onChange={formik.handleChange}
                className="border-0 form-control shadow-none w-50"
              />
              <div className="d-flex align-items-center gap-2">
                <Image
                  src={selectedCoinData?.image || "/global/coin.svg"}
                  alt={fromCurrency}
                  width={20}
                  height={20}
                />
                <span className="fw-semibold text-uppercase">
                  {fromCurrency}
                </span>
              </div>
            </div>
            {formik.touched.payAmount && formik.errors.payAmount && (
              <div className="text-danger small mt-1">
                {formik.errors.payAmount}
              </div>
            )}
          </div>

          <div>
            <button
              onClick={handleSwap}
              className="btn bg-white p-2 rounded-circle"
              type="button"
            >
              <Image src="/global/swap.svg" width={24} height={24} alt="Swap" />
            </button>
          </div>

          <div className="flex-grow-1">
            <label className={`${styles.title} small mb-1`}>
              {t("getLabel")}
            </label>
            <div className="border rounded-4 d-flex justify-content-between align-items-center px-3 py-2">
              <input
                name="receiveAmount"
                type="text"
                value={formik.values.receiveAmount}
                readOnly
                className="border-0 form-control shadow-none w-50"
              />
              <div className="d-flex align-items-center gap-2">
                <Image
                  src={
                    fiatCoins.find((coin) => coin.id === toCurrency)?.image ??
                    "/global/fiat.svg"
                  }
                  alt={toCurrency}
                  width={20}
                  height={20}
                />
                <select
                  className="form-select border-0 bg-transparent p-0 shadow-none"
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                >
                  {fiatCoins.map((coin) => (
                    <option key={coin.id} value={coin.id}>
                      {coin.symbol.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end mt-4 w-100">
            <Button type="submit" variant="primary">
              {t("continue")}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SellStepTwo;
