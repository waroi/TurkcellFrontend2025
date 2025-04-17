import React from "react";

interface WalletMenuProps {
  activeItem: "overview" | "asset-detail";
}

const WalletMenu = ({ activeItem }: WalletMenuProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4">
      <button
        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
          activeItem === "overview"
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Overview
      </button>
      <button
        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
          activeItem === "asset-detail"
            ? "bg-primary text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Asset Detail
      </button>
    </div>
  );
};

export default WalletMenu;
