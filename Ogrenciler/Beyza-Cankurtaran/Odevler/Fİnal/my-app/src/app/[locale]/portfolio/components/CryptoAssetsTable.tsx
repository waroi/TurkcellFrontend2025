import React, { useState } from 'react';

interface CryptoAsset {
  id: number;
  name: string;
  symbol: string;
  icon: string;
  price: number;
  secondaryPrice: number;
  amount: number;
  avgBuy: number;
  holdings: number;
  profit: number;
  profitPercentage: number;
  change: 'positive' | 'negative';
}

interface SortConfig {
  key: keyof CryptoAsset | null;
  direction: 'ascending' | 'descending';
}

const CryptoAssetsTable = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('Month');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: 'ascending' });
  
  const cryptoAssets: CryptoAsset[] = [
    { id: 1, name: 'Bitcoin', symbol: 'BTC', icon: '₿', price: 43318.64, secondaryPrice: 38235.25, amount: 0, avgBuy: 0.10565, holdings: 10.12, profit: 43318.64, profitPercentage: 0.80, change: 'positive' },
    { id: 2, name: 'XRP', symbol: 'XRP', icon: 'X', price: 0.00917, secondaryPrice: 0.01773, amount: 0, avgBuy: 150, holdings: 10.12, profit: 120.00, profitPercentage: 3.60, change: 'positive' },
    { id: 3, name: 'Litecoin', symbol: 'LTC', icon: 'Ł', price: 43318.64, secondaryPrice: 38235.25, amount: 0, avgBuy: 5, holdings: 10.12, profit: -43318.64, profitPercentage: -1.80, change: 'negative' },
    { id: 4, name: 'Stellar', symbol: 'XLM', icon: 'S', price: 43318.64, secondaryPrice: 38235.25, amount: 0, avgBuy: 258, holdings: 10.12, profit: 43318.64, profitPercentage: 3.80, change: 'positive' },
    { id: 5, name: 'Polkadot', symbol: 'DOT', icon: 'P', price: 43318.64, secondaryPrice: 38235.25, amount: 0, avgBuy: 3, holdings: 10.12, profit: -43318.64, profitPercentage: -1.80, change: 'negative' },
    { id: 6, name: 'Polygon', symbol: 'MATIC', icon: 'M', price: 0.00917, secondaryPrice: 0.01773, amount: 0, avgBuy: 10, holdings: 10.12, profit: 120.00, profitPercentage: 3.60, change: 'positive' },
  ];
  
  const getCoinIcon = (name: string) => {
    const iconColors = {
      'Bitcoin': 'bg-warning',
      'XRP': 'bg-primary',
      'Litecoin': 'bg-secondary',
      'Stellar': 'bg-info',
      'Polkadot': 'bg-danger',
      'Polygon': 'bg-purple',
    };
    
    const iconSymbols = {
      'Bitcoin': '₿',
      'XRP': 'X',
      'Litecoin': 'Ł',
      'Stellar': 'S',
      'Polkadot': 'P',
      'Polygon': 'M',
    };
    
    const bgColor = iconColors[name as keyof typeof iconColors] || 'bg-secondary';
const symbol = iconSymbols[name as keyof typeof iconSymbols] || '?';

    
    return (
      <div className={`d-flex align-items-center justify-content-center rounded-circle ${bgColor} text-white`} style={{ width: '32px', height: '32px' }}>
        {symbol}
      </div>
    );
  };

  const handleSort = (key: keyof CryptoAsset) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const sortedAssets = [...cryptoAssets].sort((a, b) => {
    if (sortConfig.key === null) return 0;
    
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const getSortIcon = (columnName: keyof CryptoAsset) => {
    if (sortConfig.key !== columnName) return null;
    return sortConfig.direction === 'ascending' ? '↑' : '↓';
  };

  return (
    <div className="card bg-dark text-light mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="card-title">Coin Allocation</h2>
          <div className="d-flex align-items-center gap-2">
            <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle" type="button" id="timeframeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-calendar me-2"></i>
                {selectedTimeframe}
              </button>
              <ul className="dropdown-menu" aria-labelledby="timeframeDropdown">
                <li><button className="dropdown-item" onClick={() => setSelectedTimeframe('Day')}>Day</button></li>
                <li><button className="dropdown-item" onClick={() => setSelectedTimeframe('Week')}>Week</button></li>
                <li><button className="dropdown-item" onClick={() => setSelectedTimeframe('Month')}>Month</button></li>
                <li><button className="dropdown-item" onClick={() => setSelectedTimeframe('Year')}>Year</button></li>
              </ul>
            </div>
            <button className="btn btn-secondary"><i className="bi bi-grid"></i></button>
            <button className="btn btn-secondary"><i className="bi bi-three-dots-vertical"></i></button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table table-dark table-hover">
            <thead>
              <tr className="text-secondary border-bottom border-secondary">
                <th onClick={() => handleSort('name')} className="cursor-pointer">
                  <div className="d-flex align-items-center">
                    Pair / Holdings {getSortIcon('name')}
                  </div>
                </th>
                <th>In Order Qty</th>
                <th onClick={() => handleSort('price')} className="cursor-pointer">
                  <div className="d-flex align-items-center">
                    Price / Avg Buy {getSortIcon('price')}
                  </div>
                </th>
                <th onClick={() => handleSort('holdings')} className="cursor-pointer">
                  <div className="d-flex align-items-center">
                    Holdings Assets {getSortIcon('holdings')}
                  </div>
                </th>
                <th>Total Asset Value</th>
                <th onClick={() => handleSort('profit')} className="cursor-pointer">
                  <div className="d-flex align-items-center">
                    Profit / Loss {getSortIcon('profit')}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedAssets.map((asset) => (
                <tr key={asset.id} className="border-bottom border-secondary">
                  <td>
                    <div className="d-flex align-items-center">
                      {getCoinIcon(asset.name)}
                      <div className="ms-3">
                        <div>{asset.name}</div>
                        <div className="text-secondary small">{asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-secondary">{asset.amount}</td>
                  <td>
                    <div>${asset.price.toLocaleString()}</div>
                    <div className="text-secondary small">${asset.secondaryPrice.toLocaleString()}</div>
                  </td>
                  <td>
                    <div>{asset.avgBuy}</div>
                  </td>
                  <td>
                    <div>${asset.holdings.toLocaleString()}</div>
                    <div className="text-secondary small">$10.00</div>
                  </td>
                  <td>
                    <div className={`d-flex align-items-center ${asset.change === 'positive' ? 'text-success' : 'text-danger'}`}>
                      <span className="me-1">{asset.change === 'positive' ? '+' : '−'} ${Math.abs(asset.profit).toLocaleString()}</span>
                      <i className={`bi ${asset.change === 'positive' ? 'bi-arrow-up' : 'bi-arrow-down'}`}></i>
                    </div>
                    <div className={`small ${asset.change === 'positive' ? 'text-success' : 'text-danger'}`}>
                      {asset.change === 'positive' ? '+' : '−'}{Math.abs(asset.profitPercentage).toFixed(2)}%
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3 text-secondary">
          <div>52 assets</div>
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item">
                <button className="page-link bg-dark text-light border-secondary">
                  <i className="bi bi-chevron-left"></i>
                </button>
              </li>
              <li className="page-item active">
                <button className="page-link bg-primary text-white">1</button>
              </li>
              <li className="page-item">
                <button className="page-link bg-dark text-light border-secondary">2</button>
              </li>
              <li className="page-item disabled">
                <button className="page-link bg-dark text-light border-secondary">...</button>
              </li>
              <li className="page-item">
                <button className="page-link bg-dark text-light border-secondary">6</button>
              </li>
              <li className="page-item">
                <button className="page-link bg-dark text-light border-secondary">
                  <i className="bi bi-chevron-right"></i>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CryptoAssetsTable;