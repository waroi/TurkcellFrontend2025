'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface TradingViewWidgetProps {
  symbol: string;
}

export const TradingViewWidget = ({ symbol }: TradingViewWidgetProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (containerRef.current && !containerRef.current.querySelector('script')) {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: `BINANCE:${symbol}`,
        interval: '15',
        timezone: 'Etc/UTC',
        theme: theme === 'dark' ? 'dark' : 'light',
        style: '1',
        locale: 'en',
        enable_publishing: false,
        backgroundColor: 'transparent',
        hide_top_toolbar: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
        support_host: 'https://www.tradingview.com',
      });
      containerRef.current.appendChild(script);
    }
  }, [symbol, theme]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
};