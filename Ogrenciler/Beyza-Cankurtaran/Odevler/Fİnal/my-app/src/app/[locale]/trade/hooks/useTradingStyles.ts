import { useTheme } from '../../../context/ThemeContext';

export const useTradingStyles = () => {
  const { theme } = useTheme();

  return {
    cryptoCard: {
      backgroundColor: theme === 'dark' ? '#121218' : '#f8f9fa',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '20px',
    },
    tabBtn: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#6c757d',
      padding: '10px 15px',
      borderBottom: '2px solid transparent',
      cursor: 'pointer',
    },
    tabBtnActive: {
      color: theme === 'dark' ? '#fff' : '#212529',
      borderBottom: '2px solid #6352ff',
    },
    currencySelect: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme === 'dark' ? '#1d1d25' : '#e9ecef',
      borderRadius: '8px',
      padding: '10px',
      margin: '10px 0',
    },
    currencySelectActive: {
      border: '1px solid #6352ff',
    },
    currencyLabel: {
      fontSize: '14px',
      color: '#6c757d',
    },
    currencyValue: {
      fontSize: '18px',
      fontWeight: 'bold',
    },
    circleIcon: {
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      display: 'inline-block',
      marginRight: '8px',
    },
    btcIcon: {
      backgroundColor: '#f7931a',
    },
    usdtIcon: {
      backgroundColor: '#26a17b',
    },
    buyBtn: {
      backgroundColor: '#6352ff',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '12px 0',
      width: '100%',
      fontWeight: 'bold',
      marginTop: '10px',
    },
    orderBook: {
      backgroundColor: theme === 'dark' ? '#121218' : '#f8f9fa',
      borderRadius: '12px',
      padding: '15px',
      marginBottom: '20px',
    },
    orderHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '10px',
      fontSize: '12px',
      color: '#6c757d',
    },
    orderItem: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '12px',
      padding: '5px 0',
    },
    sellItem: {
      backgroundColor: theme === 'dark' ? 'rgba(255, 87, 87, 0.05)' : 'rgba(255, 87, 87, 0.1)',
    },
    buyItem: {
      backgroundColor: theme === 'dark' ? 'rgba(63, 219, 151, 0.05)' : 'rgba(63, 219, 151, 0.1)',
    },
    priceRed: {
      color: '#ff5757',
    },
    priceGreen: {
      color: '#3fdb97',
    },
    orderDepth: {
      height: '4px',
      marginTop: '4px',
    },
    depthRed: {
      backgroundColor: 'rgba(255, 87, 87, 0.3)',
      borderRadius: '0 2px 2px 0',
    },
    depthGreen: {
      backgroundColor: 'rgba(63, 219, 151, 0.3)',
      borderRadius: '2px 0 0 2px',
    },
    bookDivider: {
      backgroundColor: '#6352ff',
      color: 'white',
      textAlign: 'center'as any,
      fontSize: '12px',
      padding: '5px 0',
      borderRadius: '4px',
      margin: '6px 0',
    },
    tabContent: {
      display: 'flex',
      marginTop: '10px',
    },
    tabContentItem: {
      backgroundColor: theme === 'dark' ? '#1d1d25' : '#e9ecef',
      borderRadius: '5px',
      padding: '8px 12px',
      marginRight: '5px',
      fontSize: '12px',
    },
    tabContentItemActive: {
      backgroundColor: '#6352ff',
      color: 'white',
    },
  };
};