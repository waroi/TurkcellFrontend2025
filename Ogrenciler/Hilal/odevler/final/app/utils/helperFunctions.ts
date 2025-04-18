export const coinToMoney = (
    payAmount: number,
    marketData: any[],
    paySymbol: string,
    receiveSymbol: string = "USD",
    isSell: boolean = true
  ): number | null => {
    if (!marketData || !payAmount || !paySymbol) {
      console.error("Missing required parameters");
      return null;
    }
  
    const coin = marketData.find((coin) => coin.symbol === paySymbol);
    if (!coin) {
      return null;
    }
  
    const toRatePrice = coin?.quote?.[receiveSymbol]?.price;
    if (!toRatePrice) {
      console.error(`Price not found for conversion to: ${receiveSymbol}`);
      return null;
    }
  
    const result = isSell ? payAmount * toRatePrice : payAmount / toRatePrice;
    return result;
  };


  export const formatNumber = (value: number, options?: Intl.NumberFormatOptions) =>
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      ...options,
    }).format(value);
  