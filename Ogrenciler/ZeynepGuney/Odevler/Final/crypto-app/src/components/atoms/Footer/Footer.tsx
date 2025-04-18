'use client';

import React from 'react';
import styles from './Footer.module.scss';
import { useTheme } from '@/context/ThemeContext';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { theme } = useTheme();
    const { t } = useTranslation();

    const columns = ['products', 'services', 'support', 'about'];

    return (
        <div>
            <footer className={`${styles.footer} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={styles.top}>
                    <div className={styles.left}>
                        <div className={styles.logo}>
                            <img src={theme === 'dark' ? '/assets/Logo2.svg' : '/assets/Logo.svg'} alt="Rocket Logo" />
                        </div>
                        <h3 className={styles.title}>{t('Footer.title')}</h3>
                        <p>+98 902 353 2926</p>
                        <p>Sinahosseini379@Gmail.Com</p>
                        <p>Copyright © 2023 {t('Footer.rights')}</p>
                    </div>

                    <div className={styles.columns}>
                        {columns.map((colKey) => {
                            const items = t(`Footer.columns.${colKey}.items`, { returnObjects: true });

                            return (
                                <div key={colKey}>
                                    <h4>{t(`Footer.columns.${colKey}.title`)}</h4>
                                    <ul>
                                        {Array.isArray(items) ? (
                                            items.map((item, i: number) => (
                                                <li key={i}>{typeof item === 'string' ? item : JSON.stringify(item)}</li>
                                            ))
                                        ) : (
                                            <li>{typeof items === 'object' ? JSON.stringify(items) : items}</li>
                                        )}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </footer>
            <div className={`${styles.bottom} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
                    <p>Copyright © 2023 {t('Footer.rights')}</p>
                    <div className={styles.socials}>
                        <img src="/assets/Social.svg" alt="Instagram" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;
