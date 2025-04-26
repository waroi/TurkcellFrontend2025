"use client";
import { useEffect } from "react";
import { useTradeStore } from "@/store/tradeStore";
import { useAuthStore } from "@/store/authStore";

export default function PortfolioPage() {
    const { trades, balance, fetchTradesAndBalance } = useTradeStore();
    const { user } = useAuthStore();


    useEffect(() => {
        if (user) {
            fetchTradesAndBalance();
            const interval = setInterval(fetchTradesAndBalance, 3000);
            return () => clearInterval(interval);
        }
    }, [user]);

    const totalInvestment = trades
        .filter(t => t.type === "BUY")
        .reduce((acc, t) => acc + (t.amount * t.price), 0);

    const totalWithdrawal = trades
        .filter(t => t.type === "SELL")
        .reduce((acc, t) => acc + (t.amount * t.price), 0);

    return (
        <div className="container mt-5">
            <h1 className="mb-4">📊 Portfolio</h1>
            <div className="card shadow p-4">

                <div className="mb-4">
                    <h3>Bakiye: ${balance.toFixed(2)}</h3>
                    <div className="d-flex gap-4 mt-2">
                        <div className="text-success">
                            Toplam Yatırım: +${totalInvestment.toFixed(2)}
                        </div>
                        <div className="text-danger">
                            Toplam Çekim: -${totalWithdrawal.toFixed(2)}
                        </div>
                    </div>
                </div>

                <h4 className="mb-3">İşlem Geçmişi</h4>
                {trades.length === 0 ? (
                    <div className="alert alert-info">Henüz işlem yapılmadı</div>
                ) : (
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Tarih</th>
                                    <th>İşlem</th>
                                    <th>Coin</th>
                                    <th>Miktar</th>
                                    <th>Fiyat</th>
                                    <th>Toplam</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trades.map((trade) => (
                                    <tr key={trade.timestamp}>
                                        <td>
                                            {new Date(trade.timestamp).toLocaleDateString("tr-TR", {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </td>
                                        <td>
                                            <span className={`badge ${trade.type === "BUY" ? "bg-success" : "bg-danger"
                                                }`}>
                                                {trade.type === "BUY" ? "ALIM" : "SATIM"}
                                            </span>
                                        </td>
                                        <td>{trade.coinId.toUpperCase()}</td>
                                        <td>{trade.amount.toFixed(4)}</td>
                                        <td>${trade.price.toFixed(2)}</td>
                                        <td>${(trade.amount * trade.price).toFixed(2)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}