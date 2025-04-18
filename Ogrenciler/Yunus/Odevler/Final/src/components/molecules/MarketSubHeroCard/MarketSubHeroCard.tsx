import { SubHeroType } from "@/types/CoinsType"
import './MarketSubHeroCard.scss'
import Title from "@/components/atoms/Title/Title"
import SparklineChart from "../SparklineChart/SparklineChart"
import Paragraph from "@/components/atoms/Paragraph/Paragraph"
import { formatCurrency } from "@/utils/formatter"

interface MarketSubHeroCardProps {
    coin: SubHeroType
}

const MarketSubHeroCard = ({ coin }: MarketSubHeroCardProps) => {
    const change_24_hours = Number(coin.current_price) * Number(coin.price_change_percentage_24h)
    const isPricePositive = Number(coin.price_change_percentage_24h) > 0
    return (
        <div className="subhero-card-column col-xl-3 col-lg-6 col-12 mb-3">
            <div className="d-flex gap-2 card-sub ps-3 pt-4 pb-5 sub-card align-items-center pe-3">
                <div className="d-flex flex-column gap-2 px-3 w-100 align-items-center">
                    <div className="d-flex justify-content-between w-100">
                        <div className="d-flex flex-column gap-2">
                            <img className="img-fluid" width={44} height={44} src={coin.image} alt={coin.name} />
                            <span className="coin-name fw-bold mt-3">{coin.name}</span>
                        </div>
                        <div className="sparkline-box">
                            <SparklineChart
                                data={coin.sparklines}
                                isPositive={isPricePositive}
                                width={250}
                                height={70}
                            />
                            <div className="d-flex gap-3 align-items-center justify-content-end mt-2">
                                <span className={`rounded-pill text-white badge px-2 py-2 ${Number(coin.price_change_percentage_24h) > 0 ? 'text-bg-success bg-success' : "text-bg-danger bg-danger"}`}>
                                    {Number(coin.price_change_percentage_24h) > 0 ? "+" : ""}{Number(coin.price_change_percentage_24h).toFixed(2)}%
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between w-100">
                        <Paragraph className="mb-0 coinpprice">
                            USD {formatCurrency(Number(coin.current_price))}
                        </Paragraph>
                        <span className="coin-short fw-bold text-secondary">
                            {coin.short.toUpperCase()}
                        </span>
                    </div>
                </div>

            </div>
        </div >
    )
}

export default MarketSubHeroCard