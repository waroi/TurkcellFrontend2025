import React from 'react';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      <div className="container">
        <div className="hero">
          <h1 className="hero__title">
            Modern <span className="hero__title--highlight">Kripto Para</span> Borsası
          </h1>
          <p className="hero__subtitle">
            Güvenli, hızlı ve kullanıcı dostu bir platformda kripto para alım satımı yapın.
            En güncel fiyatları takip edin, portföyünüzü yönetin ve piyasaları analiz edin.
          </p>
          <div className="hero__buttons">
            <a href="/market" className="hero__button hero__button--primary">Piyasayı Görüntüle</a>
            <a href="/register" className="hero__button hero__button--secondary">Hesap Oluştur</a>
          </div>
        </div>
      </div>
    </Layout>
  );
}