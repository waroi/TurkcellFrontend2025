"use client"

const BlogFormFields = ({ title, setTitle, content, setContent, author, poster, setPoster, userInfo }) => {
    return (
        <>
            <div className="form-group">
                <label className="form-label">Başlık:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Blog başlığını girin"
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Yazar:</label>
                <input
                    type="text"
                    disabled
                    value={userInfo.username}
                    placeholder="Blog yazarını girin"
                    className="form-input bg-dark"
                />
            </div>

            <div className="form-group">
                <label className="form-label">Afiş (Poster):</label>
                <input
                    type="text"
                    value={poster}
                    onChange={(e) => setPoster(e.target.value)}
                    placeholder="Afiş bağlantısını girin"
                    className="form-input"
                />
            </div>

            <div className="form-group">
                <label className="form-label">İçerik:</label>
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Blog içeriğini yazın"
                    className="form-textarea"
                />
            </div>
        </>
    )
}

export default BlogFormFields