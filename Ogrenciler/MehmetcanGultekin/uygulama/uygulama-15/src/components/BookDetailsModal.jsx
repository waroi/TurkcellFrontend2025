import React from "react";

const BookDetailsModal = ({ isOpen, onClose, book }) => {
  console.log("seçilen kitap", book);
  return (
    <div>
      <>
        <div
          className={`modal modal-lg  ${isOpen ? "show" : ""}`}
          style={{ display: isOpen ? "block" : "none" }}
        >
          <div className="modal-dialog ">
            <div className="modal-content bg-lightPink rounded-5 border-0 p-3">
              <div className="modal-header">
                <h5 className="modal-title">Kitap Detayları</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={onClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="card bg-lightPink border-0 mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={book?.img_url}
                        className="img-fluid rounded"
                        alt={book?.title}
                      />
                    </div>
                    <div className="col-md-8 px-3  ">
                      <div className="card-body d-flex flex-column  justify-content-between h-100">
                        <h5 className="card-title">{book?.title}</h5>
                        <p className="card-text">{book?.description_long}</p>
                        <div className="d-flex justify-content-between">
                          <p className="badge px-3 py-2 rounded-pill fs-6 text-bg-orange">
                            {book?.author}
                          </p>
                          <p className="badge px-3 py-2 rounded-pill fs-6 text-bg-orange">
                            {book?.created_at.split("T")[0].slice(0, 4)}
                          </p>
                          <p className="badge px-3 py-2 rounded-pill fs-6 text-bg-orange">
                            {book?.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default BookDetailsModal;
