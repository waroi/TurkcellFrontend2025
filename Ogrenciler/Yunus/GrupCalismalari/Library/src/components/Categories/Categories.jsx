import React from "react";

const Categories = ({ books, selectedCategory, setSelectedCategory }) => {
    const categories = [...new Set(books.map((book) => book.genre))];

    return (
        <div className="categories-container d-flex gap-2 flex-wrap mb-4">
            <button
                className={`btn ${selectedCategory === "" ? "btn-primary" : "btn-outline-primary"}`}
                onClick={() => setSelectedCategory("")}
            >
                Tüm Kitaplar
            </button>
            {categories.map((category) => (
                <button
                    key={category}
                    className={`btn ${selectedCategory === category ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setSelectedCategory(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default Categories;
