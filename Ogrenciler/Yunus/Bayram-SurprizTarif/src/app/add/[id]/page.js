'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import ColorGrid from "@/app/components/RecipeForm/ColorGrid/ColorGrid";
import RecipeForm from "@/app/components/RecipeForm/RecipeForm";
import { useColorGrid } from "@/app/lib/hooks/useColorGrid";
import { useRequireAuth } from "@/app/lib/hooks/useRequireAuth";
import { RecipeService } from "@/app/services/RecipeService";

const AddRecipe = ({ params }) => {
    const { colorGrid, selectedColor, setSelectedColor, handleGridClick, clearGrid, setColorGrid } = useColorGrid()
    const { user, loading } = useRequireAuth()
    const router = useRouter()
    const id = params.id
    const [initialValues, setInitialValues] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchRecipe = async () => {
            if (id && id !== "new" && user) {
                try {
                    const existingRecipe = await RecipeService.getRecipeById(id)
                    if (existingRecipe) {
                        setInitialValues({
                            title: existingRecipe.title || "",
                            description: existingRecipe.description || "",
                            ingredients: existingRecipe.ingredients || "",
                            steps: existingRecipe.steps || "",
                        })

                        if (existingRecipe.colorGrid) {
                            setColorGrid(existingRecipe.colorGrid)
                        }
                    }
                } catch (error) {
                    console.error('Tarif yüklenirken hata:', error)
                }
            }
            setIsLoading(false)
        }

        if (!loading) {
            fetchRecipe()
        }
    }, [id, user, loading, setColorGrid])

    const handleSubmit = async (values) => {
        if (!user) return

        const recipeData = {
            authorId: user.uid,
            authorEmail: user.email,
            colorGrid,
            createdAt: new Date().toISOString(),
            description: values.description,
            ingredients: values.ingredients,
            steps: values.steps,
            title: values.title,
        }

        try {
            if (id !== "new") {
                const existingRecipe = await RecipeService.getRecipeById(id);

                if (existingRecipe) {
                    const currentViewedBy = Array.isArray(existingRecipe.viewedBy)
                        ? existingRecipe.viewedBy
                        : []

                    if (!currentViewedBy.includes(user.uid)) {
                        const viewedByData = {
                            viewedBy: [...currentViewedBy, user.uid],
                            viewedAt: new Date().toISOString()
                        }

                        const updateResponse = await RecipeService.updateRecipe(id, viewedByData)
                        if (!updateResponse.success) {
                            alert('Görüntülenme bilgisi güncellenirken hata oluştu')
                        }
                    }
                }
            }

            const response = await RecipeService.addRecipe(recipeData)
            if (response.success) {
                router.push(`/recipe/${response.docId}`)
            } else {
                alert('Tarif eklenirken bir hata oluştu')
            }
        } catch (error) {
            console.error('Hata:', error)
            alert('Bir hata oluştu')
        }
    }

    if (loading || (isLoading && id !== "new")) {
        return <div>Yükleniyor...</div>
    }

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{id === "new" ? "Tarif Oluştur" : "Karşı Tarif Ekle"}</h2>

            <ColorGrid
                colorGrid={colorGrid}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
                handleGridClick={handleGridClick}
                clearGrid={clearGrid}
            />

            <RecipeForm onSubmit={handleSubmit} initialValues={initialValues} />
        </div>
    )
}

export default AddRecipe