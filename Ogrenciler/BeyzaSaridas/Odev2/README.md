# Oyun Yönetim Uygulaması

Bu proje, kullanıcıların oyun ekleyip düzenleyebileceği, oyunları filtreleyip sıralayabileceği bir oyun yönetim uygulamasıdır. Uygulama, oyunların listesini görüntüler, oyun ekleme/düzenleme/silme işlemleri yapmanıza olanak tanır. Ayrıca, oyunları kategori, isim veya geliştiriciye göre filtreleyebilir ve sıralayabilirsiniz.

## Özellikler

- **Oyun Ekleme/Düzenleme/Silme**: Yeni oyunlar ekleyebilir, mevcut oyunları düzenleyebilir veya silebilirsiniz.
- **Oyun Listeleme**: Oyunlar kategorilerine göre listelenir.
- **Filtreleme**: Oyunlar isim, kategori veya geliştiriciye göre filtrelenebilir.
- **Sıralama**: Oyunlar belirli bir kritere göre sıralanabilir.
- **Arama**: Arama kutusuyla oyunlar aranabilir.
- **Modal Görünüm**: Oyun eklemek veya düzenlemek için bir modal penceresi kullanılır.

## Kurulum
 ```bash
    npm install -g json-server
    json-server --watch db.json --port 3000
    ```
OR
   npm run serve 
   go to the live server

## Kullanım

- Oyun eklemek için **"Oyun Ekle"** butonuna tıklayın.
- Oyun düzenlemek için oyun kartındaki **"Düzenle"** butonuna tıklayın.
- Oyun silmek için oyun kartındaki **"Sil"** butonuna tıklayın.
- Oyunları filtrelemek için sağ üst köşedeki **arama kutusunu** kullanabilirsiniz.
- Oyunları kategoriye göre filtrelemek için kategori seçeneğini değiştirebilirsiniz.
- Oyunları sıralamak için sıralama seçeneğini kullanabilirsiniz.

## Teknolojiler

- **HTML**: Sayfa yapısı ve içerik.
- **CSS**: Tasarım ve stil.
- **JavaScript**: Oyun verilerini yönetmek, filtreleme, sıralama ve olay işleme.
- **DOM Manipülasyonu**: HTML elemanlarıyla etkileşim kurmak ve içerik güncellemeleri yapmak.
- **Fetch API**: Sunucudan veri almak ve sunucuya veri göndermek için kullanılan JavaScript API'si.
- **JSON Server**: Sahte bir REST API oluşturmak için kullanılan bir araç, veri yönetimi için.
- **Bootstrap**: Uygulamanın tasarımında kullanılan popüler bir CSS framework'ü.
- **Debounce**: Kullanıcı girişlerini optimize etmek ve aşırı sorgulama yapmamayı sağlamak için kullanılan bir JavaScript fonksiyonu.
