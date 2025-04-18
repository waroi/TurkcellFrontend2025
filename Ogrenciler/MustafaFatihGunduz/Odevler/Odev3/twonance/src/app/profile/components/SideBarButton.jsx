import React from "react";
import Button from "@/components/components/Button";
const SideBarButton = ({ label, value, activeTab, setActiveTab }) => {
  return (
    <div>
      <Button
        onClick={() => setActiveTab(value)}
        label={label}
        isBold={true}
        padding={"py-11 ps-32 pe-28"}
        color={`${activeTab === value ? "primary" : "white"}`}
        textColor={`${activeTab === value ? "text-white" : "text-dark"}`}
        margin="mt-99"
      />
    </div>
  );
};

export default SideBarButton;
