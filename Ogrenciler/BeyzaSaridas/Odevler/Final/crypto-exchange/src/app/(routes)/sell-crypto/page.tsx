'use client'

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'next/navigation';
import Layout from '../../../components/layout/Layout';
import CryptoIcon from '../../../components/common/CryptoIcon';
import Button from '../../../components/ui/Button';
import { formatCurrency, formatNumber } from '../../../lib/utils';
import { ArrowRight, Wallet, RefreshCw, CreditCard, DollarSign, AlertCircle, Clock, TrendingDown } from 'lucide-react';
import { addTransaction } from '../../../lib/firebaseService';
import './sell-crypto.scss';

interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image?: string;
}

interface CryptoBalance {
  symbol: string;
  amount: number;
  value: number;
}

interface Wallet {
  fiatBalance: number;
  currency: string;
  cryptoBalances: CryptoBalance[];
}

interface RecentTransaction {
  id: string;
  cryptoSymbol: string;
  cryptoAmount: number;
  fiatAmount: number;
  fiatCurrency: string;
  timestamp: Date;
  status: 'completed' | 'pending' | 'failed';
  type: 'buy' | 'sell';
}

const SellCryptoPage: React.FC = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [cryptoAmount, setCryptoAmount] = useState<string>('');
  const [receiveMethod, setReceiveMethod] = useState<'wallet' | 'bank'>('wallet');
  const [cryptoList, setCryptoList] = useState<CryptoCurrency[]>([]);
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [user, setUser] = useState<{ uid: string }>({ uid: 'user123' });
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [recentTransactions, setRecentTransactions] = useState<RecentTransaction[]>([]);
  const [showRecentTransactions, setShowRecentTransactions] = useState<boolean>(false);

  useEffect(() => {
    const symbol = searchParams.get('symbol');
    if (symbol) {
      setSelectedCrypto(symbol.toLowerCase());
    }
  }, [searchParams]);

  useEffect(() => {
    const mockCryptos: CryptoCurrency[] = [
      { id: 'bitcoin', name: 'Bitcoin', symbol: 'btc', current_price: 54321.23, price_change_percentage_24h: 2.45 },
      { id: 'ethereum', name: 'Ethereum', symbol: 'eth', current_price: 2456.78, price_change_percentage_24h: -1.23 },
      { id: 'ripple', name: 'XRP', symbol: 'xrp', current_price: 0.98, price_change_percentage_24h: -2.56 },
      { id: 'litecoin', name: 'Litecoin', symbol: 'ltc', current_price: 187.25, price_change_percentage_24h: 0.87 },
      { id: 'cardano', name: 'Cardano', symbol: 'ada', current_price: 1.23, price_change_percentage_24h: 3.21 },
      { id: 'solana', name: 'Solana', symbol: 'sol', current_price: 153.87, price_change_percentage_24h: 7.23 },
    ];

    const mockWallet: Wallet = {
      fiatBalance: 5000,
      currency: 'USD',
      cryptoBalances: [
        { symbol: 'btc', amount: 0.15, value: 8148.18 },
        { symbol: 'eth', amount: 2.5, value: 6141.95 },
        { symbol: 'sol', amount: 10, value: 1538.70 },
        { symbol: 'ltc', amount: 5, value: 936.25 }
      ]
    };

    const mockTransactions: RecentTransaction[] = [
      {
        id: '1',
        cryptoSymbol: 'btc',
        cryptoAmount: 0.025,
        fiatAmount: 1350.45,
        fiatCurrency: 'USD',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
        status: 'completed',
        type: 'sell'
      },
      {
        id: '2',
        cryptoSymbol: 'eth',
        cryptoAmount: 1.5,
        fiatAmount: 3685.17,
        fiatCurrency: 'USD',
        timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        status: 'completed',
        type: 'buy'
      },
      {
        id: '3',
        cryptoSymbol: 'sol',
        cryptoAmount: 2.75,
        fiatAmount: 423.14,
        fiatCurrency: 'USD',
        timestamp: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        status: 'completed',
        type: 'sell'
      }
    ];

    setCryptoList(mockCryptos);
    setWallet(mockWallet);
    setRecentTransactions(mockTransactions);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (selectedCrypto && amount) {
      const crypto = cryptoList.find(c => c.symbol.toLowerCase() === selectedCrypto.toLowerCase());
      if (crypto) {
        const amountValue = parseFloat(amount);
        if (!isNaN(amountValue) && amountValue > 0) {
          const cryptoValue = amountValue / crypto.current_price;
          setCryptoAmount(cryptoValue.toFixed(8));
          return;
        }
      }
    }

    setCryptoAmount('');
  }, [selectedCrypto, amount, cryptoList]);

  useEffect(() => {
    if (selectedCrypto && cryptoAmount) {
      const crypto = cryptoList.find(c => c.symbol.toLowerCase() === selectedCrypto.toLowerCase());
      if (crypto) {
        const cryptoValue = parseFloat(cryptoAmount);
        if (!isNaN(cryptoValue) && cryptoValue > 0) {
          const amountValue = cryptoValue * crypto.current_price;
          setAmount(amountValue.toFixed(2));
          return;
        }
      }
    }

    if (cryptoAmount === '') {
      setAmount('');
    }
  }, [selectedCrypto, cryptoAmount, cryptoList]);

  const handleCryptoSelect = (symbol: string) => {
    setSelectedCrypto(symbol);
    setError(null);
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
      setError(null);
    }
  };

  const handleCryptoAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setCryptoAmount(value);
      setError(null);
    }
  };

  const handleReceiveMethodChange = (method: 'wallet' | 'bank') => {
    setReceiveMethod(method);
    setError(null);
  };

  const handleSellCrypto = async () => {
    if (!selectedCrypto) {
      setError('Lütfen bir kripto para birimi seçin.');
      return;
    }

    if (!cryptoAmount || parseFloat(cryptoAmount) <= 0) {
      setError('Lütfen geçerli bir miktar girin.');
      return;
    }

    const cryptoAmountValue = parseFloat(cryptoAmount);
    const crypto = cryptoList.find(c => c.symbol.toLowerCase() === selectedCrypto.toLowerCase());

    if (!crypto) {
      setError('Seçilen kripto para bulunamadı.');
      return;
    }

    const userCryptoBalance = wallet?.cryptoBalances.find(b => b.symbol.toLowerCase() === selectedCrypto.toLowerCase());
    if (!userCryptoBalance || userCryptoBalance.amount < cryptoAmountValue) {
      setError('Yetersiz kripto bakiyesi. Satmak istediğiniz miktarı düşürün.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    try {
      await addTransaction({
        userId: user.uid,
        type: 'sell',
        symbol: selectedCrypto,
        amount: parseFloat(cryptoAmount),
        price: crypto.current_price,
      });

      await new Promise(resolve => setTimeout(resolve, 1500));

      const newTransaction: RecentTransaction = {
        id: Date.now().toString(),
        cryptoSymbol: selectedCrypto,
        cryptoAmount: parseFloat(cryptoAmount),
        fiatAmount: parseFloat(amount),
        fiatCurrency: 'USD',
        timestamp: new Date(),
        status: 'completed',
        type: 'sell'
      };

      setRecentTransactions([newTransaction, ...recentTransactions]);

      if (wallet) {
        const updatedCryptoBalances = wallet.cryptoBalances.map(balance => {
          if (balance.symbol.toLowerCase() === selectedCrypto.toLowerCase()) {
            return {
              ...balance,
              amount: balance.amount - parseFloat(cryptoAmount),
              value: (balance.amount - parseFloat(cryptoAmount)) * crypto.current_price
            };
          }
          return balance;
        });

        const newFiatBalance = wallet.fiatBalance + parseFloat(amount);

        setWallet({
          ...wallet,
          fiatBalance: newFiatBalance,
          cryptoBalances: updatedCryptoBalances
        });
      }
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setAmount('');
        setCryptoAmount('');
      }, 3000);
    } catch (err) {
      console.error('Satış işlemi başarısız:', err);
      setError('İşlem sırasında bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
    } finally {
      setIsProcessing(false);
    }
  };

  const getSelectedCryptoInfo = () => {
    if (!selectedCrypto) return null;
    return cryptoList.find(c => c.symbol.toLowerCase() === selectedCrypto.toLowerCase());
  };

  const getSelectedCryptoBalance = () => {
    if (!selectedCrypto || !wallet) return null;
    return wallet.cryptoBalances.find(b => b.symbol.toLowerCase() === selectedCrypto.toLowerCase());
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const toggleRecentTransactions = () => {
    setShowRecentTransactions(!showRecentTransactions);
  };

  if (loading) {
    return (
      <Layout>
        <div className="sell-crypto-page">
          <div className="container">
            <div className="sell-crypto-page__loading">
              <div className="sell-crypto-page__loading-spinner"></div>
              <p>Veriler yükleniyor...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="sell-crypto-page">
        <div className="container">
          <div className="sell-crypto-page__header">
            <h1 className="sell-crypto-page__title">{t('buySell.sellTitle') || 'Kripto Satış'}</h1>
            <p className="sell-crypto-page__subtitle">
              Kripto varlıklarınızı güvenle nakit paraya dönüştürün
            </p>
          </div>

          <div className="sell-crypto-page__content">
            <div className="sell-crypto-page__crypto-selection">
              <h2 className="sell-crypto-page__section-title">Satılacak Kripto</h2>
              <div className="sell-crypto-page__crypto-grid">
                {wallet?.cryptoBalances.map(balance => {
                  const crypto = cryptoList.find(c => c.symbol.toLowerCase() === balance.symbol.toLowerCase());
                  if (!crypto || balance.amount <= 0) return null;

                  return (
                    <div
                      key={crypto.id}
                      className={`sell-crypto-page__crypto-item ${selectedCrypto === crypto.symbol.toLowerCase() ? 'sell-crypto-page__crypto-item--selected' : ''}`}
                      onClick={() => handleCryptoSelect(crypto.symbol.toLowerCase())}
                    >
                      <div className="sell-crypto-page__crypto-icon">
                        <CryptoIcon symbol={crypto.symbol} size={36} />
                      </div>
                      <div className="sell-crypto-page__crypto-info">
                        <div className="sell-crypto-page__crypto-name">{crypto.name}</div>
                        <div className="sell-crypto-page__crypto-symbol">{crypto.symbol.toUpperCase()}</div>
                      </div>
                      <div className="sell-crypto-page__crypto-balance">
                        <div className="sell-crypto-page__crypto-amount">{balance.amount.toFixed(6)} {crypto.symbol.toUpperCase()}</div>
                        <div className="sell-crypto-page__crypto-value">{formatCurrency(balance.value)}</div>
                      </div>
                      <div className={`sell-crypto-page__crypto-change ${crypto.price_change_percentage_24h >= 0 ? 'sell-crypto-page__crypto-change--positive' : 'sell-crypto-page__crypto-change--negative'}`}>
                        {crypto.price_change_percentage_24h >= 0 ? '+' : ''}{crypto.price_change_percentage_24h.toFixed(2)}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="sell-crypto-page__payment-section">
              <div className="sell-crypto-page__amount-container">
                <h2 className="sell-crypto-page__section-title">Satış Miktarı</h2>
                <div className="sell-crypto-page__amount-inputs">
                  <div className="sell-crypto-page__amount-input-group">
                    <label className="sell-crypto-page__input-label">
                      Satılacak Miktar {selectedCrypto ? `(${selectedCrypto.toUpperCase()})` : ''}
                    </label>
                    <div className="sell-crypto-page__input-wrapper">
                      {selectedCrypto ? (
                        <CryptoIcon symbol={selectedCrypto} size={20} className="sell-crypto-page__input-icon" />
                      ) : (
                        <RefreshCw className="sell-crypto-page__input-icon" />
                      )}
                      <input
                        type="text"
                        className="sell-crypto-page__input"
                        placeholder="0.00000000"
                        value={cryptoAmount}
                        onChange={handleCryptoAmountChange}
                        disabled={!selectedCrypto || isProcessing}
                      />
                    </div>
                  </div>

                  <div className="sell-crypto-page__arrow">
                    <ArrowRight />
                  </div>

                  <div className="sell-crypto-page__amount-input-group">
                    <label className="sell-crypto-page__input-label">Alınacak Miktar (USD)</label>
                    <div className="sell-crypto-page__input-wrapper">
                      <DollarSign className="sell-crypto-page__input-icon" />
                      <input
                        type="text"
                        className="sell-crypto-page__input"
                        placeholder="0.00"
                        value={amount}
                        onChange={handleAmountChange}
                        disabled={isProcessing}
                      />
                    </div>
                  </div>
                </div>

                {getSelectedCryptoBalance() && (
                  <div className="sell-crypto-page__available-balance">
                    <span className="sell-crypto-page__available-balance-label">Mevcut Bakiye:</span>
                    <span className="sell-crypto-page__available-balance-value">
                      {getSelectedCryptoBalance()?.amount.toFixed(8)} {selectedCrypto?.toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              <div className="sell-crypto-page__payment-method">
                <h2 className="sell-crypto-page__section-title">Ödeme Alma Yöntemi</h2>
                <div className="sell-crypto-page__payment-options">
                  <div
                    className={`sell-crypto-page__payment-option ${receiveMethod === 'wallet' ? 'sell-crypto-page__payment-option--selected' : ''}`}
                    onClick={() => handleReceiveMethodChange('wallet')}
                  >
                    <div className="sell-crypto-page__payment-option-icon">
                      <Wallet />
                    </div>
                    <div className="sell-crypto-page__payment-option-info">
                      <div className="sell-crypto-page__payment-option-title">Cüzdan Bakiyesi</div>
                      <div className="sell-crypto-page__payment-option-description">
                        Bakiyenize ekleyin
                      </div>
                    </div>
                  </div>

                  <div
                    className={`sell-crypto-page__payment-option ${receiveMethod === 'bank' ? 'sell-crypto-page__payment-option--selected' : ''}`}
                    onClick={() => handleReceiveMethodChange('bank')}
                  >
                    <div className="sell-crypto-page__payment-option-icon">
                      <CreditCard />
                    </div>
                    <div className="sell-crypto-page__payment-option-info">
                      <div className="sell-crypto-page__payment-option-title">Banka Hesabı</div>
                      <div className="sell-crypto-page__payment-option-description">
                        Banka hesabınıza gönderin
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <div className="sell-crypto-page__error">
                  <AlertCircle className="sell-crypto-page__error-icon" />
                  <p>{error}</p>
                </div>
              )}

              {success && (
                <div className="sell-crypto-page__success">
                  <p>Satış işlemi başarıyla tamamlandı!</p>
                </div>
              )}

              <div className="sell-crypto-page__summary">
                <h2 className="sell-crypto-page__section-title">İşlem Özeti</h2>

                <div className="sell-crypto-page__summary-item">
                  <span className="sell-crypto-page__summary-label">Seçilen Kripto:</span>
                  <span className="sell-crypto-page__summary-value">
                    {getSelectedCryptoInfo()
                      ? `${getSelectedCryptoInfo()?.name} (${getSelectedCryptoInfo()?.symbol.toUpperCase()})`
                      : '-'}
                  </span>
                </div>

                <div className="sell-crypto-page__summary-item">
                  <span className="sell-crypto-page__summary-label">Birim Fiyat:</span>
                  <span className="sell-crypto-page__summary-value">
                    {getSelectedCryptoInfo()
                      ? formatCurrency(getSelectedCryptoInfo()?.current_price || 0)
                      : '-'}
                  </span>
                </div>

                <div className="sell-crypto-page__summary-item">
                  <span className="sell-crypto-page__summary-label">Satış Miktarı:</span>
                  <span className="sell-crypto-page__summary-value">
                    {cryptoAmount && selectedCrypto
                      ? `${formatNumber(parseFloat(cryptoAmount))} ${selectedCrypto.toUpperCase()}`
                      : '-'}
                  </span>
                </div>

                <div className="sell-crypto-page__summary-item">
                  <span className="sell-crypto-page__summary-label">Ödeme Alma Yöntemi:</span>
                  <span className="sell-crypto-page__summary-value">
                    {receiveMethod === 'wallet' ? 'Cüzdan Bakiyesi' : 'Banka Hesabı'}
                  </span>
                </div>

                <div className="sell-crypto-page__summary-item sell-crypto-page__summary-item--total">
                  <span className="sell-crypto-page__summary-label">Toplam Alınacak Tutar:</span>
                  <span className="sell-crypto-page__summary-value sell-crypto-page__summary-total">
                    {amount ? formatCurrency(parseFloat(amount)) : formatCurrency(0)}
                  </span>
                </div>
              </div>

              <div className="sell-crypto-page__actions">
                <Button
                  variant="primary"
                  size="lg"
                  className="sell-crypto-page__sell-button"
                  onClick={handleSellCrypto}
                  disabled={!selectedCrypto || !cryptoAmount || parseFloat(cryptoAmount) <= 0 || isProcessing || success}
                >
                  {isProcessing ? 'İşleniyor...' : 'Satış Yap'}
                </Button>
              </div>
            </div>

            <div className="sell-crypto-page__transactions">
              <div className="sell-crypto-page__transactions-header" onClick={toggleRecentTransactions}>
                <h2 className="sell-crypto-page__section-title">
                  <Clock className="sell-crypto-page__section-icon" />
                  Son İşlemler
                </h2>
                <span className="sell-crypto-page__toggle-icon">
                  {showRecentTransactions ? '▲' : '▼'}
                </span>
              </div>

              {showRecentTransactions && (
                <div className="sell-crypto-page__transactions-list">
                  {recentTransactions.length > 0 ? (
                    recentTransactions.map(transaction => (
                      <div key={transaction.id} className="sell-crypto-page__transaction-item">
                        <div className="sell-crypto-page__transaction-icon">
                          <CryptoIcon symbol={transaction.cryptoSymbol} size={24} />
                        </div>
                        <div className="sell-crypto-page__transaction-details">
                          <div className="sell-crypto-page__transaction-title">
                            {transaction.type === 'sell' ? 'Satıldı' : 'Satın Alındı'}: {transaction.cryptoAmount.toFixed(6)} {transaction.cryptoSymbol.toUpperCase()}
                          </div>
                          <div className="sell-crypto-page__transaction-date">
                            {formatDate(transaction.timestamp)}
                          </div>
                        </div>
                        <div className="sell-crypto-page__transaction-amount">
                          <div className="sell-crypto-page__transaction-fiat">
                            {transaction.type === 'sell' ? '+' : '-'}{formatCurrency(transaction.fiatAmount)}
                          </div>
                          <div className={`sell-crypto-page__transaction-status sell-crypto-page__transaction-status--${transaction.status}`}>
                            {transaction.status === 'completed' ? 'Tamamlandı' :
                              transaction.status === 'pending' ? 'Beklemede' : 'Başarısız'}
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="sell-crypto-page__no-transactions">
                      <p>Henüz işlem geçmişi bulunmamaktadır.</p>
                    </div>
                  )}
                </div>
              )}
            </div>


          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SellCryptoPage;