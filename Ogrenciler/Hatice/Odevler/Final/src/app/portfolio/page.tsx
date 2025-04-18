'use client';
import React, { useEffect, useState } from 'react';
import { getTrades } from '../services/firebase';
import { Trade } from '../types/crypto';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseConfig';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useTheme } from '../context/ThemeContext';
import { Search } from 'lucide-react';
import '../styles/custom.scss';

const Portfolio: React.FC = () => {
  const [trades, setTrades] = useState<Trade[]>([]);
  const [loading, setLoading] = useState(true);
  const [showBalance, setShowBalance] = useState(false);
  const [totalBalance, setTotalBalance] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const { theme } = useTheme();

  const getCryptoLogo = (symbol: string) => {
    const lowerSymbol = symbol.toLowerCase();
    return `https://cryptoicon-api.pages.dev/api/icon/${lowerSymbol}`;
  };

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && isMounted) {
        try {
          const fetchedTrades = await getTrades();
          if (isMounted) {
            setTrades(fetchedTrades);
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching trades:', error);
          if (isMounted) {
            setLoading(false);
          }
        }
      } else if (isMounted) {
        setTrades([]);
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const calculateTotalBalance = () => {
      const total = trades.reduce((sum, trade) => sum + (trade.price || 0), 0);
      setTotalBalance(total);
    };

    calculateTotalBalance();
  }, [trades]);

  const filteredTrades = trades.filter((trade) => {
    const matchesSearch = trade.cryptoId.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <>
      <Navbar />
      <div className={`container mt-4 portfolio-page ${theme}`}>
        {auth.currentUser ? (
          <div className={`card mb-2 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light'}`} style={{ padding: '1rem' }}>
            <div className="card-body p-3">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h3 className="mb-1">Overview</h3>
                  <p className="text-muted small mb-2">Total Balance</p>

                  {showBalance ? (
                    <>
                      <div className="d-flex align-items-center mb-1">
                        <h2 className="mb-0 me-2">{totalBalance.toFixed(8)}</h2>
                        <span className="badge bg-success">BTC</span>
                      </div>
                      <p className="text-muted">${(totalBalance * 15250).toFixed(2)}</p> 
                    </>
                  ) : (
                    <>
                      <div className="d-flex align-items-center mb-1">
                        <h2 className="mb-0 me-2">•••••••••</h2>
                        <span className="badge bg-success">BTC</span>
                      </div>
                      <p className="text-muted">••••••••</p>
                    </>
                  )}
                </div>

                <div className="col-md-6">
                  <div className="row mb-3">
                    <div className="col-8">
                      <div className="input-group">
                        <span className="input-group-text">
                          <Search size={18} />
                        </span>
                        <input
                          type="text"
                          className={`form-control ${theme === 'dark' ? 'bg-dark text-light' : ''}`}
                          placeholder="Search"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-4">
                      <button
                        className={`btn btn-outline-secondary w-100 ${theme === 'dark' ? 'btn-outline-light' : ''}`}
                        type="button"
                      >
                        USD
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary w-100"
                    onClick={() => setShowBalance(!showBalance)}
                  >
                    {showBalance ? 'Hide balance' : 'Show balance'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center">Please log in to view your portfolio overview.</p>
        )}

        <h2>Your Trade History</h2>
        {loading ? (
          <p>Loading trades...</p>
        ) : filteredTrades.length === 0 ? (
          <p>No trades found.</p>
        ) : (
          <table className={`table table-striped ${theme === 'dark' ? 'table-dark' : ''}`}>
            <thead>
              <tr>
                <th>Crypto</th>
                <th>Logo</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Price</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredTrades.map((trade) => (
                <tr key={trade.id}>
                  <td>{trade.cryptoId}</td>
                  <td>
                    <img
                      src={getCryptoLogo(trade.cryptoId.replace('USDT', ''))}
                      alt={trade.cryptoId}
                      width={32}
                      height={32}
                      onError={(e) => (e.currentTarget.src = '/fallback.png')}
                    />
                  </td>
                  <td className={trade.type === 'buy' ? 'text-success' : 'text-danger'}>
                    {trade.type}
                  </td>
                  <td>{trade.amount}</td>
                  <td>${trade.price?.toFixed(2)}</td>
                  <td>
                    {trade.timestamp?.toLocaleString('tr-TR', {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Portfolio;