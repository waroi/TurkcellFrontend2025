'use client';
import { CryptoCurrency } from '../app/services/cryptoApi';
import MiniSparkline from '../app/[locale]/market/components/MiniSparkline';
import "../app/[locale]/home.css"
interface CryptoCardProps {
  topCryptos: CryptoCurrency[];
  theme: string;
}

const CryptoCard = ({ topCryptos, theme }: CryptoCardProps) => {
  // Helper function to format currency amounts
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: value < 1 ? 6 : 2
    }).format(value);
  };

  return (
    <div className={`card mb-4 ${theme === 'dark' ? 'bg-blue text-white' : 'bg-white text-dark'}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title">Cryptocurrency Prices by Market Cap</h5>
          <div className="d-flex">
            <div className="dropdown me-2">
              <button className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'} dropdown-toggle`} type="button">
                USD <i className="bi bi-chevron-down"></i>
              </button>
            </div>
            <div className="dropdown">
              <button className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'} dropdown-toggle`} type="button">
                24h <i className="bi bi-chevron-down"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          {topCryptos.map((crypto) => (
            <div className="col-md-3" key={crypto.id}>
              <div className="d-flex align-items-center mb-2">
                <img src={crypto.image} alt={crypto.name} width="24" height="24" className="me-2" />
                <span>{crypto.name}</span>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h5>{formatCurrency(crypto.current_price)}</h5>
                <MiniSparkline 
                  data={crypto.sparkline_in_7d.price} 
                  priceChange={crypto.price_change_percentage_24h} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;