This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Karşılaştığım Sorunlar

- Formik client tarafında çalıştığı için use client kullanmam gerekiyormuş

- Layout.tsx te font import ettim ama bootstrapin üzerine yazamıyorum tek yapmam gereken. Bootstrap importundan sonra global.css importunu yazmam gerekiyormuş.

- yeni bir type yazarken react.fc ile yazmak doğrudan tanımdan daha güvenli bir yolmuş. 

- formiki ayırıp 



# Kripto Para Borsası

## Proje Tasarımı

- Kullanılacak:
  https://www.figma.com/design/98DqPAzFuthisWLaeTG7B6/cryptocurrency-exchange-in-light-mood-and-Dark-mood--Community-?node-id=2680-54312&t=UDuV2ZXEQIoilHh8-0

- Esinlenilecek:
  https://www.figma.com/design/GAf84WJAFR8x0Xve64Kgjk/Crypto-Planet---Crypto-Trading-Exchange-UI-Template-In-Figma--Community-?node-id=2-3&p=f

## Al-Sat endpointi

https://testnet.binance.vision/
https://coinmarketcap.com/

## Proje Detayı

- Proje, kripto para borsası uygulamasıdır.
- Anasayfada kripto para birimlerinin fiyatları ve grafiklerini gösterir.
- Market sayfasında kullanıcılar kripto para birimlerini alıp satabilirler, listeler ve grafikler görüntüleyebilirler, sıralayabiilir, filtreleyebilir, arama yapabilirler.
- Kullanıcılar hesap oluşturabilir, giriş yapabilir ve şifrelerini sıfırlayabilirler.
- Trade sayfasında fake alım satım yapılacak, grafikler görüntülenecek (trading view grafikleri kullanılabilir) ve kullanıcılar alım satım yapabilecekler.
- Kullanıcılar favori kripto para birimlerini (watchlist) ekleyebilir ve takip edebilirler.
- Portfolio sayfasında kullanıcıların sahip olduğu kripto para birimlerini ve değerlerini görüntüleyebilirler.
- Geri kalan sayfalar statik olacak ama tasarıma pixel perfect uygun olmalıdır.
- Proje, responsive tasarıma sahip olmalıdır.
- Koyu ve açık tema olacak.
- Proje, dark mode ve light mode arasında geçiş yapabilmelidir.
- İki farklı dil seçeneği olacak (Türkçe ve İngilizce). i18n kullanılabilir.
- Kripto para birimi logolarını bir endpointden alalım.

## Teknolojiler

- Next.js
- Bootstrap - opsiyonel
- Scss
- Redux Toolkit veya Zustand
- Firebase Authentication (veya başka bir auth provider) ve Supabase (veya başka bir veri tabanı) kullanılabilir.
- TypeScript
- Formik ve Yup
- i18n

## Değerlendirme Kriterleri

- Ligthouse metriklerine göre %85 ve üzeri puan alması gerekmektedir.
- Vercel'e depyol ediecek.
- Proje, Github üzerinde versiyon kontrolü ile takip edilecek. Branching yapısı kullanalım.
- Mümkünse giti patlatmayalım.
- Clean kod yazılmalı.
- Solid prensiplerine uygun olmalı.
- Tasarım kurallarına uygun olmalı.
- Proje, responsive tasarıma sahip olmalı.


