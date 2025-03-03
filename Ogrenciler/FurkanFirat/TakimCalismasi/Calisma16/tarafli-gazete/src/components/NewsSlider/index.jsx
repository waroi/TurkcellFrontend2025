const NewsSlider = ({ news }) => {
  return (
    <div className='container mb-3'>
      <div
        id='carouselExampleCaptions'
        className='carousel slide'
        data-bs-ride='carousel'
      >
        <div className='carousel-indicators'>
          {news.map((_, index) => (
            <button
              key={index}
              type='button'
              data-bs-target='#carouselExampleCaptions'
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className='carousel-inner'>
          {news.map((newsItem, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
            >
              <a href={newsItem.url} target='_blank'>
                <img
                  src={newsItem.urlToImage}
                  className='d-block w-100'
                  alt={newsItem.title}
                />
              </a>
              <div className='carousel-caption d-none d-md-block carousel-info'>
                <h5>{newsItem.title}</h5>
                <p>{newsItem.author}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className='carousel-control-prev'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button
          className='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleCaptions'
          data-bs-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;
