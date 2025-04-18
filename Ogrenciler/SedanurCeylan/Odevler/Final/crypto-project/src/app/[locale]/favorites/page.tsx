'use client';

import React, { useEffect, useState } from 'react';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, updateDoc, arrayRemove } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { getFavoriteCoins } from '@/lib/coinApi';
import withAuth from '@/utils/withAuth';
import { Coin } from '../../../types/route';
import PageContainer from '@/components/PageContainer';
import EarnUp from '@/components/molecules/EarnUp';
import FavoritesHeader from '@/components/molecules/FavoritesHeader';
import Navbar from '../../../components/Navbar';




const FavoritesPage = () => {
    const t = useTranslations();
    const [favorites, setFavorites] = useState<string[]>([]);
    const [coins, setCoins] = useState<Coin[]>([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchFavorites = async () => {
            const currentUser = auth.currentUser;
            if (!currentUser) {
                router.push('/login');
                return;
            }

            try {
                const userRef = doc(db, 'favorites', currentUser.uid);
                const userSnap = await getDoc(userRef);

                if (userSnap.exists()) {
                    const favSlugs: string[] = userSnap.data().coins || [];
                    setFavorites(favSlugs);
                }
            } catch (error) {
                console.error('Favoriler alınamadı:', error);
            }
        };

        fetchFavorites();
    }, []);

    useEffect(() => {
        const fetchCoinData = async () => {
            try {
                const coinData = await getFavoriteCoins(favorites); // slug bazlı çekiyor olmalı
                setCoins(coinData);
            } catch (err) {
                console.error('Coin verileri alınamadı:', err);
            } finally {
                setLoading(false);
            }
        };

        if (favorites.length > 0) {
            fetchCoinData();
        } else {
            setCoins([]);
            setLoading(false);
        }
    }, [favorites]);

    const handleRemoveFavorite = async (slug: string) => {
        const currentUser = auth.currentUser;
        if (!currentUser) return;

        try {
            const userRef = doc(db, 'favorites', currentUser.uid);
            await updateDoc(userRef, {
                coins: arrayRemove(slug),
            });

            setFavorites((prev) => prev.filter((s) => s !== slug));
            setCoins((prev) => prev.filter((c) => c.slug !== slug));
        } catch (err) {
            console.error('Favoriden çıkarılamadı:', err);
        }
    };

    if (loading) return <div>{t('loading')}...</div>;

    return (
        <section>
            <Navbar />
            <PageContainer bgColor="bg-surface">
                <FavoritesHeader />
            </PageContainer>

            <div className="container mt-3 mb-7">
                <div className="row">
                    <div className="col-md-3">
                        <div className="rounded-4 px-4 py-3 bg-light">
                            <ul className="list-group list-group-flush gap-2">
                                <li className="list-group-item border-0 ps-3 bg-primary rounded-5 text-white">
                                    {t('favorites_page_title')}
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="card border-0 shadow-sm p-3">
                            <h4>{t('your_favorites')}</h4>
                            {coins.length === 0 ? (
                                <p className="text-muted">{t('no_favorites_found')}</p>
                            ) : (
                                <div className="table-responsive">
                                    <table className="table table-hover mt-3 align-middle text-start">
                                        <thead className="table-light">
                                            <tr>
                                                <th>#</th>
                                                <th>{t('image')}</th>
                                                <th>{t('name')}</th>
                                                <th>{t('symbol')}</th>
                                                <th>{t('price')}</th>
                                                <th>%24h</th>
                                                <th>{t('actions')}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {coins.map((coin, index) => (
                                                <tr key={coin.id}>
                                                    <td className="fw-semibold">{index + 1}</td>
                                                    <td>
                                                        <img
                                                            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                                                            alt={coin.name}
                                                            width={32}
                                                            height={32}
                                                            className="rounded-circle"
                                                        />
                                                    </td>
                                                    <td>{coin.name}</td>
                                                    <td>{coin.symbol.toUpperCase()}</td>
                                                    <td>${coin.quote.USD.price.toFixed(2)}</td>
                                                    <td className={coin.quote.USD.percent_change_24h > 0 ? 'text-success' : 'text-danger'}>
                                                        {coin.quote.USD.percent_change_24h.toFixed(2)}%
                                                    </td>
                                                    <td>
                                                        <button
                                                            className="btn btn-link p-0"
                                                            onClick={() => handleRemoveFavorite(coin.slug)}
                                                            title="Favoriden çıkar"
                                                        >
                                                            <i className="fas fa-star text-warning fa-lg"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <PageContainer bgColor="bg-foto">
                <EarnUp />
            </PageContainer>
        </section>
    );
};

export default withAuth(FavoritesPage);
