'use client';

import React from 'react';

interface MiniSparklineProps {
  data: number[];
  priceChange: number;
  width?: number;
  height?: number;
}

const MiniSparkline: React.FC<MiniSparklineProps> = ({ 
  data, 
  priceChange, 
  width = 120, 
  height = 40 
}) => {
  if (!data || data.length === 0) {
    return <div>No data</div>;
  }

  const isPositive = priceChange >= 0;
  const color = isPositive ? '#16c784' : '#ea3943';
  
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min;
  
  const points = data.map((value, index) => {
    const x = (index / (data.length - 1)) * width;
    const y = height - ((value - min) / range) * height;
    return `${x},${y}`;
  }).join(' ');

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1"
      />
    </svg>
  );
};

export default MiniSparkline;