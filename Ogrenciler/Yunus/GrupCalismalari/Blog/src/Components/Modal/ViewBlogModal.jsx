const ViewBlogModal = ({ activePost }) => {
    return (
        <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="addModalLabel">
                            {activePost && activePost.title}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {activePost ? (
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={activePost.image_url}
                                        className="img-fluid w-100" alt={activePost.title} />
                                </div>
                                <div className="col-md-6">
                                    <h3>{activePost.title}</h3>
                                    <p>{activePost.description}</p>
                                    <p className="text-muted">Yazar: {activePost.author}</p>
                                    <p className="text-muted">Eklenme Tarihi: {activePost.date}</p>
                                    <p>Kategori: {activePost.category}</p>
                                    <div>
                                        {activePost.tags && activePost.tags.map((tag, index) => (
                                            <span key={index} className="badge rounded-pill text-bg-primary me-1">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <p>Detayını görmek istediğiniz postu seçin :)</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewBlogModal;