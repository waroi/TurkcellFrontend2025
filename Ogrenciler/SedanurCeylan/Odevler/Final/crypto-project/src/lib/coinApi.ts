import { Coin } from '@/types/route';

export const fetchCoins = async (limit = 10): Promise<Coin[]> => {
    try {
        const res = await fetch('/api/coins');
        if (!res.ok) throw new Error('API response not OK');
        const data: Coin[] = await res.json();
        return data.slice(0, limit);
    } catch (err: unknown) {
        console.error('API Route ile coin verisi alınamadı:', err);
        return [];
    }
};

export const getCoins = async (): Promise<Coin[]> => {
    try {
        const res = await fetch('/api/coins');
        if (!res.ok) throw new Error('API response not OK');
        const data: Coin[] = await res.json();
        return data;
    } catch (err: unknown) {
        console.error('API proxy hatası:', err);
        return [];
    }
};

export const getFavoriteCoins = async (slugs: string[]): Promise<Coin[]> => {
    const allCoins = await getCoins();
    return allCoins.filter((coin) => slugs.includes(coin.slug));
};

export const fetchCoinsList = async (limit = 10): Promise<Coin[]> => {
    try {
        const res = await fetch(`/api/coins?limit=${limit}`);
        if (!res.ok) throw new Error('Failed to fetch coins list');

        const data = await res.json();
        return data?.data ? (Object.values(data.data) as Coin[]).slice(0, limit) : [];
    } catch (error: unknown) {
        console.error('fetchCoinsList error:', error);
        return [];
    }
};
