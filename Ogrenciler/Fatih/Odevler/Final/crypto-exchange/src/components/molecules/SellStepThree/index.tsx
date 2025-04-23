"use client";

import React from "react";
import Button from "@/components/atoms/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setSellStepThreeData } from "@/store/slices/sellCryptoSlice";
import { RootState } from "@/store/store";
import styles from "./SellStepThree.module.css";

interface SellStepThreeProps {
  onContinue: () => void;
}

const validationSchema = Yup.object({
  accountName: Yup.string().required("Required"),
  accountNumber: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  swiftCode: Yup.string().required("Required"),
  bankAddress: Yup.string().required("Required"),
});

const SellStepThree = ({ onContinue }: SellStepThreeProps) => {
  const dispatch = useDispatch();

  const {
    stepOne: { payAmount, fromCurrency },
    stepTwo: { receiveAmount, toCurrency },
  } = useSelector((state: RootState) => state.sellCrypto);

  console.log(payAmount, fromCurrency, receiveAmount, toCurrency);

  const formik = useFormik({
    initialValues: {
      accountName: "",
      accountNumber: "",
      address: "",
      swiftCode: "",
      bankAddress: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(setSellStepThreeData(values));
      onContinue();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={`${styles.wrapper} rounded-4 p-4 mb-4`}>
        <h5 className={`${styles.title} fw-bold mb-1`}>Confirm Information</h5>
        <p className={styles.text}>
          You Are About To Receive {receiveAmount} {toCurrency.toUpperCase()}{" "}
          For Bitcloud Bank
        </p>

        <div className="d-flex gap-4 flex-wrap mt-4 justify-content-between">
          <div className="d-flex gap-2 align-items-center">
            <Image
              src="/buyCrypto/Frame2.svg"
              width={40}
              height={40}
              alt="Wallet"
            />
            <div>
              <small className={styles.text}>Pay</small>
              <div className={styles.text}>
                {payAmount} {fromCurrency?.toUpperCase()}
              </div>
            </div>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <Image
              src="/buyCrypto/Frame1.svg"
              width={40}
              height={40}
              alt="Wallet"
            />
            <div>
              <small className={styles.text}>Get</small>
              <div className={styles.text}>
                {receiveAmount} {toCurrency?.toUpperCase()}
              </div>
            </div>
          </div>

          <div className="d-flex gap-2 align-items-center">
            <Image
              src="/buyCrypto/logo symbol.svg"
              width={40}
              height={40}
              alt="Logo Symbol"
            />
            <div>
              <div className={styles.text}>For</div>
              <small className={styles.text}>Rookie</small>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapper} rounded-4 p-4`}>
        <h5 className={`${styles.title} fw-bold mb-4`}>Payment Details</h5>

        {[
          { name: "accountName", label: "Account name" },
          { name: "accountNumber", label: "Account number" },
          { name: "address", label: "Address" },
          { name: "swiftCode", label: "SWIFT Code" },
          { name: "bankAddress", label: "Bank Address" },
        ].map((field) => (
          <div className="mb-3" key={field.name}>
            <label className={`${styles.text} form-label fw-medium`}>
              {field.label}
            </label>
            <input
              type="text"
              name={field.name}
              className="form-control"
              value={formik.values[field.name]}
              onChange={formik.handleChange}
            />
            {formik.touched[field.name] && formik.errors[field.name] && (
              <div className="text-danger small mt-1">
                {formik.errors[field.name]}
              </div>
            )}
          </div>
        ))}

        <div className="mb-4">
          <label className={`${styles.text} form-label fw-medium`}>
            Reference code
          </label>
          <p className={`${styles.text} small`}>
            You MUST include the Reference Code in your deposit in order to
            credit your account!
          </p>
          <input
            type="text"
            className="form-control fw-semibold text-uppercase text-center"
            defaultValue="BLUTUKHY34PB"
            readOnly
          />
        </div>

        <div className="d-flex justify-content-between gap-3">
          <Button variant="secondary" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Let's move on!
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SellStepThree;
