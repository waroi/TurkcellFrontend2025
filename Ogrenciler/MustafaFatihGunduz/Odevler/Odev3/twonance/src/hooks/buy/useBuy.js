"use client";
import { useState, useEffect } from "react";
import useCustomFormik from "@/hooks/useCustomFormik";
import { buySchema } from "@/schema/buySchema";
import useAuthStore from "@/store/useAuthStore";
import { auth } from "../../../firebase_config";

const useBuy = (handleNext, cryptos, coin) => {
  const { user, addCryptoToWallet, loading: authLoading } = useAuthStore();

  const { values, errors, handleChange, handleSubmit, resetForm } = useCustomFormik({
    validationSchema: buySchema,
    onSubmit: async (values) => {
      try {
        if (authLoading) {
          alert("Kullanıcı bilgileri yükleniyor, lütfen bekleyin...");
          handleNext();
          return;
        }
        if (!user || !user.uid || !auth.currentUser) {
          alert("İlk önce giriş yapmalısınız.");
          return;
        }

        const btcAmount = calculateBtcAmount(values.amount, selectedCrypto?.price);

        const buyingCrypto = {
          symbol: selectedCrypto.symbol,
          price: selectedCrypto.price,
          image: selectedCrypto.image,
          name: selectedCrypto.name,
          amount: btcAmount,
          date: new Date().toISOString(),
        };

        await addCryptoToWallet(buyingCrypto);
        alert("Kripto paralar cüzdanınıza başarıyla eklendi!");
        resetForm();
        handleNext();

      } catch (error) {
        console.error("OnSubmit Error:", error);
        alert("Bir hata oluştu, lütfen tekrar deneyin!");
      }
    },
  });

  const [getAmount, setGetAmount] = useState("");
  const selectedCrypto = cryptos.find((crypto) => crypto.symbol === coin);

  const calculateBtcAmount = (amount, price) => {
    if (!amount || !price) return "0";
    return (parseFloat(amount) / price).toFixed(8);
  };

  useEffect(() => {
    if (selectedCrypto && values.amount) {
      setGetAmount(calculateBtcAmount(values.amount, selectedCrypto.price));
    } else {
      setGetAmount("");
    }
  }, [values.amount, selectedCrypto]);

  return {
    getAmount,
    values,
    errors,
    handleChange,
    handleSubmit,
    selectedCrypto,
    authLoading
  };
};

export default useBuy;
