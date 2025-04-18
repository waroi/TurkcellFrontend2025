'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import FavoriteStar from '../atoms/FavoriteStar';
import { onAuthStateChanged } from 'firebase/auth';
import withAuth from '@/utils/withAuth';
import { getCoins } from '@/lib/coinApi';
import { Coin } from '@/types/route';

const MarketProduct = () => {
    const t = useTranslations();
    const [coins, setCoins] = useState<Coin[]>([]);
    const [favorites, setFavorites] = useState<string[]>([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            if (currentUser) {
                const docRef = doc(db, 'favorites', currentUser.uid);
                const userSnap = await getDoc(docRef);
                if (userSnap.exists()) {
                    setFavorites(userSnap.data().coins || []);
                }
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchCoins = async () => {
            const data = await getCoins();
            setCoins(data);
        };
        fetchCoins();
    }, []);

    const toggleFavorite = async (slug: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        const currentUser = auth.currentUser;
        if (!currentUser) return;

        const userRef = doc(db, 'favorites', currentUser.uid);
        const isFavorite = favorites.includes(slug);

        try {
            const docSnap = await getDoc(userRef);
            if (!docSnap.exists()) {
                await setDoc(userRef, { coins: [slug] });
            } else {
                await updateDoc(userRef, {
                    coins: isFavorite ? arrayRemove(slug) : arrayUnion(slug),
                });
            }

            setFavorites((prevFavorites) =>
                isFavorite
                    ? prevFavorites.filter((id) => id !== slug)
                    : [...prevFavorites, slug]
            );
        } catch (error: unknown) {
            if (error instanceof Error) {
                console.error('Favori güncellenirken hata:', error.message);
            } else {
                console.error('Favori güncellenirken bilinmeyen bir hata oluştu.');
            }
        }
    };

    return (
        <div className="container py-4">
            <div className="table-responsive rounded-4 shadow-sm">
                <table className="table align-middle text-center mb-0 bg-white">
                    <thead className="bg-light">
                        <tr>
                            <th></th>
                            <th>#</th>
                            <th>{t('market_page_pair')}</th>
                            <th>{t('market_page_last')}</th>
                            <th>{t('market_page_change')}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {coins.map((coin: Coin, index) => (
                            <tr key={coin.id}>
                                <td>
                                    <button
                                        className="btn btn-link p-0"
                                        onClick={(e) => toggleFavorite(coin.slug, e)}
                                        title="Favorilere ekle / çıkar"
                                    >
                                        <FavoriteStar
                                            key={coin.slug + favorites.join(',')}
                                            coinId={coin.slug}
                                            favorites={favorites}
                                        />
                                    </button>
                                </td>
                                <td>{index + 1}</td>
                                <td className="text-start">
                                    <div className="d-flex align-items-center gap-2">
                                        <img
                                            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                                            alt={coin.name}
                                            width={24}
                                            height={24}
                                        />
                                        <div>
                                            <div>{coin.name}</div>
                                            <small className="text-muted">{coin.symbol.toUpperCase()}</small>
                                        </div>
                                    </div>
                                </td>
                                <td>${coin.quote.USD.price.toFixed(2)}</td>
                                <td
                                    className={
                                        coin.quote.USD.percent_change_24h > 0
                                            ? 'text-success'
                                            : 'text-danger'
                                    }
                                >
                                    {coin.quote.USD.percent_change_24h.toFixed(2)}%
                                </td>
                                <td>
                                    <button className="btn btn-outline-primary btn-sm">
                                        {t('market_page_action')}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default withAuth(MarketProduct);
