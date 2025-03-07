import React from 'react'
import { useDispatch } from 'react-redux'
import { removeBook } from '../../redux/slice/librarySlice'
import { useNavigate } from 'react-router'
import { FireStore } from '../../api/fireStore'

const DeleteModal = ({ book }) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handeDelete = () => {
        FireStore.deleteBook((book.id))
        dispatch(removeBook(book.id))
        navigate('/')
    }

    return (
        <>
            <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="deleteModalLabel">
                                {book.title} Adlı kitabı silmek istediğinize emin misiniz?
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        {/* <div className="modal-body">
                            geri getiremezsin haA!
                            buraları düzeltelim lütfen :D unutmayalım
                        </div> */}
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Vazgeç</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={handeDelete} >Sil</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteModal