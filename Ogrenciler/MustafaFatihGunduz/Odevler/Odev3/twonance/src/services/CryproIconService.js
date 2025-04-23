const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
export const getAllCryptoIcons = async () => {
    try {
        const response = await fetch(url);
        if (response.status === 200) {
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.log("getAllCryptoIcons Service Error",error);
    }
}
