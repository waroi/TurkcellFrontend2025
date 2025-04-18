"use client";

import WalletOverview from "@/components/organisms/WalletOverview";
import WalletTable from "@/components/organisms/WalletTable";
import WalletDetail from "@/components/molecules/WalletDetail";
import { useUserWallet } from "@/hooks/useUserWallet";
import { useState } from "react";

const WalletPage = () => {
  const walletData = useUserWallet();
  const [selectedCoin, setSelectedCoin] = useState<any | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleBack = () => {
    setSelectedCoin(null);
  };

  return (
    <div className="container">
      {!selectedCoin && (
        <>
          <WalletOverview
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <WalletTable
            data={walletData}
            searchQuery={searchQuery}
            onSelect={setSelectedCoin}
          />
        </>
      )}

      {selectedCoin && <WalletDetail coin={selectedCoin} onBack={handleBack} />}
    </div>
  );
};

export default WalletPage;
