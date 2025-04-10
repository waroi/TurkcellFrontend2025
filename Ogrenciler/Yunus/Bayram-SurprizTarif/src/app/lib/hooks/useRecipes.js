'use client'

import { RecipeService } from '@/app/services/RecipeService';
import { useState, useEffect } from 'react';

export const useRecipes = () => {
    const [recipes, setRecipes] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const recipeList = await RecipeService.getAllRecipes()
                const formattedRecipes = recipeList.map(recipe => ({
                    ...recipe,
                    createdAt: recipe.createdAt?.toDate ? recipe.createdAt.toDate().toLocaleDateString('tr-TR') : recipe.createdAt
                }))
                setRecipes(formattedRecipes)
            } catch (error) {
                console.error('Tarifler getirilirken hata:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchRecipes()
    }, [selectedCategory])

    const filteredRecipes = recipes.filter(recipe =>
        (recipe.title && recipe.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (recipe.description && recipe.description.toLowerCase().includes(searchTerm.toLowerCase()))
    )

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    }

    return {
        recipes,
        loading,
        searchTerm,
        selectedCategory,
        filteredRecipes,
        handleSearchChange,
        handleCategoryChange
    }
}