import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, CopyIcon } from "lucide-react";
import { LanguageContext } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

interface PaymentDetailsProps {
  transactionData: any;
  onBack: () => void;
  onComplete: () => void;
}

const PaymentDetails = ({
  transactionData,
  onBack,
  onComplete,
}: PaymentDetailsProps) => {
  const { t } = useContext(LanguageContext);
  const { toast } = useToast();

  const bankDetails = {
    accountName: "Varun Caddis",
    accountNumber: "91548222222221",
    address: "1715 Darana Knoll, CA",
    swiftCode: "USB",
    bankAddress: "55416 Pulawaski Spring, CA",
    referenceCode: "BUTIUKIY23IPB",
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast({
          title: "Copied!",
          description: `${label} copied to clipboard`,
        });
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <Card className="border-neutral-200 dark:border-neutral-700 dark:bg-neutral-800">
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6 dark:text-white">
          {t("wallet.sell")} Crypto
        </h2>

        <div className="flex items-center justify-between mb-8 relative">
          <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-1 bg-neutral-200 dark:bg-neutral-700 z-0"></div>

          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
              <Check className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium mt-2 dark:text-white">
              {t("buySell.selectCrypto")}
            </span>
          </div>

          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
              <Check className="w-5 h-5" />
            </div>
            <span className="text-sm font-medium mt-2 dark:text-white">
              {t("buySell.enterAmount")}
            </span>
          </div>

          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-medium">
              3
            </div>
            <span className="text-sm font-medium mt-2 dark:text-white">
              {t("buySell.paymentDetails")}
            </span>
          </div>

          <div className="flex flex-col items-center relative z-10">
            <div className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400 flex items-center justify-center text-sm font-medium">
              4
            </div>
            <span className="text-sm font-medium mt-2 dark:text-neutral-500">
              {t("buySell.confirmation")}
            </span>
          </div>
        </div>

        <div className="mb-8 p-4 bg-neutral-50 dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700">
          <h3 className="text-base font-medium mb-3 dark:text-white">
            Confirm Information
          </h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center text-primary">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.9997 2L5.88872 12.5004L11.9997 16.5004L18.1107 12.5004L11.9997 2ZM5.88872 13.5004L11.9997 22.0008L18.1107 13.5004L11.9997 17.5004L5.88872 13.5004Z"></path>
                </svg>
              </div>
              <div>
                <div className="text-neutral-500 dark:text-neutral-400 text-sm">
                  {t("buySell.youSend")}
                </div>
                <div className="font-medium dark:text-white">
                  {transactionData.fromAmount} {transactionData.fromCurrency}
                </div>
              </div>
            </div>

            <div className="text-neutral-700 dark:text-neutral-300">↔</div>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
              <div>
                <div className="text-neutral-500 dark:text-neutral-400 text-sm">
                  {t("buySell.youReceive")}
                </div>
                <div className="font-medium dark:text-white">
                  {transactionData.toAmount} {transactionData.toCurrency}
                </div>
              </div>
            </div>

            <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-md text-blue-700 dark:text-blue-400">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-4 dark:text-white">
            {t("buySell.paymentDetails")}
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t("buySell.accountName")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={bankDetails.accountName}
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:text-white pr-10"
                  readOnly
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  onClick={() =>
                    copyToClipboard(bankDetails.accountName, "Account name")
                  }
                >
                  <CopyIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t("buySell.accountNumber")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={bankDetails.accountNumber}
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:text-white pr-10"
                  readOnly
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  onClick={() =>
                    copyToClipboard(bankDetails.accountNumber, "Account number")
                  }
                >
                  <CopyIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t("buySell.address")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={bankDetails.address}
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:text-white pr-10"
                  readOnly
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  onClick={() =>
                    copyToClipboard(bankDetails.address, "Address")
                  }
                >
                  <CopyIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t("buySell.swiftCode")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={bankDetails.swiftCode}
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:text-white pr-10"
                  readOnly
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  onClick={() =>
                    copyToClipboard(bankDetails.swiftCode, "SWIFT code")
                  }
                >
                  <CopyIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t("buySell.bankAddress")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={bankDetails.bankAddress}
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:text-white pr-10"
                  readOnly
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  onClick={() =>
                    copyToClipboard(bankDetails.bankAddress, "Bank address")
                  }
                >
                  <CopyIcon className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t("buySell.referenceCode")}
              </label>
              <div className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">
                {t("buySell.referenceCodeHint")}
              </div>
              <div className="relative">
                <input
                  type="text"
                  value={bankDetails.referenceCode}
                  className="w-full px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md focus:ring-primary focus:border-primary dark:bg-neutral-900 dark:text-white pr-10"
                  readOnly
                />
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                  onClick={() =>
                    copyToClipboard(bankDetails.referenceCode, "Reference code")
                  }
                >
                  <CopyIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button
            variant="outline"
            className="flex-1 py-2.5 border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
            onClick={onBack}
          >
            {t("buySell.cancel")}
          </Button>
          <Button
            className="flex-1 py-2.5 bg-primary hover:bg-primary/90 text-white"
            onClick={onComplete}
          >
            {t("buySell.proceed")}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentDetails;
