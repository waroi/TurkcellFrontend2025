# Burçier

**Burçier**, burç temalı ürünler satan bir e-ticaret platformudur. Ziyaretçiler burçlarına özel ürünleri kolayca keşfedebilir ve satın alabilirler. Burçlarla ilgilenen herkes için eşsiz bir alışveriş deneyimi sunuyoruz. 

## Slogan

> **"Tekrar dünyaya gelecek olsaydınız hangi burcu seçerdiniz?"**

---

## Özellikler

- **Burçlara Özel Ürünler:** Her burca hitap eden benzersiz tasarımlar.
- **Kullanıcı Dostu Arayüz:** Şık ve modern tasarımla kolayca ürün bulma.
- **Güvenli Ödeme Sistemleri:** Tüm işlemler güvenli bir şekilde gerçekleştirilir.
- **Hızlı Kargo:** Siparişleriniz kısa sürede teslim edilir.
- **Kategoriler:** Her burç için çeşitli tanımlı özellikler ve fiyatlar.

---

## Kurulum

Bu projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

### Gerekli Teknolojiler
- .NET Framework veya .NET Core
- SQL Server (veya uyumlu bir veritabanı)
- Visual Studio (veya benzeri bir IDE)

### Adımlar

1. **Projeyi Klonlayın**
   ```bash
   git clone https://github.com/kullaniciadi/burcier.git
   ```

2. **Gerekli Bağımlılıkları Yükleyin**
   ```bash
   cd burcier
   dotnet restore
   ```

3. **Veritabanı Bağlantısını Yapılandırın**
   - `appsettings.json` dosyasındaki `ConnectionStrings` bölümünü düzenleyin.

4. **Veritabanını Güncelleyin**
   ```bash
   dotnet ef database update
   ```

5. **Projeyi Çalıştırın**
   ```bash
   dotnet run
   ```

---

## Kullanım

- **Burç Seçimi:** Ana sayfadan kendi burcunuzu seçin.
- **Ürün Keşfi:** Burcunuza uygun ürünleri kolayca görüntüleyin.
- **Sepet ve Satın Alma:** Beğendiğiniz ürünleri sepete ekleyerek güvenli ödeme yöntemleriyle satın alın.

---

## Katkıda Bulunun

Katkıda bulunmak için aşağıdaki adımları izleyebilirsiniz:

1. **Proje Fork Edin**
2. Kendi branch'inizde değişiklik yapın.
3. Pull Request gönderin.

---

## Lisans

Bu proje [MIT Lisansı](LICENSE) ile lisanslanmıştır.

---

## İletişim

Daha fazla bilgi veya destek için bizimle iletişime geçin:

- **E-posta:** saridas.beyzaa@gmail.com
- **Websitesi:** [www.burcier.com](http://www.burcier.com)
