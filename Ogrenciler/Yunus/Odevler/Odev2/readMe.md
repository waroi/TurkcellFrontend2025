# Oyun Arşivi Uygulaması

*`NOT` :Varol hocam selamlar, projeyi burada detaylı bir şekilde anlatmak istedim ve önemli bir not düşmem gerekiyor. 
**json-server --watch db.json** yani db.json dosyasını izlerken live serverda index.htmli çalıştırırsanız her işlem sonunda sayfayı yenilemektedir çok uğraştım ama nedenini bulamadım, sizden ricam json serverı başlattıktan sonra klasörden düz bir şekilde live server olmadan index.html'i denemeniz. Her şey için çok teşekkür ederim :)*

## Genel Bakış

Bu proje, kullanıcıların oyun bilgilerini ekleyebilecekleri, düzenleyebilecekleri ve silebilecekleri bir oyun arşivi uygulamasıdır. Projenin yapısı aşağıdaki gibidir:

## Proje Dosya Yapısı

### 1. **script.js**
- Bu dosya, projenin ana giriş noktasıdır, `DOMContentLoaded` olayı ile sayfanın yüklenmesi tamamlandığında çalışır.
- `GameArchive` ve `UI` sınıfları oluşturulur.
- Oyun ekleme, güncelleme, arama ve sıralama işlemleri için event listener'lar eklenir.

### 2. **ui.js**
- Bu dosya, kullanıcı arayüzü ile ilgili tüm işlemleri içerir.
- `renderGames()` metodu, oyunların ekrana basılmasını sağlar.
- `showFavGames()` metodu, kullanıcının favorilerine eklediği oyunları ekrana basar.
- `showNotification()` metodu, bildirimler göstermek için kullanılır.

### 3. **gamearchive.js**
- Bu dosya, oyun verileri ile ilgili tüm işlemleri içerir.
- `getAllGames()` metodu, tüm oyunları veri kaynağından çeker.
- `addGame()`, `updateGame()` ve `deleteGame()` metotları, sırasıyla yeni oyun ekleme, güncelleme ve silme işlemlerini yapar.
- `filterGames()` metodu, kullanıcının arama, filtreleme ve sıralama işlemlerini gerçekleştirir.
- `updateUI()` metodu, kullanıcı arayüzünü güncellemek ve resetlerl için `ui.js` dosyasındaki metotları çağırır.

### 4. **gameservice.js**
- Bu dosya, HTTP isteklelrini yönetmek için vardır.

### 5. **game.js**
- Bu dosya, oyun sınıfı oluşturmak için vardır.

### 6. **assets/scss**
- Bu klasör, Sass dosyalarını içerir.
- `_bt_overrides.scss` dosyası, Bootstrap'in varsayılan stillerinin üzerine yazılan özelleştirmeler yer alır.
- `main.scss` dosyası, tüm Sass dosyalarını içerir ve derlenerek `main.css` dosyasına çıktı verir.

### 7. **index.html**
- Bu dosya, projenin HTML yapısını içerir.
- Bootstrap ve Bootstrap Icons kütüphaneleri kullanılır.
- `script.js`, `ui.js`, `gamearchive.js` ve `game.js` dosyaları sayfaya dahil edilir. 

### 8. **data/db.json**
- Bu dosya, projenin veri kaynağını oluşturur.
- Oyun verilerini içerir ve `json-server` aracılığıyla iletişim kurmamıza olarak sağlar.

## Özellikler
- Kullanıcılar oyun bilgilerini ekleyebilir, güncelleyebilir ve silebilir.
- Oyunları favorilere ekleyebilir.
- Oyunları arayabilir, filtreleyebilir ve sıralayabilir.
- JSON Server kullanarak veri yönetimi sağlar.

## Kurulum
1. Projeyi klonlayın:
   ```sh
   git clone https://github.com/yunusorak/mini-game-archive
   ```
2. Bağımlılıkları yükleyin:
   ```sh
   npm install
   ```
3. JSON Server'ı çalıştırın:
   ```sh
   json-server --watch data/db.json
   ```
4. Tarayıcıda açın:
   ```sh
   index.html
   ```
**not2: `LÜTFEN JSON SERVERI BAŞLATTIKTAN SONRA INDEX.HTML'I LIVE SERVERDA AÇMAYIN DÜZ BİR ŞEKİLDE KLASÖRDEN AÇIN`**

## İlk büyük readMe.md dosya hazırlamam o yüzden anlamadıysanız kusura bakmayın lütfen, iyi günler :)   