"use client";

import React from "react";
import { ExchangeRateProps } from "@/types/trades";
import styles from "./ExchangeRate.module.css";

const ExchangeRate = ({ symbol, price }: ExchangeRateProps) => (
  <div className={`${styles.text} text-center small mb-3`}>
    1 {symbol.toUpperCase()} ≈ {price.toLocaleString()} USD
  </div>
);

export default ExchangeRate;
