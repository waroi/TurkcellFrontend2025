import React from "react";

const BaseModal = ({ ...props }) => {
  return (
    <>
      <div
        className="modal fade"
        id={props.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-3 rounded-4 shadow-lg border-0">
            <div className="modal-header rounded-top-4">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {props.title}
              </h1>
              <Button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></Button>
            </div>
            <div className="modal-body">
              <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-4">
                  <label htmlFor="validationCustom01" className="form-label">
                    Başlık
                  </label>
                  <input
                    value={props.blog.title || ""}
                    onChange={handleChange}
                    type="text"
                    name="title"
                    className="form-control"
                    id="validationCustom01"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="validationCustom02" className="form-label">
                    Yazar
                  </label>
                  <input
                    disabled
                    value={user.displayName}
                    onChange={handleChange}
                    name="author"
                    type="text"
                    className="form-control"
                    id="validationCustom02"
                    required
                  />
                  <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-4">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Konu
                  </label>
                  <div className="input-group has-validation">
                    <input
                      value={props.blog.topic}
                      onChange={handleChange}
                      type="text"
                      className="form-control"
                      id="validationCustomUsername"
                      name="topic"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <div className="invalid-feedback">
                      Please choose a username.
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="validationCustom03" className="form-label">
                    Resim URL
                  </label>
                  <input
                    value={props.blog.image}
                    onChange={handleChange}
                    type="text"
                    name="image"
                    className="form-control"
                    id="validationCustom03"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid city.
                  </div>
                </div>

                <div className="form-floating col-12">
                  <textarea
                    value={props.blog.body}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Leave a comment here"
                    name="body"
                    id="floatingTextarea"
                  ></textarea>
                  <label htmlFor="floatingTextarea">İçerik</label>
                </div>
              </form>
            </div>

            <div className="modal-footer d-flex justify-content-center">
              <Button
                onClick={handleClick}
                type="submit"
                className="btn btn-warning px-4 py-2 rounded-3 fw-bold shadow"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Kaydet
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseModal;
