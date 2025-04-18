'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import PageContainer from '@/components/PageContainer';
import EarnUp from '@/components/molecules/EarnUp';
import withAuth from '@/utils/withAuth';
import SellHeader from '@/components/molecules/BuyHeader';
import Link from 'next/link';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { fetchCoins } from '@/lib/coinApi';
import { Coin, OwnedCoin } from '../../../types/route';
import Navbar from '../../../components/Navbar';

const Sell = () => {
    const t = useTranslations();
    const [coinList, setCoinList] = useState<Coin[]>([]);
    const [walletCoins, setWalletCoins] = useState<OwnedCoin[]>([]);
    const [coinId, setCoinId] = useState('');
    const [amount, setAmount] = useState('');
    const [balance, setBalance] = useState(0);
    const [uid, setUid] = useState('');
    const [calculatedUSD, setCalculatedUSD] = useState(0);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const user = auth.currentUser;
            if (!user) return;

            const uid = user.uid;
            setUid(uid);

            const docRef = doc(db, 'users', uid);
            const snap = await getDoc(docRef);
            const wallet = snap.data()?.wallet || {};
            setBalance(snap.data()?.balance || 0);

            const coins = await fetchCoins();
            setCoinList(coins);

            const owned: OwnedCoin[] = coins
                .filter((coin: Coin) => {
                    const walletItem = wallet[String(coin.id)];
                    return walletItem && walletItem.amount > 0;
                })
                .map((coin: Coin) => {
                    const walletItem = wallet[String(coin.id)];
                    return {
                        ...coin,
                        amount: walletItem?.amount ?? 0,
                        priceAtPurchase: walletItem?.priceAtPurchase ?? 0,
                    };
                });

            setWalletCoins(owned);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!coinId || !amount) return;

        const selectedCoin = coinList.find((c) => String(c.id) === coinId);
        if (selectedCoin) {
            const price = selectedCoin.quote.USD.price;
            const usdValue = Number(amount) * price;
            setCalculatedUSD(Number(usdValue.toFixed(2)));
        }
    }, [coinId, amount, coinList]);

    const handleSell = async () => {
        if (!uid || !coinId || !amount) return;

        const selectedCoin = coinList.find((c) => String(c.id) === coinId);
        if (!selectedCoin) return;

        const coinInWallet = walletCoins.find((c) => String(c.id) === coinId);
        if (!coinInWallet || Number(amount) > coinInWallet.amount) {
            alert(t('insufficient_coin'));
            return;
        }

        const docRef = doc(db, 'users', uid);
        const docSnap = await getDoc(docRef);
        const userData = docSnap.data();

        const updatedWallet = { ...(userData?.wallet || {}) };
        if (!updatedWallet[coinId]) return;
        updatedWallet[coinId].amount -= Number(amount);
        if (updatedWallet[coinId].amount <= 0) {
            delete updatedWallet[coinId];
        }

        const usdValue = Number(amount) * selectedCoin.quote.USD.price;
        const updatedBalance = (userData?.balance || 0) + usdValue;

        await updateDoc(docRef, {
            wallet: updatedWallet,
            balance: updatedBalance,
        });

        setSuccessMessage(`${t('sold_successfully')} ${usdValue.toFixed(2)} USD`);
        setTimeout(() => setSuccessMessage(''), 4000);
        setAmount('');
        setCoinId('');
        setCalculatedUSD(0);
        setBalance(updatedBalance);
    };

    return (
        <section>
            <Navbar />
            <PageContainer bgColor="bg-surface">
                <SellHeader />
            </PageContainer>

            <div className="container mb-7">
                <div className="row">
                    <div className="col-md-3">
                        <div className="rounded-4 px-4 py-3 bg-light">
                            <ul className="list-group list-group-flush gap-2">
                                <li className="list-group-item border-0 ps-3">{t('Overview')}</li>
                                <li className="list-group-item border-0 ps-3">
                                    <Link href="/buy" className="text-black text-decoration-none d-block">
                                        {t('buy_page_title')}
                                    </Link>
                                </li>
                                <li className="list-group-item border-0 ps-3 bg-primary rounded-5 text-white">
                                    <Link href="/sell" className="text-white text-decoration-none d-block">
                                        {t('sell_page_title')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-9 border-start ps-4">
                        <div className="rounded-4 p-4 shadow-sm bg-surface">
                            <h4 className="mb-4">{t('sell_crypto')}</h4>

                            <div className="alert alert-info">
                                💰 <strong>{t('your_balance')}:</strong> ${balance.toFixed(2)}
                            </div>

                            {successMessage && (
                                <div className="alert alert-success">✅ {successMessage}</div>
                            )}

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label>{t('select_coin')}</label>
                                    <select
                                        className="form-select"
                                        value={coinId}
                                        onChange={(e) => setCoinId(e.target.value)}
                                    >
                                        <option value="">{t('choose')}</option>
                                        {walletCoins.map((coin) => (
                                            <option key={coin.id} value={String(coin.id)}>
                                                {coin.name} ({coin.symbol.toUpperCase()}) - {coin.amount.toFixed(6)} available
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label>{t('amount')}</label>
                                    <input
                                        className="form-control"
                                        type="number"
                                        placeholder="0.00"
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                    />
                                </div>
                            </div>

                            {calculatedUSD > 0 && (
                                <div className="mt-3 text-success">
                                    <p>
                                        <strong>{t('you_will_earn')}:</strong> ${calculatedUSD.toLocaleString()}
                                    </p>
                                </div>
                            )}

                            <div className="d-flex justify-content-end mt-4">
                                <button className="btn btn-primary rounded-5 text-white" onClick={handleSell}>
                                    {t('sell_now')}
                                </button>
                            </div>
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

export default withAuth(Sell);
