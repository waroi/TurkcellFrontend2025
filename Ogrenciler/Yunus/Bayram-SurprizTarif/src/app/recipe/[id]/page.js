'use client'
import { useParams, useRouter } from "next/navigation";
import styles from "./RecipeView.module.css";
import Link from "next/link";
import { useRequireAuth } from "@/app/lib/hooks/useRequireAuth";
import { useRecipe } from "@/app/lib/hooks/useRecipe";

const RecipeView = () => {
    const params = useParams()
    const router = useRouter()
    const { user, loading: authLoading } = useRequireAuth()
    const { recipe, loading, error, showAddRecipeMessage } = useRecipe(params, user, authLoading, router)

    if (authLoading || loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loadingSpinner}></div>
                <p>Tarif yükleniyor...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className={styles.errorContainer}>
                <h2>Hata</h2>
                <p>{error}</p>
                <div className="d-flex gap-3 justify-content-center">
                    {error.includes("Lütfen önce giriş yapın") && (
                        <Link href="/login" className={`${styles.backButton} text-decoration-none`}>
                            Giriş Yap
                        </Link>
                    )}
                    <Link href="/" className={`${styles.backButton} text-decoration-none`}>
                        Geri Dön
                    </Link>
                </div>
            </div>
        )
    }

    if (showAddRecipeMessage) {
        return (
            <div className={styles.errorContainer}>
                <p className={styles.showMessage}>Görmek için karşılık olarak bir tarif ekleyin:</p>
                <div className="d-flex flex-column gap-3">
                    <Link href={`/add/${params.id}`} className={`${styles.backButton} text-decoration-none w-25 mx-auto`}>
                        Tarif Ekle (/add/{params.id})
                    </Link>
                    <Link href="/" className={`${styles.backButton} text-decoration-none w-25 mx-auto`}>
                        Ana Sayfaya Dön
                    </Link>

                </div>
            </div>
        )
    }

    if (!recipe) return null;

    const formatDate = (timestamp) => {
        if (!timestamp) return "";

        if (timestamp.seconds && timestamp.nanoseconds) {
            const date = new Date(timestamp.seconds * 1000);
            return date.toLocaleDateString('tr-TR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }

        if (typeof timestamp === 'string') {
            return timestamp;
        }

        return new Date(timestamp).toLocaleDateString('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>{recipe.title}</h1>
                <div className={styles.meta}>
                    <span className={styles.author}>{recipe.authorName}</span>
                    <span className={styles.date}>{formatDate(recipe.createdAt)}</span>
                </div>
            </div>

            <div className={styles.colorGridContainer}>
                <div className={styles.colorGrid}>
                    {recipe.colorGrid && recipe.colorGrid.map((color, index) => (
                        <div
                            key={index}
                            className={styles.gridItem}
                            style={{ backgroundColor: color }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className={styles.description}>
                <p>{recipe.description}</p>
            </div>

            <div className={styles.content}>
                <div className={styles.ingredients}>
                    <h2>Malzemeler</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index} className={styles.ingredient}>
                                <span className={styles.ingredientQuantity}>
                                    {ingredient.quantity} {ingredient.unit}
                                </span>
                                <span className={styles.ingredientName}>
                                    {ingredient.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={styles.steps}>
                    <h2>Hazırlanışı</h2>
                    <ol>
                        {recipe.steps.map((step, index) => (
                            <li key={index} className={styles.step}>
                                <div className={styles.stepNumber}>{step.order}</div>
                                <div className={styles.stepDescription}>{step.description}</div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default RecipeView