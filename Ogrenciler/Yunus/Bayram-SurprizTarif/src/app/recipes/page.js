'use client'

import styles from './Recipes.module.css';
import { useRecipes } from '../lib/hooks/useRecipes';
import Header from '../components/Recipes/Header/Header';
import SearchBar from '../components/Recipes/SearchBar/SearchBar';
import Stats from '../components/Recipes/Stats/Stats';
import RecipeGrid from '../components/Recipes/RecipeGrid/RecipeGrid';

const Recipes = () => {
    const {
        loading,
        searchTerm,
        selectedCategory,
        filteredRecipes,
        handleSearchChange
    } = useRecipes()

    return (
        <div className={styles.container}>
            <Header />

            <div className={styles.filterSection}>
                <SearchBar
                    searchTerm={searchTerm}
                    handleSearchChange={handleSearchChange}
                />
                <Stats />
            </div>

            <div className={styles.recipesSection}>
                <h3 className={styles.recipesTitle}>
                    {selectedCategory ? 'Kategoriye Göre Tarifler' : 'Tüm Tarifler'}
                </h3>

                <RecipeGrid
                    loading={loading}
                    filteredRecipes={filteredRecipes}
                />
            </div>
        </div>
    )
}

export default Recipes