import React from 'react';
import { useTradingPage } from '../contexts/TradingPageContext';
import { useTradingStyles } from '../hooks/useTradingStyles';

const OrderBook: React.FC = () => {
  const { coinSymbol } = useTradingPage();
  const styles = useTradingStyles();

  // Bu veriler gerçek verilerle değiştirilmeli
  const sellOrders = [
    { price: '38,493.15', amount: '0.015437', total: '594.28', width: '25%' },
    { price: '38,491.13', amount: '0.049320', total: '1,898.17', width: '50%' },
    { price: '38,490.41', amount: '0.200000', total: '7,698.08', width: '75%' },
    { price: '38,490.40', amount: '0.125000', total: '4,811.30', width: '50%' },
    { price: '38,490.11', amount: '0.080000', total: '3,079.21', width: '40%' },
    { price: '38,490.10', amount: '0.182020', total: '7,006.15', width: '60%' },
  ];

  const buyOrders = [
    { price: '38,450.12', amount: '0.082000', total: '3,152.91', width: '30%' },
    { price: '38,450.11', amount: '0.125000', total: '4,806.26', width: '50%' },
    { price: '38,450.10', amount: '0.050000', total: '1,922.51', width: '20%' },
    { price: '38,450.09', amount: '0.061870', total: '2,378.73', width: '25%' },
    { price: '38,450.08', amount: '0.100000', total: '3,845.01', width: '40%' },
    { price: '38,450.07', amount: '0.175000', total: '6,728.76', width: '60%' },
  ];

  return (
    <div style={styles.orderBook}>
      <div style={styles.orderHeader}>
        <span>Price(USDT)</span>
        <span>{`Amount(${coinSymbol})`}</span>
        <span>Total</span>
      </div>
      <div>
        {sellOrders.map((item, idx) => (
          <div key={idx} style={{...styles.orderItem, ...styles.sellItem}}>
            <span style={styles.priceRed}>{item.price}</span>
            <span>{item.amount}</span>
            <span>{item.total}</span>
            <div style={{...styles.orderDepth, ...styles.depthRed, width: item.width}}></div>
          </div>
        ))}
      </div>

      <div style={styles.bookDivider}>
        <span>$38,490.10</span>
      </div>

      <div>
        {buyOrders.map((item, idx) => (
          <div key={idx} style={{...styles.orderItem, ...styles.buyItem}}>
            <span style={styles.priceGreen}>{item.price}</span>
            <span>{item.amount}</span>
            <span>{item.total}</span>
            <div style={{...styles.orderDepth, ...styles.depthGreen, width: item.width}}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderBook;