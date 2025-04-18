import React from 'react';
import FavoriteButton from '@/components/molecules/FavoriteButton/FavoriteButton';
import CoinInfo from '@/components/molecules/CoinInfo/CoinInfo';
import PriceText from '@/components/atoms/PriceText/PriceText';
import SparklineChart from '@/components/molecules/SparklineChart/SparklineChart';
import Button from '@/components/atoms/Buttons/Buttons';
import PercentageChange from '@/components/atoms/PercentageChange/PercentageChange';
import { SubHeroType } from '@/types/CoinsType';

interface MarketRowProps {
    coin: SubHeroType
    isFavorite: boolean
    onToggleFavorite: (id: string) => void
    className?: string
}

const MarketRow: React.FC<MarketRowProps> = ({
    coin,
    isFavorite,
    onToggleFavorite,
    className
}) => {
    const isPricePositive = coin.price_change_percentage_24h > 0

    return (
        <tr className={className}>
            <td>
                <FavoriteButton
                    isFavorite={isFavorite}
                    onClick={() => onToggleFavorite(coin.id)}
                />
            </td>
            <td>
                <div className='d-flex gap-2'>
                    {coin.market_cap_rank}
                    <CoinInfo
                        name={coin.name}
                        symbol={coin.short}
                        image={coin.image}
                    />
                </div>
            </td>
            <td>
                <PriceText prefix='' value={"2.236"} />
            </td>
            <td>
                <PercentageChange value={coin.price_change_percentage_24h} />
            </td>
            <td>
                <PriceText value={coin.current_price} />
            </td>
            <td>
                <PriceText value={coin.market_cap} />
            </td>
            <td>
                <strong>
                    5.04B(USD)
                </strong>
            </td>
            <td className='px-0'>
                <SparklineChart
                    data={coin.sparklines}
                    isPositive={isPricePositive}
                    height={40}
                    width={120}
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

export default MarketRow