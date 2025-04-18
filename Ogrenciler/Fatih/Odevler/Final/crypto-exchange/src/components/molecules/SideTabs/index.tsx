"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

interface TabOption {
  label: string;
  value: string;
}

interface SideTabsProps {
  options: TabOption[];
  selected: string;
  onSelect: (value: string) => void;
}

const SideTabs: React.FC<SideTabsProps> = ({ options, selected, onSelect }) => {
  const router = useRouter();
  const theme = useSelector((state: RootState) => state.theme.mode);

  const handleSelect = (value: string) => {
    onSelect(value);

    if (value === "sell") {
      router.push("/sell-crypto");
    } else if (value === "buy") {
      router.push("/buy-crypto");
    }
  };

  return (
    <div className="d-flex flex-column gap-3 p-5">
      {options.map((opt) => (
        <button
          key={opt.value}
          className={`btn text-start px-3 py-2 rounded-pill fw-semibold`}
          style={{
            backgroundColor:
              selected === opt.value ? "var(--bs-primary)" : "transparent",
            color:
              selected === opt.value
                ? "#fff"
                : theme === "dark"
                ? "#fff"
                : "#000",
          }}
          onClick={() => handleSelect(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default SideTabs;
