'use client';

import React, { useEffect, useRef } from 'react';
import styles from './TradingViewChart.module.scss';


interface TradingViewWidgetProps {
    symbol: string;
    interval: string;
    theme: string;
    locale: string;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({ symbol, interval, theme, locale }) => {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            autosize: false,
            symbol,
            interval,
            timezone: "Etc/UTC",
            theme,
            style: "1",
            locale,
            allow_symbol_change: true,
            support_host: "https://www.tradingview.com",
        });

        container.appendChild(script);

        return () => {
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
        };
    }, [symbol, interval, theme, locale]);

    return (
        <div
            className={`tradingview-widget-container ${styles.tradingviewWidgetContainer}`}
            ref={containerRef}

        />
    );
};

export default TradingViewWidget;
