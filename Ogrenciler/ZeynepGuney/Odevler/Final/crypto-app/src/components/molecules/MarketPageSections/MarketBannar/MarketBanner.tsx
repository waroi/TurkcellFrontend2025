'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../../context/ThemeContext';

import styles from './MarketBanner.module.scss';

type MarketBannerProps = {
    imageUrl: string;
    altText?: string;
};

const MarketBanner= () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <section className={styles.marketBanner}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h1 className={`${styles.title} ${theme === 'dark' ? styles.dark : styles.light}`}>{t('market.title')}</h1>
                    <p className={`${styles.description}`}>
                        {t('market.description')} <span className={`${styles.span} ${theme === 'dark' ? styles.dark : styles.light}`}>{'$1.86T'}</span>
                    </p>
                </div>
                <div className={styles.imageContent}>
                    <img
                        src={theme === 'dark' ? '/assets/marketBanner.svg' : '/assets/marketBanner2.svg'}
                        alt="FreeMoney"
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
};

export default MarketBanner;
