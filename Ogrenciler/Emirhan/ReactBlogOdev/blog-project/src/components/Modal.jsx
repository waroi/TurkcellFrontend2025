import React from 'react'

const Modal = ({blog, setBlog, postBlog}) => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-header border-bottom-0">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Blog Ekle</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row mb-3">
                                    <div className="col-12 mb-3 mb-lg-0">
                                        <input type="text" value={blog.title} onChange={e => setBlog({...blog, title:e.target.value})} placeholder="Blog adı..."
                                            className="form-control bg-secondary border-0 text-light custom-placeholder fs-6"
                                            id="title"/>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col-sm-12 col-lg-6 mb-3 mb-lg-0">
                                        <input type="text" value={blog.date} onChange={e => setBlog({...blog, date:e.target.value})} placeholder="Blog tarihi..."
                                            className="form-control bg-secondary border-0 text-light custom-placeholder fs-6"
                                            id="date"/>
                                    </div>
                                    <div className="col-sm-12 col-lg-6">
                                        <input type="text" value={blog.author} onChange={e => setBlog({...blog, author:e.target.value})} placeholder="Yazar..."
                                            className="form-control bg-secondary border-0 text-light custom-placeholder fs-6"
                                            id="author"/>
                                    </div>
                                </div>
                                <div className="">
                                    <textarea rows="5" value={blog.text} onChange={e => setBlog({...blog, text:e.target.value})} placeholder="İçerik..."
                                        className="form-control bg-secondary border-0 text-light custom-placeholder fs-6"
                                        id="text"></textarea>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer border-top-0">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">İptal</button>
                            <button type="button" onClick={postBlog} className="btn btn-primary" id="saveblog" data-bs-dismiss="modal">Kaydet</button>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Modal