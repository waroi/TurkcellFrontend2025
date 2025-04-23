'use client';
import React, { useState } from 'react';
import { createTrade } from '../services/firebase';
import { useTheme } from '../context/ThemeContext';
import { TradeInfo } from '../types/crypto';
import { auth } from '../firebase/firebaseConfig'; 

interface Props {
  tradeInfo: TradeInfo;
}

const TradeForm: React.FC<Props> = ({ tradeInfo }) => {
  const [amount, setAmount] = useState('');
  const [tradeType, setTradeType] = useState<'buy' | 'sell'>('buy');
  const [isLoading, setIsLoading] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth.currentUser) {
      alert('Please log in to execute a trade.');
      return;
    }
    setIsLoading(true);
    try {
      await createTrade({
        cryptoId: tradeInfo.id,
        type: tradeType,
        amount: parseFloat(amount),
        price: tradeInfo.price, 
      });
      setAmount('');
      alert('Trade executed successfully!');
    } catch (error) {
      console.error('Error executing trade:', error);
      alert('Failed to execute trade. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const totalValue = parseFloat(amount) * tradeInfo.price;

  return (
    
    <form 
      onSubmit={handleSubmit} 
      className={`card p-4 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
    >
      <div className="d-flex align-items-center mb-4">
        <img
          src={tradeInfo.logo}
          alt={tradeInfo.name}
          width={32}
          height={32}
          className="me-2"
        />
        <div>
          <h5 className="mb-0">{tradeInfo.name}</h5>
          <p className="mb-0 text-primary">Current Price: ${tradeInfo.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label">Amount</label>
        <input
          type="number"
          className={`form-control ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="0"
          step="0.001"
          required
          disabled={isLoading}
        />
        {amount && (
          <small className="text-muted">
            Total Value: ${totalValue.toFixed(2)}
          </small>
        )}
      </div>
      <div className="mb-3">
        <div className="btn-group w-100">
          <button
            type="button"
            className={`btn ${tradeType === 'buy' ? 'btn-success' : 'btn-outline-success'}`}
            onClick={() => setTradeType('buy')}
            disabled={isLoading}
          >
            Buy
          </button>
          <button
            type="button"
            className={`btn ${tradeType === 'sell' ? 'btn-danger' : 'btn-outline-danger'}`}
            onClick={() => setTradeType('sell')}
            disabled={isLoading}
          >
            Sell
          </button>
        </div>
      </div>
      <button 
        type="submit" 
        className="btn btn-primary w-100"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
        ) : null}
        {tradeType === 'buy' ? 'Buy' : 'Sell'} {tradeInfo.name}
      </button>
    </form>
  );
};

export default TradeForm;