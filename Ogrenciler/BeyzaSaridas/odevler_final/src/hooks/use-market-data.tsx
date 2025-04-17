import { useContext } from "react";
import { CryptoContext } from "@/context/CryptoContext";

export function useMarketData() {
  const context = useContext(CryptoContext);
  
  if (!context) {
    throw new Error("useMarketData must be used within a CryptoProvider");
  }
  
  return context;
}