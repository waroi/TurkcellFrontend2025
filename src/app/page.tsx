'use client';
import './styles/custom.scss';
import { useEffect } from "react";
import TopMaket from "./components/TopMaket";
import GetStartedSection from "./components/GetStartedSection";
import TradeAnywhere from './components/TradeAnywhereSection';
import BestService from './components/BestService';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import Banner from './components/Banner';

export default function Home() {
  useEffect(() => {
    const loadBootstrap = async () => {
      await import('bootstrap/dist/js/bootstrap.bundle.min.js');
    };
    const clearIndexedDB = async () => {
      const databases = await window.indexedDB.databases();
      databases.forEach(db => {
        if (db.name) window.indexedDB.deleteDatabase(db.name);
      });
    };

    loadBootstrap();
    clearIndexedDB();
  }, []);

  return (
    <>
      <Navbar />
      <Banner />
      <TopMaket />
      <GetStartedSection />
      <TradeAnywhere />
      <BestService />
      <Footer />
    </>
  );
}
