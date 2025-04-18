'use client';

import React from "react";
import styles from "./HowItWork.module.scss";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../context/ThemeContext";

const steps = [
  {
    step: "step1",
    icon: "/assets/Step1.png",
    titleKey: "howItWork.step1.title",
    descKey: "howItWork.step1.desc",
  },
  {
    step: "step2",
    icon: "/assets/Step2.png",
    titleKey: "howItWork.step2.title",
    descKey: "howItWork.step2.desc",
  },
  {
    step: "step3",
    icon: "/assets/Step3.png",
    titleKey: "howItWork.step3.title",
    descKey: "howItWork.step3.desc",
  },
  {
    step: "step4",
    icon: "/assets/Step4.png",
    titleKey: "howItWork.step4.title",
    descKey: "howItWork.step4.desc",
  },
];

const HowItWork = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <section className={`${styles.howIt} ${theme === 'dark' ? styles.dark : styles.light}`}>
      <div className={`${styles.container} ${theme === 'dark' ? styles.dark : styles.light}`}>
        <h2 className={`${styles.title} ${theme === 'dark' ? styles.dark : styles.light}`}>{t("howItWork.title")}</h2>
        <p className={`${styles.subtitle} ${theme === 'dark' ? styles.dark : styles.light}`}>{t("howItWork.subtitle")}</p>

        <div className={styles.steps}>
          {steps.map((step, index) => (
            <React.Fragment key={step.step}>
              <div className={styles.step}>
                <img src={step.icon} alt={step.step} className={styles.icon} />
                <div className={`${styles.stepNumber} ${theme === 'dark' ? styles.dark : styles.light}`}>
                  {t(`howItWork.${step.step}.stepLabel`)}
                </div>
                <div className={`${styles.stepTitle} ${theme === 'dark' ? styles.dark : styles.light}`}>
                  {t(step.titleKey)}
                </div>
                <div className={`${styles.stepDesc} ${theme === 'dark' ? styles.dark : styles.light}`}>
                  {t(step.descKey)}
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className={styles.divider}>
                  <img src="/assets/divider.svg" alt="divider" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

    </section>
  );
};

export default HowItWork;
