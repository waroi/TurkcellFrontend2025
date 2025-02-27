import React from "react";

const BestSeller = () => {
  return (
    <>
      <section className="bestsellers bg-dark text-white" id="bestseller">
        <div className="container py-4 mx-auto">
          <h2 className="text-center my-2">Çok Satanlar</h2>
          <div className="mx-auto row">
            <div className="col-lg-4 col-md-4 col-sm-12 mb-1">
              <div className="card position-relative">
                <div className="icons position-absolute p-1">
                  <img
                    src="https://img.icons8.com/?size=35&id=P6ZYIof6BwLW&format=png&color=400106"
                    alt=""
                  />
                  <a href="map.html">
                    <img
                      src="https://img.icons8.com/?size=35&id=132&format=png&color=400106"
                      alt=""
                    />
                  </a>
                  <img
                    src="https://img.icons8.com/?size=35&id=QqQ9t0fbQ4Yw&format=png&color=400106"
                    alt=""
                  />
                  <img
                    src="https://img.icons8.com/?size=35&id=87&format=png&color=400106"
                    alt=""
                  />
                </div>
                <img
                  src="https://i.dr.com.tr/cache/600x600-0/originals/0001910701001-2.jpg"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between align-items-center">
                    Çapulcu Haritası{" "}
                    <span>
                      5{" "}
                      <img
                        src="https://img.icons8.com/?size=24&id=60003&format=png&color=f2a723"
                        alt=""
                      />
                    </span>
                  </h5>
                  <p className="card-text text-primary">30 Galleon</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card position-relative mb-1">
                <div className="icons position-absolute p-1">
                  <img
                    src="https://img.icons8.com/?size=35&id=P6ZYIof6BwLW&format=png&color=400106"
                    alt=""
                  />
                  <a href="nimbus.html">
                    <img
                      src="https://img.icons8.com/?size=35&id=132&format=png&color=400106"
                      alt=""
                    />
                  </a>
                  <img
                    src="https://img.icons8.com/?size=35&id=QqQ9t0fbQ4Yw&format=png&color=400106"
                    alt=""
                  />
                  <img
                    src="https://img.icons8.com/?size=35&id=87&format=png&color=400106"
                    alt=""
                  />
                </div>
                <img
                  src="https://m.media-amazon.com/images/I/514Lfa5ZwhL.jpg"
                  className="card-img-top img-fluid"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between">
                    Nimbus 2000{" "}
                    <span>
                      5{" "}
                      <img
                        src="https://img.icons8.com/?size=24&id=60003&format=png&color=f2a723"
                        alt=""
                      />
                    </span>
                  </h5>
                  <p className="card-text text-primary">80 Galleon</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12">
              <div className="card position-relative mb-1">
                <div className="icons position-absolute p-1">
                  <img
                    src="https://img.icons8.com/?size=35&id=P6ZYIof6BwLW&format=png&color=400106"
                    alt=""
                  />
                  <a href="hat.html">
                    <img
                      src="https://img.icons8.com/?size=35&id=132&format=png&color=400106"
                      alt=""
                    />
                  </a>
                  <img
                    src="https://img.icons8.com/?size=35&id=QqQ9t0fbQ4Yw&format=png&color=400106"
                    alt=""
                  />
                  <img
                    src="https://img.icons8.com/?size=35&id=87&format=png&color=400106"
                    alt=""
                  />
                </div>
                <img
                  src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQjKJNLHR_9YbSRxyEw-EDK1ooBsvU7hNvMwj5bMsfWftwtQ3rKq2wHPBJHtDdWe3iB2oy-DRwcXLT67M8a6X51NOBnrniLXj9D1WX5lT0"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title d-flex justify-content-between">
                    Seçmen Şapka{" "}
                    <span>
                      5{" "}
                      <img
                        src="https://img.icons8.com/?size=24&id=60003&format=png&color=f2a723"
                        alt=""
                      />
                    </span>
                  </h5>
                  <p className="card-text text-primary">2000 Galleon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSeller;
