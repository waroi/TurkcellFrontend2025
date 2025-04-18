import React from 'react';
import { useTradingPage } from '../contexts/TradingPageContext';
import { useTradingStyles } from '../hooks/useTradingStyles';

const PriceInput: React.FC = () => {
  const { coinSymbol } = useTradingPage();
  const styles = useTradingStyles();

  return (
    <>
      <div style={styles.currencySelect}>
        <div className="flex-grow-1">
          <div style={styles.currencyLabel}>Price</div>
          <div style={styles.currencyValue}>$38,447.24</div>
        </div>
        <div>
          <span style={{...styles.circleIcon, ...styles.usdtIcon}}></span>
          <span>USDT</span>
        </div>
      </div>

      <div style={styles.currencySelect}>
        <div className="flex-grow-1">
          <div style={styles.currencyLabel}>{`Amount(${coinSymbol})`}</div>
          <div style={styles.currencyValue}>$38,447.24</div>
        </div>
        <div>
          <span style={{...styles.circleIcon, ...styles.btcIcon}}></span>
          <span>{coinSymbol}</span>
        </div>
      </div>

      <div style={styles.currencySelect}>
        <div className="flex-grow-1">
          <div style={styles.currencyLabel}>Total(USDT)</div>
          <div style={styles.currencyValue}>$0</div>
        </div>
        <div>
          <span style={{...styles.circleIcon, ...styles.usdtIcon}}></span>
          <span>USDT</span>
        </div>
      </div>
    </>
  );
};

export default PriceInput;