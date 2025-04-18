'use client';

import { useTranslation } from "react-i18next";
import { ThemeProvider, useTheme } from "../../context/ThemeContext";
import Sidebar from "@/components/atoms/Sidebar/Sidebar";
import CryptoCard from "@/components/molecules/Dashboard/CryptoCard";
import { useEffect, useState } from "react";
import { CryptoOhlcvStats, CombinedData } from "@/app/types";
import styles from "./dashboard.module.scss";
import "../../app/global.scss";
import "../../../i18n";
import MiniNav from "@/components/molecules/Dashboard/MiniNav";
import TradingViewWidget from '../../components/molecules/Dashboard/TradingViewChart';
import BuySell from "@/components/molecules/Dashboard/BuySell";
import Balance from "@/components/molecules/Dashboard/Balance";

export default function Da({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <DashboardContent>{children}</DashboardContent>
        </ThemeProvider>
    );
}

const DashboardContent = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
    const { t } = useTranslation();
  
    const [selectedSymbol, setSelectedSymbol] = useState<string>('BTC'); 
  
    return (
        
        <div className={`${styles.dashboardContainer} ${theme === 'dark' ? styles.dark : ''}`}>
        <Sidebar />
        <div className={styles.contentArea}>
          <MiniNav />
          <CryptoCard selectedSymbol={selectedSymbol} onSymbolChange={setSelectedSymbol} /> 
          <div className={styles.contentSplit}>
            <div className={`${styles.contentArea2} ${theme === 'dark' ? styles.dark : ''}`}>
              <TradingViewWidget
                symbol={selectedSymbol}
                interval="D"
                theme={theme}
                locale="en"
              />
            </div>
            <div className={styles.contentArea3}>
                <BuySell></BuySell>
                <Balance></Balance>
            </div>
          </div>
          <main>{children}</main>
        </div>
      </div>
    );
  };
  
