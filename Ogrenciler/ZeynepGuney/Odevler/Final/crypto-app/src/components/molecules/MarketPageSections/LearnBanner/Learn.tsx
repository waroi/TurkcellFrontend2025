import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@/context/ThemeContext';
import styles from './Learn.module.scss';
import Button from '../../../atoms/Button/Button';

const Learn: React.FC = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <section className={styles.learnSection}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>{t('learn.title')}</h1>
                    <p className={styles.description}>{t('learn.description')}</p>
                </div>

                <div className={styles.videoCards}>
                    <div className={styles.videoCard}>
                        <div className={styles.videoCardPlaceholder}>
                            <img
                                src="/assets/video.svg"
                                alt="Video"
                                className={styles.videoThumbnail}
                            />
                        </div>
                        <div className={styles.cardButton}>
                            <Button className={styles.customButton}>{t('learn.button')}</Button>
                        </div>
                        <h3 className={styles.cardTitle}>{t('learn.cardTitle')}</h3>
                        <div className={styles.authorDateContainer}>
                            <div className={styles.greenDot}></div>
                            <div className={styles.authorDate}>
                                <span className={styles.author}>Floyd Buckridgee</span>
                                <span className={styles.date}>{t('learn.date')}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.videoCard}>
                        <div className={styles.videoCardPlaceholder}>
                            <img
                                src="/assets/video.svg"
                                alt="Video"
                                className={styles.videoThumbnail}
                            />
                        </div>
                        <div className={styles.cardButton}>
                            <Button className={styles.customButton}>{t('learn.button')}</Button>
                        </div>
                        <h3 className={styles.cardTitle}>{t('learn.cardTitle')}</h3>
                        <div className={styles.authorDateContainer}>
                            <div className={styles.greenDot}></div>
                            <div className={styles.authorDate}>
                                <span className={styles.author}>Floyd Buckridgee</span>
                                <span className={styles.date}>{t('learn.date')}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.videoCard}>
                        <div className={styles.videoCardPlaceholder}>
                            <img
                                src="/assets/video.svg"
                                alt="Video"
                                className={styles.videoThumbnail}
                            />
                        </div>
                        <div className={styles.cardButton}>
                            <Button className={styles.customButton}>{t('learn.button')}</Button>
                        </div>
                        <h3 className={styles.cardTitle}>{t('learn.cardTitle')}</h3>
                        <div className={styles.authorDateContainer}>
                            <div className={styles.greenDot}></div>
                            <div className={styles.authorDate}>
                                <span className={styles.author}>Floyd Buckridgee</span>
                                <span className={styles.date}>{t('learn.date')}</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.loadDiv}>
                    <Button className={`${styles.loadButton} ${theme === 'dark' ? styles.dark : styles.light}`}>
                        <img
                            src={theme === 'dark' ? '/assets/LoadDark.svg' : '/assets/LoadLight.svg'}
                            alt="Load icon"
                            className={styles.loadIcon}
                        />
                        {t('learn.loadButton')}
                    </Button>

                </div>
            </div>
        </section>
    );
};

export default Learn;
