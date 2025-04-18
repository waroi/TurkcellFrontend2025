'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './FreeMoney.module.scss';
import { useTheme } from '../../../context/ThemeContext';

const FreeMoney = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <section className={`${styles.freemoney} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={styles.contentWrapper}>


                    <div className={styles.textContainer}>
                        <h2 className={`${styles.title} ${theme === 'dark' ? styles.dark : styles.light}`}>
                            {t('FreeMoney.titleKey.stepLabel')}
                        </h2>

                        <p className={`${styles.subtitle} ${theme === 'dark' ? styles.dark : styles.light}`}>
                            {t('FreeMoney.descriptionKey.description')}
                        </p>

                        <div className={styles.steps}>
                            {['0', '1'].map((index) => {
                                const item = t(`FreeMoney.items.${index}`, { returnObjects: true }) as {
                                    titleKey: { title: string };
                                    descriptionKey: { description: string };
                                };
                                return (
                                    <div className={styles.step} key={index}>
                                        <div className={`${styles.stepTitle} ${theme === 'dark' ? styles.dark : styles.light}`}>
                                            <img src="/assets/tick.svg" alt="√" />
                                            {item.titleKey.title}
                                        </div>
                                        <div className={`${styles.stepDesc} ${theme === 'dark' ? styles.dark : styles.light}`}>
                                            {item.descriptionKey.description}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <img src="/assets/Play-Light.svg" alt="" />
                    </div>
                    <div className={styles.imageContainer}>
                        <img
                            src={theme === 'dark' ? '/assets/freemoney2.svg' : '/assets/freemoney.svg'}
                            alt="FreeMoney"
                            className={styles.image}
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FreeMoney;
