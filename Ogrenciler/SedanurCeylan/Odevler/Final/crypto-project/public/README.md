# 🚀 CyrptoApp - Kripto Para Alım Satım Platformu

**CyrptoApp**, kullanıcıların güvenli ve hızlı bir şekilde kripto para alım-satımı yapabilmesini sağlayan modern ve responsif bir web uygulamasıdır.  
Bu proje, **Turkcell’in Gençlere Yazılım, Geleceğe Yatırım 4.0 Frontend Bootcamp** programı kapsamında hazırlanmış **final ödevidir**.  
Tüm sayfalar, verilen **Figma tasarımı** temel alınarak birebir geliştirilmiştir.

## 📐 Tasarım

Uygulama, aşağıdaki Figma tasarımı baz alınarak geliştirilmiştir:

👉 [Figma Tasarımı Görüntüle](https://www.figma.com/file/ORNEK-LINK/crypto-exchange-design?type=design&node-id=0%3A1)

## 🚀 Özellikler

- Kullanıcı Kayıt ve Giriş Sistemi (Firebase Authentication)
- Gerçek Zamanlı Coin Verileri (CoinGecko & CoinMarketCap API)
- Binance Testnet Entegrasyonu ile sanal alım-satım
- Favori Coin Sistemi
- USD Bakiye Takibi ve Cüzdan Görünümü
- Dark & Light Tema Desteği
- Responsive Tasarım
- Çok Dilli Destek (EN / TR)

## 🛠️ Kullanılan Teknolojiler

- Next.js (App Router)
- TypeScript
- Firebase (Auth & Firestore)
- Zustand – Global state yönetimi
- SCSS + Bootstrap 5 – Özel ve hızlı stil yönetimi
- Formik & Yup – Form doğrulama
- CoinGecko & CoinMarketCap API – Kripto verileri
- Binance Testnet API – Al-sat simülasyonu
- next-intl – Çoklu dil desteği

## 📁 Proje Yapısı

```
├── components/
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
├── pages/
│   ├── buy/
│   ├── sell/
│   ├── market/
│   └── wallet/
├── public/
│   └── images/
├── styles/
├── utils/
│   └── withAuth.tsx
├── lib/
│   ├── firebase.ts
│   └── coinApi.ts
```

## ⚙️ Kurulum

1. Depoyu klonlayın:

```bash
git clone https://github.com/kullanici-adi/crypto-project.git
cd crypto-project
```

2. Gerekli bağımlılıkları yükleyin:

```bash
npm install
```

3. Ortam değişkenlerini `.env.local` dosyasında tanımlayın:

```env
NEXT_PUBLIC_CMC_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_API_KEY=...
```

4. Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

## 🌐 Demo

Canlı görüntülemek için:  
🔗 [Vercel Linki](https://cyrptoapp.vercel.app)

## 👩‍💻 Katkıda Bulunan

- **Sedanur Ceylan** – [LinkedIn](https://www.linkedin.com/in/sedanur-ceylan)

## 📄 Lisans

Bu proje, **Turkcell Geleceği Yazanlar - Gençlere Yazılım, Geleceğe Yatırım 4.0 Frontend Bootcamp** kapsamında hazırlanan bir **final ödevidir**.  
Eğitim ve sunum amaçlı olarak geliştirilmiştir.
