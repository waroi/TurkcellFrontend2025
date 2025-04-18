# Rocket Platform
🔗 Canlı Proje Linki: https://cryptorocket-g52znu98l-beyza-saridass-projects.vercel.app/

Rocket Platform, kullanıcıların kripto para alım-satımı yapabileceği, portföylerini yönetebileceği ve piyasa analizleri yapabileceği modern bir web uygulamasıdır. Bu proje, kullanıcı dostu bir arayüz ve güçlü bir altyapı ile geliştirilmiştir.

## 🚀 Proje Özeti

Bu proje, kullanıcıların:
- Kripto para alım-satımı yapmasını,
- Portföylerini görüntülemesini ve yönetmesini,
- Piyasa verilerini takip etmesini,
- Kullanıcı profillerini düzenlemesini,
- Çoklu dil desteği ile farklı dillerde uygulamayı kullanmasını sağlar.

## 🛠️ Kullanılan Teknolojiler

Projede aşağıdaki teknolojiler ve araçlar kullanılmıştır:

- **React**: Kullanıcı arayüzü geliştirme.
- **Next.js**: Sunucu tarafı render ve yönlendirme.
- **Firebase**: Kimlik doğrulama, veritabanı ve depolama.
- **TypeScript**: Tip güvenliği ve daha iyi geliştirme deneyimi.
- **Sass**: Gelişmiş CSS yazımı için.
- **i18next**: Çoklu dil desteği.
- **Lucide React**: İkon seti.
- **Chart.js**: Grafik ve veri görselleştirme.
- **React Hook Form**: Form yönetimi ve doğrulama.
- **Zod**: Form doğrulama için şema tabanlı doğrulama.

## 📂 Proje Yapısı

Proje dosya yapısı şu şekildedir:

```
crypto-exchange/
├── src/
│   ├── app/                # Sayfa rotaları
│   ├── components/         # Yeniden kullanılabilir bileşenler
│   ├── lib/                # Firebase servisleri ve yardımcı fonksiyonlar
│   ├── styles/             # Global ve bileşen bazlı stiller
│   ├── i18n/               # Çoklu dil desteği için çeviri dosyaları
│   └── context/            # Uygulama genelinde kullanılan context'ler
├── public/                 # Statik dosyalar (resimler, ikonlar vb.)
├── .env.local              # Firebase ve diğer çevresel değişkenler
├── next.config.js          # Next.js yapılandırması
├── package.json            # Proje bağımlılıkları ve script'ler
└── README.md               # Proje dokümantasyonu
```

## 🔧 Kurulum ve Çalıştırma

Bu projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin:

### 1. Gerekli Bağımlılıkları Yükleyin
Proje bağımlılıklarını yüklemek için aşağıdaki komutu çalıştırın:
```bash
npm install
```

### 2. Çevresel Değişkenleri Ayarlayın
Proje, Firebase gibi hizmetler için çevresel değişkenlere ihtiyaç duyar. `env.local` dosyasını oluşturun ve aşağıdaki bilgileri ekleyin:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_FIREBASE_APP_ID
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
```

### 3. Geliştirme Sunucusunu Başlatın
Projeyi geliştirme modunda çalıştırmak için:
```bash
npm run dev
```
Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresine giderek projeyi görüntüleyebilirsiniz.

### 4. Üretim için Derleme
Projeyi üretim ortamı için derlemek için:
```bash
npm run build
```

### 5. Üretim Sunucusunu Çalıştırma
Üretim modunda projeyi çalıştırmak için:
```bash
npm start
```

### 6. Gerekli Paketler
Projede kullanılan önemli bağımlılıkların listesi:
- `react`
- `next`
- `firebase`
- `typescript`
- `sass`
- `i18next`
- `react-i18next`
- `lucide-react`
- `chart.js`
- `react-hook-form`
- `zod`

Eğer bağımlılıkları manuel olarak yüklemek isterseniz:
```bash
npm install react next firebase typescript sass i18next react-i18next lucide-react chart.js react-hook-form zod
```

## 📚 Özellikler

- **Kullanıcı Girişi ve Kayıt**: Firebase kimlik doğrulama ile güvenli giriş ve kayıt.
- **Portföy Yönetimi**: Kullanıcıların kripto varlıklarını görüntüleme ve yönetme.
- **Piyasa Verileri**: Güncel piyasa fiyatları ve değişim oranları.
- **Dil Desteği**: Türkçe ve İngilizce dahil olmak üzere çoklu dil desteği.
- **Tema Seçimi**: Karanlık ve aydınlık mod desteği.
- **Şifre Değiştirme**: Kullanıcıların şifrelerini değiştirebilmesi.

## 📸 Ekran Görüntüleri

### Ana Sayfa
![Ana Sayfa](public/homepage.png)

### Kullanıcı Profili
![Kullanıcı Profili](public/user-profile.png)

### Portföy
![Portföy](public/portfolio.png)

## 🤝 Katkıda Bulunma

Katkıda bulunmak isterseniz, lütfen bir **pull request** gönderin veya bir **issue** açın. Her türlü katkı memnuniyetle karşılanır!

## 📄 Lisans

Bu proje MIT Lisansı ile lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına göz atabilirsiniz.

---

Herhangi bir sorunuz olursa, lütfen benimle iletişime geçmekten çekinmeyin! 😊