import React from "react";
import {
  CarouselButton,
  IndicatorButton,
} from "../../atoms/buttons/CarouselButton";
import CarouselItem from "../../molecules/carouselItem/CarouselItem";

const Carousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel carousel-dark slide"
    >
      <div className="carousel-indicators">
        <IndicatorButton
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <IndicatorButton data-bs-slide-to="1" aria-label="Slide 2" />
        <IndicatorButton data-bs-slide-to="2" aria-label="Slide 3" />
      </div>
      <div className="carousel-inner mb-4 ">
        <CarouselItem
          src="/cr1.jpg"
          head={"İnsan Odaklı Yaşam Alanları"}
          text={
            "Daha az beton, daha çok doğa… Geleceğin şehirleri dev gökdelenlerden ziyade insanı ve doğayı kucaklayan, sürdürülebilir ve minimalist yapılarla dolu."
          }
          className="carousel-item active"
        ></CarouselItem>
        <CarouselItem
          head={"İnsan ve Makinenin Dansı"}
          text={
            "Her hareketimiz bir algoritma tarafından analiz ediliyor, her kararımız yapay zeka ile destekleniyor."
          }
          src="/cr2.jpg"
          className="carousel-item"
        ></CarouselItem>

        <CarouselItem
          src="/cr3.jpg"
          head={"Geleceğin şehirleri gökyüzüne uzanıyor."}
          text={
            "Yolların yerini havada süzülen araçlar alırken, gökdelenler birer sanat eseri gibi yükseliyor. İnsanlık, sınırlarını teknolojiyle yeniden tanımlıyor"
          }
          className="carousel-item"
        ></CarouselItem>
      </div>
      <CarouselButton className="carousel-control-prev" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </CarouselButton>
      <CarouselButton className="carousel-control-next" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </CarouselButton>
    </div>
  );
};

export default Carousel;
