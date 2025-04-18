// app/actions/fetchFilteredData.ts

async function fetchFilteredData(params?: any) {
    let url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=20';

    const search = new URLSearchParams()

    if (params?.price_min) search.append('price_min', params.price_min)
    if (params?.price_max) search.append('price_max', params.price_max)
    if (params?.market_cap_min) search.append('market_cap_min', params.market_cap_min)
    if (params?.market_cap_max) search.append('market_cap_max', params.market_cap_max)
    if (params?.sort) search.append('sort', params.sort)
    if (params?.sort_dir) search.append('sort_dir', params.sort_dir)

    if ([...search].length > 0) {
        url += `&${search.toString()}`
    }
    try {
        const latestResponse = await fetch(url, {
            method: 'GET',
            headers: {
                'X-CMC_PRO_API_KEY': '07b0b113-cd51-403e-8c02-8af33efd4494',
                'Accept': 'application/json'
            },
            cache: 'no-store'
        });

        const latestJson = await latestResponse.json();
        const latestData = latestJson.data;

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
        return [latestData, infoJson.data];
    } catch (e) {
        console.error(e)
        return [[], {}]
    }
}

export default fetchFilteredData;
