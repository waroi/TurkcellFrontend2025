# CyrptoApp - Kripto Para Alım Satım Platformu

CyrptoApp, kullanıcıların sanal ortamda kripto para alım-satım işlemleri gerçekleştirebildiği, modern ve kullanıcı dostu bir web uygulamasıdır.  
Bu proje, **Turkcell Gençlere Yazılım Geleceğe Yatırım 4.0 Frontend Bootcamp** kapsamında **final proje ödevi** olarak geliştirilmiştir.

## Özellikler

- ✅ Kullanıcı Kayıt / Giriş (Firebase Auth)
- 💸 Binance Testnet ile Al-Sat İşlemleri
- 🌐 Gerçek zamanlı Coin verileri (CoinMarketCap & CoinGecko API)
- ⭐ Favori Coin Sistemi
- 💼 Cüzdan ve Bakiye Takibi
- 🌓 Işık / Karanlık Tema Desteği
- 🌍 Çoklu Dil Desteği (EN / TR)
- 📱 Tüm cihazlara uyumlu responsive tasarım

## Tasarım Kaynağı

Uygulama arayüzü aşağıdaki Figma tasarımı baz alınarak birebir kodlanmıştır:  
🔗 [Figma Tasarımı](https://www.figma.com/file/ORNEK-LINK/crypto-exchange-design?type=design)

## Kullanılan Teknolojiler

- Next.js (App Router)
- TypeScript
- Firebase (Auth & Firestore)
- Zustand (Global State)
- SCSS + Bootstrap 5
- Formik & Yup (Form yönetimi)
- CoinGecko / CoinMarketCap API
- Binance Testnet API
- next-intl (Çoklu dil yönetimi)

## Kurulum

```bash
git clone https://github.com/kullanici-adi/crypto-project.git
cd crypto-project
npm install
```

`.env.local` dosyasına gerekli API anahtarlarını girin:

```env
NEXT_PUBLIC_CMC_API_KEY=...
NEXT_PUBLIC_FIREBASE_API_KEY=...
```

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

## Canlı Demo

🔗 [Vercel'de Görüntüle](https://cyrptoapp.vercel.app)

## Geliştirici

**Sedanur Ceylan**  
📧 sdnrcyln2@gmail.com  
🔗 [LinkedIn Profilim](https://www.linkedin.com/in/sedanur-ceylan)

## Lisans

Bu proje, eğitim ve tanıtım amaçlıdır.  
Her hakkı geliştiricisine aittir.
