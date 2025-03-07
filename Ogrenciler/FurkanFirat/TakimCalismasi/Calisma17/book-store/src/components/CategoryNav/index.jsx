import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../redux/slices/booksSlice';
import { useState } from 'react';

const categoryIcons = {
  'All Books': 'bi-grid',
  Fiction: 'bi-journal-richtext',
  'Non-Fiction': 'bi-journal-text',
  Biography: 'bi-person-lines-fill',
  History: 'bi-hourglass-split',
  'Romance Novel': 'bi-heart',
  Horror: 'bi-moon',
  Crime: 'bi-shield-fill-exclamation',
};

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
    <div className='mb-4 category-container bg-white rounded-3 p-4 mb-5'>
      <div className='d-flex flex-column flex-lg-row justify-content-between align-items-center mb-3'>
        <h1 className='fs-2 mb-0 fw-bold text-dark'>
          <i className='bi bi-book-half me-2 text-orange'></i>
          OVERVIEW
        </h1>

        <button
          className='btn btn-orange d-lg-none rounded-pill shadow-sm'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className={`bi ${
              menuOpen ? 'bi-chevron-up' : 'bi-chevron-down'
            } me-1`}
          ></i>
          {menuOpen ? 'Hide Categories' : 'Show Categories'}
        </button>
      </div>

      <div
        className={`categoryNav d-lg-flex ${menuOpen ? 'd-flex' : 'd-none'} 
                  flex-wrap gap-2 justify-content-start pb-2 transition-all`}
      >
        {categories.map((category, index) => (
          <button
            key={index}
            className={`btn rounded-pill fw-medium px-3 py-2 shadow-sm hover-effect
                      ${
                        activeCategory === category
                          ? 'text-white category-active'
                          : 'text-dark category-inactive'
                      }`}
            onClick={() => {
              dispatch(setCategory(category));
              setMenuOpen(false);
            }}
          >
            <i className={`bi ${categoryIcons[category]} me-1`}></i>
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
