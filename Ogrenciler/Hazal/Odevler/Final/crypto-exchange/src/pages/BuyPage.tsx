import BuyExchange from "@/components/molecules/Exchange/Exchange";
import WalletSteps from "@/components/molecules/WalletSteps/WalletSteps"

const BuyPage = () => {
    return (
        <div>
            <WalletSteps step={1} />
            <BuyExchange />
        </div>
    )
}

export default BuyPage