import { useState } from "react";
import { Link } from "wouter";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SellCryptoSuccessProps {
  transactionId: string;
  bankDetails: {
    accountName: string;
    accountNumber: string;
    address: string;
    swiftCode: string;
    bankAddress: string;
    reference: string;
  };
}

const SellCryptoSuccess = ({
  transactionId = "Dmw393610...57368",
  bankDetails = {
    accountName: "Vivian Cardio",
    accountNumber: "VS46422222221",
    address: "579 Dariana Knoll CA",
    swiftCode: "US",
    bankAddress: "55476 Powlowski Spring CA",
    reference: "BUTTUVIY549FB"
  }
}: SellCryptoSuccessProps) => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h2 className="text-2xl font-bold text-green-600 mb-2">Success</h2>
        <p className="text-gray-500">You successfully sold 1356 BTC for BitcoinE!</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="flex justify-between mb-4">
          <div className="text-sm font-medium text-gray-500">Status:</div>
          <div className="text-sm font-medium text-green-600">Completed</div>
        </div>
        <div className="flex justify-between">
          <div className="text-sm font-medium text-gray-500">Transaction ID:</div>
          <div className="text-sm font-medium flex items-center">
            <span>{transactionId}</span>
            <button 
              className="ml-1 text-primary"
              onClick={() => copyToClipboard(transactionId, "Transaction ID")}
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <h3 className="font-bold mb-4">Payment Details</h3>
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2 md:col-span-1">
            <div className="text-sm font-medium text-gray-500 mb-1">Account name</div>
            <div className="flex items-center">
              <span className="font-medium">{bankDetails.accountName}</span>
              <button 
                className="ml-1 text-primary"
                onClick={() => copyToClipboard(bankDetails.accountName, "Account name")}
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-sm font-medium text-gray-500 mb-1">Account number</div>
            <div className="flex items-center">
              <span className="font-medium">{bankDetails.accountNumber}</span>
              <button 
                className="ml-1 text-primary"
                onClick={() => copyToClipboard(bankDetails.accountNumber, "Account number")}
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-sm font-medium text-gray-500 mb-1">Address</div>
            <div className="flex items-center">
              <span className="font-medium">{bankDetails.address}</span>
              <button 
                className="ml-1 text-primary"
                onClick={() => copyToClipboard(bankDetails.address, "Address")}
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            <div className="text-sm font-medium text-gray-500 mb-1">SWIFT Code</div>
            <div className="flex items-center">
              <span className="font-medium">{bankDetails.swiftCode}</span>
              <button 
                className="ml-1 text-primary"
                onClick={() => copyToClipboard(bankDetails.swiftCode, "SWIFT Code")}
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <div className="text-sm font-medium text-gray-500 mb-1">Bank Address</div>
            <div className="flex items-center">
              <span className="font-medium">{bankDetails.bankAddress}</span>
              <button 
                className="ml-1 text-primary"
                onClick={() => copyToClipboard(bankDetails.bankAddress, "Bank Address")}
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <div className="text-sm font-medium text-gray-500 mb-1">Reference code</div>
            <div className="text-sm text-gray-500 mb-1">You MUST include this Reference Code in your deposit in order to credit your account!</div>
            <div className="flex items-center">
              <span className="font-medium">{bankDetails.reference}</span>
              <button 
                className="ml-1 text-primary"
                onClick={() => copyToClipboard(bankDetails.reference, "Reference code")}
              >
                <Copy className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
        <Button variant="outline" asChild>
          <Link href="/wallet">Cancel</Link>
        </Button>
        <Button asChild>
          <Link href="/wallet">Let's move on!</Link>
        </Button>
      </div>
    </div>
  );
};

export default SellCryptoSuccess;