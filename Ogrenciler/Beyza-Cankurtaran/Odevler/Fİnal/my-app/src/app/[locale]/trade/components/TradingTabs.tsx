import React from 'react';

interface TradingTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TradingTabs: React.FC<TradingTabsProps> = ({ activeTab, onTabChange }) => {
  const tabStyles = {
    tabBtn: {
      backgroundColor: 'transparent',
      border: 'none',
      color: '#6c757d',
      padding: '10px 15px',
      borderBottom: '2px solid transparent',
      cursor: 'pointer',
    },
    tabBtnActive: {
      color: '#fff',
      borderBottom: '2px solid #6352ff',
    }
  };

  return (
    <div className="d-flex border-bottom mb-3">
      <button 
        style={{...tabStyles.tabBtn, ...(activeTab === 'price' ? tabStyles.tabBtnActive : {})}} 
        onClick={() => onTabChange('price')}>
        Price Chart
      </button>
      <button 
        style={{...tabStyles.tabBtn, ...(activeTab === 'depth' ? tabStyles.tabBtnActive : {})}} 
        onClick={() => onTabChange('depth')}>
        Depth Chart
      </button>
      <button 
        style={{...tabStyles.tabBtn, ...(activeTab === 'trades' ? tabStyles.tabBtnActive : {})}} 
        onClick={() => onTabChange('trades')}>
        Recent Trades
      </button>
    </div>
  );
};

export default TradingTabs;