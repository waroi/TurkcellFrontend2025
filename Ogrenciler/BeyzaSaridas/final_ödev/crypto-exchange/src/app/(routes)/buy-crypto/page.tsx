'use client'

import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'next/navigation';
import Layout from '../../../components/layout/Layout';
import CryptoIcon from '../../../components/common/CryptoIcon';
import Button from '../../../components/ui/Button';
import { formatCurrency, formatNumber } from '../../../lib/utils';
import { ArrowRight, Wallet, RefreshCw, CreditCard, DollarSign, AlertCircle } from 'lucide-react';
import './buy-crypto.scss';

interface CryptoCurrency {
  id: string;
  name: string;
  symbol: string;
  current_price: number;
  price_change_percentage_24h: number;
  image?: string;
}

interface Wallet {
  balance: number;
  currency: string;
}

const BuyCryptoPage: React.FC = () => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  
  const [loading, setLoading] = useState(true);
  const [selectedCrypto, setSelectedCrypto] = useState<string | null>(null);
  const [amount, setAmount] = useState<string>('');
  const [cryptoAmount, setCryptoAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<'wallet' | 'card'>('wallet');
  const [cryptoList, setCryptoList] = useState<CryptoCurrency[]>([]);
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

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
      balance: 5000,
      currency: 'USD'
    };
    
    setCryptoList(mockCryptos);
    setWallet(mockWallet);
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
  
  const handlePaymentMethodChange = (method: 'wallet' | 'card') => {
    setPaymentMethod(method);
    setError(null);
  };
  
  const handleBuy = () => {

    if (!selectedCrypto) {
      setError('Lütfen bir kripto para birimi seçin.');
      return;
    }
    
    if (!amount || parseFloat(amount) <= 0) {
      setError('Lütfen geçerli bir miktar girin.');
      return;
    }
    
    const amountValue = parseFloat(amount);
    
    if (paymentMethod === 'wallet' && wallet && amountValue > wallet.balance) {
      setError('Yetersiz bakiye. Lütfen cüzdanınıza para yükleyin veya başka bir ödeme yöntemi seçin.');
      return;
    }

    setIsProcessing(true);
    setError(null);

    setTimeout(() => {
      setIsProcessing(false);
      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
        setAmount('');
        setCryptoAmount('');
      }, 3000);
    }, 1500);
  };
  
  const getSelectedCryptoInfo = () => {
    if (!selectedCrypto) return null;
    return cryptoList.find(c => c.symbol.toLowerCase() === selectedCrypto.toLowerCase());
  };
  
  if (loading) {
    return (
      <Layout>
        <div className="buy-crypto-page">
          <div className="container">
            <div className="buy-crypto-page__loading">
              <div className="buy-crypto-page__loading-spinner"></div>
              <p>Veriler yükleniyor...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="buy-crypto-page">
        <div className="container">
          <div className="buy-crypto-page__header">
            <h1 className="buy-crypto-page__title">{t('buySell.buyTitle')}</h1>
            <p className="buy-crypto-page__subtitle">
              Kolayca kripto para satın alın ve portföyünüzü büyütün
            </p>
          </div>
          
          <div className="buy-crypto-page__content">
            <div className="buy-crypto-page__crypto-selection">
              <h2 className="buy-crypto-page__section-title">{t('buySell.selectCrypto')}</h2>
              <div className="buy-crypto-page__crypto-grid">
                {cryptoList.map(crypto => (
                  <div 
                    key={crypto.id}
                    className={`buy-crypto-page__crypto-item ${selectedCrypto === crypto.symbol.toLowerCase() ? 'buy-crypto-page__crypto-item--selected' : ''}`}
                    onClick={() => handleCryptoSelect(crypto.symbol.toLowerCase())}
                  >
                    <div className="buy-crypto-page__crypto-icon">
                      <CryptoIcon symbol={crypto.symbol} size={36} />
                    </div>
                    <div className="buy-crypto-page__crypto-info">
                      <div className="buy-crypto-page__crypto-name">{crypto.name}</div>
                      <div className="buy-crypto-page__crypto-symbol">{crypto.symbol.toUpperCase()}</div>
                    </div>
                    <div className="buy-crypto-page__crypto-price">
                      {formatCurrency(crypto.current_price)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="buy-crypto-page__payment-section">
              <div className="buy-crypto-page__amount-container">
                <h2 className="buy-crypto-page__section-title">Miktar</h2>
                <div className="buy-crypto-page__amount-inputs">
                  <div className="buy-crypto-page__amount-input-group">
                    <label className="buy-crypto-page__input-label">Ödenecek Miktar (USD)</label>
                    <div className="buy-crypto-page__input-wrapper">
                      <DollarSign className="buy-crypto-page__input-icon" />
                      <input
                        type="text"
                        className="buy-crypto-page__input"
                        placeholder="0.00"
                        value={amount}
                        onChange={handleAmountChange}
                        disabled={isProcessing}
                      />
                    </div>
                  </div>
                  
                  <div className="buy-crypto-page__arrow">
                    <ArrowRight />
                  </div>
                  
                  <div className="buy-crypto-page__amount-input-group">
                    <label className="buy-crypto-page__input-label">
                      Alınacak Miktar {selectedCrypto ? `(${selectedCrypto.toUpperCase()})` : ''}
                    </label>
                    <div className="buy-crypto-page__input-wrapper">
                      {selectedCrypto ? (
                        <CryptoIcon symbol={selectedCrypto} size={20} className="buy-crypto-page__input-icon" />
                      ) : (
                        <RefreshCw className="buy-crypto-page__input-icon" />
                      )}
                      <input
                        type="text"
                        className="buy-crypto-page__input"
                        placeholder="0.00000000"
                        value={cryptoAmount}
                        onChange={handleCryptoAmountChange}
                        disabled={!selectedCrypto || isProcessing}
                      />
                    </div>
                  </div>
                </div>
                
                {wallet && (
                  <div className="buy-crypto-page__available-balance">
                    <span className="buy-crypto-page__available-balance-label">{t('buySell.availableBalance')}:</span>
                    <span className="buy-crypto-page__available-balance-value">{formatCurrency(wallet.balance)}</span>
                  </div>
                )}
              </div>
              
              <div className="buy-crypto-page__payment-method">
                <h2 className="buy-crypto-page__section-title">Ödeme Yöntemi</h2>
                <div className="buy-crypto-page__payment-options">
                  <div 
                    className={`buy-crypto-page__payment-option ${paymentMethod === 'wallet' ? 'buy-crypto-page__payment-option--selected' : ''}`}
                    onClick={() => handlePaymentMethodChange('wallet')}
                  >
                    <div className="buy-crypto-page__payment-option-icon">
                      <Wallet />
                    </div>
                    <div className="buy-crypto-page__payment-option-info">
                      <div className="buy-crypto-page__payment-option-title">Cüzdan Bakiyesi</div>
                      <div className="buy-crypto-page__payment-option-description">
                        Mevcut bakiyenizden ödeyin
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className={`buy-crypto-page__payment-option ${paymentMethod === 'card' ? 'buy-crypto-page__payment-option--selected' : ''}`}
                    onClick={() => handlePaymentMethodChange('card')}
                  >
                    <div className="buy-crypto-page__payment-option-icon">
                      <CreditCard />
                    </div>
                    <div className="buy-crypto-page__payment-option-info">
                      <div className="buy-crypto-page__payment-option-title">Kredi/Banka Kartı</div>
                      <div className="buy-crypto-page__payment-option-description">
                        Visa, Mastercard, Troy desteklenir
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {error && (
                <div className="buy-crypto-page__error">
                  <AlertCircle className="buy-crypto-page__error-icon" />
                  <p>{error}</p>
                </div>
              )}
              
              {success && (
                <div className="buy-crypto-page__success">
                  <p>{t('buySell.successful')}</p>
                </div>
              )}
              
              <div className="buy-crypto-page__summary">
                <h2 className="buy-crypto-page__section-title">İşlem Özeti</h2>
                
                <div className="buy-crypto-page__summary-item">
                  <span className="buy-crypto-page__summary-label">Seçilen Kripto:</span>
                  <span className="buy-crypto-page__summary-value">
                    {getSelectedCryptoInfo() 
                      ? `${getSelectedCryptoInfo()?.name} (${getSelectedCryptoInfo()?.symbol.toUpperCase()})` 
                      : '-'}
                  </span>
                </div>
                
                <div className="buy-crypto-page__summary-item">
                  <span className="buy-crypto-page__summary-label">Birim Fiyat:</span>
                  <span className="buy-crypto-page__summary-value">
                    {getSelectedCryptoInfo() 
                      ? formatCurrency(getSelectedCryptoInfo()?.current_price || 0) 
                      : '-'}
                  </span>
                </div>
                
                <div className="buy-crypto-page__summary-item">
                  <span className="buy-crypto-page__summary-label">Miktar:</span>
                  <span className="buy-crypto-page__summary-value">
                    {cryptoAmount && selectedCrypto 
                      ? `${formatNumber(parseFloat(cryptoAmount))} ${selectedCrypto.toUpperCase()}` 
                      : '-'}
                  </span>
                </div>
                
                <div className="buy-crypto-page__summary-item">
                  <span className="buy-crypto-page__summary-label">Ödeme Yöntemi:</span>
                  <span className="buy-crypto-page__summary-value">
                    {paymentMethod === 'wallet' ? 'Cüzdan Bakiyesi' : 'Kredi/Banka Kartı'}
                  </span>
                </div>
                
                <div className="buy-crypto-page__summary-item buy-crypto-page__summary-item--total">
                  <span className="buy-crypto-page__summary-label">Toplam Ödeme:</span>
                  <span className="buy-crypto-page__summary-value buy-crypto-page__summary-total">
                    {amount ? formatCurrency(parseFloat(amount)) : formatCurrency(0)}
                  </span>
                </div>
              </div>
              
              <div className="buy-crypto-page__actions">
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="buy-crypto-page__buy-button"
                  onClick={handleBuy}
                  disabled={!selectedCrypto || !amount || parseFloat(amount) <= 0 || isProcessing || success}
                >
                  {isProcessing ? 'İşleniyor...' : t('buySell.buy')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BuyCryptoPage;