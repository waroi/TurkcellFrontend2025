import { faPen } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BlogItem = ({ blog, setActivePost }) => {
    return (
        <div className="col-lg-6 my-3">
            <div className="card h-100">
                <div className="row g-0 h-100">
                    <div
                        className="col-md-4"
                        data-bs-toggle="modal"
                        data-bs-target="#addModal"
                        onClick={() => setActivePost(blog)}
                    >
                        <img
                            src={blog.image_url}
                            className="img-fluid rounded-start h-100 w-100"
                            alt={blog.title}
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body d-flex flex-column justify-content-between h-100">
                            <div
                                className="blog-info h-100 d-flex flex-column justify-content-between"
                            >
                                <div className="d-flex justify-content-between align-items-start">
                                    <h5
                                        className="card-title cursor"
                                        data-bs-toggle="modal"
                                        data-bs-target="#addModal"
                                        onClick={() => setActivePost(blog)}
                                    >
                                        {blog.title}
                                    </h5>
                                    <button
                                        className="btn btn-sm ms-2 d-flex btn-outline-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editDeleteModal"
                                        onClick={() => setActivePost(blog)}
                                    >
                                        <span className='me-2'><FontAwesomeIcon icon={faPen} /></span>
                                        Düzenle </button>
                                </div>
                                <p
                                    className="card-text my-4 cursor"
                                    data-bs-toggle="modal"
                                    data-bs-target="#addModal"
                                    onClick={() => setActivePost(blog)}
                                >
                                    {blog.description.split(' ').slice(0, 25).join(' ') + '...'}
                                </p>
                                <p className="card-text">
                                    <small className="text-body-secondary">
                                        Eklenme Tarihi: {blog.date}
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogItem