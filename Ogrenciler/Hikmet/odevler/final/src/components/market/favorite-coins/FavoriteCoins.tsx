"use client";

import { useFavoriteStore } from "@/store/favoritesStore";

import { useEffect, useState, useTransition } from "react";
import { getFavoriteCoinsData } from "./action";

interface CoinInfo {
	id: string;
	name: string;
	symbol: string;
	logo: string;
	price: number;
}

export default function FavoriteCoins() {
	const [coins, setCoins] = useState<CoinInfo[]>([]);
	const [isPending, startTransition] = useTransition();
	const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
	const setFavorites = useFavoriteStore((state) => state.setFavorites);

	useEffect(() => {
		startTransition(async () => {
			const { coins: fetchedCoins, favoriteIds } = await getFavoriteCoinsData();
			setIsLoggedIn(favoriteIds.length > 0 || fetchedCoins.length > 0);

			setCoins(fetchedCoins);
			setFavorites(favoriteIds);
		});
	}, [setFavorites]);

	if (isPending) return <p>Yükleniyor...</p>;

	if (isLoggedIn === false || (isLoggedIn === true && !coins.length))
		return <p>Favori coin bulunamadı veya görüntülemek için giriş yapın.</p>;

	if (isLoggedIn === null) return <p>Yükleniyor...</p>;

	return (
		<div className="py-5 container">
			<h2 className="mb-4">Favori Kriptolarınız</h2>
			<div className="row">
				{coins.map((coin) => (
					<div key={coin.id} className="mb-4 col-6 col-md-4 col-lg-3">
						<div className="p-3 border rounded text-center">
							<img
								src={coin.logo}
								alt={coin.name}
								width={40}
								className="mb-2"
							/>
							<h5>{coin.name}</h5>
							<p className="text-muted">{coin.symbol}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
