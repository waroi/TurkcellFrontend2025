'use client'

import './Step2Page.scss'
import SellSteps from "@/components/molecules/SellSteps/SellSteps"
import CurrencyExchange from "@/components/molecules/Exchange/Exchange"

const WalletSellStep2 = () => {

    return (
        <>
            <SellSteps step={2} />
            <CurrencyExchange sell={true} />
        </>
    )
}

export default WalletSellStep2