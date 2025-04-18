import React, { useEffect, useRef } from 'react';
import styles from '../styles/Trading.module.css';
import { PriceDataPoint, TimeFrame } from '../types/crypto';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
  ChartOptions
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface CryptoChartProps {
  data: PriceDataPoint[];
  timeframe: TimeFrame;
  onTimeframeChange: (timeframe: TimeFrame) => void;
  coinName: string;
  loading: boolean;
}

const CryptoChart: React.FC<CryptoChartProps> = ({
  data,
  timeframe,
  onTimeframeChange,
  coinName,
  loading
}) => {
  const formatDate = (timestamp: number): string => {
    const date = new Date(timestamp);
    return `${date.getDate()} ${date.toLocaleString('default', { month: 'short' })}`;
  };

  const chartData = {
    labels: data.map(item => formatDate(item.timestamp)),
    datasets: [
      {
        label: `${coinName} Price`,
        data: data.map(item => item.close), 
        borderColor: '#26de81',
        backgroundColor: 'rgba(38, 222, 129, 0.1)',
        borderWidth: 2,
        pointRadius: 0,
        fill: true,
      }
    ]
  };
  
  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(context) {
            const index = context.dataIndex;
            const dataPoint = data[index];
            if (!dataPoint) return [];
            
            return [
              `Open: $${dataPoint.open.toFixed(2)}`,
              `High: $${dataPoint.high.toFixed(2)}`,
              `Low: $${dataPoint.low.toFixed(2)}`,
              `Close: $${dataPoint.close.toFixed(2)}`
            ];
          }
        }
      }
    },
    scales: {
      x: {
        grid: { 
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#aaa',
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 10,
        }
      },
      y: {
        position: 'right',
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#aaa',
          callback: function(value) {
            return '$' + value;
          }
        }
      }
    }
  };

  const renderCandlesticks = () => {
    if (!data.length) return null;
    
    const allValues = data.flatMap(d => [d.high, d.low, d.open, d.close]);
    const minValue = Math.min(...allValues);
    const maxValue = Math.max(...allValues);
    const valueRange = maxValue - minValue;
    
    const scaleY = (value: number) => 100 - ((value - minValue) / valueRange * 80 + 10);
    
    const candleWidth = 100 / data.length * 0.6;
    const spacing = 100 / data.length;
    
    return (
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.candlestickChart}>
        {data.map((item, index) => {
          const x = index * spacing + spacing / 2;
          const isUp = item.close >= item.open;
          const candleColor = isUp ? "#26de81" : "#ff5252";
          
          const openY = scaleY(item.open);
          const closeY = scaleY(item.close);
          const highY = scaleY(item.high);
          const lowY = scaleY(item.low);
          
          return (
            <g key={index}>
              <line 
                x1={x} 
                y1={highY} 
                x2={x} 
                y2={lowY} 
                stroke={candleColor} 
                strokeWidth="0.5" 
              />
              
              <rect 
                x={x - candleWidth / 2} 
                y={Math.min(openY, closeY)}
                width={candleWidth}
                height={Math.abs(closeY - openY) || 0.5} 
                fill={candleColor} 
              />
            </g>
          );
        })}
      </svg>
    );
  };

  return (
    <div className={`${styles.cryptoChart} card bg-dark text-light`}>
      <div className="card-header d-flex justify-content-between align-items-center">
        <h2>{coinName} to USD Chart</h2>
        <div className="btn-group">
          <button 
            className={`btn ${timeframe === '24h' ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => onTimeframeChange('24h')}
          >
            24h
          </button>
          <button 
            className={`btn ${timeframe === '7d' ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => onTimeframeChange('7d')}
          >
            7d
          </button>
          <button 
            className={`btn ${timeframe === '30d' ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => onTimeframeChange('30d')}
          >
            30d
          </button>
        </div>
      </div>
      <div className={`card-body ${styles.chartContainer}`}>
        {loading ? (
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className={styles.chartWrapper}>
            <Line data={chartData} options={options} />
            <div className={styles.candlestickOverlay}>
              {renderCandlesticks()}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoChart;
