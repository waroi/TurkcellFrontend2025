import React from 'react';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import CoinInfo from '../CoinInfo/CoinInfo';
import PriceText from '@/components/atoms/PriceText/PriceText';
import SparklineChart from '../SparklineChart/SparklineChart';
import Button from '@/components/atoms/Buttons/Buttons';
import PercentageChange from '@/components/atoms/PercentAgeChange/PercentAgeChange';

interface CoinRowProps {
    coin: any
    isFavorite: boolean
    onToggleFavorite: (id: string) => void
    className?: string
}

const CoinRow: React.FC<CoinRowProps> = ({
    coin,
    isFavorite,
    onToggleFavorite,
    className
}) => {
    const isPricePositive = coin.price_change_percentage_24h > 0;

    return (
        <tr className={className}>
            <td>
                <FavoriteButton
                    isFavorite={isFavorite}
                    onClick={() => onToggleFavorite(coin.id)}
                />
            </td>
            <td>{coin.market_cap_rank}</td>
            <td>
                <CoinInfo
                    name={coin.name}
                    symbol={coin.short}
                    image={coin.image}
                />
            </td>
            <td>
                <PriceText value={coin.current_price} />
            </td>
            <td>
                <PercentageChange value={coin.price_change_percentage_24h} />
            </td>
            <td>
                <PriceText value={coin.market_cap} />
            </td>
            <td>
                <SparklineChart
                    data={coin.sparklines}
                    isPositive={isPricePositive}
                />
            </td>
            <td>
                <Button
                    className="fw-bold py-3 px-3"
                    height={48}
                    fontSize="sm"
                    variant="trade-button"
                >
                    Trade
                </Button>
            </td>
        </tr>
    )
}

export default CoinRow