import Typography from "../Atoms/Typography";

function PackagesCarouselCardBodyData() {
    const UnlimitedCardOneBodyItemData = [
        {
          timeExpires: "1 Ay",
          price: "680 ₺",
          canceledPrice: "",
          discount: "",
          installment: "",
        },
        {
          timeExpires: "3 Ay",
          price: "1800 ₺",
          canceledPrice: "",
          discount: "",
          installment: "3 taksit imkanı ile",
        },
        {
          timeExpires: "6 Ay",
          price: "2720 ₺",
          canceledPrice: "3400 ₺",
          discount: "%20",
          installment: "4 taksit imkanı ile",
        },
      ];
    
      const LimitedCardOneBodyItemData = [
        {
          timeExpires: "Ultimate Gece",
          price: "290 ₺",
          canceledPrice: "",
          discount: "",
          installment: "01:00 ile 13:00 arası",
        }
      ];

      const UnlimitedCardTwoBodyItemData = [
        {
          timeExpires: "11 + 1 Ay",
          price: "1720 ₺",
          canceledPrice: "2880",
          discount: "%40",
          installment: "3 taksit imkanı ile",
        },
        {
          timeExpires: "6 Ay",
          price: "940 ₺",
          canceledPrice: "1580",
          discount: "40%",
          installment: "",
        },
        {
          timeExpires: "1 Ay",
          price: "340 ₺",
          canceledPrice: "",
          discount: "",
          installment: "",
        },
        {
          timeExpires: "1 Hafta",
          price: "150 ₺",
          canceledPrice: "",
          discount: "",
          installment: "",
        },
      ];
    
      const LimitedCardTwoBodyItemData = [
        {
          timeExpires: "Performance Gündüz",
          price: "170 ₺",
          canceledPrice: "",
          discount: "",
          installment: "07:00 ile 18:00 arası",
        }
      ];

      const CardBodyTypeTwoData = [
        {
          dataType: "geforce",
          header: "Ücretsiz Deneme",
          desc: "Haftalık 8 Saat Kullanım",
          featuresList: (<>
          <ul>
            <li>Öncelikli Erişim</li>
            <li>4 saatlik oturum süresi</li>
            <li>GeForce RTX On</li>
            <li>KAMPANYA KAPASİTE İLE SINIRLIDIR*</li>
          </ul>
          </>),
          featuresDesc: "1 yıl içerisinde Performance paket satın alan kullanıcılar bu kampanyadan faydalanamaz. GAME+ kampanyayı erken sonlandırabilir.*"
        },
        {
          dataType: "ubisoft",
          timeExpires: "1 Ay",
          canceledPrice: "639 ₺",
          price: "499 ₺",
          featuresList: (<>
          <Typography variant="h4">GeFroce Now Performance</Typography>
          <ul>
            <li>1440P QHD</li>
            <li>60FPS’e kadar</li>
            <li>GeForce RTX On</li>
            <li>6 Saatlik Oturum Süresi</li>
          </ul>
          <Typography variant="h4">Ubisoft+ Premium</Typography>
          <ul>
            <li>Çapraz Platform: PC, Xbox</li>
            <li>120+ oyun</li>
            <li>Birçok oyunda premium sürüm</li>
            <li>Yeni oyunlara ilk gün erişim</li>
            <li>Oyunlar ve DLC'lerde %20 indirim</li>
            <li>Oyun içi satın alımlarda %10 indirim</li>
            <li>Aylık ödüller</li>
            <li>3.parti / F2P / Bağımsız oyunlar</li>
          </ul>
          </>),
          featuresDesc: "Ubisoft+ Cloud Play çoklu bir paket olup Ubisoft+ Premium ve GeForce NOW Performance aboneliklerini içerir. Bu paket kampanyalı bir pakettir, aylık ücretlendirilir. Dönem sonu geldiğinde aboneliğini başlattığın kart üzerinden 575 TL/ay olarak ücretlendirilecektir. GAME+ kampanyayı erken sonlandırma hakkına sahiptir."
        },
        {
          dataType: "geforce",
          header: "Ücretsiz",
          desc: "Yoğun saatlerde bu pakete sahip kullanıcılar sınırlı kapasite nedeniyle kuyrukta bekleyebilir.",
          featuresList: (<>
          <ul>
            <li>Standart Erişim</li>
            <li>30 Dakikalık oturum süresi</li>
          </ul>
          </>),
          featuresDesc: "Oturum süresi maksimum 30 dakikadır. 30 dakika sonrasında sistemden otomatik çıkış olur. Bir gün içerisinde dilediğiniz kadar oturum açabilirsiniz. Basic paket, platformda bulunan oyunların tümünü desteklememektedir."
        },
      ];
      
  return {UnlimitedCardOneBodyItemData, LimitedCardOneBodyItemData, UnlimitedCardTwoBodyItemData, LimitedCardTwoBodyItemData, CardBodyTypeTwoData}
}

export default PackagesCarouselCardBodyData