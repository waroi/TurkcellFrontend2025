import React from 'react'

const ModalContent = ({blog, setBlog, postBlog,deleteBlog,selectedId,setSelectId}) => {
    const deletebtn =() => {
        deleteBlog(selectedId)
        setSelectId("")
    }
  return (
    <div className="modal fade" id="contentModal" tabIndex="-1" aria-labelledby="ContentModalLabel"
                aria-hidden="true">
                <div className="modal-dialog  modal-dialog-scrollable modal-lg modal-dialog-centered">
                    <div className="modal-content bg-dark text-light">
                        <div className="modal-body">
                        <h1>{blog.title}</h1>
                        <p>{blog.text}</p>
                        </div>
                        <div className="modal-footer border-top-0">
                            <button type="button" className="btn btn-warning" data-bs-dismiss="modal">Güncelle</button>
                            <button type="button" onClick={deletebtn}className="btn btn-danger" id="deleteBlog" data-bs-dismiss="modal">Sil</button>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default ModalContent 