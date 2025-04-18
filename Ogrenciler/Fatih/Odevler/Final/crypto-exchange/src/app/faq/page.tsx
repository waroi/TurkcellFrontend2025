import React from "react";
import EarnUp from "@/components/molecules/EarnUp";
import PageHeader from "@/components/molecules/PageHeader";
import FaqSection from "@/components/organisms/FaqSection";

const FaqPage = () => {
  return (
    <>
      <PageHeader title="FAQ" subtitle="Home / FAQ" />
      <FaqSection />
      <EarnUp />
    </>
  );
};

export default FaqPage;
