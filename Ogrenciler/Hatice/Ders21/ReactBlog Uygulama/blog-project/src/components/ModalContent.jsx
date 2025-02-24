import React from 'react'

const ModalContent = ({ blog, setBlog, postBlog, deleteBlog, selectedId, setSelectId }) => {
    const deletebtn = () => {
        deleteBlog(selectedId)
        setSelectId("")
    }
    return (
        <div className="modal fade" id="contentModal" tabIndex="-1" aria-labelledby="ContentModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-scrollable modal-lg modal-dialog-centered">
                <div className="modal-content bg-dark text-light border-0 shadow-lg">
                    <div className="modal-header text-white" style={{ backgroundColor: '#343a40' }}>
                        <h5 className="modal-title">{blog.title}</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body bg-light text-dark">
                        <p>{blog.text}</p>
                        <p className="text-muted">
                            <strong>Yazar:</strong> {blog.author} | <strong>Tarih:</strong> {blog.date}
                        </p>
                    </div>
                    <div className="modal-footer border-top-0">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Güncelle</button>
                        <button type="button" onClick={deletebtn} className="btn btn-danger" data-bs-dismiss="modal">Sil</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModalContent 