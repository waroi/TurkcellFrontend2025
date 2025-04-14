import React from 'react'
import Typography from '../Atoms/Typography';
import Button from '../Atoms/Button';
import Image from 'next/image';

function CarouselData() {
      const carouselData = [
    { 
      url: "/img/carousel/6_ay_ultimate_indirim_web.webp",
      header: "Türkçe Dil Desteği İle Benzersiz Bir Hikaye!",
      desc: "Kingdom Come: Deliverance II Geforce NOW'da",
      buttonText: "Hemen Oyna!"
    },
    { 
      url: "/img/carousel/assassins_creed_web.webp",
      header: "Feodal Japonya’da Geçen Epik Bir Macera",
      desc: "Sürükleyici hikayeyi şimdi deneyimle!",
      buttonText: "Şimdi deneyimle!"
    },
    { 
      url: "/img/carousel/deneme_web.webp",
      header: "Şimdi dene!",
      desc: "Yeni kullanıcılara büyük fırsat",
      buttonText: "Fırsatı kaçırma!"
    },
    { 
      url: "/img/carousel/indirim_mobile_v2.webp",
      header: "%40 İndirim Fırsatı!",
      desc: "GeForce NOW’da Beklenen İndirim!",
      buttonText: "Fırsatı Kaçırma!"
    },
    { 
      url: "/img/carousel/kingdom-come-2-web.webp",
      header: "Türkçe Dil Desteğiyle Benzersiz Bir Hikaye!",
      desc: "Kingdom Come: Deliverance II GeForce NOW’da",
      buttonText: "Hemen Oyna!"
    },
    { 
      url: "/img/carousel/ultimate-gfn-web.webp",
      header: "RTX 4080 ve 4K Desteğiyle GeForce NOW Ultimate",
      desc: "Bulut oyun dünyası level atlıyor!",
      buttonText: "Paketleri İncele"
    },
    { 
      url: "/img/carousel/youtube-kampanya-web.webp",
      header: "GeForce NOW’da şimdi YouTube zamanı!",
      desc: "GeForce NOW Performance paketlerinden birini alana, 2 ay YouTube Premium hediye!",
      buttonText: "Hemen Kap!"
    }
  ];
  
  const carouselElement = carouselData.map((carouselItem, index) => (
    <div key={index} className="flex-shrink-0 w-full relative">
      <div className="flex items-center justify-center w-full">
        <div className="relative">
          <Image
            height={800}
            width={1200}
            src={carouselItem.url}
            alt={`carousel-image-${index}`}
            className="w-full h-auto"
          />
          <div className="absolute bottom-15 left-10 text-white pl-4">
            <Typography variant="h2" className="mb-3">{carouselItem.header}</Typography>
            <Typography variant="p" className="mb-10">{carouselItem.desc}</Typography>
            <Button className="relative">{carouselItem.buttonText}</Button>
          </div>
        </div>
      </div>
    </div>
  ));

  return { carouselData, carouselElement };
}

export default CarouselData