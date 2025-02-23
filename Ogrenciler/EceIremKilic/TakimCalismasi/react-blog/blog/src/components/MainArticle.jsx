import React from "react";

const MainArticle = () => {
  return (
    <section className="mainArticleSection mt-1 py-5" id="pop-blog">
      <div className="container d-flex align-items-center justify-content-center">
        <div className="row w-75">
          <div className="col-lg-6 ">
            <img
              src="https://diyetisyengamzealtinay.com/wp-content/uploads/2020/08/2-scaled-e1667822217416-640x822.jpg"
              alt="food-img"
              className="main-article-logo img-fluid border-0 rounded-5"
            />
          </div>
          <div className="col-lg-6">
            <p className="badge rounded-pill px-3 py-2 mt-2 text-bg-primary flex-end">
              Yemek
            </p>
            <h4 className="text-dark fs-3 text-uppercase fw-bolder mb-3">
              Evde Sağlıklı Yemek Tarifleri
            </h4>
            <p className="text-muted mb-4">
              Günümüzde sağlıklı beslenme giderek daha fazla önem kazanıyor.
              Fast food ve işlenmiş gıdaların yaygınlaşmasıyla birlikte insanlar
              evde daha sağlıklı ve doğal...
            </p>
            <div className="d-flex align-items-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQGcnFAMs-OVDg/profile-displayphoto-shrink_200_200/B4DZPbnWuLHUAc-/0/1734556348739?e=1745452800&v=beta&t=rdzgExb4q8liQ27W3zSkuzP4qQiVhUz02imXX2V7TBY"
                className="p-0 img-fluid rounded-circle avatar me-2"
                alt=""
              />
              <div className="articlePostDetail d-flex flex-column justify-content-center">
                <p className="mb-0">By → Ece</p>
                <p className="text-muted date-text mb-0">13 Ağustos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainArticle;
