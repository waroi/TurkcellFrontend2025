const url = "https://api.binance.com/api/v3/ticker/price";
export const getCryptos = async () => {
    try {
        const response = await fetch(url,{
            headers: {
                'X-MBX-APIKEY' : "OHsdJKww3GAP6Ue8ViyNeBdg7VFl2NWmngyc4ZIJbCZ2a8nbP2mMpMY6EZQY5Lsq",
            }
        });
        console.log("getCryptos status:", response.status);

        if (response.status === 200) {
            const data = await response.json();
            console.log("getCryptos raw data:", data);
            const crypto = data.filter((c) => c.symbol.endsWith("USDT"));
            console.log("getCryptos filtered:", crypto.length);
            return crypto;
        } else {
            console.log("getCryptos Service Error: status", response.status);
        }

    } catch (error) {
        console.log("getCryptos Service Error", error);
    }
    return [];
}

export const getCryptosByName = async (name) => {
    try {
        const response = await fetch(`${url}/${name}`,{
            headers: {
                'X-MBX-APIKEY' : "OHsdJKww3GAP6Ue8ViyNeBdg7VFl2NWmngyc4ZIJbCZ2a8nbP2mMpMY6EZQY5Lsq",
            }
        });
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
        
    } catch (error) {
        console.log("getCryptos Service Error",error)
    }
}
export const getCryptoHistory = async (symbol) => {
    try {
        const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1h&limit=168`,{
            headers: {
                'X-MBX-APIKEY' : "OHsdJKww3GAP6Ue8ViyNeBdg7VFl2NWmngyc4ZIJbCZ2a8nbP2mMpMY6EZQY5Lsq",
            }
        });
        if (response.status === 200) {
            const data = await response.json();
            return data.map(item => parseFloat(item[4])); //TODO Sadece Kapanış verisine göre chart hazırlayacağım o yüzden 5. elemanı aldım
        }
    } catch (error) {
        console.log("getCryptoHistory Service Error", error);
    }
}

export const getCryptoDailyChange = async (symbol) => {
    try {
        const response = await fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`,{
            headers: {
                'X-MBX-APIKEY' : "OHsdJKww3GAP6Ue8ViyNeBdg7VFl2NWmngyc4ZIJbCZ2a8nbP2mMpMY6EZQY5Lsq",
            }
        })
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("getCryptoDailyChange Service Error", error);
    }
}

export const getCryptoWeeklyChange = async (symbol) => {
    try {
        const response = await fetch(`https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=1d&limit=7`,{
            headers: {
                'X-MBX-APIKEY' : "OHsdJKww3GAP6Ue8ViyNeBdg7VFl2NWmngyc4ZIJbCZ2a8nbP2mMpMY6EZQY5Lsq",
            }
        })
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("getCryptoWeeklyChange Service Error", error);
    }
}

export const getRecentTradesBySymbol = async (symbol) => {
    try {
        const response = await fetch(`https://api.binance.com/api/v3/trades?symbol=${symbol}&limit=10`,{
            headers: {
                'X-MBX-APIKEY' : "OHsdJKww3GAP6Ue8ViyNeBdg7VFl2NWmngyc4ZIJbCZ2a8nbP2mMpMY6EZQY5Lsq",
            }
        });
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("getRecentTradesBySymbol Service Error", error);
    }
}

export const getOrderBookBySymbol = async (symbol) => {
    try {
        const response = await fetch(`https://api.binance.com/api/v3/depth?symbol=${symbol}&limit=10`,{
            headers: {
                'X-MBX-APIKEY' : "OHsdJKww3GAP6Ue8ViyNeBdg7VFl2NWmngyc4ZIJbCZ2a8nbP2mMpMY6EZQY5Lsq",
            }
        })
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("getOrderBookBySymbol Service Error", error);
    }
}

export const getTRYtoUSDT =  async () => {
    try {
        const response = await fetch("https://api.binance.com/api/v3/ticker/price?symbol=USDTTRY",{
            headers: {
                'X-MBX-APIKEY' : "OHsdJKww3GAP6Ue8ViyNeBdg7VFl2NWmngyc4ZIJbCZ2a8nbP2mMpMY6EZQY5Lsq",
            }
        })
        if (response.status === 200) {
            const data = await response.json();
            return data.price;
        }
    } catch (error) {
        console.log("getTRYtoUSDT Service Error", error);
    }
}
