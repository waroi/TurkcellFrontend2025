'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './OurCustomer.module.scss';
import { useTheme } from '../../../context/ThemeContext';

const OurCustomers = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <section className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.contentWrapper}>
                <div className={styles.leftSide}>
                    <h2 className={`${styles.title} ${theme === 'dark' ? styles.dark : styles.light}`}>
                        {t('OurCustomers.title')}
                    </h2>

                    <p className={`${styles.subtitle} ${theme === 'dark' ? styles.dark : styles.light}`}>
                        {t('OurCustomers.subtitle')}
                    </p>
                    <p className={`${styles.description} ${theme === 'dark' ? styles.dark : styles.light}`}>
                        {t('OurCustomers.description')}
                    </p>

                    <div className={`${styles.avatars} ${theme === 'dark' ? styles.dark : styles.light}`}>
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className={`${styles.avatar} ${theme === 'dark' ? styles.dark : styles.light}`}></div>
                        ))}

                    </div>
                    <span className={styles.reviewCount}>
                        <span className={styles.primaryText}>30+</span>{" "}
                        <span className={theme === 'dark' ? styles.darkText : styles.lightText}>
                            {t('OurCustomers.reviewLabel')}
                        </span>
                    </span>

                </div>

                <div className={styles.OurCustomersCard}>
                    <div className={styles.blueLine} />

                    <p className={styles.comment}>
                        {t('OurCustomers.comment')}
                    </p>

                    <div className={styles.footer}>
                        <div className={styles.reviewer}>
                            <div className={`${styles.avatar} ${theme === 'dark' ? styles.dark : styles.light}`}></div>
                            <div>
                                <p className={`${styles.reviewerName} ${theme === 'dark' ? styles.dark : styles.light}`}>Johnny Andro</p>
                                <p className={`${styles.reviewerRole} ${theme === 'dark' ? styles.dark : styles.light}`}>{t('OurCustomers.role')}</p>
                            </div>
                        </div>
                        <img
                            src={theme === 'dark' ? '/assets/Our-Logo-Dark.svg' : '/assets/Our-Logo-Light.svg'}
                            alt="Company Logo"
                            className={styles.logo}
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}
export default OurCustomers;