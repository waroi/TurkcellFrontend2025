import { useState } from 'react';

import { 
  CreditCard, 
  Wallet, 
  DollarSign, 
  ArrowRight, 
  Lock
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '../components/ui/Select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CryptoIcon from '@/components/common/CryptoIcon';

interface PaymentMethod {
  id: string;
  name: string;
  type: 'card' | 'bank' | 'wallet';
  details: string;
  icon: JSX.Element;
}

interface Cryptocurrency {
  id: number;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
}

export default function BuyCrypto() {
  const [selectedCrypto, setSelectedCrypto] = useState<string>('BTC');
  const [amount, setAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('card1');
  const [activeTab, setActiveTab] = useState<string>('buy');
  
  // Mock data - would be fetched from API in production
  const cryptocurrencies: Cryptocurrency[] = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      current_price: 57000,
      price_change_percentage_24h: 2.5
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      current_price: 3200,
      price_change_percentage_24h: 1.8
    },
    {
      id: 3,
      name: "Tether",
      symbol: "USDT",
      current_price: 1,
      price_change_percentage_24h: 0.01
    },
    {
      id: 4,
      name: "Binance Coin",
      symbol: "BNB",
      current_price: 320,
      price_change_percentage_24h: -1.2
    }
  ];
  
  // Mock payment methods
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'card1',
      name: 'Visa **** 4242',
      type: 'card',
      details: 'Expires 12/25',
      icon: <CreditCard className="h-5 w-5" />
    },
    {
      id: 'bank1',
      name: 'Chase Bank Account',
      type: 'bank',
      details: '**** 5678',
      icon: <DollarSign className="h-5 w-5" />
    },
    {
      id: 'wallet1',
      name: 'External Wallet',
      type: 'wallet',
      details: '0x1234...5678',
      icon: <Wallet className="h-5 w-5" />
    }
  ];

  // Calculate crypto amount based on USD input
  const calculateCryptoAmount = (usdAmount: string, cryptoSymbol: string) => {
    const crypto = cryptocurrencies.find(c => c.symbol === cryptoSymbol);
    if (!crypto || !usdAmount || isNaN(parseFloat(usdAmount))) return '0';
    return (parseFloat(usdAmount) / crypto.current_price).toFixed(8);
  };

  // Calculate USD amount based on crypto input
  const calculateUsdAmount = (cryptoAmount: string, cryptoSymbol: string) => {
    const crypto = cryptocurrencies.find(c => c.symbol === cryptoSymbol);
    if (!crypto || !cryptoAmount || isNaN(parseFloat(cryptoAmount))) return '0';
    return (parseFloat(cryptoAmount) * crypto.current_price).toFixed(2);
  };

  // Handle buy crypto form submission
  const handleBuyCrypto = () => {
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }
    
    alert(`Buy order placed for ${calculateCryptoAmount(amount, selectedCrypto)} ${selectedCrypto} using payment method ${paymentMethod}`);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Buy & Sell Crypto</h1>
        <p className="text-gray-500 mb-8">Buy crypto with credit card or deposit to your crypto wallet</p>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Tabs defaultValue="buy" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <div className="px-6 pt-6">
              <TabsList className="grid grid-cols-2 gap-4 mb-8">
                <TabsTrigger value="buy" className="text-lg py-3">Buy Crypto</TabsTrigger>
                <TabsTrigger value="sell" className="text-lg py-3">Sell Crypto</TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="buy" className="pt-0 px-6 pb-6">
              <div className="space-y-6">
                {/* Cryptocurrency selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Cryptocurrency</label>
                  <Select onValueChange={(value) => setSelectedCrypto(value)} value={selectedCrypto}>
                    <SelectTrigger className="w-full p-3">
                      <SelectValue placeholder="Select a cryptocurrency" />
                    </SelectTrigger>
                    <SelectContent>
                      {cryptocurrencies.map((crypto) => (
                        <SelectItem key={crypto.id} value={crypto.symbol}>
                          {crypto.name} ({crypto.symbol})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Amount input */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Amount</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      className="pl-10"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>Min: $30.00</span>
                    <span>Max: $10,000.00</span>
                  </div>
                </div>
                
                {/* Conversion display */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <CryptoIcon symbol={selectedCrypto.toLowerCase()} size={32} />
                      <span className="ml-2 font-medium">{selectedCrypto}</span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">
                        {calculateCryptoAmount(amount, selectedCrypto)} {selectedCrypto}
                      </div>
                      <div className="text-sm text-gray-500">
                        1 {selectedCrypto} ≈ ${cryptocurrencies.find(c => c.symbol === selectedCrypto)?.current_price.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Payment method selection */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">Payment Method</label>
                  <div className="space-y-3">
                    {paymentMethods.map((method) => (
                      <div 
                        key={method.id}
                        className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer ${
                          paymentMethod === method.id ? 'border-primary bg-primary/5' : 'border-gray-200'
                        }`}
                        onClick={() => setPaymentMethod(method.id)}
                      >
                        <div className="flex items-center">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            paymentMethod === method.id ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-gray-500'
                          }`}>
                            {method.icon}
                          </div>
                          <div className="ml-3">
                            <p className="font-medium">{method.name}</p>
                            <p className="text-sm text-gray-500">{method.details}</p>
                          </div>
                        </div>
                        <div className={`w-5 h-5 rounded-full border ${
                          paymentMethod === method.id 
                            ? 'border-primary bg-primary' 
                            : 'border-gray-300'
                        }`}>
                          {paymentMethod === method.id && (
                            <div className="w-full h-full flex items-center justify-center">
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    <button className="flex items-center text-primary font-medium">
                      + Add Payment Method
                    </button>
                  </div>
                </div>
                
                {/* Summary */}
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Price</span>
                    <span className="font-medium">${cryptocurrencies.find(c => c.symbol === selectedCrypto)?.current_price.toLocaleString()} per {selectedCrypto}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Processing Fee (1.5%)</span>
                    <span className="font-medium">${amount ? ((parseFloat(amount) * 0.015).toFixed(2)) : '0.00'}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${amount ? ((parseFloat(amount) * 1.015).toFixed(2)) : '0.00'}</span>
                    </div>
                  </div>
                </div>
                
                {/* Security notice */}
                <div className="flex items-start gap-2 text-sm text-gray-500">
                  <Lock size={16} className="flex-shrink-0 mt-0.5" />
                  <span>
                    Your transaction is secured with SSL encryption. By clicking "Buy Now" you agree to our Terms and Conditions and Privacy Policy.
                  </span>
                </div>
                
                <Button 
                  className="w-full py-6 text-lg" 
                  onClick={handleBuyCrypto}
                  disabled={!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0}
                >
                  Buy Now <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="sell" className="pt-0 px-6 pb-6">
              <div className="flex flex-col items-center justify-center py-8">
                <Wallet className="w-16 h-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-bold mb-2">Sell Cryptocurrency</h3>
                <p className="text-gray-500 text-center mb-6">
                  Choose which cryptocurrency you want to sell from your wallet
                </p>
                <Button asChild>
                  <a href="/sell-crypto">Go to Sell Page</a>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Additional info */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">How to Buy Cryptocurrency</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2">Choose a Cryptocurrency</h3>
              <p className="text-gray-500">Select from popular cryptocurrencies like Bitcoin (BTC), Ethereum (ETH) and more.</p>
            </div>
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2">Enter Your Amount</h3>
              <p className="text-gray-500">Choose how much you want to buy. You can see the conversion rate in real-time.</p>
            </div>
            <div className="flex flex-col">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2">Complete Payment</h3>
              <p className="text-gray-500">Choose your payment method and complete the transaction securely.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}