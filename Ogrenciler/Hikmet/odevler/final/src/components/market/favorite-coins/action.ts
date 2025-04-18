"use server";

import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

interface CoinInfo {
	id: string;
	name: string;
	symbol: string;
	logo: string;
	price: number;
}

export async function getFavoriteCoinsData(): Promise<{
	coins: CoinInfo[];
	favoriteIds: string[];
}> {
	const cookieStore = cookies();
	// @ts-ignore
	const supabase = await createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	if (!user) {
		return { coins: [], favoriteIds: [] };
	}

	const { data: favoriteData, error: favoriteError } = await supabase
		.from("favorites")
		.select("coin_id")
		.eq("user_id", user.id);

	if (favoriteError || !favoriteData || favoriteData.length === 0) {
		console.error("Favori coin ID'leri alınırken hata:", favoriteError);
		return { coins: [], favoriteIds: [] };
	}

	const ids = favoriteData.map((d) => d.coin_id);

	if (ids.length === 0) {
		return { coins: [], favoriteIds: [] };
	}

	try {
		const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
		const res = await fetch(`${baseUrl}/api/coin?id=${ids.join(",")}`, {
			cache: "no-store",
		});

		if (!res.ok) {
			throw new Error(`API isteği başarısız: ${res.statusText}`);
		}

		const { data: coinData } = await res.json();

		if (!coinData) {
			return { coins: [], favoriteIds: ids };
		}

		const coinsFormatted = Object.entries(coinData).map(
			([id, coin]: [string, any]) => ({
				id,
				name: coin.name,
				symbol: coin.symbol,
				logo: coin.logo,
				price: coin.quote?.USD?.price ?? 0,
			})
		);

		return { coins: coinsFormatted, favoriteIds: ids };
	} catch (error) {
		console.error("Coin verileri alınırken hata:", error);
		return { coins: [], favoriteIds: ids };
	}
}
