"use client";

import { useFavoriteStore } from "@/store/favoritesStore";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

interface CoinInfo {
	id: string;
	name: string;
	symbol: string;
	logo: string;
	price: number;
}

export default function FavoritesPage() {
	const [coins, setCoins] = useState<CoinInfo[]>([]);
	const [loading, setLoading] = useState(true);
	const supabase = createClient();
	const setFavorites = useFavoriteStore((state) => state.setFavorites);

	useEffect(() => {
		async function fetchData() {
			const {
				data: { user },
			} = await supabase.auth.getUser();

			if (!user) {
				setLoading(false);
				return;
			}

			const { data } = await supabase
				.from("favorites")
				.select("coin_id")
				.eq("user_id", user.id);

			if (!data) {
				setLoading(false);
				return;
			}

			const ids = data.map((d) => d.coin_id);
			setFavorites(ids);

			const res = await fetch(`/api/coin?id=${ids.join(",")}`);
			const { data: coinData } = await res.json();

			const coinsFormatted = Object.entries(coinData).map(
				([id, coin]: [string, any]) => ({
					id,
					name: coin.name,
					symbol: coin.symbol,
					logo: coin.logo,
					price: coin.quote?.USD?.price ?? 0,
				})
			);

			setCoins(coinsFormatted);
			setLoading(false);
		}

		fetchData();
	}, []);

	if (loading) return <p>Yükleniyor...</p>;
	if (!coins.length)
		return <p>Favorilerinizi görüntülemek için giriş yapın.</p>;

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
							<p>${coin.price.toFixed(2)}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
