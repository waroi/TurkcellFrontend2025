'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './WhatIsRockie.module.scss';
import { useTheme } from '../../../context/ThemeContext';
import Button from '../../atoms/Button/Button';

const WhatIsRockie = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageStackWrapper}>
          <img src="/assets/rockie3.svg" alt="Image 3" className={styles.image3} />
          <img src="/assets/rockie2.svg" alt="Image 2" className={styles.image2} />
          <img src="/assets/rockie1.svg" alt="Image 1" className={styles.image1} />
        </div>

        <div className={styles.textContainer}>
          <h2 className={`${styles.title} ${theme === 'dark' ? styles.dark : styles.light}`}>
            {t('WhatIsRockie.titleKey.stepLabel')}
          </h2>

          <p className={`${styles.subtitle} ${theme === 'dark' ? styles.dark : styles.light}`}>
            {t('WhatIsRockie.descriptionKey.description')}
          </p>

          <div className={styles.steps}>
            {['0', '1'].map((index) => {
              const item = t(`WhatIsRockie.items.${index}`, { returnObjects: true }) as {
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

          <Button className={`${styles.button} ${theme === 'dark' ? styles.dark : styles.light}`}>
            {t('WhatIsRockie.button')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhatIsRockie;
