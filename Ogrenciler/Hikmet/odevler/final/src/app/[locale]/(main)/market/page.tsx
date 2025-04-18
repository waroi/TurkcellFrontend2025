import FavoritesTableContainer from "@/components/market/Favorites";
import MarketCryptoContainer from "@/components/market/MarketCryptoContainer";
import MarketHero from "@/components/market/MarketHero";

export default function Market() {
	return (
		<>
			<MarketHero />
			<MarketCryptoContainer />
			<FavoritesTableContainer />
		</>
	);
}
