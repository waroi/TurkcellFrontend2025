import { useDispatch, useSelector } from "react-redux";
import {
  resetBlog,
  setUpdateBlog,
  updateBlog,
} from "../redux/slices/blogSlice";
import { updateApiBlog } from "../../../services/Api";
import { updateFbBlog } from "../../../firebase/dbController";

function UpdateModal() {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blog.blog);
  const handleUpdateForm = (e) => {
    dispatch(setUpdateBlog({ [e.target.name]: e.target.value }));
  };
  const handleSave = async () => {
    try {
      console.log("Güncellenen blog:", blog);
      await updateFbBlog(blog);
      dispatch(updateBlog());
      console.log("Blog güncelleme başarılı");
    } catch (error) {
      console.error("Blog güncellenirken hata oluştu:", error);
    }
    // updateApiBlog(blog.id, blog);
  };

  return (
    <>
      <div
        className="modal fade"
        id="updateBlogModal"
        tabIndex="-1"
        aria-labelledby="updateBlogModalLabel"
        aria-hidden="true"
        data-bs-backdrop="static"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content p-3 rounded-4 shadow-lg border-0">
            <div className="modal-header rounded-top-4">
              <h1
                className="modal-title fs-4 fw-bold"
                id="updateBlogModalLabel"
              >
                📚 Blog Düzenle
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => dispatch(resetBlog())}
              ></button>
            </div>
            <div className="modal-body">
              <form className="px-3">
                <div className="mb-3">
                  <label htmlFor="blogTitle" className="form-label fw-semibold">
                    Blog İsmi:
                  </label>
                  <input
                    onChange={handleUpdateForm}
                    type="text"
                    className="form-control rounded-3 p-2 shadow-sm"
                    id="blogTitle"
                    name="title"
                    value={blog?.title}
                    placeholder="Kitap adını giriniz..."
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="blogAuthor"
                    className="form-label fw-semibold"
                  >
                    Blog Yazarı:
                  </label>
                  <input
                    onChange={handleUpdateForm}
                    type="text"
                    className="form-control rounded-3 p-2 shadow-sm"
                    id="blogAuthor"
                    name="author"
                    placeholder="Yazar adını giriniz..."
                    value={blog?.author}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label
                      htmlFor="printTopic"
                      className="form-label fw-semibold"
                    >
                      Blog Konusu:
                    </label>
                    <input
                      onChange={handleUpdateForm}
                      type="text"
                      className="form-control rounded-3 p-2 shadow-sm"
                      id="blogTopic"
                      name="topic"
                      placeholder="Yazar adını giriniz..."
                      value={blog?.topic}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="blogCoverUrl"
                    className="form-label fw-semibold"
                  >
                    Blog Kapağı URL:
                  </label>
                  <textarea
                    onChange={handleUpdateForm}
                    type="text"
                    className="form-control rounded-3 p-2 shadow-sm"
                    id="blogCoverUrl"
                    name="image"
                    value={blog?.image}
                    rows="2"
                    placeholder="Kapak resminin URL'sini giriniz..."
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="blogCoverUrl"
                    className="form-label fw-semibold"
                  >
                    Blog İçeriği:
                  </label>
                  <textarea
                    onChange={handleUpdateForm}
                    type="text"
                    className="form-control rounded-3 p-2 shadow-sm"
                    id="blogCoverUrl"
                    name="body"
                    rows="3"
                    value={blog?.body}
                    placeholder="Blog İcerigini Giriniz..."
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-outline-secondary px-4 py-2 rounded-3"
                data-bs-dismiss="modal"
                onClick={() => dispatch(resetBlog())}
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
    </>
  );
}

export default UpdateModal;
