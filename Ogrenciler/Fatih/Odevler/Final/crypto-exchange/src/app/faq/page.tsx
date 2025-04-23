import React from "react";
import EarnUp from "@/components/molecules/EarnUp";
import PageHeader from "@/components/molecules/PageHeader";
import FaqSection from "@/components/organisms/FaqSection";
import styles from "./faq.module.css";

const FaqPage = () => {
  return (
    <div className={styles.wrapper}>
      <PageHeader title="FAQ" subtitle="Home / FAQ" />
      <FaqSection />
      <EarnUp />
    </div>
  );
};

export default FaqPage;
