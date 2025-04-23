'use client';

import React from "react";
import { useTranslation } from "react-i18next";
import { ThemeProvider, useTheme } from "../../context/ThemeContext";
import FooterBanner from '@/components/atoms/FooterBanner/FooterBanner';
import Footer from '@/components/atoms/Footer/Footer';
import Navbar from '@/components/organisms/Navbar/Navbar';
import "../../app/global.scss";
import "../../../i18n";
import styles from "./login.module.scss";
import MarketUpdate from "@/components/organisms/MarketUpdate/MarketUpdate";
import MarketBanner from "@/components/molecules/MarketPageSections/MarketBannar/MarketBanner";
import ButtonGroup from "@/components/atoms/ButtonGroup/ButtonGroup";
import MarketCard from "@/components/molecules/MarketPageSections/MarketCard/MarketCard";
import Learn from "@/components/molecules/MarketPageSections/LearnBanner/Learn";
import MarketButtons from "@/components/atoms/MarketButtons/MarketButtons";
import SecondaryButtons from "@/components/atoms/MarketButtons/SecondaryButtons";
import MarketUpdateHeader from "@/components/molecules/MarketData/MarketUpdateHeader";

export default function LoginPage({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <LoginPageContent>{children}</LoginPageContent>
        </ThemeProvider>
    );
}
const LoginPageContent = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
    const { t } = useTranslation();
    const [activeButton, setActiveButton] = React.useState(0);
    const [sortKey, setSortKey] = React.useState<'name' | 'price' | 'percent_change_24h' | 'marketCap'>('name');
    const [sortOrder, setSortOrder] = React.useState<'asc' | 'desc'>('asc');

    const handleClick = (index: number) => {
        setActiveButton(index);
    };
    const handleSortChange = (key: 'name' | 'price' | 'percent_change_24h' | 'marketCap') => {
        if (key === sortKey) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortKey(key);
            setSortOrder('asc');
        }
    };
    return (
        <div>
            <Navbar />
            <MarketBanner />

            <MarketCard></MarketCard>
            <MarketButtons></MarketButtons>
            <SecondaryButtons
                buttons={[
                    { key: "all", label: t("secondaryButtons.all") },
                    { key: "perpetual", label: t("secondaryButtons.perpetual") },
                    { key: "USDT", label: t("secondaryButtons.USDT") },
                    { key: "futures", label: t("secondaryButtons.futures") },
                ]}
            />
            <ButtonGroup
                data={["Hot", "New", "DeFi", "NFT"]}
                activeIndex={activeButton}
                onChange={handleClick}
                theme={theme}
            />
            <MarketUpdateHeader
                onSortChange={handleSortChange}
                sortKey={sortKey}
                sortOrder={sortOrder}
            />
            <MarketUpdate
                data={["BTC", "ETH", "BNB", "USDT", "SOL", "XRP", "ADA", "AVAX", "DOGE", "SHIB", "DOT", "TON", "PEPE"]}
                sortKey={sortKey}
                sortOrder={sortOrder}
                onSortChange={handleSortChange}
            />

            <Learn></Learn>
            <Footer />
            <main>{children}</main>
        </div>
    );
};
