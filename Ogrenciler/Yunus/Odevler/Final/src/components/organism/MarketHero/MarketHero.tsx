'use client'
import './MarketHero.scss'
import { useTranslations } from 'next-intl';
import Title from '@/components/atoms/Title/Title';
import Paragraph from '@/components/atoms/Paragraph/Paragraph';
import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';
import MarketSubHero from '@/components/molecules/MarketSubHero/MarketSubHero';
import { CoinGeckoService } from '@/services/CoinGeckoService';
import { SubHeroType } from '@/types/CoinsType';

const MarketHero = () => {
    const [mainImagePath, setMainImagePath] = useState<string>("/images/market/market-hero")
    const market = useTranslations('Market')
    const [coins, setCoins] = useState<SubHeroType[]>([])

    const { theme } = useTheme()
    useEffect(() => {
        theme === "dark" ? setMainImagePath((prev) => prev + "-dark") : setMainImagePath("/images/market/market-hero")
    }, [theme])

    useEffect(() => {
        const subCoins = async () => {
            const data = await CoinGeckoService.getCountCoins(4, true)
            setCoins(data)
        }
        subCoins()
    }, [])

    return (
        <>
            <div className='hero w-100'>
                <div className='container pt-5'>
                    <div className={`row hero-row mt-0 pt-5`}>
                        <div className="col-lg-6 p-5 hero-left-section">
                            <div className="pe-lg-5">
                                <div className="pe-lg-5">
                                    <Title className='fs-1 hero-title pe-lg-5' as='h1'>{market.raw("title")}</Title>
                                    <Paragraph className='hero-description fs-6'>
                                        {market.raw("description")} <strong>{market.raw("markDesc")}</strong>
                                    </Paragraph>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end p-5">
                            <img src={`${mainImagePath}.png`} alt="Hero Pictur" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="subhero-main w-100 mb-5">
                <div className="container">
                    <MarketSubHero coins={coins} />
                </div>
                <div className="simplex-background"></div>
            </div>
        </>
    )
}

export default MarketHero