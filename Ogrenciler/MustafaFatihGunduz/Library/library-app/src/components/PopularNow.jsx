import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const PopularNow = () => {
  const [threeBook, setThreeBook] = useState([]);
  const { books } = useSelector((state) => state.book);
  useEffect(() => {
    getOnlyThreeBooks();
  }, [books]);
  const getOnlyThreeBooks = () => {
    const book = books.slice(3, 6);
    setThreeBook(book);
  };
  return (
    <section className="w-100 mx-5 mt-5" id="popular">
      <h3 className="mx-5 py-2">Şimdi Popüler</h3>
      <div className="container section py-5 mb-5 d-flex flex-column justify-content-center">
        <div className="row">
          {threeBook.length > 0 ? (
            threeBook.map((book, index) => (
              <div className="col-md-4 h-100" key={book.id}>
                <div
                  className={`${
                    index % 2 === 0 ? "card-first py-3" : "card rounded-3"
                  }`}
                >
                  <div className="card-body">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="card-image">
                          <img src={book.image} alt="" />
                        </div>
                      </div>
                      <div className="col-md-8 py-3 d-flex flex-column justify-content-between">
                        <h6 className="card-title">{book.title}</h6>
                        <p className="card-text py-2">
                          <span>{book.author}</span>
                          <span className="d-block">{book.releaseDate}</span>
                        </p>
                        <div className="star">
                          <span>
                            <i className="fa-solid fa-star checked"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star checked"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star checked"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star checked"></i>
                          </span>
                          <span>
                            <i className="fa-solid fa-star checked"></i>
                          </span>
                          <span>(5.0)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h3>Kitap Bulunamadı</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularNow;
