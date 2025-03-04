import BookList from '../components/BookList';
import CategoryNav from '../components/CategoryNav';

export default function BookView() {
  return (
    <div className='container'>
      <CategoryNav />
      <BookList />
    </div>
  );
}
