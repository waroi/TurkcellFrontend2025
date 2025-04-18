"use client";

import React, { ReactNode, useEffect, useState } from "react";
import SideTabs from "@/components/molecules/SideTabs";
import PageHeader from "@/components/molecules/PageHeader";
import { usePathname, useRouter } from "next/navigation";
import EarnUp from "@/components/molecules/EarnUp";
import { useTranslations } from "next-intl";
import styles from "./styles.module.css";

interface BuySellTabsLayoutProps {
  children: ReactNode;
}

const BuySellTabsLayout = ({ children }: BuySellTabsLayoutProps) => {
  const t = useTranslations("BuyLayout");
  const pathname = usePathname();
  const router = useRouter();

  const options = [
    { label: t("overview"), value: "wallet", path: "/wallet" },
    { label: t("buy"), value: "buy", path: "/buy-crypto" },
    { label: t("sell"), value: "sell", path: "/sell-crypto" },
  ];

  const [selectedTab, setSelectedTab] = useState("buy");

  useEffect(() => {
    const match = options.find((opt) => pathname.includes(opt.path));
    if (match) {
      setSelectedTab(match.value);
    }
  }, [pathname]);

  const pageTitle =
    selectedTab === "wallet"
      ? t("wallet")
      : options.find((opt) => opt.value === selectedTab)?.label || t("buy");

  return (
    <div
      className={`${styles.wrapper} row rounded-4 shadow-sm overflow-hidden align-items-start`}
    >
      <PageHeader title={pageTitle} subtitle={`Home / ${pageTitle}`} />

      <div className="col-md-3 border-end py-4">
        <SideTabs
          options={options.map(({ label, value }) => ({ label, value }))}
          selected={selectedTab}
          onSelect={(value) => {
            setSelectedTab(value);
            const selected = options.find((opt) => opt.value === value);
            if (selected) router.push(selected.path);
          }}
        />
      </div>

      <div className="col-md-9 py-4">{children}</div>
      <EarnUp />
    </div>
  );
};

export default BuySellTabsLayout;
