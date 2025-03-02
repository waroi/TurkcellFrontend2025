const CardContainer = ({ news }) => {
  return (
    <>
      <div className="row ">
        {news.map((neww, index) => {
          return (
            <div className="col-md-6 col-lg-4 mb-3">
              <div key={index} class="card h-100">
                <img
                  src={neww.image}
                  className="card-img-top  ratio ratio-4x3"
                  alt={neww.name}
                />
                <div class="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 class="card-title" title={neww.name}>
                      {neww.name}
                    </h5>
                    <p class="card-text">{neww.description}</p>
                  </div>
                  <div>
                    <p className="card-text">
                      <small className="text-body-secondary">
                        Tarih: {neww.date.slice(0, 11)}
                      </small>
                    </p>
                    <a
                      href={neww.url}
                      className="btn btn-secondary"
                      target="_blank"
                    >
                      Detaylar İçin Tıklayın
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
