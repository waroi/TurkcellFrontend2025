"use client";

import React, { useEffect, useState } from "react";
import styles from "./BuyStepOne.module.css";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import { useCoins } from "@/hooks/useCoins";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setStepOneData } from "@/store/slices/buyCryptoSlice";

interface BuyStepOneProps {
  onContinue: () => void;
}

const validationSchema = Yup.object().shape({
  payAmount: Yup.number().required("Required").min(0, "Must be positive"),
});

const BuyStepOne = ({ onContinue }: BuyStepOneProps) => {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("bitcoin");
  const dispatch = useDispatch();

  const {
    coins,
    selectedCoin,
    setSelectedCoin,
    selectedCoinData: coinData,
  } = useCoins(toCurrency);

  const { coins: fiatCoins } = useCoins();

  const formik = useFormik({
    initialValues: {
      payAmount: "0",
      receiveAmount: "0.00000000",
    },
    validationSchema,
    onSubmit: () => {
      dispatch(
        setStepOneData({
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
    if (coinData && formik.values.payAmount) {
      const result =
        parseFloat(formik.values.payAmount) / coinData.current_price;
      formik.setFieldValue("receiveAmount", result.toFixed(8));
    }
  }, [formik.values.payAmount, coinData]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setSelectedCoin(fromCurrency);
    formik.setValues({
      payAmount: formik.values.receiveAmount,
      receiveAmount: formik.values.payAmount,
    });
  };

  return (
    <div className={`${styles.wrapper} p-4`}>
      <h5 className="fw-semibold mb-2">Select Currency</h5>
      <p className="text-muted small mb-4">
        Reference Price: {coinData?.current_price?.toLocaleString()} USD/
        {toCurrency?.toUpperCase()}
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className="row g-3 align-items-center">
          <div className="col-md-5">
            <label className="text-muted small">Pay</label>
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
            {formik.errors.payAmount && formik.touched.payAmount && (
              <div className="text-danger small mt-1">
                {formik.errors.payAmount}
              </div>
            )}
          </div>

          <div className="col-md-2 d-flex justify-content-center align-items-center">
            <button
              onClick={handleSwap}
              className="btn btn-light p-2 rounded-circle"
              type="button"
            >
              <Image src="/global/swap.svg" width={30} height={30} alt="swap" />
            </button>
          </div>

          <div className="col-md-5">
            <label className="text-muted small">Receive</label>
            <div className="border rounded-4 d-flex justify-content-between align-items-center px-3 py-2">
              <input
                name="receiveAmount"
                type="text"
                value={formik.values.receiveAmount}
                readOnly
                className="border-0 form-control shadow-none w-50"
              />
              <div className="d-flex align-items-center gap-2">
                {coins.find((c) => c.id === toCurrency) && (
                  <Image
                    src={coins.find((c) => c.id === toCurrency).image}
                    alt={toCurrency}
                    width={20}
                    height={20}
                  />
                )}
                <select
                  className="form-select border-0 bg-transparent p-0 shadow-none"
                  value={toCurrency}
                  onChange={(e) => {
                    setToCurrency(e.target.value);
                    setSelectedCoin(e.target.value);
                  }}
                >
                  {coins.map((coin) => (
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
    </div>
  );
};

export default BuyStepOne;
