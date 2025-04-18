"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Coin } from "@/types/coin";

interface CurrencyConversionProps {
  fromLabel: string;
  toLabel: string;
  fromCurrency: string;
  toCurrency: string;
  setFromCurrency: (value: string) => void;
  setToCurrency: (value: string) => void;
  onSubmit: (values: { payAmount: string; receiveAmount: string }) => void;
  fiatCoins: Coin[];
  cryptoCoins: Coin[];
  selectedCoinPrice: number;
  selectedCoinImage: string;
  swapCurrencies: () => void;
}

const CurrencyConversion = ({
  fromLabel,
  toLabel,
  fromCurrency,
  toCurrency,
  setFromCurrency,
  setToCurrency,
  onSubmit,
  fiatCoins,
  cryptoCoins,
  selectedCoinPrice,
  selectedCoinImage,
  swapCurrencies,
}: CurrencyConversionProps) => {
  const formik = useFormik({
    initialValues: {
      payAmount: "0",
      receiveAmount: "0.00000000",
    },
    validationSchema: Yup.object().shape({
      payAmount: Yup.number().required("Required").min(0, "Must be positive"),
    }),
    onSubmit: () => {
      onSubmit(formik.values);
    },
  });

  useEffect(() => {
    if (selectedCoinPrice && formik.values.payAmount) {
      const result = parseFloat(formik.values.payAmount) / selectedCoinPrice;
      formik.setFieldValue("receiveAmount", result.toFixed(8));
    }
  }, [formik.values.payAmount, selectedCoinPrice]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row g-3 align-items-center">
        <div className="col-md-5">
          <label className="text-muted small">{fromLabel}</label>
          <div className="border rounded-4 d-flex justify-content-between align-items-center px-3 py-2">
            <input
              name="payAmount"
              type="number"
              value={formik.values.payAmount}
              onChange={formik.handleChange}
              className="border-0 form-control shadow-none w-50"
            />
            <div className="d-flex align-items-center gap-2">
              {fiatCoins.find((c) => c.id === fromCurrency) && (
                <Image
                  src={fiatCoins.find((c) => c.id === fromCurrency).image}
                  alt={fromCurrency}
                  width={20}
                  height={20}
                />
              )}
              <select
                className="form-select border-0 bg-transparent p-0 shadow-none"
                value={fromCurrency}
                onChange={(e) => setFromCurrency(e.target.value)}
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

        <div className="col-md-2 d-flex justify-content-center align-items-center">
          <button
            onClick={swapCurrencies}
            className="btn btn-light p-2 rounded-circle"
            type="button"
          >
            <Image src="/global/swap.svg" width={30} height={30} alt="swap" />
          </button>
        </div>

        <div className="col-md-5">
          <label className="text-muted small">{toLabel}</label>
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
                src={selectedCoinImage}
                alt={toCurrency}
                width={20}
                height={20}
              />
              <select
                className="form-select border-0 bg-transparent p-0 shadow-none"
                value={toCurrency}
                onChange={(e) => setToCurrency(e.target.value)}
              >
                {cryptoCoins.map((coin) => (
                  <option key={coin.id} value={coin.id}>
                    {coin.symbol.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <Button variant="primary" type="submit">
          Continue
        </Button>
      </div>
    </form>
  );
};

export default CurrencyConversion;
