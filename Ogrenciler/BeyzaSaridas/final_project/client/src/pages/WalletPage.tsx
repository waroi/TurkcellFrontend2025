import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useLocation } from "wouter";
import WalletMenu from "../components/wallet/WalletMenu";
import WalletOverview from "../components/wallet/WalletOverview";
import AssetDetail from "../components/wallet/AssetDetail";

type WalletView = "overview" | "asset-detail";

const WalletPage = () => {
  const { currentUser } = useAuth();
  const [, setLocation] = useLocation();
  const [currentView, setCurrentView] = useState<WalletView>("overview");
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);

  useEffect(() => {
    if (!currentUser) {
      setLocation("/login");
    }
  }, [currentUser, setLocation]);

  const handleAssetSelect = (symbol: string) => {
    setSelectedAsset(symbol);
    setCurrentView("asset-detail");
  };

  const handleBack = () => {
    setCurrentView("overview");
    setSelectedAsset(null);
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Wallet</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <a href="/" className="hover:text-primary">Home</a>
          <span className="mx-2">/</span>
          <span>Wallet</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-64 mb-6 lg:mb-0">
          <WalletMenu activeItem={currentView} />
        </div>

        <div className="flex-1 lg:ml-8">
          {currentView === "overview" ? (
            <WalletOverview onSelectAsset={handleAssetSelect} />
          ) : (
            selectedAsset && (
              <AssetDetail symbol={selectedAsset} goBack={handleBack} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
