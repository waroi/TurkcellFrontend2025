export interface PortfolioItem {
    coinId: string
    amount: number
    totalInvested: number
    currentValue?: number
  }
  export interface Transaction {
    coinId: string
    type: 'buy' | 'sell'
    amount: number
    price: number
    timestamp: number
  }