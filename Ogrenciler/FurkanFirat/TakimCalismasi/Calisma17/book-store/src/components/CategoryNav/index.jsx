import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/slices/booksSlice';
import { useState } from 'react';

export default function CategoryNav() {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.books.category);
  const [menuOpen, setMenuOpen] = useState(false);

  const categories = [
    'All Books',
    'Fiction',
    'Non-Fiction',
    'Biography',
    'History',
    'Romance Novel',
    'Horror',
    'Crime',
  ];

  return (
    <div className='mb-3'>
      <h1 className='fs-2 mb-3'>OVERVIEW</h1>

      <button
        className='btn btn-warning d-lg-none mb-2'
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? 'Hide Categories' : 'Show Categories'}
      </button>

      <div
        className={`categoryNav d-flex flex-column flex-lg-row fs-5 gap-2 ${
          menuOpen ? 'd-flex' : 'd-none d-lg-flex'
        }`}
      >
        {categories.map((category, index) => (
          <span
            key={index}
            className={`btn rounded-pill d-flex justify-content-center align-items-center 
              ${
                activeCategory === category
                  ? 'text-bg-warning border-black'
                  : 'text-bg-dark'
              }`}
            onClick={() => {
              dispatch(setCategory(category));
              setMenuOpen(false);
            }}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}
