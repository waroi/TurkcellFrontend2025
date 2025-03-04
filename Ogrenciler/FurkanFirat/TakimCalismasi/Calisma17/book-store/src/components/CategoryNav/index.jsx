import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../redux/slices/booksSlice";

export default function CategoryNav() {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.books.category);

  const categories = [
    "All Books",
    "Fiction",
    "Non-Fiction",
    "Biography",
    "History",
    "Romance Novel",
    "Horror",
    "Crime",
  ];
  return (
    <div className="mb-3">
      <h1 className="fs-2 mb-3">OVERVIEW</h1>
      <div className="categoryNav d-flex flex-column flex-md-row fs-5 gap-2">
        {categories.map((category, index) => (
          <span
            key={index}
            className={`btn rounded-pill d-flex justify-content-center align-items-center 
              ${
                activeCategory === category
                  ? "text-bg-warning border-black"
                  : "text-bg-dark"
              }`}
            onClick={() => dispatch(setCategory(category))}
          >
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}
