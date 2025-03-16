export default function DetailCard({ blog }) {
  return (
    <div className='card mb-4 blog-card'>
      <div className='gradient text-white text-center py-4'>
        <h1 className='display-9 mb-2'>{blog.title}</h1>
        <p className='lead mb-0'>{blog.date}</p>
      </div>

      <div className='card-body p-0'>
        <div className='row g-0'>
          <div className='col-lg-6 blog-image-container'>
            <img
              src={blog.image}
              alt={blog.title}
              className='img-fluid blog-image'
            />
          </div>
          <div className='col-lg-6 p-4 blog-content'>
            <div className='d-flex align-items-center mb-4'>
              <span className='badge bg-secondary me-2'>Blog</span>
              <p className='mb-0 color-grey'>
                <i className='bi bi-person-fill me-1'></i>
                {blog.author}
              </p>
            </div>

            <p className='lead color-grey mb-4'>{blog.detail}</p>

            <div className='blog-body'>
              <p className='color-grey'>{blog.content}</p>
            </div>
          </div>
        </div>
      </div>

      <div className=' card-footer bg-white text-center py-4 border-0'>
        <a
          href='/'
          className='btn gradient btn-primary btn-lg px-4 back-button'
        >
          <i className='bi bi-arrow-left me-2'></i>Ana Sayfaya Dön
        </a>
      </div>
    </div>
  );
}
