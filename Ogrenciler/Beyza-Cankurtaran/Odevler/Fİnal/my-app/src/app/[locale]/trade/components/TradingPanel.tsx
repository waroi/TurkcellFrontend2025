import React from 'react';
import { useTradingPage } from '../contexts/TradingPageContext';
import { useTheme } from '../../../context/ThemeContext';
import OrderTypeSelector from './OrderTypeSelector';
import PriceInput from './PriceInput';
import OrderBook from './OrderBook';
import { useTradingStyles } from '../hooks/useTradingStyles';

const TradingPanel: React.FC = () => {
  const { tradeType, setTradeType, coinSymbol, orderType } = useTradingPage();
  const { theme } = useTheme();
  const styles = useTradingStyles();

  return (
    <div className="col-md-3">
      <div style={styles.cryptoCard}>
        <div className="d-flex justify-content-between mb-3">
          <button 
            style={{...styles.tabBtn, ...(tradeType === 'buy' ? styles.tabBtnActive : {})}} 
            onClick={() => setTradeType('buy')}>
            Buy {coinSymbol}
          </button>
          <button 
            style={{...styles.tabBtn, ...(tradeType === 'sell' ? styles.tabBtnActive : {})}} 
            onClick={() => setTradeType('sell')}>
            Sell {coinSymbol}
          </button>
        </div>

        <OrderTypeSelector />
        <PriceInput />

        <button style={styles.buyBtn}>
          {tradeType === 'buy' ? `Buy ${coinSymbol}` : `Sell ${coinSymbol}`}
        </button>

        <div className="d-flex justify-content-between mt-4 mb-2">
          <span style={{ fontSize: '14px' }}>Order Book</span>
          <div style={styles.tabContent}>
            <div style={{...styles.tabContentItem, ...styles.tabContentItemActive}}>0.1%</div>
            <div style={styles.tabContentItem}>1%</div>
            <div style={styles.tabContentItem}>10%</div>
          </div>
        </div>
      </div>

      <OrderBook />
    </div>
  );
};

export default TradingPanel;