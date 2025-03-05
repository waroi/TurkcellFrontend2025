export default function BookCard({ book }) {
  const discountedPrice = book.price * 0.8;
  const defaultImage =
    'https://peoplesblog.co.in/sri-vedanta-swarajya-sangam/assets/img/books/default.jpeg';
  const imageSrc = book.coverImage || defaultImage;

  return (
    <div className='col-lg-3 col-md-4 col-sm-6 col-xs-12 gy-3 '>
      <div className='bookCard shadow-sm h-100'>
        <div className='book-cover position-relative'>
          <span className='badge bg-secondary position-absolute'>
            {book.category}
          </span>
          <img
            src={imageSrc}
            alt={`Cover of ${book.title}`}
            className='object-fit-cover w-100 h-100'
            onError={(e) =>
              (e.target.src =
                'https://peoplesblog.co.in/sri-vedanta-swarajya-sangam/assets/img/books/default.jpeg')
            }
          />
        </div>
        <div className='book-details p-2'>
          <h5 className='book-title mb-1'>{book.title}</h5>
          <p className='book-author text-muted mb-2'>{book.author}</p>
          <div className='book-pricing'>
            <div>
              <span className='original-price text-secondary text-decoration-line-through me-2'>
                {book.price}₺
              </span>
              <span className='discounted-price fw-bold text-primary'>
                {Math.round(discountedPrice)}₺
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
