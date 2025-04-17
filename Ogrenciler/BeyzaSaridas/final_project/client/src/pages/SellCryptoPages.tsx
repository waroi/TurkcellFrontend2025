import { useState } from "react";
//import { useLocation } from "wouter";
import WalletMenu from "../components/wallet/WalletMenu";
import SellCrypto from "../components/wallet/SellCrypto";
import SellCryptoSuccess from "../components/wallet/SellCryptoSuccess";

const SellCryptoPage = () => {
  //const [location, setLocation] = useLocation();
  const [view, setView] = useState<"form" | "success">("form");
  const [transactionDetails, setTransactionDetails] = useState({
    transactionId: "Dmw393610...57368",
    bankDetails: {
      accountName: "Vivian Cardio",
      accountNumber: "VS46422222221",
      address: "579 Dariana Knoll CA",
      swiftCode: "US",
      bankAddress: "55476 Powlowski Spring CA",
      reference: "BUTTUVIY549FB"
    }
  });

  const handleTransactionSuccess = (details: any) => {
    if (details) {
      setTransactionDetails(details);
    }
    setView("success");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Sell Crypto</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <a href="/" className="hover:text-primary">Home</a>
          <span className="mx-2">/</span>
          <a href="/wallet" className="hover:text-primary">Wallet</a>
          <span className="mx-2">/</span>
          <span>Sell crypto</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">

        <div className="w-full lg:w-64 mb-6 lg:mb-0">
          <WalletMenu activeItem="sell" />
        </div>

        <div className="flex-1 lg:ml-8">
          {view === "form" ? (
            <SellCrypto onSuccess={handleTransactionSuccess} />
          ) : (
            <SellCryptoSuccess 
              transactionId={transactionDetails.transactionId}
              bankDetails={transactionDetails.bankDetails}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SellCryptoPage;