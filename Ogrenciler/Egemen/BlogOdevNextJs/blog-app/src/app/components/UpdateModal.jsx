return (
  <>
    <button
      type="button"
      className="btn btn-outline-success"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
    >
      Blog Ekle
    </button>

    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Modal title
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row g-3 needs-validation" noValidate>
              <div className="col-md-4">
                <label htmlFor="validationCustom01" className="form-label">
                  Başlık
                </label>
                <input
                  value={blog.title || ""}
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
                  value={blog.author}
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
                    value={blog.topic}
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
                  value={blog.image}
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
                  value={blog.body}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Leave a comment here"
                  name="body"
                  id="floatingTextarea"
                ></textarea>
                <label htmlFor="floatingTextarea">İçerik</label>
              </div>
              <button
                onClick={handleClick}
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Save changes
              </button>
            </form>
          </div>

          <div className="modal-footer"></div>
        </div>
      </div>
    </div>
  </>
);
