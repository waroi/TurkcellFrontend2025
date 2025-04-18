import SellPage from "@/pages/SellPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Sell Crypto - Rocket Crypto",
    description: "Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.",
}

const Sell = () => {
    return (
        <SellPage />
    )
}

export default Sell