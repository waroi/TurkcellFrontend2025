import React from 'react';
import '../../styles/main.scss';

const PrivacyPolicy = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Gizlilik Politikası</h1>

      <p>
        Chic-Cart olarak, kullanıcılarımızın gizliliğini ve kişisel verilerinin güvenliğini son derece önemsiyoruz. Bu Gizlilik Politikası, 
        kişisel bilgilerinizi nasıl topladığımızı, kullandığımızı, paylaştığımızı ve koruduğumuzu açıkça belirtir.
      </p>

      <h3 className="mt-4">1. Topladığımız Bilgiler</h3>
      <p>
        Chic-Cart, kullanıcılarından çeşitli durumlarda bazı kişisel bilgiler toplayabilir. Bu bilgiler şunları içerebilir:
      </p>
      <ul>
        <li><strong>Ad ve Soyad:</strong> Kullanıcıların kayıt sırasında sağladıkları ad ve soyad bilgisi.</li>
        <li><strong>E-posta Adresi:</strong> Hesap oluştururken kullanılan e-posta adresi.</li>
        <li><strong>Telefon Numarası:</strong> Kullanıcıların sipariş veya müşteri hizmetleri desteği için sağladığı telefon numarası.</li>
        <li><strong>Adres:</strong> Siparişlerin teslim edilmesi için gerekli adres bilgisi.</li>
        <li><strong>Ödeme Bilgileri:</strong> Ödeme işlemleri sırasında kullanılan kredi kartı bilgileri ve fatura bilgileri.</li>
      </ul>

      <h3 className="mt-4">2. Bilgilerinizin Kullanımı</h3>
      <p>
        Topladığımız kişisel veriler, aşağıdaki amaçlar için kullanılacaktır:
      </p>
      <ul>
        <li>Siparişlerinizi işlemek ve teslimat yapmak.</li>
        <li>Hesap yönetimi ve müşteri hizmetleri desteği sağlamak.</li>
        <li>Ödeme işlemlerini gerçekleştirmek ve güvenliğini sağlamak.</li>
        <li>Pazarlama ve reklam faaliyetlerini kişiselleştirmek.</li>
        <li>Hizmetlerimizi geliştirmek ve kullanıcı deneyimini iyileştirmek.</li>
      </ul>

      <h3 className="mt-4">3. Bilgilerinizin Paylaşımı</h3>
      <p>
        Chic-Cart, kullanıcıların kişisel bilgilerini üçüncü şahıslarla sadece aşağıdaki durumlarda paylaşır:
      </p>
      <ul>
        <li>Ödeme işlemleri için ödeme sağlayıcıları ile.</li>
        <li>Hukuki zorunluluklar altında devlet yetkililerine.</li>
        <li>Sahtekarlık ve dolandırıcılık tespiti için gerekli durumlarda.</li>
        <li>Üçüncü taraf hizmet sağlayıcıları ile (örneğin, kargo şirketleri) sadece siparişlerinizi yerine getirebilmek için.</li>
      </ul>

      <h3 className="mt-4">4. Bilgilerinizin Güvenliği</h3>
      <p>
        Chic-Cart, kişisel bilgilerinizi korumak için endüstri standardı güvenlik önlemleri kullanmaktadır. Ancak, internet üzerinden yapılan veri iletimlerinin 
        tamamen güvenli olduğu garanti edilemez. Bu nedenle, kullanıcıların kişisel bilgilerini korumak için gerekli önlemleri almaları önemlidir.
      </p>

      <h3 className="mt-4">5. Çerezler (Cookies)</h3>
      <p>
        Chic-Cart, web sitesi kullanımını izlemek ve kullanıcı deneyimini iyileştirmek için çerezler (cookies) kullanır. Çerezler, bilgisayarınıza 
        küçük veri dosyaları yerleştirir. Bu dosyalar, web sitesi kullanımını izlememize ve kullanıcılara daha kişiselleştirilmiş deneyimler sunmamıza yardımcı olur.
      </p>

      <h3 className="mt-4">6. Bilgilerinizin Güncellenmesi</h3>
      <p>
        Kullanıcılar, kişisel bilgilerini güncelleyebilir veya düzeltebilir. Hesap bilgilerinizi güncellemek için hesabınıza giriş yaparak 
        gerekli değişiklikleri yapabilirsiniz.
      </p>

      <h3 className="mt-4">7. Yasal Haklarınız</h3>
      <p>
        Kullanıcılar, kendi kişisel verilerine erişme, düzeltme, silme ve taşıma haklarına sahiptir. Ayrıca, kişisel verilerin işlenmesine itiraz 
        etme veya kısıtlama hakkınız da vardır. Bu haklarınızı kullanmak için bizimle iletişime geçebilirsiniz.
      </p>

      <h3 className="mt-4">8. İletişim</h3>
      <p>
        Gizlilik politikamızla ilgili herhangi bir sorunuz veya endişeniz varsa, bizimle şu iletişim bilgileri üzerinden iletişime geçebilirsiniz:
      </p>
      <ul>
        <li>Email: <a href="mailto:destek@chiccart.com">destek@chiccart.com</a></li>
        <li>Telefon: +90 212 345 67 89</li>
      </ul>

      <p>
        Bu Gizlilik Politikası, Chic-Cart tarafından zaman zaman güncellenebilir. Değişiklikler, bu sayfada yayımlandığında geçerli olacaktır.
      </p>
   
    </div>
    
  );
};

export default PrivacyPolicy;
