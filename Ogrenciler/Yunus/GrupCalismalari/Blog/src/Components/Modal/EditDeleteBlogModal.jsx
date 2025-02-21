const EditDeleteBlogModal = ({ activePost, setActivePost, updateBlogPost, deleteBlogPost }) => {
    if (!activePost) return '';

    return (
        <div className="modal fade" id="editDeleteModal" tabIndex="-1" aria-labelledby="editDeleteModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="editDeleteModalLabel">
                            Düzenle: {activePost.title}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={(event) => {
                            event.preventDefault();
                            updateBlogPost(activePost.id);
                        }}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    value={activePost.title}
                                    onChange={(event) => setActivePost({ ...activePost, title: event.target.value })}
                                    className="form-control"
                                    id="edit-title"
                                    placeholder="Title"
                                />
                                <label htmlFor="edit-title">Başlık</label>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea
                                    className="form-control"
                                    onChange={(event) => setActivePost({ ...activePost, description: event.target.value })}
                                    placeholder="Bir Açıklama Girin"
                                    id="edit-description"
                                    value={activePost.description}
                                ></textarea>
                                <label htmlFor="edit-description">Açıklama</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    value={activePost.category}
                                    onChange={(event) => setActivePost({ ...activePost, category: event.target.value })}
                                    className="form-control"
                                    id="edit-category"
                                    placeholder="Kategori"
                                />
                                <label htmlFor="edit-category">Kategori</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className="form-control mb-2"
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            event.preventDefault();
                                            const tagValue = event.target.value.trim();

                                            if (tagValue) {
                                                setActivePost({
                                                    ...activePost,
                                                    tags: [...activePost.tags, tagValue]
                                                });
                                                event.target.value = '';
                                            }
                                        }
                                    }}
                                    id="edit-tags"
                                    placeholder="Etiketler(Entere'a basın)"
                                />
                                <label htmlFor="edit-tags">Etiketler(Entere'a basın)</label>
                                {activePost.tags && activePost.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="badge rounded-pill text-bg-primary me-1"
                                        onClick={() => {
                                            const newTags = [...activePost.tags];
                                            newTags.splice(index, 1);
                                            setActivePost({ ...activePost, tags: newTags });
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    value={activePost.image_url}
                                    onChange={(event) => setActivePost({ ...activePost, image_url: event.target.value })}
                                    className="form-control"
                                    id="edit-image_url"
                                    placeholder="Görsel URL"
                                />
                                <label htmlFor="edit-image_url">Görsel URL</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    value={activePost.author}
                                    onChange={(event) => setActivePost({ ...activePost, author: event.target.value })}
                                    className="form-control"
                                    id="edit-author"
                                    placeholder="Yazar"
                                />
                                <label htmlFor="edit-author">Yazar</label>
                            </div>

                            <div className="d-flex justify-content-between">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => deleteBlogPost(activePost.id)}
                                >
                                    Sil
                                </button>
                                <button type="submit" className="btn btn-success">Güncelle</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditDeleteBlogModal;