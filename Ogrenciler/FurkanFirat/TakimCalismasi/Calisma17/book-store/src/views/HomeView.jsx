import BookCarousel from '../components/BookCarousel';
import BookList from '../components/BookList';
import CategoryNav from '../components/CategoryNav';

export default function HomeView() {
  return (
    <>
      <BookCarousel />
      <div className='container'>
        <CategoryNav />
        <BookList />
      </div>
    </>
  );
}
