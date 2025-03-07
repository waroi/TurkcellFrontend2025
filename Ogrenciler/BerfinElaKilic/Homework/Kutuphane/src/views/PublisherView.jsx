import { getOneUser, getPublisherBooks } from "../services/Api";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addAllBook,
  addOneUser,
  setUpdateBook,
} from "../redux/slices/bookSlice";
import BookCard from "../components/BookCard";
import NavBar from "../components/NavBar";
const PublisherView = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.book.user);
  const books = useSelector((state) => state.book.books);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchOneUser = async () => {
      const data = await getOneUser(id);
      const books2 = await getPublisherBooks(data.publisher);
      dispatch(addOneUser(data));
      dispatch(addAllBook(books2));
      dispatch(setUpdateBook({ publisher: data.publisher }));
    };
    fetchOneUser();
  }, []);

  return (
    <>
    <NavBar isAdmin={true}/>
    <div className="container">
      <h2 className="text-center fw-bold mb-3 p-3">{user.publisher}</h2>
      <div className="row g-3">
        {books?.map((book) => (
          <BookCard key={self.crypto.randomUUID()} book={book} isAdmin={true} />
        ))}
      </div>
    </div>
    </>
  );
};

export default PublisherView;
