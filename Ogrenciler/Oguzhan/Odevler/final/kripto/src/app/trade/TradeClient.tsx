"use client";
import { useState, useEffect } from "react";
import { useTradeStore } from "@/store/tradeStore";
import { useAuthStore } from "@/store/authStore";

type Coin = {
    id: string;
    name: string;
    current_price: number;
    symbol: string;
};

type Props = {
    initialCoins: Coin[];
};

export default function TradeClient({ initialCoins }: Props) {
    const [amount, setAmount] = useState("1");
    const [selectedCoin, setSelectedCoin] = useState<Coin | null>(initialCoins[0] || null);
    const { balance, buy, sell, fetchTradesAndBalance } = useTradeStore();
    const { user } = useAuthStore();

    useEffect(() => {
        if (user) {
            fetchTradesAndBalance();
        }
    }, [user]);

    const handleTrade = async (type: "BUY" | "SELL") => {
        if (!user) return alert("Lütfen giriş yapın!");
        if (!selectedCoin) return alert("Coin seçiniz!");

        const numericAmount = parseFloat(amount);
        if (isNaN(numericAmount)) return alert("Geçersiz miktar!");

        try {
            if (type === "BUY") {
                await buy(selectedCoin.id, selectedCoin.current_price, numericAmount);
            } else {
                await sell(selectedCoin.id, selectedCoin.current_price, numericAmount);
            }
            await fetchTradesAndBalance();
        } catch (error) {
            alert(error instanceof Error ? error.message : "İşlem başarısız");
        }
    };

    if (!selectedCoin) return <div>Yükleniyor...</div>;

    return (
        <div className="card shadow p-4">
            <div className="mb-3">
                <label>Coin Seç</label>
                <select
                    className="form-control"
                    value={selectedCoin.id}
                    onChange={(e) => {
                        const coin = initialCoins.find(c => c.id === e.target.value);
                        if (coin) setSelectedCoin(coin);
                    }}
                >
                    {initialCoins.map(coin => (
                        <option key={coin.id} value={coin.id}>
                            {coin.name} ({coin.symbol.toUpperCase()}) - ${coin.current_price}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-3">
                <label>Miktar</label>
                <input
                    type="number"
                    className="form-control"
                    value={amount}
                    min="0.0001"
                    step="0.0001"
                    onChange={(e) => setAmount(e.target.value)}
                />
                <small className="text-muted">
                    Toplam Tutar: ${(parseFloat(amount) * selectedCoin.current_price).toFixed(2)}
                </small>
            </div>

            <div className="d-grid gap-2">
                <button
                    onClick={() => handleTrade("BUY")}
                    className="btn btn-success btn-lg"
                    disabled={!user || balance < (parseFloat(amount) * selectedCoin.current_price)}
                >
                    AL
                </button>
                <button
                    onClick={() => handleTrade("SELL")}
                    className="btn btn-danger btn-lg"
                    disabled={!user}
                >
                    SAT
                </button>
            </div>

            <div className="mt-4 text-center">
                <h5>Bakiye: ${balance.toFixed(2)}</h5>
            </div>
        </div>
    );
}