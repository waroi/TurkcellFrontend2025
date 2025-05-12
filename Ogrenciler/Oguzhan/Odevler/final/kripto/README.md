# TR

# Next.js Kripto İşlem Platformu

Gerçek zamanlı piyasa verileri, portföy takibi ve izleme listesi özellikleri olan bir kripto para simülatörü. Next.js App Router, Firebase ve Zustand ile geliştirilmiştir.

## Özellikler

- 🚀 **Gerçek Zamanlı Piyasa Verileri**  
  CoinGecko API kullanılarak canlı kripto para fiyatları
- 💾 **Durum Yönetimi**  
  İstemci tarafı durumu için Zustand depoları (portföy, izleme listesi, kimlik doğrulama, işlem)
- 🔥 **Firebase Entegrasyonu**  
  Kullanıcı kimlik doğrulama ve kalıcı veri depolama (Firestore)
- 📊 **İşlem Özellikleri**  
  Bakiye takibi ile sanal alım/satım işlemleri
- ⭐ **İzleme Listesi Sistemi**  
  Favori coin'lerin anlık takibi

## Uygulama İş Akışı

**Adım Adım Akış:**

1. **Kullanıcı Etkileşimi**  
   Örnek: "İzleme Listesine Ekle" butonuna tıklama  
   Kullanıcı arayüzü, Zustand deposundaki ilgili fonksiyonu tetikler (`addToWatchlist`)

2. **Durum Yönetimi**  
   Zustand deposu Firebase servisini çağırır (`watchlistService.addToWatchlist()`)

3. **Veri İşlemleri**  
   Servis Firestore'da gerekli güncellemeleri yapar  
   Başarılı olursa deposu günceller

4. **Arayüz Yenileme**  
   Depodaki değişiklikler otomatik olarak arayüze yansır

## Projeyi Çalıştırma

1. **Depoyu Klonlayın**

   ```bash
   git clone [depo-url]

   ```

2. **Bağımlılıkları Yükleyin**
   npm install

3. **Ortam Değişkenlerini Ayarlayın**
   Proje kök dizininde .env.local dosyası oluşturun ve ekleyin:

   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=1:
   NEXT_PUBLIC_COINMARKETCAP_API_KEY=

4. **Projeyi Çalıştırın**
   npm run dev

   http://localhost:3000 adresini açın!

# EN (English is below)

# Next.js Crypto Trading Platform

A cryptocurrency trading simulator with real-time market data, portfolio tracking, and watchlist features. Built with Next.js App Router, Firebase, and Zustand.

## Features

- 🚀 **Real-time Market Data**  
  Live cryptocurrency prices using CoinGecko API
- 💾 **State Management**  
  Zustand stores for client-side state (portfolio, watchlist, auth, trade)
- 🔥 **Firebase Integration**  
  User authentication and persistent data storage with Firestore
- 📊 **Trading Features**  
  Buy/sell simulated transactions with balance tracking
- ⭐ **Watchlist System**  
  Favorite coins tracking with instant updates

## Application Workflow

**Step-by-Step Flow:**

1. **User Interaction**  
   Example: Clicking "Add to Watchlist" button  
   UI triggers the relevant function in Zustand store (`addToWatchlist`)

2. **State Management**  
   Zustand store calls Firebase service (`watchlistService.addToWatchlist()`)

3. **Data Operations**  
   Service performs necessary updates in Firestore  
   If successful, updates the store

4. **UI Refresh**  
   Store changes automatically reflect in the UI

## How to Run This Project

1. **Clone repository**

   ```bash
   git clone

   ```

2. **Install dependencies**
   npm install

3. **Set environment variables**
   Create .env.local in the project root and add:

   NEXT_PUBLIC_FIREBASE_API_KEY=
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
   NEXT_PUBLIC_FIREBASE_APP_ID=1:
   NEXT_PUBLIC_COINMARKETCAP_API_KEY=

4. **Run Project**
   npm run dev
