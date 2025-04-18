"use client";
import { currencySymbols, getCoins, useCoinStore } from "@/app/store/useCoinStore";
import React, { useEffect } from "react";


const CurrencyDropdown: React.FC = () => {
    const {setCoins,currency,currencyChange} = useCoinStore()

    useEffect(()=>{
        getCoins(8,true,currency).then(resp => setCoins(resp))
    },[currency])

  return (
    <select
      className="py-12 border-none f-bold"
      value={currency}
      onChange={(e) => currencyChange(e.target.value)}
    >
      {currencySymbols.map((item) => (
        <option key={item} value={item}>
          {item.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default CurrencyDropdown;
