import { SubHeroType } from "@/types/CoinsType"
import React from "react"
import './SubHeroCard.scss'
import Title from "@/components/atoms/Title/Title"

interface SubHeroCardProps {
    coin: SubHeroType
}

const SubHeroCard = ({ coin }: SubHeroCardProps) => {
    const change_24_hours = Number(coin.current_price) * Number(coin.price_change_percentage_24h)
    return (
        <div className="subhero-card-column col-xl-3 col-lg-6 mt-3">
            <div className="d-flex flex-column gap-2 card-sub ps-5">
                <div className="d-flex gap-2">
                    <img className="img-fluid" width={24} height={24} src={coin.image} alt={coin.name} />
                    <span className="coin-name fw-bold">{coin.name}</span>
                    <span className="coin-short fw-bold text-secondary">
                        {coin.short}
                    </span>
                </div>
                <Title as="h3" className="fs-5 fw-bold">
                    {coin.mon} {coin.current_price}
                </Title>

                <div className="d-flex gap-3 align-items-center">
                    {change_24_hours || coin.current_price}
                    <span className={`rounded-pill text-white badge px-2 py-2 color-white ${Number(coin.price_change_percentage_24h) > 0 ? 'text-bg-success' : "text-bg-danger"}`}>
                        {Number(coin.price_change_percentage_24h) > 0 ? "+" : "-"}{Number(coin.price_change_percentage_24h).toFixed(2)}%
                    </span>
                </div>
            </div>
        </div >
    )
}

export default SubHeroCard