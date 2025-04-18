async function fetchData(limit?: number) {
    const latestUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=' + (limit ? limit : 8).toString();

    try {
        const latestResponse = await fetch(latestUrl, {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': '07b0b113-cd51-403e-8c02-8af33efd4494',
                'Accept': 'application/json'
            },
            cache: 'no-store'
        });

        const latestJson = await latestResponse.json();
        const latestData = latestJson.data;

        if (!latestData || latestData.length === 0) throw new Error("Latest data not found");

        const ids = latestData.map((crypto: any) => crypto.id).join(',');

        const infoUrl = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`;
        const infoResponse = await fetch(infoUrl, {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': '07b0b113-cd51-403e-8c02-8af33efd4494',
                'Accept': 'application/json'
            },
            cache: 'no-store'
        });

        const infoJson = await infoResponse.json();
        const infoData = infoJson.data;

        return [latestData, infoData];
    } catch (error) {
        console.error('fetchData Hatası:', error);
        return [[], {}];
    }
}

export default fetchData;
