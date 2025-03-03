export default function NewsCard({ article }) {
  return (
    <div className='row my-5'>
      <div className='col-12 mb-4'>
        <div className='card border-0 shadow-sm hover-card h-100'>
          <div className='row g-0'>
            <div className='col-md-4'>
              <div className='h-100' style={{ overflow: 'hidden' }}>
                <img
                  src={
                    article.urlToImage ||
                    'https://admin.kolpobd.com/images/news/news.png'
                  }
                  className='img-fluid rounded-start h-100 image-hover-effect news-card-img'
                  alt={article.title || 'Default Image'}
                />
              </div>
            </div>
            <div className='col-md-8'>
              <div className='card-body d-flex flex-column h-100'>
                <div>
                  <div className='d-flex justify-content-between align-items-center mb-2'>
                    <span className='badge bg-secondary'>
                      {new Date(article.publishedAt).toLocaleDateString(
                        'tr-TR',
                        {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        }
                      )}
                    </span>
                    <span className='badge bg-primary'>
                      {article.source?.name || 'News'}
                    </span>
                  </div>
                  <h5 className='card-title fw-bold'>{article.title}</h5>
                  <p className='card-text text-muted'>
                    {article.description || 'No description available'}
                  </p>
                </div>
                <div className='mt-auto'>
                  <div className='d-flex justify-content-between align-items-center'>
                    {
                      <small className='text-muted'>
                        Yazar: {article.author || 'Anonim'}
                      </small>
                    }
                    <a
                      href={article.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='btn btn-outline-primary'
                    >
                      Devamını oku
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
