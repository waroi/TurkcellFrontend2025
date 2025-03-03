const CardPlaceholder = () => {
  return (
    <div className='container my-5'>
      <div className='row'>
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className='col-12'>
            <div className='card mb-3 bg-light'>
              <div className='row g-0'>
                <div className='col-md-4'>
                  <div
                    className='placeholder col-12 bg-secondary'
                    style={{ height: '200px' }}
                  ></div>
                </div>
                <div className='col-md-8'>
                  <div className='card-body'>
                    <h5 className='card-title placeholder-glow'>
                      <span className='placeholder col-6'></span>
                    </h5>
                    <p className='card-text placeholder-glow'>
                      <span className='placeholder col-8'></span>
                      <span className='placeholder col-10'></span>
                    </p>
                    <div className='d-flex justify-content-between'>
                      <h5 className='card-title placeholder-glow'>
                        <span className='placeholder col-6'></span>
                      </h5>
                      <a className='btn btn-secondary disabled placeholder col-2 '></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPlaceholder;
