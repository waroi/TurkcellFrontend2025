import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Link, useLocation } from "wouter";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface SellCryptoProps {
  onSuccess?: () => void;
}

type Step = "confirm" | "details" | "success";

const SellCrypto = ({ onSuccess }: SellCryptoProps) => {
  const [location, setLocation] = useLocation();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<Step>("confirm");

  const [formData, setFormData] = useState({
    cryptoAmount: 0.00000326,
    fiatAmount: 1000000,
    fiat: "VND",
    accountName: "Vivian Cardio",
    accountNumber: "VS46422222221",
    address: "579 Dariana Knoll CA",
    swiftCode: "US",
    bankAddress: "55476 Powlowski Spring CA",
    reference: "BUTTUVIY549FB",
  });

  const sellCryptoMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/transactions", data),
    onSuccess: () => {
      setCurrentStep("success");
      if (onSuccess) onSuccess();
    },
    onError: (error) => {
      toast({
        title: "Transaction failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = () => {
    if (currentStep === "confirm") {
      setCurrentStep("details");
    } else if (currentStep === "details") {
      sellCryptoMutation.mutate({
        userId: 1,
        assetId: 1,
        type: "sell",
        amount: formData.cryptoAmount,
        price: formData.fiatAmount / formData.cryptoAmount,
        total: formData.fiatAmount,
        status: "completed",
        reference: formData.reference,
      });
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${label} copied to clipboard.`,
    });
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="w-full max-w-3xl mx-auto flex items-center">
          <div className="relative flex-1">
            <div className="h-1.5 w-full bg-primary rounded"></div>
            <div className="absolute -top-2 -left-1.5 w-5 h-5 rounded-full bg-primary border-2 border-white flex items-center justify-center">
              <Check className="h-3 w-3 text-white" />
            </div>
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium text-primary">
              Select crypto
            </div>
          </div>
          <div className="relative flex-1">
            <div className="h-1.5 w-full bg-primary rounded"></div>
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary border-2 border-white flex items-center justify-center">
              <Check className="h-3 w-3 text-white" />
            </div>
            <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium text-primary">
              Enter Amount
            </div>
          </div>
          <div className="relative flex-1">
            <div
              className={`h-1.5 w-full ${
                currentStep !== "confirm" ? "bg-primary" : "bg-gray-200"
              } rounded`}
            ></div>
            <div
              className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full ${
                currentStep !== "confirm"
                  ? "bg-primary"
                  : "bg-white border-gray-200"
              } border-2 border-white flex items-center justify-center`}
            >
              {currentStep !== "confirm" ? (
                <Check className="h-3 w-3 text-white" />
              ) : (
                <span className="text-xs text-gray-400">3</span>
              )}
            </div>
            <div
              className={`absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium ${
                currentStep !== "confirm" ? "text-primary" : "text-gray-400"
              }`}
            >
              Payment Details
            </div>
          </div>
          <div className="relative flex-1">
            <div
              className={`h-1.5 w-full ${
                currentStep === "success" ? "bg-primary" : "bg-gray-200"
              } rounded`}
            ></div>
            <div
              className={`absolute -top-2 -right-1.5 w-5 h-5 rounded-full ${
                currentStep === "success"
                  ? "bg-primary border-white"
                  : "bg-white border-gray-200"
              } border-2 flex items-center justify-center`}
            >
              {currentStep === "success" ? (
                <Check className="h-3 w-3 text-white" />
              ) : (
                <span className="text-xs text-gray-400">4</span>
              )}
            </div>
            <div
              className={`absolute -bottom-7 left-1/2 transform -translate-x-1/2 text-xs font-medium ${
                currentStep === "success" ? "text-primary" : "text-gray-400"
              }`}
            >
              Payment Details
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        {currentStep === "confirm" && (
          <>
            <h2 className="text-xl font-bold mb-6">Confirm Information</h2>
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-sm text-gray-500 mb-4">
                You Are About To Receive 1.356 BTC For BitcoinE Bank
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary mr-3">
                        <span className="text-lg">—</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Sell</div>
                        <div className="font-medium">
                          {formData.cryptoAmount.toFixed(8)} BTC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-2 mb-4 md:mb-0">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <span className="text-lg">+</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Get</div>
                        <div className="font-medium">
                          {formData.fiatAmount.toLocaleString()} {formData.fiat}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/3 px-2">
                  <div className="bg-white rounded-lg border border-gray-200 p-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center text-primary mr-3">
                        <span className="text-lg">↗</span>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500">Fee</div>
                        <div className="font-medium">$0.0 fee</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {(currentStep === "confirm" || currentStep === "details") && (
          <>
            <h3 className="font-bold mb-4">Payment Details</h3>
            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Account name
                  </label>
                  <Input type="text" value={formData.accountName} readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Account number
                  </label>
                  <Input type="text" value={formData.accountNumber} readOnly />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Address
                  </label>
                  <Input type="text" value={formData.address} readOnly />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    SWIFT Code
                  </label>
                  <Input type="text" value={formData.swiftCode} readOnly />
                </div>
              </div>

              <div className="grid grid-cols-1 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">
                    Bank Address
                  </label>
                  <Input type="text" value={formData.bankAddress} readOnly />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Reference code
                  <span className="text-gray-500 text-xs ml-1">
                    You MUST include this Reference Code in your deposit in
                    order to credit your account!
                  </span>
                </label>
                <Input type="text" value={formData.reference} readOnly />
              </div>
            </div>
          </>
        )}

        {currentStep === "success" && (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                Success
              </h2>
              <p className="text-gray-500">
                You successfully sold 1356 BTC for BitcoinE!
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between mb-4">
                <div className="text-sm font-medium text-gray-500">Status:</div>
                <div className="text-sm font-medium text-green-600">
                  Completed
                </div>
              </div>
              <div className="flex justify-between">
                <div className="text-sm font-medium text-gray-500">
                  Transaction ID:
                </div>
                <div className="text-sm font-medium flex items-center">
                  <span>Dmw393610...57368</span>
                  <button
                    className="ml-1 text-primary"
                    onClick={() =>
                      copyToClipboard("Dmw39361057368", "Transaction ID")
                    }
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
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    Account name
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{formData.accountName}</span>
                    <button
                      className="ml-1 text-primary"
                      onClick={() =>
                        copyToClipboard(formData.accountName, "Account name")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    Account number
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">
                      {formData.accountNumber}
                    </span>
                    <button
                      className="ml-1 text-primary"
                      onClick={() =>
                        copyToClipboard(
                          formData.accountNumber,
                          "Account number"
                        )
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    Address
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{formData.address}</span>
                    <button
                      className="ml-1 text-primary"
                      onClick={() =>
                        copyToClipboard(formData.address, "Address")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    SWIFT Code
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{formData.swiftCode}</span>
                    <button
                      className="ml-1 text-primary"
                      onClick={() =>
                        copyToClipboard(formData.swiftCode, "SWIFT Code")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    Bank Address
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{formData.bankAddress}</span>
                    <button
                      className="ml-1 text-primary"
                      onClick={() =>
                        copyToClipboard(formData.bankAddress, "Bank Address")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm font-medium text-gray-500 mb-1">
                    Reference code
                  </div>
                  <div className="text-sm text-gray-500 mb-1">
                    You MUST include this Reference Code in your deposit in
                    order to credit your account!
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{formData.reference}</span>
                    <button
                      className="ml-1 text-primary"
                      onClick={() =>
                        copyToClipboard(formData.reference, "Reference code")
                      }
                    >
                      <Copy className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <Button variant="outline" asChild>
            <Link href="/wallet">Cancel</Link>
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={sellCryptoMutation.isPending}
          >
            {sellCryptoMutation.isPending ? "Processing..." : "Let's move on!"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SellCrypto;
