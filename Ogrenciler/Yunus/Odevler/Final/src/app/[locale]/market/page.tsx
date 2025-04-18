import MarketPage from "@/pages/MarketPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Market - Rocket Crypto",
    description: "Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.",
}

const Market = () => {
    return (
        <MarketPage />
    )
}

export default Market