'use client'
import Footer from "@/components/organism/Footer/Footer"
import LearnAndEarn from "@/components/organism/LearnAndEarn/LearnAndEarn"
import MarketBigTable from "@/components/organism/MarketBigTable/MarketBigTable"
import MarketHero from "@/components/organism/MarketHero/MarketHero"
import { CoinGeckoService } from "@/services/CoinGeckoService"
import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

const MarketPage = () => {
    const [coins, setCoins] = useState([])
    const tableColumns = useTranslations("Market").raw("columns")

    useEffect(() => {
        const getCoins = async () => {
            const data = await CoinGeckoService.getCountCoins(17, true)
            setCoins(data)
        }
        getCoins()
    }, [])

    return (
        <>
            <MarketHero />
            <MarketBigTable favorites={[]} onToggleFavorite={() => null} tableColumns={tableColumns} coins={coins} />
            <LearnAndEarn />
            <Footer />
        </>

    )
}

export default MarketPage