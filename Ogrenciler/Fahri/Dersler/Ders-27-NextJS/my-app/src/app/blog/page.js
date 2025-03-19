"use client"

import FunSection from "../components/FuncSection/FunSection"
import "./BlogList.css"
import BlogHeader from "../components/BlogHeader/BlogHeader";
import BlogGrid from "../components/BlogGrid/BlogGrid";
import { useBlogData } from "../utils/hooks/useBlogData";

const BlogList = () => {
  const {
    status,
    filteredBlogs,
    categories,
    searchTerm,
    selectedCategory,
    handleSearch,
    handleCategoryChange
  } = useBlogData();

  return (
    <div className="blog-list-container">
      <BlogHeader status={status} />

      <div className="blog-filters">
        <div className="search-container">
          <input
            type="text"
            placeholder="Blog ara..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filter">
          {categories && categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {filteredBlogs && filteredBlogs.length > 0 ? (
        <BlogGrid blogs={filteredBlogs} />
      ) : (
        <div className="no-results">
          {searchTerm || selectedCategory !== "Tümü" ?
            "Aramanızla eşleşen blog bulunamadı." :
            "Bloglar yükleniyor..."}
        </div>
      )}

      <FunSection />
    </div>
  )
}

export default BlogList