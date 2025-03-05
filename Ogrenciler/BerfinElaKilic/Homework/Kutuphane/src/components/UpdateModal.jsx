import { useDispatch, useSelector } from "react-redux";
import { resetBook, setUpdateBook, updateBook } from "../redux/slices/bookSlice";
import { updateBooks } from "../services/Api";

function UpdateModal() {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.book.book);
  const handleUpdateForm = (e) => {
    dispatch(setUpdateBook({ [e.target.name]: e.target.value }));
  };
  const handleSave = () => {
    dispatch(updateBook());
    updateBooks(book.id, book);
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content p-3 rounded-4 shadow-lg border-0">
          <div className="modal-header rounded-top-4">
            <h1 className="modal-title fs-4 fw-bold" id="exampleModalLabel">
              📚 Kitap Ekle
            </h1>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => dispatch(resetBook())}
            ></button>
          </div>
          <div className="modal-body">
            <form className="px-3">
              <div className="mb-3">
                <label htmlFor="title" className="form-label fw-semibold">
                  Kitap İsmi:
                </label>
                <input onChange={handleUpdateForm} 
                  type="text"
                  className="form-control rounded-3 p-2 shadow-sm"
                  id="title"
                  name="title"
                  value={book?.title}
                  placeholder="Kitap adını giriniz..."
                />
              </div>
              <div className="mb-3">
                <label htmlFor="author" className="form-label fw-semibold">
                  Kitap Yazarı:
                </label>
                <input onChange={handleUpdateForm} 
                  type="text"
                  className="form-control rounded-3 p-2 shadow-sm"
                  id="author"
                  name="author"
                  placeholder="Yazar adını giriniz..."
                  value={book?.author}
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="year" className="form-label fw-semibold">
                    Kitap Yılı:
                  </label>
                  <input onChange={handleUpdateForm} 
                    type="number"
                    className="form-control rounded-3 p-2 shadow-sm"
                    id="year"
                    name="year"
                    value={book?.year}
                    placeholder="Yayın yılını giriniz..."
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="printCount" className="form-label fw-semibold">
                    Baskı Sayısı:
                  </label>
                  <input onChange={handleUpdateForm} 
                    type="number"
                    className="form-control rounded-3 p-2 shadow-sm"
                    id="printCount"
                    name="printCount"
                    value={book?.printCount}
                    placeholder="Baskı sayısını giriniz..."
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="imgUrl" className="form-label fw-semibold">
                  Kitap Kapağı URL:
                </label>
                <input onChange={handleUpdateForm} 
                  type="text"
                  className="form-control rounded-3 p-2 shadow-sm"
                  id="imgUrl"
                  name="imgUrl"
                  value={book?.imgUrl}
                  placeholder="Kapak resminin URL'sini giriniz..."
                />
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="paperType" className="form-label fw-semibold">
                    Hamur Tipi:
                  </label>
                  <input onChange={handleUpdateForm} 
                    type="text"
                    className="form-control rounded-3 p-2 shadow-sm"
                    id="paperType"
                    name="paperType"
                    value={book?.paperType}
                    placeholder="Kağıt türünü giriniz..."
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="size" className="form-label fw-semibold">
                    Boyutu:
                  </label>
                  <input onChange={handleUpdateForm} 
                    type="text"
                    className="form-control rounded-3 p-2 shadow-sm"
                    id="size"
                    name="size"
                    value={book?.size}
                    placeholder="Boyut bilgisi giriniz..."
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label fw-semibold">
                  Kitap Açıklaması:
                </label>
                <textarea onChange={handleUpdateForm}
                  className="form-control rounded-3 p-2 shadow-sm"
                  id="description"
                  name="description"
                  rows="3"
                  value={book?.description}
                  placeholder="Kitap hakkında kısa bir açıklama giriniz..."
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-outline-secondary px-4 py-2 rounded-3"
              data-bs-dismiss="modal"
              onClick={() => dispatch(resetBook())}
            >
              Kapat
            </button>
            <button
              type="button"
              className="btn btn-warning px-4 py-2 rounded-3 fw-bold shadow"
              data-bs-dismiss="modal"
              onClick={handleSave}
            >
              Güncelle 📖
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateModal;
