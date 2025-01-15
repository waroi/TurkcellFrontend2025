# Bootstrap'a Giriş

Bootstrap, **mobile-first** (öncelikli olarak mobil uyumlu) olacak şekilde geliştirilmiş, duyarlı (responsive) bir front-end framework'tür. **HTML, CSS ve JavaScript** bileşenleri içerir.

---

## 📌 Temel Özellikler

- **Mobile-first** olarak tasarlanmıştır.
- **Grid sistemi** ile sayfa **12 sütuna** bölünebilir.
- **Flexbox** desteği sayesinde kolay hizalama ve düzenleme.
- **CSS ve JS bileşenleri** ile hazır UI elemanları içerir.
- **Özelleştirilebilir (Customizable)**: SCSS değişkenleri (`$variables.scss`) üzerinden özelleştirme imkanı sunar.
- **Bundle dosyaları** `dist` klasörü içerisinde yer alır.
- **JavaScript bileşenleri** `popper.js` gibi bağımlılıklar gerektirebilir:
  - Modal, pop-up gibi bileşenler için `popper.js` gereklidir.
  - Toast bildirimleri için ek import gereklidir.
- **Accessibility (Erişilebilirlik) standartlarına** uygundur.
- **RTL (Right to Left) desteği** bulunur (İbranice, Arapça gibi sağdan sola yazılan diller için).
- **Typography ve font yönetimi** duyarlı (responsive) şekilde çalışır.
- **Bootstrap Icons** ile dahili ikon setleri kullanılabilir.

---

## 🌐 Tarayıcı Destekleri  

Daha fazla bilgi için: [Browserslist GitHub](https://github.com/browserslist/browserslist#readme)

| Desteklenen Tarayıcılar | Minimum Sürüm |
|------------------------|--------------|
| **Chrome** | `>= 60` |
| **Firefox** | `>= 60` |
| **Firefox ESR** | `Evet` |
| **Safari** | `>= 12` |
| **iOS Safari** | `>= 12` |
| **Microsoft Edge** | `Son sürümler` |
| **Opera** | `Son sürümler` |
| **Internet Explorer** | ❌ **IE 11 ve altı desteklenmez** |

---

## 📏 Grid Sistemi ve Breakpoints  

Bootstrap’in **grid sistemi**, **12 sütunlu** bir yapıya sahiptir ve **Flexbox tabanlıdır**.

| Breakpoint | Class Infix | Min Boyut | Kullanım Alanı |
|------------|------------|-----------|----------------|
| **Extra Small** | (Yok) | `< 576px` | Küçük ekranlar (Mobil) |
| **Small** | `sm` | `≥ 576px` | Daha büyük telefonlar |
| **Medium** | `md` | `≥ 768px` | Tabletler |
| **Large** | `lg` | `≥ 992px` | Küçük dizüstü bilgisayarlar |
| **Extra Large** | `xl` | `≥ 1200px` | Masaüstü bilgisayarlar |
| **Extra Extra Large** | `xxl` | `≥ 1400px` | Büyük ekranlı cihazlar |

### ✅ Kullanım Örneği:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">Bu sütun, orta (md) ve üstü ekranlarda yarım genişlik kaplar.</div>
    <div class="col-md-6">Diğer sütun.</div>
  </div>
</div>
```

---

## 🎨 Diğer Özellikler  

### **🛠 Reboot (Varsayılan HTML Ayarlarını Sıfırlama)**
Bootstrap, tarayıcıların varsayılan HTML stillerini sıfırlar ve bir uyum sağlar.

### **✍ Typography (Yazı Tipi ve Başlıklar)**
Typography bileşeni, metinlerin başlık olarak tanımlanmasını ve font yapılandırmasını sağlar.  

📌 **Örnek: Büyük başlıklar için `display` sınıfları**:

```html
<h1 class="display-1">Hello, World</h1>
<h1 class="display-2">Hello, World</h1>
<h1 class="display-3">Hello, World</h1>
<h1 class="display-4">Hello, World</h1>
<h1 class="display-5">Hello, World</h1>
<h1 class="display-6">Hello, World</h1>
```

---

### **🖼 Görseller (Images)**
- **Responsive görüntüler** için `img-fluid` sınıfı kullanılır.
- **Köşeleri yuvarlatılmış thumbnail görselleri** için `img-thumbnail` kullanılır.

📌 **Örnek:**

```html
<img src="resim.jpg" class="img-fluid" alt="Duyarlı Resim">
<img src="resim.jpg" class="img-thumbnail" alt="Küçük Önizleme">
```

---

## 📊 Tablo Özellikleri  

Bootstrap, tabloları biçimlendirmek için birçok hazır sınıf sunar:

| **Sınıf** | **Açıklama** |
|-----------|-------------|
| `table` | Temel tablo biçimlendirmesi |
| `table-striped` | Satırları dönüşümlü olarak renklendirir |
| `table-hover` | Üzerine gelindiğinde satır vurgusu ekler |
| `table-dark` | Koyu tema tablosu oluşturur |

📌 **Örnek:**

```html
<table class="table table-striped table-hover table-dark">
  <thead>
    <tr>
      <th>#</th>
      <th>İsim</th>
      <th>Yaş</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Ahmet</td>
      <td>25</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Mehmet</td>
      <td>30</td>
    </tr>
  </tbody>
</table>
```

---

## 📋 Form Yapısı  

Bootstrap, formlar için modern ve duyarlı (responsive) bileşenler sunar.

📌 **Örnek:**

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email adresi</label>
    <input type="email" class="form-control" id="email" placeholder="Emailinizi girin">
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Şifre</label>
    <input type="password" class="form-control" id="password" placeholder="Şifrenizi girin">
  </div>
  <button type="submit" class="btn btn-primary">Gönder</button>
</form>
```

---

## 📚 Ekstra Kaynaklar  

- [🔗 Bootstrap Resmi Dokümantasyon](https://getbootstrap.com/)  
- [🔗 Bootstrap Icons](https://icons.getbootstrap.com/)  
- [🔗 Grid Sistemi](https://getbootstrap.com/docs/5.3/layout/grid/)  
- [🔗 Bileşenler](https://getbootstrap.com/docs/5.3/components/)  
- [🔗 JavaScript API](https://getbootstrap.com/docs/5.3/getting-started/javascript/)  

---

Bu doküman, Bootstrap kullanırken ihtiyacın olabilecek temel bilgileri kapsar. Gerektiğinde Bootstrap'in resmi dokümantasyonuna göz atabilirsin. 🚀

---
## 🚀🚀🚀🚀 AI kullanarak güçlendirilmiştir