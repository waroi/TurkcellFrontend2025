import BuyPage from "@/pages/BuyPage"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Buy Crypto - Rocket Crypto",
    description: "Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.",
}

const WalletBuy = () => {
    return (
        <BuyPage />
    )
}

export default WalletBuy