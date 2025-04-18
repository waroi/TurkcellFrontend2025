"use client";

import { useTranslations } from "next-intl";
import AccountOverview from "@/components/molecules/AccountOverview";

const HomeDashboard = () => {
  const t = useTranslations();

  return (
    <section className="container">
      <h2 className="mb-4">{t("title")}</h2>
      <AccountOverview />
    </section>
  );
};

export default HomeDashboard;
