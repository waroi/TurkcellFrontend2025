"use client";

import React from "react";
import styles from "./WalletButton.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const WalletButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  const theme = useSelector((state: RootState) => state.theme.mode);

  return (
    <button
      className={`${styles.primary} ${theme === "dark" ? styles.dark : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default WalletButton;
