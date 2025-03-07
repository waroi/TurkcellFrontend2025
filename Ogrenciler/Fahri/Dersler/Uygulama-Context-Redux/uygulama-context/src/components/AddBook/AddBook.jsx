import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  addedBook,
  getPublisherId,
  getUserBooks,
} from "../../../firebase/dbController";
import { useDispatch } from "react-redux";
import { setBooks } from "../../redux/slices/bookSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicYear, setPublicYear] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title && author && publicYear && description) {
      const newBook = {
        title: title,
        author: author,
        genre: genre,
        img:
          img ||
          "https://static.wikia.nocookie.net/villains/images/3/35/Learning-language-without-grammar-education-online.jpg/revision/latest?cb=20180825053447",
        publicYear: publicYear || "Belirtilmemiş",
        description: description,
        publisherId: await getPublisherId(),
      };
      addedBook(newBook);
      dispatch(setBooks(await getUserBooks()));
      setTitle("");
      setAuthor("");
      setGenre("");
      setPublicYear("");
      setDescription("");
      setImg("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container my-4">
      <div className="row g-3">
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="📖 Kitap Adı"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="✍️ Yazar"
            required
          />
        </div>
        <div className="col-md-4">
          <input
            type="text"
            className="form-control"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="📚 Tür"
          />
        </div>
      </div>

      <div className="row g-3 mt-2">
        <div className="col-md-6">
          <input
            type="number"
            className="form-control"
            value={publicYear}
            onChange={(e) => setPublicYear(e.target.value)}
            placeholder="📅 Yayın Yılı"
            required
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            value={img}
            onChange={(e) => setImg(e.target.value)}
            placeholder="📷 Kapak Görseli URL"
          />
        </div>
      </div>

      <div className="mt-2">
        <textarea
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="📜 Açıklama"
        ></textarea>
      </div>

      <button type="submit" className="btn btn-success mt-3 w-100">
        ➕ Kitap Ekle
      </button>
    </form>
  );
};

export default AddBook;
