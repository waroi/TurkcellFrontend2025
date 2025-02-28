import angelWing1 from "../../../public/images/angel-wing-1-tra.png";
import butterflyWing1 from "../../../public/images/butterfly-wing-1-tra.png";
import fairyWing1 from "../../../public/images/fairy-wing-1-t.png";

const CarouselComponent = () => {
  return (
    <section className="banner py-4">
      <div className="container">
        <div id="wingsCarousel" className="carousel slide w-100">
          <div className="carousel-indicators mb-0">
            <button
              type="button"
              data-bs-target="#wingsCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#wingsCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#wingsCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row justift-content-between align-items-center px-5">
                <div className="order-2 order-md-1 col-md-5">
                  <h2 className="text-info fw-bolder display-4">
                    Peri Kanat Tasarımları
                  </h2>
                  <p className="text-secondary fw-bold lh-lg">
                    Hayal gücünüzü serbest bıarakın ve sihrin kanatlarınızda
                    canlandığını hissedin! Parıltılı ve hafif yapısıyla peri
                    kanatları, sizi hayallerin ötesine taşıyacak. Uçarken her
                    adımınızda büyü dolu bir dünya yaratın!
                  </p>
                </div>
                <div className="col-md-7 order-1 order-md-2">
                  <div className="carousel-image ratio ratio-1x1">
                    <img
                      src={fairyWing1}
                      className="w-100"
                      alt="fairy-wings-design"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justift-content-between align-items-center px-5">
                <div className="order-2 order-md-1 col-md-5 text-dark">
                  <h5 className="text-info fw-bolder display-4">
                    Melek Kanat Tasarımları
                  </h5>
                  <p className="text-secondary fw-bold lh-lg">
                    Saflık ve zarafeti bir arada taşıyan melek kanatlarıyla
                    gökyüzüne huzurla dokunun. Estetik tasarımı ve güçlü
                    yapısıyla her uçuşta kendinizi özgür hissedeceksiniz.
                    Gökyüzünde bir melek gibi süzülmeye hazır olun!
                  </p>
                </div>
                <div className="carousel-image order-1 order-md-2 col-md-7">
                  <div className="carousel-image ratio ratio-1x1">
                    <img
                      src={angelWing1}
                      className="w-100"
                      alt="angel-wing-design"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justift-content-between align-items-center px-5">
                <div className="order-2 order-md-1 col-md-5">
                  <h5 className="text-info fw-bolder display-4">
                    Kelebek Kanat Tasarımları
                  </h5>
                  <p className="text-secondary fw-bold lh-lg">
                    Doğanın güzelliğini kanatlarınızda hissedin! Renkli ve zarif
                    kelebek kanatlarıyla gökyüzünde dans ederken herkesi
                    büyüleyin. Hafifliği ve enerjisiyle uçuşlarınız bir sanat
                    eserine dönüşecek!
                  </p>
                </div>
                <div className="order-1 order-md-2 col-md-7">
                  <div className="carousel-image ratio ratio-1x1">
                    <img
                      src={butterflyWing1}
                      className="w-100"
                      alt="fire-wing-design"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev justify-content-start "
            type="button"
            data-bs-target="#wingsCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next justify-content-end "
            type="button"
            data-bs-target="#wingsCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon btn-primary"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
