import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { db } from "../firebase/firebaseConfig";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
const DetailsPage = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchBook = async () => {
            try {
                const bookRef = doc(db, "books", id);
                const bookSnap = await getDoc(bookRef);
                if (bookSnap.exists()) {
                    setBook({ id: bookSnap.id, ...bookSnap.data() });
                } else {
                    console.log("Kitap bulunamadı!");
                }
            } catch (error) {
                console.error("Kitap getirilirken hata oluştu:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBook();
    }, [id]);
    const handleDelete = async () => {
        try {
            await deleteDoc(doc(db, "books", id));
            navigate("/");
        } catch (error) {
            console.error("Kitap silinirken hata oluştu:", error);
        }
    };
    if (loading) return <h2>Yükleniyor...</h2>;
    if (!book) return <h2>Kitap bulunamadı.</h2>;
    return (
        <div className="container mt-4">
            <h2>{book.title}</h2>
            <img src={book.posterUrl} alt={book.title} className="img-fluid mb-3" />
            <p><strong>Yazar:</strong> {book.author}</p>
            <p><strong>Yıl:</strong> {book.year}</p>
            <p><strong>Kategori:</strong> {book.category}</p>
            <p>{book.description}</p>
            <button className="btn btn-danger" onClick={handleDelete}>
                Sil
            </button>
        </div>
    );
};
export default DetailsPage;