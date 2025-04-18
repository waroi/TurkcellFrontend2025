# Kripto Para Borsası Uygulaması

Bu proje, [Next.js](https://nextjs.org) kullanılarak geliştirilmiş kapsamlı bir kripto para alım satım platformudur.

Uygulamayı Canlı Olarak Görüntülemek için [Vercel Linki](yunus-rocket-crypto-six.vercel.app)

## Proje Hakkında

Bu Proje, Turkcell’in "Gençlere Yatırım Geleceğe Yazılım 4.0 - Frontend Bootcamp" programı final ödevi kapsamında, verilen [Figma tasarımı](https://www.figma.com/design/98DqPAzFuthisWLaeTG7B6/cryptocurrency-exchange-in-light-mood-and-Dark-mood--Community-?node-id=2680-54312&t=UDuV2ZXEQIoilHh8-0) referans alınarak hayata geçirilmiş, tam özellikli bir kripto para alım satım platformudur. Uygulama, kullanıcıların güncel piyasa verilerine erişmesinin yanı sıra, gelişmiş alım satım araçları ve kişiselleştirilmiş bir deneyim sunar.

## Kullanılan Teknolojiler

- **Next.js 15 (App Router)**: Güçlü ve performanslı frontend geliştirme çatısı.
- **TypeScript**: Güvenli ve ölçeklenebilir JavaScript geliştirme için statik tip kontrolü.
- **SCSS + Bootstrap 5**: Modüler ve responsive arayüz geliştirme için stil ve bileşen kütüphanesi.
- **Firebase Authentication**: Güvenli kullanıcı kayıt, giriş ve yetkilendirme işlemleri.
- **Firebase Firestore**: Kullanıcı verilerini (profil bilgileri, favoriler vb.) saklamak için NoSQL bulut veritabanı.
- **i18n (çoklu dil desteği)**: Tamamen entegre Türkçe ve İngilizce dil seçenekleri.
- **Formik + Yup (form validasyonu)**: Güçlü ve kullanıcı dostu form yönetimi ve doğrulama kütüphanesi.
- **CoinGecko API**: Gerçek zamanlı ve doğru kripto para piyasa verileri.
- **Zustand**: Basit ve güçlü state yönetimi kütüphanesi (kullanıcı bilgileri ve tema gibi global durumlar için).
- **TradingView**: Kapsamlı ve canlı kripto para grafiklerini görüntülemek için entegre edilmiş widget.
- **Auth Provider**: Özel yetkilendirme mekanizması.
- **Responsive tasarım**: Tüm cihazlarda (masaüstü, tablet, mobil) kusursuz kullanıcı deneyimi (%100 uyumluluk).
- **Dark/Light Tema**: Kullanıcının tercihine göre değiştirilebilir karanlık ve aydınlık tema seçenekleri.

## Proje Özellikleri

- **Kullanıcı Kayıt ve Giriş Sistemi**: Firebase Authentication ile güvenli kullanıcı hesabı oluşturma ve yönetimi.
- **Gelişmiş Yetkilendirme (Auth Provider)**: Özel olarak implement edilmiş yetkilendirme katmanı.
- **Gerçek Zamanlı Piyasa Verileri (CoinGecko API)**: Kripto paraların anlık fiyatları, değişim oranları ve diğer önemli verileri.
- **Canlı TradingView Grafikleri**: Kripto paraların geçmiş ve anlık fiyat hareketlerini detaylı olarak gösteren interaktif grafikler.
- **Al-Sat Paneli**: Kullanıcıların kolayca kripto para alım satım işlemleri yapabileceği kullanıcı dostu arayüz.
- **Coinleri Favorileme Özelliği**: Kullanıcıların ilgilendikleri kripto paraları favorilerine ekleyebilme ve takip edebilme imkanı.
- **Profil Sayfası**: Kullanıcının kişisel bilgilerini görüntüleyebileceği ve güncelleyebileceği sayfa.
- **Kullanıcı Bilgilerini Güncelleme**: Profil sayfasında kullanıcının ad, soyad gibi bilgilerini Firebase Firestore üzerinden güncelleyebilme.
- **Türkçe & İngilizce Dil Seçeneği**: Uygulamanın tüm metinlerinin Türkçe ve İngilizce olarak görüntülenebilmesi.
- **Formik ve Yup ile Kontrollü Formlar**: Kullanıcı giriş, kayıt ve profil güncelleme gibi formlarda veri doğruluğunu sağlayan güçlü validasyon.
- **Zustand ile Global State Yönetimi**: Uygulama genelinde (kullanıcı bilgileri, tema durumu vb.) kolay ve etkili state yönetimi.
- **Dark/Light Tema**: Kullanıcının tercihine göre dinamik olarak değiştirilebilen görsel tema.
- **%100 Responsive Tasarım**: Farklı ekran boyutlarına ve cihazlara tam uyumluluk.
- **Firebase Firestore Kayıt**: Kullanıcı profil bilgilerinin güvenli bir şekilde Firebase Firestore veritabanına kaydedilmesi.
- **Dashboard**: Kullanıcının genel bakışını, favori coinlerini ve diğer önemli bilgileri içeren özel panel.

## Projeyi Yerel Ortamda Çalıştırmak İçin

1. **Depoyu Klonlayın**:

   ```bash
   git clone https://github.com/yunusorak/rocket-crypto
   cd rocket-crypto
   ```

2. **Bağımlılıkları Yükleyin**:

   ```bash
   npm install
   ```


3. **Geliştirme Sunucusunu Başlatın**:

   ```bash
   npm run dev
   ```

4. Tarayıcınızda `http://localhost:3000` adresine giderek uygulamayı görüntüleyin. Sass hatası alırsanız npm i sass komutuyla devam edin.