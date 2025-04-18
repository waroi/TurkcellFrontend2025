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

## Teslim Tarihi

18 Nisan 2025 - Saat 23:59
21 Nisan Sunum

## Adımlar

- boilerplate, kurulumlar,component yapıları, dosya yapıları.
- eslint config yapıldı, extention indirildi.
- next i18n ...
- store,dil desteği,sass, bootstrap,formik yup,
- firebase yapısı, api entegrasyonu
- dark-light mod en iyi kullanım kararı
- zustand theme toggler,
- buttonları kalıtım metodu ile oluşturma,
- ikon için api bulma
- sayfaları belirleme ve routing yapma
- bootstrap renklerin override halinin yazılması
- auth ve home pagelerin yapımı
- tradeview grafiklerin importu
- sayfaların pixel perfect hale getirilmesi
- diğer sayfalar
