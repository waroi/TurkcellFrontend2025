import { PortfolioCoin } from "@/types/PortfolioCoin";
import { formatCurrency } from "@/utils/formatter";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"

export class CoinGeckoService {
    static async getCountCoins(count: number, sparkline = false) {
        try {
            const response = await fetch(API_URL + "&per_page=" + count + "&sparkline=" + sparkline + "&interval=hourly", { cache: 'force-cache', next: { revalidate: 300 } })
            const data = await response.json();
            const formattedData = data.map((coin: any) => (
                {
                    id: coin.id,
                    image: coin.image,
                    current_price: coin.current_price,
                    price_change_percentage_24h: coin.price_change_percentage_24h,
                    market_cap: coin.market_cap,
                    sparklines: sparkline ? [...(coin.sparkline_in_7d?.price || [])] : [],
                    short: coin.symbol,
                    name: coin.name,
                    market_cap_rank: coin.market_cap_rank
                }
            ))
            return formattedData

        } catch (error) {
            throw Error("İstekte bir hata var")
        }
    }

    static async getWallet(count: number = 10): Promise<PortfolioCoin[]> {
        try {
            const response = await fetch(`${API_URL}&per_page=${count}`, { cache: 'force-cache', next: { revalidate: 300 } })

            if (!response.ok) {
                throw new Error(`API'de bir hata var: ${response.status}`)
            }

            const data = await response.json()
            const portfolioData = data.map((coin: any, index: number) => {
                const mockBtcAmount = (10000 / coin.current_price).toFixed(8)
                const mockUsdAmount = formatCurrency(10000)

                return {
                    id: index + 1,
                    name: coin.symbol.toUpperCase(),
                    fullName: coin.name,
                    icon: coin.image,
                    apr: coin.price_change_percentage_24h,
                    onOrdersBTC: mockBtcAmount,
                    availableBalanceBTC: mockBtcAmount,
                    totalBalanceBTC: mockBtcAmount,
                    onOrdersUSD: mockUsdAmount,
                    availableBalanceUSD: mockUsdAmount,
                    totalBalanceUSD: mockUsdAmount,
                    current_price: coin.current_price
                }
            })

            return portfolioData
        } catch (error) {
            throw new Error("Coin isteği atarken bir hata oluştu.")
        }
    }
}