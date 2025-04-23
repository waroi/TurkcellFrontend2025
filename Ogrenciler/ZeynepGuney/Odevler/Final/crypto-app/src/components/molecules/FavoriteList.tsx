import React from "react";

interface CombinedData {
    id: number;
    name: string;
    symbol: string;
}

interface FavoriteListProps {
    favorites: number[];
}

const FavoriteList = ({ favoriteCoins, allCoins }: { favoriteCoins: number[], allCoins: CombinedData[] }) => {
    const favoriteData = allCoins.filter((coin) => favoriteCoins.includes(coin.id));

    return (
        <div>
            <h2>Favori Coin'ler</h2>
            <ul>
                {favoriteData.map((coin) => (
                    <li key={coin.id}>{coin.name} {coin.symbol}</li>
                ))}
            </ul>
        </div>
    );
};

export default FavoriteList;

