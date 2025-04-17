async function fetchData() {
    const latestUrl = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=8';

    try {
        // 1. İlk 8 kriptoyu çek
        const latestResponse = await fetch(latestUrl, {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': '07b0b113-cd51-403e-8c02-8af33efd4494',
                'Accept': 'application/json'
            },
            cache: 'no-store' // opsiyonel: SSR'da her istek yeni veri getirir
        });

        const latestJson = await latestResponse.json();
        const latestData = latestJson.data;

        if (!latestData || latestData.length === 0) throw new Error("Latest data not found");

        // 2. ID'leri al
        const ids = latestData.map((crypto: any) => crypto.id).join(',');

        // 3. ID'lerle info çek
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

        // 4. Sonuçları döndür
        return [latestData, infoData];
    } catch (error) {
        console.error('fetchData Hatası:', error);
        return [[], {}];
    }
}

export default fetchData;
