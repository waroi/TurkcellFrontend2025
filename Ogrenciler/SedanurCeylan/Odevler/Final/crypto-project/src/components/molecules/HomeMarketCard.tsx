'use client';

import { useEffect, useState } from 'react';
import { fetchCoins } from '@/lib/coinApi';
import Image from 'next/image';
import { Coin } from '@/types/route';

const HomeMarketCard = () => {
    const [coins, setCoins] = useState<Coin[]>([]);

    useEffect(() => {
        const getCoins = async () => {
            try {
                const result = await fetchCoins(4);
                setCoins(result || []);
            } catch (err: unknown) {
                if (err instanceof Error) {
                    console.error('Coin verisi alınamadı:', err.message);
                } else {
                    console.error('Coin verisi alınamadı: bilinmeyen hata');
                }
                setCoins([]);
            }
        };

        getCoins();
    }, []);

    const categories = [
        'Crypto', 'DeFi', 'BSC', 'NFT', 'Metaverse',
        'Polkadot', 'Solana', 'Opensea', 'Makersplace',
    ];

    return (
        <div className="container cardlar bg-white rounded-4 p-4">
            <div className="d-flex gap-3 mb-4 flex-nowrap overflow-auto pb-2">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`btn btn-sm rounded-pill px-4 py-2 white-space-nowrap ${index === 0 ? 'btn-primary text-white' : 'btn-outline-dark'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <hr className="mt-0" />

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {coins.map((coin, index) => {
                    const price = Number(coin?.quote?.USD?.price);
                    const change = Number(coin?.quote?.USD?.percent_change_24h);

                    return (
                        <div key={coin.id} className="col">
                            <div
                                className={`p-4 h-100 d-flex flex-column justify-content-between rounded-3 ${index === 1 ? 'shadow-lg' : 'bg-white'
                                    }`}
                            >
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <Image
                                        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                                        alt={coin.name}
                                        width={24}
                                        height={24}
                                    />
                                    <strong>{coin.name}</strong>
                                    <small className="text-muted">{coin.symbol}/USD</small>
                                </div>

                                <div className="mb-2">
                                    <h4 className="fw-bold mb-1">
                                        USD {price ? price.toFixed(2) : '...'}
                                    </h4>
                                    <div className="d-flex align-items-center gap-2">
                                        <small className="text-muted">
                                            {price ? `$${price.toFixed(2)}` : '--'}
                                        </small>
                                        <span
                                            className={`badge fw-semibold ${change >= 0 ? 'bg-success' : 'bg-danger'
                                                }`}
                                        >
                                            {change ? change.toFixed(2) : '0.00'}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HomeMarketCard;
