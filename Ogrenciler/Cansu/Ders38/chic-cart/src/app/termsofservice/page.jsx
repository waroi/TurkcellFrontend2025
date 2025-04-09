import React from 'react';
import '../../styles/main.scss';


const TermsOfService = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Kullanım Şartları</h1>

      <p>
        Chic-Cart kullanıcıları olarak, platformumuzu kullanarak aşağıdaki şartları kabul etmektesiniz. 
        Bu şartlar, kullanıcılar ile Chic-Cart arasındaki ilişkiyi düzenlemektedir.
      </p>

      <h3 className="mt-4">1. Hesap Oluşturma ve Sorumluluklar</h3>
      <p>
        Chic-Cart'a üye olurken verdiğiniz tüm bilgiler doğru, eksiksiz ve güncel olmalıdır. Hesap bilgilerinizi gizli tutmak ve 
        hesabınızın güvenliğinden sorumlu olmak size aittir. Hesabınızın yetkisiz kullanımı sonucu oluşabilecek zararlar için Chic-Cart 
        sorumlu tutulamaz.
      </p>

      <h3 className="mt-4">2. Kullanıcı Davranışları</h3>
      <p>
        Chic-Cart platformu, kullanıcıların yasal ve etik kurallara uyarak alışveriş yapmasını hedefler. Platformda;
      </p>
      <ul>
        <li>Başka kullanıcıların haklarına tecavüz etmek, hakaret etmek, tehditte bulunmak yasaktır.</li>
        <li>Platformda satılan ürünlerin yasal olmayan içeriklere sahip olması, sahtecilik veya dolandırıcılık faaliyetleri yasaktır.</li>
        <li>Kişisel bilgileri toplamak, izinsiz reklam yapmak veya spam göndermek yasaktır.</li>
      </ul>

      <h3 className="mt-4">3. Siparişler ve Ödemeler</h3>
      <p>
        Chic-Cart üzerinden verilen tüm siparişler, platformun ödeme sistemi aracılığıyla gerçekleştirilir. Ödeme işlemleri güvenli 
        bir şekilde yapılır ve kişisel bilgileriniz korunur. Siparişlerinizi teslim alırken herhangi bir sorun olması durumunda 
        müşteri hizmetlerimizle iletişime geçebilirsiniz.
      </p>

      <h3 className="mt-4">4. Fiyatlandırma ve Ürün Bilgisi</h3>
      <p>
        Chic-Cart'ta listelenen ürünlerin fiyatları ve açıklamaları, ilgili satıcılar ve Chic-Cart tarafından belirlenmektedir. 
        Fiyatlar ve ürün bilgilerinde değişiklik yapılabilir ve bu tür değişiklikler önceden bildirilmeden yürürlüğe girebilir. 
        Kullanıcılar, ürün siparişi verirken mevcut fiyat ve özellikleri dikkate almalıdır.
      </p>

      <h3 className="mt-4">5. Fikri Mülkiyet</h3>
      <p>
        Chic-Cart'ın tüm içeriği (web sitesi, grafik tasarımlar, logo, metin, yazılım ve diğer materyaller) ticari markalar ve fikri 
        mülkiyet haklarıyla korunmaktadır. Kullanıcılar, Chic-Cart'ın içeriğini izinsiz olarak çoğaltamaz, dağıtamaz veya kullanamaz.
      </p>

      <h3 className="mt-4">6. İade ve İptal Politikası</h3>
      <p>
        Chic-Cart'ta satılan ürünlerin iade ve değişim politikaları ürün türüne göre farklılık gösterebilir. Satıcı tarafından belirlenen 
        iade süresi içinde iade talepleri yapılabilir. İade prosedürlerine uymayan ürünlerin iadesi kabul edilmez.
      </p>

      <h3 className="mt-4">7. Sorumluluk Reddi</h3>
      <p>
        Chic-Cart, kullanıcıların platformu kullanımından kaynaklanan herhangi bir zararı kabul etmez. Web sitesinde yer alan içeriklerin 
        doğruluğu, güncellenmesi ve güvenliği ile ilgili hiçbir garanti verilmemektedir.
      </p>

      <h3 className="mt-4">8. Değişiklikler</h3>
      <p>
        Chic-Cart, bu kullanım şartlarını herhangi bir zamanda değiştirme hakkına sahiptir. Kullanıcılar, şartlardaki değişiklikleri 
        bu sayfada gördüklerinde kabul etmiş sayılırlar. Bu şartlar zaman zaman güncellenebilir.
      </p>

      <h3 className="mt-4">9. İletişim</h3>
      <p>
        Kullanım şartları ile ilgili herhangi bir sorunuz veya öneriniz varsa, bizimle aşağıdaki iletişim bilgileri aracılığıyla 
        iletişime geçebilirsiniz:
      </p>
      <ul>
        <li>Email: <a href="mailto:destek@chiccart.com">destek@chiccart.com</a></li>
        <li>Telefon: +90 212 345 67 89</li>
      </ul>

  
    </div>
  );
};

export default TermsOfService;
