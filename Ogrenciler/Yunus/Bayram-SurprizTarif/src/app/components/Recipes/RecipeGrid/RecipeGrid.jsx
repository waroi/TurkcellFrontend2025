import RecipeCard from '../RecipeCard/RecipeCard';
import styles from './../../../recipes/Recipes.module.css'

const RecipeGrid = ({ loading, filteredRecipes }) => {
    if (loading) {
        return <div className={styles.loading}>Yükleniyor...</div>;
    }

    if (filteredRecipes.length === 0) {
        return <div className={styles.noResults}>Aramanıza uygun tarif bulunamadı</div>;
    }

    return (
        <div className={styles.recipeGrid}>
            {filteredRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    )
}

export default RecipeGrid