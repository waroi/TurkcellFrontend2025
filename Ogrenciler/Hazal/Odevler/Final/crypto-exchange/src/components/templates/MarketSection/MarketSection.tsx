'use client'

import Title from "@/components/atoms/Title/Title"
import './MarketSection.scss'
import Button from "@/components/atoms/Buttons/Buttons"
import Input from "@/components/atoms/Input/Input"
import Icon from "@/components/atoms/Icons/Icon"
import { CoinGeckoService } from "@/services/CoinGeckoService"
import { useEffect, useState } from "react"
import { SubHeroType } from "@/types/CoinsType"
import { Sparklines, SparklinesLine } from 'react-sparklines';

const MarketSection = () => {
    const subHeroTitles = ["Metaverse", "Entertainment", "Energy", "NFT", "Gaming", "Music"]
    const [coins, setCoins] = useState([])

    useEffect(() => {
        const getCoins = async () => {
            const data = await CoinGeckoService.getCountCoins(9, true)
            setCoins(data)
        }
        getCoins()
    }, [])

    return (
        <div className="marketcap-main container p-5 mt-5">
            <div className="market-section-header d-flex justify-content-between align-items-center">
                <Title className="hero-title fs-2 fw-bold ps-2" as="h1">Market Update</Title>
                <a href="#" className="fw-bold">See All Coins</a>
            </div>

            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <Button
                        variant="primary-button"
                        fontSize="sm"
                        className="px-4 fw-bold"
                        height={32}
                        onClick={() => null}
                    >
                        Viewall
                    </Button>
                    <ul className='subHero-list d-flex gap-3 align-items-center'>
                        {subHeroTitles.map((title: string) => (
                            <li key={title} className='subHero-item'>
                                <a href='#' className='subHero-link fw-bold px-4' key={title}>
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="marketcap-search">
                    <Input placeholder="Search Coin" className="marketcap-search-input" inputClassName="pe-5 rounded-pill" iconName="CiSearch" iconCollection="ci" iconSize={18} />
                </div>
            </div>

            <div className="mt-5">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th></th>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Last Price</th>
                            <th scope="col">24%</th>
                            <th scope="col">Market Cap</th>
                            <th scope="col">Last 7 Days</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((coin: SubHeroType) => (
                            <tr key={coin.id}>
                                <td scope="row">
                                    <button className="bg-transparent">
                                        <Icon collection="ci" name="CiStar" className="text-secondary text-center" size={20} />
                                    </button>
                                </td>
                                <td>{coin.market_cap_rank}</td>
                                <td>
                                    <div className="d-flex gap-2 align-items-center">
                                        <img loading="lazy" width={23} height={23} src={coin.image} alt={coin.name} />
                                        <strong className="name_of_coin">{coin.name}</strong> <div className="text-secondary">
                                            |</div> <strong className="text-secondary fw-bold short-name">{coin.short.toUpperCase()}</strong>
                                    </div>

                                </td>
                                <td>
                                    <strong className="price">${new Intl.NumberFormat().format(Number(coin.current_price))}</strong>
                                </td>
                                <td>
                                    <span className={`${Number(coin.price_change_percentage_24h) > 0 ? "text-success" : "text-danger"}`}>
                                        {coin.price_change_percentage_24h}%
                                    </span>
                                </td>
                                <td>
                                    <strong className="price">${new Intl.NumberFormat().format(Number(coin.market_cap))}</strong></td>
                                <td>
                                    <Sparklines data={coin.sparklines} width={250} height={50} margin={3}>
                                        <SparklinesLine color={Number(coin.price_change_percentage_24h) > 0 ? "green" : "red"} />
                                    </Sparklines>
                                </td>
                                <td>
                                    <Button className="fw-bold py-3 px-3" height={48} fontSize={"sm"} variant="trade-button">
                                        Trade
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default MarketSection