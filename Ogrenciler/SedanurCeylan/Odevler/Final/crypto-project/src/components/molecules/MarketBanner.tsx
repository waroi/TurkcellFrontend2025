'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const MarketBanner = () => {
    const t = useTranslations('');

    return (
        <div className="row align-items-center g-4 py-4 pb-lg-8">
            <div className="col-lg-6 text-lg-start text-center">
                <h1 className="fw-bold mb-3">{t('market_banner_title')}</h1>
                <p className=" mb-0">
                    {t('market_banner_desc')}
                    <b> $1.86T</b></p>

            </div>

            <div className="col-lg-6 text-center">
                <Image
                    src="/market.png"
                    alt="market"
                    width={478}
                    height={340}
                    className="img-fluid"
                />
            </div>
        </div>
    );
};

export default MarketBanner;
