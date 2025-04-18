import React from "react";
import styles from "./FooterBanner.module.scss";
import Button from "../Button/Button";
import { useTheme } from '../../../context/ThemeContext';
import { useTranslation } from 'react-i18next';


const FooterBanner = () => {
    const { t } = useTranslation();
    const { theme } = useTheme();
    return (
        <section className={`${styles.banner} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
                <div className={styles.leftContent}>
                    <h3 className={`${styles.title} ${theme === 'dark' ? styles.dark : styles.light}`}>
                        {t('FooterBanner.title')}
                    </h3>
                    <p className={`${styles.description} ${theme === 'dark' ? styles.dark : styles.light}`}>
                        {t('FooterBanner.description')}
                    </p>
                </div>
                <div className={styles.rightContent}>
                    <Button
                        className={styles.footerButton} 
                        theme={theme}
                    >
                        {t('FooterBanner.button')}
                    </Button>


                </div>
            </div>
        </section>
    );
};

export default FooterBanner;
