import { useFormik } from "formik";
import { recipeFormValidationSchema } from "../schemas/validationSchemas";

export const useRecipeForm = (onSubmit) => {
    const formik = useFormik({
        initialValues: {
            title: "",
            description: "",
            ingredients: [],
            steps: [],
        },
        validationSchema: recipeFormValidationSchema,
        onSubmit,
    })

    const handleAddIngredient = () => {
        formik.setFieldValue("ingredients", [
            ...formik.values.ingredients,
            { name: "", quantity: "", unit: "" },
        ])
    }

    const handleAddStep = () => {
        formik.setFieldValue("steps", [
            ...formik.values.steps,
            { description: "", order: formik.values.steps.length + 1 },
        ])
    }

    return {
        formik,
        handleAddIngredient,
        handleAddStep
    }
}