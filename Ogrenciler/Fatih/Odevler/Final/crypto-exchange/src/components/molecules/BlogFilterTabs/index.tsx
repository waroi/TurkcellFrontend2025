"use client";

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";

const BlogFilterTabs = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const t = useTranslations("Blog");

  const categories = [
    { key: "viewAll", label: t("categories.viewAll") },
    { key: "learnEarn", label: t("categories.learnEarn") },
    { key: "metaverse", label: t("categories.metaverse") },
    { key: "energy", label: t("categories.energy") },
    { key: "nft", label: t("categories.nft") },
    { key: "gaming", label: t("categories.gaming") },
    { key: "music", label: t("categories.music") },
  ];

  return (
    <div className="d-flex flex-wrap align-items-center gap-4 mb-4">
      {categories.map((cat) => (
        <button
          key={cat.key}
          className={`btn text-decoration-none rounded-5 ${
            cat.key === "viewAll"
              ? "btn-primary"
              : `btn-link ${theme === "dark" ? "text-white" : "text-dark"}`
          }`}
        >
          {cat.label}
        </button>
      ))}
      <input
        type="search"
        className={`form-control ms-auto ${
          theme === "dark" ? "bg-dark text-white" : ""
        }`}
        placeholder={t("searchPlaceholder")}
        style={{ maxWidth: 200 }}
      />
    </div>
  );
};

export default BlogFilterTabs;
