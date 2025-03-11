import { addBlog } from "@/app/redux/slice/blogSlice"
import { BlogService } from "@/app/services/blogService"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from 'uuid';


const blogInitialState = {
    id: uuidv4(),
    title: "",
    content: "",
    author: "",
    date: new Date().toLocaleDateString('tr-TR'),
    description: "",
    poster: "",
}

const AddModal = () => {
    const [newBlog, setNewBlog] = useState(blogInitialState)
    const modalRef = useRef(null)
    const dispatch = useDispatch()

    const handleOnChange = event => {
        const { name, value } = event.target;

        setNewBlog(
            {
                ...newBlog,
                [name]: value,
                content: newBlog.description.split("").splice(0, 70).join("")
            }
        )
    }

    const handleAddBlog = async () => {
        if (!newBlog.title || !newBlog.description || !newBlog.author || !newBlog.poster) {
            alert("Lütfen tüm alanları doldurun.")
            return
        }

        const response = await BlogService.addBlog(newBlog)

        if (response.status) {
            dispatch(addBlog(newBlog))
            setNewBlog(blogInitialState)
        } else { alert("Blog eklerken bir hata oluştu bro çöz şimdi ve bunu görenlere sa") }


        modalRef.current?.classList.remove('show')
        modalRef.current?.setAttribute('aria-hidden', 'true')
        document.body.classList.remove('modal-open')
        document.querySelector('.modal-backdrop').remove()
    }

    return (
        <>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addModal">
                    Blog Ekle
                </button>
            </div>

            <div ref={modalRef} className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="addModalLabel">Blog Ekle</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating mb-3">
                                <input onChange={handleOnChange} type="text" name="title" className="form-control" id="blogTitle" placeholder="Blog Başlığı giriniz" />
                                <label htmlFor="floatingInput">Blog Başlığı</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleOnChange} type="text" name="genre" className="form-control" id="blogGenre" placeholder="Blog Türü giriniz" />
                                <label htmlFor="blogGenre">Blog Türü</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleOnChange} type="text" name="description" className="form-control" id="blogDescription" placeholder="Blog Açıklaması giriniz" />
                                <label htmlFor="blogDescription">Açıklama</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleOnChange} type="text" name="author" className="form-control" id="blogAuthor" placeholder="Yazar giriniz" />
                                <label htmlFor="blogAuthor">Yazar</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={handleOnChange} type="text" name="poster" className="form-control" id="blogPoster" placeholder="Blog Fotoğrafı(url) giriniz" />
                                <label htmlFor="blogPoster">Blog Fotoğrafı</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Kapat</button>
                            <button type="button" className="btn btn-primary" onClick={handleAddBlog}>Ekle</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddModal