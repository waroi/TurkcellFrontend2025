const AddBlogModal = ({ blog, updateBlog, addBlog, removeTag, setBlog }) => {
    return (
        <div className="modal fade" id="blogModal" tabIndex="-1" aria-labelledby="blogModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="blogModalLabel">Yeni Blog Ekle</h1>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={addBlog}>
                            <div className="form-floating mb-3">
                                <input type="text" value={blog.title} onChange={updateBlog} className="form-control" id="title" placeholder="Title" />
                                <label htmlFor="title">Başlık</label>
                            </div>

                            <div className="form-floating mb-3">
                                <textarea className="form-control" onChange={updateBlog} value={blog.description} placeholder="Bir Açıklama Girin" id="description" />
                                <label htmlFor="description">Açıklama</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" value={blog.category} onChange={updateBlog} className="form-control" id="category" placeholder="Kategori" />
                                <label htmlFor="category">Kategori</label>
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
                                                const updatedTags = [...blog.tags, tagValue];
                                                setBlog({
                                                    ...blog,
                                                    tags: updatedTags
                                                });
                                                event.target.value = '';
                                            }
                                        }
                                    }}
                                    id="tags"
                                    placeholder="Etiketler(Entere'a basın)"
                                />
                                <label htmlFor="tags">Etiketler(Entere'a basın)</label>
                                {blog.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="badge rounded-pill text-bg-primary me-1"
                                        onClick={() => removeTag(index)}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" value={blog.image_url} onChange={updateBlog} className="form-control" id="image_url" placeholder="Görsel URL" />
                                <label htmlFor="image_url">Görsel URL</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="text" value={blog.author} onChange={updateBlog} className="form-control" id="author" placeholder="Yazar" />
                                <label htmlFor="author">Yazar</label>
                            </div>

                            <div className="modal-footer border-0">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Vazgeç</button>
                                <button type="submit" className="btn btn-primary">Kaydet</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlogModal;