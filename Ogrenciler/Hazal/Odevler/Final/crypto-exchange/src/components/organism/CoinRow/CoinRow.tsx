import React from 'react';
import FavoriteButton from '@/components/molecules/FavoriteButton/FavoriteButton';
import CoinInfo from '@/components/molecules/CoinInfo/CoinInfo';
import PriceText from '@/components/atoms/PriceText/PriceText';
import SparklineChart from '@/components/molecules/SparklineChart/SparklineChart';
import Button from '@/components/atoms/Buttons/Buttons';
import PercentageChange from '@/components/atoms/PercentageChange/PercentAgeChange';
import { CoinType } from '@/types/cointype';

interface CoinRowProps {
    coin: CoinType
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
    const isPricePositive = parseFloat(coin.price_change_percentage_24h) > 0;
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
                <PercentageChange value={parseFloat(coin.price_change_percentage_24h)} />
            </td>
            <td>
                <PriceText value={coin.current_price?? 0} />
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