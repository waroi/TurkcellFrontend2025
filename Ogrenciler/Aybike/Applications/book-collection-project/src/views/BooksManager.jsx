import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const BooksManager = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userUID, setUserUID] = useState(null);
  const [books, setBooks] = useState([]);
  const [bookTitle, setBookTitle] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookDescription, setBookDescription] = useState("");

  useEffect(() => {
    const uid = localStorage.getItem("userUID");
    if (uid) {
      setUserUID(uid);
    }
  }, []);

  useEffect(() => {
    if (userUID) {
      loadBooks();
    }
  }, [userUID]);

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    if (email === "publisher@example.com" && password === "password123") {
      const uid = "canYayinlari123";
      localStorage.setItem("userUID", uid);
      setUserUID(uid);
      alert("Giriş başarılı!");
    } else {
      setError("Geçersiz email veya şifre.");
    }
  };

  const handleAddBook = () => {
    if (!userUID) {
      alert("Lütfen giriş yapın.");
      return;
    }

    const newBook = {
      id: new Date().toISOString(),
      title: bookTitle,
      genre: bookGenre,
      author: bookAuthor,
      description: bookDescription,
      publisherId: userUID,
    };

    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    storedBooks.push(newBook);
    localStorage.setItem("books", JSON.stringify(storedBooks));
    setBooks([...storedBooks]);

    console.log("Kitap eklendi:", newBook);
    console.log("Tüm kitaplar:", storedBooks);

    setBookTitle("");
    setBookGenre("");
    setBookAuthor("");
    setBookDescription("");
    loadBooks();
  };

  const loadBooks = () => {
    const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
    const userBooks = storedBooks.filter((book) => book.publisherId === userUID);
    setBooks(userBooks);
    console.log("Yüklenen kitaplar:", userBooks);
  };

  return (
    <div className="container mt-5">
      {!userUID ? (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4">
              <h2 className="text-center">Login</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h3>Kitap Yönetimi</h3>
          <div className="mb-3">
            <h4>Kitap Ekle</h4>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Kitap Başlığı"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Kitap Türü"
              value={bookGenre}
              onChange={(e) => setBookGenre(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Yazar Adı"
              value={bookAuthor}
              onChange={(e) => setBookAuthor(e.target.value)}
            />
            <textarea
              className="form-control mb-2"
              placeholder="Kitap Açıklaması"
              value={bookDescription}
              onChange={(e) => setBookDescription(e.target.value)}
            />
            <button
              type="button"
              className="btn btn-success w-100"
              onClick={handleAddBook}
            >
              Kitap Ekle
            </button>
          </div>

          <h4>Yayınevinin Kitapları</h4>
          <ul className="list-group">
            {books.length > 0 ? (
              books.map((book) => (
                <li className="list-group-item" key={book.id}>
                  <h5>{book.title}</h5>
                  <p>{book.genre} - {book.author}</p>
                </li>
              ))
            ) : (
              <li className="list-group-item">Henüz kitap eklenmemiş.</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default BooksManager;


