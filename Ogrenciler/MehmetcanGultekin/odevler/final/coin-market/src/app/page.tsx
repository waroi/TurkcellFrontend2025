'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.scss';
import Button from '@/components/atoms/Button/Button';
import { useRouter } from 'next/navigation';
import MarketUpdate from '@/components/molecules/MarketUpdate/MarketUpdate';

export default function Home() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/pages/register');
  };

  return (
    <main>
      <section className={`${styles.heroSection} container-fluid`}>
        <div className={`container`}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className={` flex-column`}>
                <h1 className={styles.heading}>Buy & Sell Digital Assets In The Rocket</h1>
                <p className={styles.subheading}>
                  Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.
                </p>
                <Button 
                  variant="primary" 
                  size="lg" 
                  className={` flex-start rounded-pill `}
                  onClick={handleGetStarted}
                >
                  Get started now
                </Button>
                
                <div className={`mt-5`}>
                  <h5 className={styles.partnersHeading}>Our Partners</h5>
                  <div className={`d-flex gap-4`}>
                    <div className={styles.partnerLogo}>
                      <Image 
                        src="/ProfitWell.svg"
                        alt="ProfitWell" 
                        width={120} 
                        height={40} 
                      />
                    </div>
                    <div className={styles.partnerLogo}>
                      <Image 
                        src="/ShipBob.svg" 
                        alt="ShipBob" 
                        width={120} 
                        height={40} 
                      />
                    </div>
                    <div className={styles.partnerLogo}>
                      <Image 
                        src="/Subbly.svg" 
                        alt="Subbly" 
                        width={120} 
                        height={40} 
                      />
                    </div>
                    <div className={styles.partnerLogo}>
                      <Image 
                        src="/demio.svg" 
                        alt="Demio" 
                        width={120} 
                        height={40} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <div>
                <Image
                  src="/IMG.svg"
                  alt="Crypto Illustration"
                  width={570}
                  height={448}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.marketSection} container`}>
        <MarketUpdate />
      </section>
    </main>
  );
}
