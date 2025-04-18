"use client";

import { useEffect, Suspense } from "react";
import dynamic from 'next/dynamic';
import "../[locale]/home.css";
import { ThemeProvider } from '../context/ThemeContext';

import '../services/firebase';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";

const LoadingSpinner = () => <div className="text-center py-4">Loading...</div>;

const CryptoPriceCards = dynamic(() => import("@/components/CryptoPriceCards"), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

const GetStartedSection = dynamic(() => import("../../components/GetStartedSection"), {
  loading: () => <LoadingSpinner />,
  ssr: true
});

const TradeAnywhereSection = dynamic(() => import("@/components/TradeAnywhereSection"), {
  loading: () => <LoadingSpinner />,
  ssr: false 
});

const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const InvestorSection = dynamic(() => import("@/components/InvestorSection"), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const NewsletterSection = dynamic(() => import("@/components/NewsletterSection"), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

const Footer = dynamic(() => import("../../components/Footer"), {
  loading: () => <LoadingSpinner />,
  ssr: false
});

function HomeContent() {
  useEffect(() => {
    const loadBootstrap = async () => {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    };
    
    if (window.requestIdleCallback) {
      window.requestIdleCallback(loadBootstrap);
    } else {
      setTimeout(loadBootstrap, 1000);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<LoadingSpinner />}>
        <CryptoPriceCards />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <GetStartedSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <TradeAnywhereSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <InvestorSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <NewsletterSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <HomeContent />
    </ThemeProvider>
  );
}