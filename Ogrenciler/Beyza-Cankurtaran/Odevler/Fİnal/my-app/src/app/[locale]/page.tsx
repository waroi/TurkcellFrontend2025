"use client";
import "../[locale]/home.css";
import '../services/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from "react";
import { ThemeProvider, useTheme } from '../context/ThemeContext';
import Navbar from "../../components/Navbar";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import GetStartedSection from "../../components/GetStartedSection";
import TradeAnywhereSection from "@/components/TradeAnywhereSection";
import ServicesSection from "@/components/ServicesSection";
import InvestorSection from "@/components/InvestorSection";
import NewsletterSection from "@/components/NewsletterSection";
import CryptoPriceCards from "@/components/CryptoPriceCards";

function HomeContent() {
  
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  
  return (
    <>
      <Navbar />
      <Banner />
      <CryptoPriceCards  />
      <GetStartedSection />
      <TradeAnywhereSection />
      <ServicesSection />
      <InvestorSection />
      <NewsletterSection />
      <Footer />
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