'use client';

import React, { useEffect } from 'react';
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "../components/organisms/Navbar/Navbar";
import '../../i18n';
import styles from './page.module.css'; 
import "../app/global.scss";
import { usePathname, useRouter } from "next/navigation";
import HomepageBanner from '@/components/organisms/HomePageBanner/HomepageBanner';
import MarketUpdateHeader from '@/components/molecules/MarketData/MarketUpdateHeader';
import MarketUpdate from '@/components/organisms/MarketUpdate/MarketUpdate';
import HowItWork from '@/components/molecules/HomePageSections/HowItWork';
import WhatIsRockie from '@/components/molecules/HomePageSections/WhatIsRockie';
import FreeMoney from '@/components/molecules/HomePageSections/FreeMoney';
import OurCustomers from '@/components/molecules/HomePageSections/OurCustomers';
import FooterBanner from '@/components/atoms/FooterBanner/FooterBanner';
import Footer from '@/components/atoms/Footer/Footer';
import useAuth from '@/hooks/useAuth';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const isLoginPage = pathname === "/login";
  useAuth();
  const isAuthenticated = typeof window !== "undefined" && localStorage.getItem("user");

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user && !isLoginPage) {
      router.push("/profile/user");
    }
  }, [pathname]);


  return (
    <ThemeProvider>
      {isLoginPage ? (
        <main>{children}</main>
      ) : (
        isAuthenticated && (
          <div>
            <Navbar />
            <HomepageBanner />
            <MarketUpdateHeader />
            <MarketUpdate 
              data={["BTC", "ETH", "BNB", "USDT", "SOL", "XRP", "ADA", "AVAX"]} 
            />
            <HowItWork />
            <WhatIsRockie />
            <FreeMoney />
            <OurCustomers />
            <FooterBanner />
            <Footer />
            <main>{children}</main>
          </div>
        )
      )}
    </ThemeProvider>
  );
}
