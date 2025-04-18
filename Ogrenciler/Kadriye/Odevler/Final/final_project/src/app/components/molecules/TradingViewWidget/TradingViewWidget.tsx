"use client"
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget({ index, symbol, width = 80, height = 28 }: { index: number, symbol: string, width?: number, height?: number }) {
    const container = useRef(React);

    useEffect(() => {
        // Script'i yüklemek için fonksiyon
        const loadTradingViewWidget = () => {
            const script = document.createElement('script');
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
            script.async = true;
            script.innerHTML = JSON.stringify({
                symbol: "CRYPTOCAP:" + symbol,
                width: width,
                height: height,
                locale: "en",
                dateRange: "1D",
                colorTheme: "light",
                isTransparent: true,
                autosize: true,
                chartOnly: true,
                largeChartUrl: "",
                noTimeScale: true
            });
            document.getElementById('tradingview-widget-' + index)?.appendChild(script);
        };

        loadTradingViewWidget();
    }, []);

    return (
        <div id={"tradingview-widget-" + index} className="tradingview-widget-container"></div>
    );
}

export default memo(TradingViewWidget);