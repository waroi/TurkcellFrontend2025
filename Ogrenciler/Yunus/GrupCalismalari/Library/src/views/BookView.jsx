import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Storage } from '../utils/storage'
import BreadCrumb from '../components/BreadCrumb/BreadCrumb'
import DeleteModal from '../components/Modals/DeleteModal'
import EditModal from '../components/Modals/EditModal'
import { FireStore } from '../api/fireStore'
import { Auth } from '../api/auth'

const BookView = () => {
    const { bookId } = useParams()
    const [book, setBook] = useState({})
    const [refreshTrigger, setRefreshTrigger] = useState(0)
    const [userData, setUserData] = useState(null)
    const [publisherName, setPublisherName] = useState('')

    useEffect(() => {
        const getUserData = async () => {
            try {
                const user = await Auth.getCurrentUser()
                if (user) {
                    setUserData(user);
                    const userData = await Auth.fetchUserByUid(user.uid)
                    const publisherNameValue = userData.publisherName
                    setPublisherName(publisherNameValue)
                } else {
                    console.log('KULLANICI YOK KANKA')
                }
            } catch (error) {
                console.error("Kullanıcı verisi alınırken hataaaaaaaaa", error)
            }
        }
        getUserData()
    }, []);

    const getBookDetails = async () => setBook(await FireStore.getBookWithId(bookId))


    useEffect(() => {
        getBookDetails()
    }, [bookId, refreshTrigger])

    return (
        <div className='container'>
            <BreadCrumb path={['Kitaplar']} last={book.title} />

            {book.publisherName === publisherName &&
                <div className="book-buttons d-flex flex-wrap justify-content-end gap-1 align-items-center">
                    <button data-bs-toggle="modal" data-bs-target="#deleteModal" className="btn btn-danger">Delete</button>
                    <button data-bs-toggle="modal" data-bs-target="#editModal" className="btn btn-primary">Düzenle</button>
                </div>
            }

            <div className="flex-wrap d-flex justify-content-between align-items-centers"></div>
            <div className="d-flex flex-column">

                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 text-center">
                        <img src={book.posterUrl} className='img-fluid w-75' alt={book.title} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <h1>{book.title}</h1>
                        <p>{book.description}</p>
                        <p>Yazar: {book.author} </p>
                        <p>Yayın Yılı: {book.publishedYear} </p>
                        <p>Tür: {book.genre} </p>
                        <p>Yayınevi: {<span className='fw-bold'>{book.publisherName}</span>} </p>
                    </div>
                </div>
            </div>

            <DeleteModal book={book} />
            <EditModal refreshTrigger={refreshTrigger} setRefreshTrigger={setRefreshTrigger} book={book} />
        </div>
    )
}

export default BookView