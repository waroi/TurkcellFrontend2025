import { useSelector } from 'react-redux';
import {useEffect} from 'react'
import './App.css'
import { getBooks } from './services/Api';
import { useDispatch } from 'react-redux';
import { addAllBook } from './redux/slices/bookSlice';
import BookCard from './components/BookCard';
import NavBar from './components/NavBar';

function App() {
  const books = useSelector((state)=> state.book.books)
  const dispatch = useDispatch();
  useEffect(() => {
      const fetchBooks = async () => {
        const data = await getBooks();
        dispatch(addAllBook(data));
      }
      fetchBooks();
    }, []);

  return (
    <>
        <NavBar/>
        <div className='container'>
          <div className="row g-3">
          {books.map((book) => (
          <BookCard key={self.crypto.randomUUID()} book={book}/>
        ))}
          </div>
        </div>
        
    </>
  )
}

export default App
