export interface PortfolioCoin {
    id: number
    name: string
    fullName: string
    icon: string
    apr: string | number
    onOrdersBTC: string
    availableBalanceBTC: string
    totalBalanceBTC: string
    onOrdersUSD: string
    availableBalanceUSD: string
    totalBalanceUSD: string,
    current_price?: string
}