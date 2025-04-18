'use client'

import { useTheme } from '@/contexts/ThemeContext';
import { useLocale } from 'next-intl';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const TradingView = () => {
    const { theme } = useTheme()
    const locale = useLocale()

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://s3.tradingview.com/tv.js'
        script.async = true;
        script.onload = () => {
            new (window as any).TradingView.widget({
                width: "100%",
                height: 600,
                symbol: 'BITSTAMP:BTCUSD',
                interval: '180',
                timezone: "Europe/Istanbul",
                theme,
                style: '1',
                locale,
                allow_symbol_change: true,
                toolbar_bg: '#f1f3f6',
                enable_publishing: false,
                studies: ['MASimple@tv-basicstudies'],
                container_id: 'tradingview_widget',
            });
        };
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [theme, locale])

    return (
        <div>
            <div id="tradingview_widget" style={{ height: '600px', width: '100%' }} />
        </div>
    )
}

export default dynamic(() => Promise.resolve(TradingView), { ssr: false })