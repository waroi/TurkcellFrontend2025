import { useState } from "react";

export const useColorGrid = () => {
    const [colorGrid, setColorGrid] = useState(Array(36).fill("#ffffff"))
    const [selectedColor, setSelectedColor] = useState("#ff0000")

    const handleGridClick = (index) => {
        const newGrid = [...colorGrid]
        newGrid[index] = selectedColor
        setColorGrid(newGrid)
    }

    const clearGrid = () => {
        setColorGrid(Array(36).fill("#ffffff"))
    }

    return {
        colorGrid,
        selectedColor,
        setSelectedColor,
        handleGridClick,
        clearGrid
    }
}