export default function Modal({ blog, setBlog, action }) {
  return (
    <section className="modal fade" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{action.text} Blog</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <input type="hidden" name="id" value={blog.id} />
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={blog.title}
                onInput={(event) =>
                  setBlog({ ...blog, title: event.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="author" className="form-label">
                Author
              </label>
              <input
                type="text"
                className="form-control"
                id="author"
                value={blog.author}
                onInput={(event) =>
                  setBlog({ ...blog, author: event.target.value })
                }
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">
                Content
              </label>
              <textarea
                className="form-control"
                id="content"
                rows={5}
                value={blog.content}
                onInput={(event) =>
                  setBlog({ ...blog, content: event.target.value })
                }
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">
                Image URL
              </label>
              <input
                type="text"
                className="form-control"
                id="image"
                value={blog.imageUrl}
                onInput={(event) =>
                  setBlog({ ...blog, imageUrl: event.target.value })
                }
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={action.action}
            >
              {action.text}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
