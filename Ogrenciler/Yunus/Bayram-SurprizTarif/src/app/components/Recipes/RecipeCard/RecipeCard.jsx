import Link from 'next/link';
import styles from './../../../recipes/Recipes.module.css'

const RecipeCard = ({ recipe }) => {
    return (
        <Link href={`/recipe/${recipe.id}`}>
            <div className={styles.recipeCard}>
                <div className={styles.colorGridMini}>
                    {recipe.colorGrid && recipe.colorGrid.map((color, index) => (
                        <div
                            key={index}
                            className={styles.gridItemMini}
                            style={{ backgroundColor: color }}
                        ></div>
                    ))}
                </div>
                <div className={styles.recipeContent}>
                    <h4 className={styles.recipeTitle}>{recipe.title || 'İsimsiz Tarif'}</h4>
                    <p className={styles.recipeDescription}>
                        {recipe.description ?
                            (recipe.description.length > 80 ?
                                `${recipe.description.substring(0, 80)}...` :
                                recipe.description) :
                            'Açıklama yok'}
                    </p>
                    <div className={styles.recipeAuthor}>
                        <span>Şef: </span>
                        {recipe.authorEmail}
                    </div>
                    <div className={styles.recipeDetails}>
                        <div className={styles.recipeDate}>{recipe.createdAt}</div>
                        <div className={styles.ingredientCount}>
                            {recipe.ingredients ? recipe.ingredients.length : 0} malzeme
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RecipeCard