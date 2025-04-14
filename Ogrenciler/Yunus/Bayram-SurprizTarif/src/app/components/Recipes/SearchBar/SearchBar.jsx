import styles from './../../../recipes/Recipes.module.css'

const SearchBar = ({ searchTerm, handleSearchChange }) => {
    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                placeholder="Tarif ara..."
                className={styles.searchInput}
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <button className={styles.searchButton}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.searchIcon}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </button>
        </div>
    )
}

export default SearchBar