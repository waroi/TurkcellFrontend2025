import React from 'react';
import banner1 from '../assets/banner1.jpg';
import banner2 from '../assets/banner2.jpg';
import banner3 from '../assets/banner3.jpg';

const Banner = () => {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100 img-fluid custom-height" alt="Slide 1" />
          <div class="carousel-caption d-none d-md-block">
                        <h1 className='text-black'>Çok Gezenti ile yeni maceralara atılın!</h1>
                        <p className='text-black'>Yazarlarımızın macera dolu bloglarını takip etmeyi unutmayın!.</p>
                    </div>
        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100 img-fluid custom-height" alt="Slide 2" />
          <div class="carousel-caption d-none d-md-block">
                        <h1>Çok Gezenti ile yeni maceralara atılın!</h1>
                        <p>Dünya elinizin altında!</p>
                    </div>
        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100 img-fluid custom-height" alt="Slide 3" />
          <div class="carousel-caption d-none d-md-block">
                        <h1>Çok Gezenti ile yeni maceralara atılın!</h1>
                        <p>Evinizin konforunda dünyayı keşfedin!</p>
                    </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
