'use client';
import React from 'react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

// ----- CryptoIcon -----
interface CryptoIconProps {
  symbol: string;
  size?: number;
  className?: string;
}

const CryptoIcon: React.FC<CryptoIconProps> = ({ symbol, size = 24, className }) => {
  const lower = symbol.toLowerCase();
  const src = `https://cryptoicon-api.pages.dev/api/icon/${lower}`;
  return (
    <img
      src={src}
      alt={symbol}
      width={size}
      height={size}
      className={className}
      onError={(e) => (e.currentTarget.src = '/fallback.png')}
    />
  );
};

// ----- PercentageChange -----
interface PercentageChangeProps {
  change: number;
}

const PercentageChange: React.FC<PercentageChangeProps> = ({ change }) => {
  const isPositive = change >= 0;

  return (
    <div className={`d-flex align-items-center ${isPositive ? 'text-success' : 'text-danger'}`}>
      {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
      <span>{Math.abs(change)}%</span>
    </div>
  );
};

// ----- MiniChart -----
interface MiniChartProps {
  data: { value: number }[];
  isPositive: boolean;
}

const MiniChart: React.FC<MiniChartProps> = ({ data, isPositive }) => {
  return (
    <div style={{ height: '40px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <Line
            type="monotone"
            dataKey="value"
            stroke={isPositive ? '#198754' : '#dc3545'}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// ----- CryptoCard (Main) -----
interface CryptoCardProps {
  name: string;
  symbol: string;
  price: number;
  change: number;
  data: { value: number }[];
}

const CryptoCard: React.FC<CryptoCardProps> = ({ name, symbol, price, change, data }) => {
  const isPositive = change >= 0;

  return (
    <div className="card border-0 shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="d-flex align-items-center">
            <CryptoIcon symbol={symbol} size={28} className="me-2" />
            <h6 className="mb-0">{name}</h6>
          </div>
          <span className="text-muted text-uppercase">{symbol}</span>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="mb-0">${price.toLocaleString()}</h5>
          <PercentageChange change={change} />
        </div>
        <MiniChart data={data} isPositive={isPositive} />
      </div>
    </div>
  );
};

export default CryptoCard;
