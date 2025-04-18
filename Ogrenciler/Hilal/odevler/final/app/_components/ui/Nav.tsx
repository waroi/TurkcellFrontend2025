"use client";

import clsx from "clsx";
import { useTranslations } from "next-intl";

const Nav = ({
  selectedTab,
  item,
  setSelectedTab,
  tPage,
  tParentKey,
}: {
  selectedTab: string;
  item: string;
  tPage: string;
  tParentKey: string;
  setSelectedTab: any;
}) => {
    const t=useTranslations(tPage)
  return (
    <a
      onClick={() => setSelectedTab(item)}
      className={clsx(
        "border-bottom w-100 text-center pb-2 cursor-pointer text-decoration-none fw-bold",
        selectedTab === item && "border-primary"
      )}
    >
      <p
        className={clsx(
          selectedTab === item ? "text-primary" : "text-secondary"
        )}
      >
        {t(`${tParentKey}.${item}`)}
      </p>
    </a>
  );
};

export default Nav;
