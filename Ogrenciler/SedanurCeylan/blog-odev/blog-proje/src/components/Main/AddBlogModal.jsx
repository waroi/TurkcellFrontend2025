import React, { useState } from 'react';

const AddBlogModal = ({ showModal, closeModal, addNewPost }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleTitleChange = (e) => setTitle(e.target.value);
    const handleBodyChange = (e) => setBody(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && body) {
            addNewPost({ title, body });
            setTitle('');
            setBody('');
            closeModal();
        }
    };

    return (
        <div className={`modal fade ${showModal ? 'show d-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Yeni Blog Yazısı Ekle</h5>
                        <button type="button" className="close" onClick={closeModal}>
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Başlık:</label>
                                <input type="text" className="form-control" value={title} onChange={handleTitleChange} required />
                            </div>
                            <div className="form-group">
                                <label>İçerik:</label>
                                <textarea className="form-control" value={body} onChange={handleBodyChange} required></textarea>
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-success">Blog Ekle</button>
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Kapat</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBlogModal;
