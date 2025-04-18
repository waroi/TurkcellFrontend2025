# Rockie - Kripto Para Borsası Uygulaması

[Canlı Demo](https://rockie-app.vercel.app/tr)

## 🚀 Proje Hakkında

**Rockie**, kullanıcıların kripto para piyasasını takip edebildiği, hesap oluşturup giriş yapabildiği, teması değiştirilebilen ve çok dilli desteğe sahip modern bir kripto para borsası uygulamasıdır.

### ✅ Yapılan Özellikler

- ⚡ **Anasayfa**: Popüler kripto para birimlerinin güncel fiyatlarını ve canlı grafiklerini gösterir.
- 👤 **Kullanıcı Girişi ve Kayıt**: Firebase Authentication kullanılarak hesap oluşturma, giriş yapma ve şifre değiştirme işlemleri yapılabilir.
- 🎨 **Tasarım**: Tüm sayfalar Figma tasarımlarına **pixel-perfect** olarak uyarlanmıştır.
- 🌗 **Tema Desteği**: Koyu ve açık mod desteği mevcuttur. Kullanıcı temalar arasında geçiş yapabilir.
- 🌐 **Dil Desteği**: Uygulama, i18n altyapısıyla Türkçe ve İngilizce olmak üzere iki dilde kullanılabilir.
- 📱 **Responsive**: Tüm ekran boyutlarına uygun olarak responsive şekilde tasarlanmıştır.
-  **$ Kripto Para Logoları**: Kripto logoları dinamik olarak bir API endpoint üzerinden alınmaktadır.
- 👛 **Cüzdan Sayfası**: Kullanıcının sahip olduğu kripto para birimleri ve değerleri (statik olarak) görüntülenebilir.

### ❌ Eksik Olan Özellikler

#### 🏦 Market Sayfası
- Kripto paraların listelenmesi
- Alım-satım işlemleri için arayüz
- Sıralama, filtreleme ve arama işlemleri

#### 🔄 Trade Sayfası
- Sahte (simülasyon) alım-satım işlemleri


#### ⭐ Watchlist Sayfası
- Kullanıcılar favori kripto para birimlerini ekleyip takip edebilecek
- İzleme listesi arayüzü

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Açıklama |
|----------|----------|
| **Next.js 15** | Uygulama çatısı ve SSR/ISR desteği |
| **TypeScript** | Tip güvenliği ve gelişmiş editör desteği |
| **SCSS** | Stil yönetimi, özelleştirilmiş spacing ve tema değişkenleri |
| **Bootstrap 5** | Responsive grid sistemi ve hızlı UI geliştirme (opsiyonel olarak kullanıldı) |
| **Redux Toolkit** | Global state yönetimi |
| **Firebase Authentication** | Kullanıcı kimlik doğrulama işlemleri |
| **Supabase (opsiyonel)** | İleriye dönük veri yönetimi için |
| **Formik & Yup** | Form yönetimi ve validasyon |
| **i18n** | Çoklu dil desteği (Türkçe & İngilizce) |

---

## 📁 Proje Yapısı

Atomic design yapısı düzenlenecek. Api keyler env dosyasına alınacak.

