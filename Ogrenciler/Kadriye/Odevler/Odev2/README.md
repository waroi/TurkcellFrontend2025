# Game Book Application 📟

Bu proje, oyunlarınızı yönetmenizi sağlayan bir web uygulamasıdır. İlginizi çeken oyunları ekleyebilir, güncelleyebilir ve listeleyebilirsiniz.

## Özellikler 💥

- Oyun bilgilerini ekleyebilme
- Oyun bilgilerini güncelleyebilme
- Oyunları listeleme ve arama
- Filtreleme ve sıralama seçenekleri

## Proje Yapısı

- `src/`: Kaynak dosyalar
  - `index.html`: Ana HTML dosyası
  - `styles`: Stil dosyaları
    - `scss` : Scss dosyaları
    - `css` : Css dosyaları
  - `app.js`: Ana JavaScript dosyası
  - `services/`: API hizmet dosyaları
    - `jsonServiceApi.js`: JSON Server ile iletişimi yöneten dosya
  - `ui/`: Kullanıcı arayüzü bileşenleri
    - `card.js`: Oyun kartı bileşeni
    - `modal.js`: Modal bileşeni

## Kullanılan Teknolojiler 🎇

- HTML
- CSS
- Bootstrap
- JavaScript
- Json-Server 0.17.4

Projede host http://localhost:3000 olarak kullanılmıştır. Eğer değiştirmek isterseiz services/jsonServiceApi.js içerisindeki değerleri güncelleyiniz.
