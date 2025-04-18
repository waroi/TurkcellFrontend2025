import React from 'react';
import CoinImage from '@/components/atoms/CoinImage/CoinImage';

interface CoinInfoProps {
    name: string
    symbol: string
    image: string
}

const CoinInfo: React.FC<CoinInfoProps> = ({ name, symbol, image }) => {
    return (
        <div className="d-flex gap-2 align-items-center">
            <CoinImage src={image} alt={name} />
            <strong className="name_of_coin">{name}</strong>
            <div className="text-secondary">|</div>
            <strong className="text-secondary fw-bold short-name">{symbol.toUpperCase()}</strong>
        </div>
    )
}

export default CoinInfo