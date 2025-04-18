import CryptoCard from './CryptoCard';

function TopMarket() {
  const topCryptos = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 38447.54,
      change: 2.0,
      data: Array.from({ length: 20 }, () => ({ value: Math.random() * 100 })),
    },
    {
      name: 'Binance',
      symbol: 'BNB',
      price: 527.81,
      change: -1.4,
      data: Array.from({ length: 20 }, () => ({ value: Math.random() * 100 })),
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: 2871.65,
      change: 3.2,
      data: Array.from({ length: 20 }, () => ({ value: Math.random() * 100 })),
    },
    {
      name: 'XRP',
      symbol: 'XRP',
      price: 0.6234,
      change: -0.8,
      data: Array.from({ length: 20 }, () => ({ value: Math.random() * 100 })),
    },
  ];

  return (
    <div className="top-market-wrapper py-5">
      <div className="container">
        <h6 className="text-primary text-center">Top Market</h6>
        <h1 className="text-center mb-4">Get Various Crypto Coin</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 my-5">
          {topCryptos.map((crypto, index) => (
            <div key={index} className="col">
              <CryptoCard {...crypto} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopMarket;
