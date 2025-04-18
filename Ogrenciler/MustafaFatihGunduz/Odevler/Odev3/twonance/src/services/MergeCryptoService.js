import { getCryptos,getCryptoHistory, getCryptoDailyChange, getCryptoWeeklyChange, getOrderBookBySymbol, getRecentTradesBySymbol } from "./CryptoService";
import { getAllCryptoIcons } from "./CryproIconService";

export const mergedCryptos = async () => {
    try {
        const binance = await getCryptos();
        if (!binance || binance.length === 0) {
            console.log("mergedCryptos Service: Binance datası boş veya undefined.");
            return [];
        }

        const icons = await getAllCryptoIcons(); 
        const merge = await Promise.all(
            binance.map(async (binanceCrypto) => {
                const symbol = binanceCrypto.symbol.replace("USDT", "").toLowerCase();
                const match = icons.find((crypto) => crypto.symbol.toLowerCase() === symbol);
                if (match) {
                    const dailyData = await getCryptoDailyChange(binanceCrypto.symbol);
                    if (!dailyData) return null;
                    const { priceChangePercent, highPrice, lowPrice, volume } = dailyData;
                    const history = await getCryptoHistory(binanceCrypto.symbol);
                    const weeklyChange = await getCryptoWeeklyChange(binanceCrypto.symbol);
                    const orderBook = await getOrderBookBySymbol(binanceCrypto.symbol);
                    const recentTrades = await getRecentTradesBySymbol(binanceCrypto.symbol);

                    return {
                        id: match.id,
                        symbol: binanceCrypto.symbol,
                        name: match.name,
                        image: match.image || '',
                        price: binanceCrypto.price,
                        history,
                        dailyPercent: priceChangePercent,
                        dailyHigh: highPrice,
                        dailyLow: lowPrice,
                        dailyVolume: volume,
                        weeklyChange,
                        marketCap: match.market_cap,
                        orderBook: orderBook,
                        recentTrades: recentTrades,
                    };
                }
                return null;
            })
        );
        return merge.filter(item => item !== null);

    } catch (error) {
        console.log("mergedCryptos Service Error", error);
        return [];
    }
};

