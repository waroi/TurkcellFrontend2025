export default function BookCard({ book }) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 d-flex justify-content-center align-items-center">
      <div className="bookCard">
        <div className="object-fit-cover">
          <img
            src="https://img.kitapyurdu.com/v1/getImage/fn:12016505/wh:true/wi:220"
            alt=""
          />
        </div>
        <p>{book.title}</p>
        <p>
          <span className="text-secondary text-decoration-line-through">
            {book.author}
          </span>
          <span> 99₺</span>
        </p>
      </div>
    </div>
  );
}
