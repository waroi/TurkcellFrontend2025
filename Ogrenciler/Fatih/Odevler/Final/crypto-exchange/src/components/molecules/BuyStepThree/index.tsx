"use client";

import React, { useEffect, useState } from "react";
import Button from "@/components/atoms/Button";
import Image from "next/image";
import styles from "./BuyStepThree.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { db } from "@/firebase/firebase.config";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { resetBuyCrypto } from "@/store/slices/buyCryptoSlice";
import Link from "next/link";

const BuyStepThree = () => {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    payAmount: "",
    receiveAmount: "",
    fromCurrency: "",
    toCurrency: "",
    accountName: "",
    accountNumber: "",
    address: "",
    swiftCode: "",
    bankAddress: "",
  });

  const {
    stepOne: { payAmount, receiveAmount, fromCurrency, toCurrency },
    stepTwo: { accountName, accountNumber, address, swiftCode, bankAddress },
  } = useSelector((state: RootState) => state.buyCrypto);

  const user = useSelector((state: RootState) => state.auth.user);

  useEffect(() => {
    if (!user?.uid) return;

    const saveToFirestore = async () => {
      const newData = {
        payAmount,
        receiveAmount,
        fromCurrency,
        toCurrency,
        accountName,
        accountNumber,
        address,
        swiftCode,
        bankAddress,
        createdAt: serverTimestamp(),
        status: "completed",
      };

      try {
        const walletRef = collection(db, "users", user.uid, "wallet");
        const q = query(walletRef, where("toCurrency", "==", toCurrency));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const docRef = snapshot.docs[0].ref;
          const existing = snapshot.docs[0].data();
          const updatedReceive =
            parseFloat(existing.receiveAmount) + parseFloat(receiveAmount);
          const updatedPay =
            parseFloat(existing.payAmount) + parseFloat(payAmount);

          await updateDoc(docRef, {
            receiveAmount: updatedReceive.toFixed(8),
            payAmount: updatedPay.toFixed(2),
            updatedAt: serverTimestamp(),
          });
        } else {
          await addDoc(walletRef, newData);
        }

        setFormData(newData);
        setIsSubmitted(true);
        dispatch(resetBuyCrypto());
      } catch (err) {
        console.error("Transaction error:", err);
      }
    };

    saveToFirestore();
  }, [user, dispatch]);

  if (!isSubmitted) return <p>Loading...</p>;

  return (
    <div>
      <div
        className={`${styles.wrapper} rounded-4 p-4 shadow-sm mb-4 d-flex flex-column align-items-center`}
      >
        <h5 className="text-success fw-bold mb-2">
          Success{" "}
          <Image
            src="/global/success.png"
            width={25}
            height={25}
            alt="Success"
          />
        </h5>
        <p className={styles.title}>
          You successfully bought{" "}
          <span className="fw-bold text-success">
            {receiveAmount} {toCurrency.toUpperCase()}
          </span>{" "}
          for
          <span className="fw-bold">
            {payAmount} {fromCurrency.toUpperCase()}!
          </span>
        </p>

        <div className={`${styles.subWrapper} border rounded-4 p-3 mt-3 w-100`}>
          <div className="d-flex justify-content-between">
            <span className={styles.text}>Status</span>
            <span className="text-success">Completed</span>
          </div>
          <div className="d-flex justify-content-between mt-2">
            <span className={styles.text}>Currency</span>
            <span className={`${styles.text} fw-semibold`}>
              {toCurrency.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      <div className={`${styles.wrapper} rounded-4 p-4 shadow-sm`}>
        <h5 className={`${styles.title} fw-bold mb-3`}>Payment Details</h5>

        <DetailItem label="Account name" value={formData.accountName} />
        <DetailItem label="Account number" value={formData.accountNumber} />
        <DetailItem label="Address" value={formData.address} />
        <DetailItem label="SWIFT Code" value={formData.swiftCode} />
        <DetailItem label="Bank Address" value={formData.bankAddress} />

        <div className="mb-3">
          <label className="text-muted small">Reference Code</label>
          <input
            type="text"
            value="BLUTUKHY34PB"
            readOnly
            className="form-control text-center"
          />
        </div>

        <div className="d-flex justify-content-between gap-2">
          <Link href="buy-crypto" className="w-100">
            <Button variant="light">Trade!</Button>
          </Link>
          <Link href="/wallet" className="w-100">
            <Button variant="primary">Wallet</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <div className="mb-3 border-bottom">
    <label className={`${styles.text} small`}>{label}</label>
    <div className="d-flex justify-content-end">
      <span className={styles.text}>{value}</span>
      <Image src="/buyCrypto/circle.svg" width={16} height={16} alt="Circle" />
    </div>
  </div>
);

export default BuyStepThree;
