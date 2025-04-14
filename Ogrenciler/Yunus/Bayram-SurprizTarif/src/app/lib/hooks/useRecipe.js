import { useEffect, useState } from "react";
const { RecipeService } = require("@/app/services/RecipeService");

export const useRecipe = (params, user, authLoading, router) => {
    const [recipe, setRecipe] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [showAddRecipeMessage, setShowAddRecipeMessage] = useState(false)

    useEffect(() => {
        const checkAndFetchRecipe = async () => {
            try {
                if (authLoading) return

                if (!user) {
                    setError("Lütfen önce giriş yapın")
                    setLoading(false)
                    return
                }

                const recipeId = params.id;
                if (!recipeId || typeof recipeId !== "string") {
                    throw new Error(`Geçersiz recipe ID: ${recipeId}`)
                }

                setLoading(true);
                const recipeData = await RecipeService.getRecipeById(recipeId)

                if (!recipeData) {
                    setError("Tarif bulunamadı")
                    return
                }

                const viewedBy = Array.isArray(recipeData.viewedBy) ? recipeData.viewedBy : []
                const authorId = recipeData.authorId

                if (authorId !== user.uid && !viewedBy.includes(user.uid)) {
                    setShowAddRecipeMessage(true)
                    return null
                }

                setRecipe(recipeData)
            } catch (err) {
                setError(`Tarif yüklenirken bir hata oluştu: ${err.message}`)
                console.error("Hata detayları:", err)
            } finally {
                setLoading(false)
            }
        }

        checkAndFetchRecipe();
    }, [params.id, user, authLoading, router])

    return { recipe, loading, error, showAddRecipeMessage }
}