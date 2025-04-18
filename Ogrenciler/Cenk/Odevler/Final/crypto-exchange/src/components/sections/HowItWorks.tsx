'use client';
import Image from 'next/image';
import styles from '@/styles/components/sections/HowItWorks.module.scss';

const steps = [
  {
    icon: '/icons/step1-download.svg',
    title: 'Download',
    description: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.',
  },
  {
    icon: '/icons/step2-wallet.svg',
    title: 'Connect Wallet',
    description: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.',
  },
  {
    icon: '/icons/step3-trade.svg',
    title: 'Start Trading',
    description: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.',
  },
  {
    icon: '/icons/step4-earn.svg',
    title: 'Earn Money',
    description: 'Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.',
  },
];

const HowItWorks = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>How It Work</h2>
      <p className={styles.subtitle}>
        Stacks is a production-ready library of stackable content blocks built in React Native.
      </p>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div className={styles.step} key={index}>
            <Image src={step.icon} alt={step.title} width={80} height={80} />
            <p className={styles.stepLabel}>STEP {index + 1}</p>
            <h4>{step.title}</h4>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
