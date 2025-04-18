import React from 'react';
import { useTradingPage } from '../contexts/TradingPageContext';
import { useTradingStyles } from '../hooks/useTradingStyles';

const OrderTypeSelector: React.FC = () => {
  const { orderType, setOrderType } = useTradingPage();
  const styles = useTradingStyles();

  return (
    <>
      <div style={{...styles.currencySelect, ...(orderType === 'limit' ? styles.currencySelectActive : {})}}>
        <div className="form-check me-2">
          <input 
            className="form-check-input" 
            type="radio" 
            name="cryptoOption" 
            id="limitOption" 
            checked={orderType === 'limit'} 
            onChange={() => setOrderType('limit')}
          />
          <label className="form-check-label" htmlFor="limitOption">Limit</label>
        </div>
      </div>

      <div style={{...styles.currencySelect, ...(orderType === 'market' ? styles.currencySelectActive : {})}}>
        <div className="form-check me-2">
          <input 
            className="form-check-input" 
            type="radio" 
            name="cryptoOption" 
            id="marketOption" 
            checked={orderType === 'market'}
            onChange={() => setOrderType('market')}
          />
          <label className="form-check-label" htmlFor="marketOption">Market</label>
        </div>
      </div>
    </>
  );
};

export default OrderTypeSelector;