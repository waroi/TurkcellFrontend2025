import { useEffect, useState } from "react";
import { RecipeService } from "@/app/services/RecipeService";

export const useAddRecipe = (id, user, loading, setColorGrid) => {
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

    return { initialValues, isLoading }
}