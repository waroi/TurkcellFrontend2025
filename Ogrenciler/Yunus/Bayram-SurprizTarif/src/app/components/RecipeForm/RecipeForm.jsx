'use client'
import { useRecipeForm } from "@/app/lib/hooks/useRecipeForm";
import FormFields from "./FormFields/FormFields";
import IngredientsSection from "./IngredientsSection/IngredientsSection";
import styles from "./RecipeForm.module.css";
import StepsSection from "./StepsSection/StepsSection";

const RecipeForm = ({ onSubmit }) => {
    const { formik, handleAddIngredient, handleAddStep } = useRecipeForm(onSubmit);

    return (
        <form onSubmit={formik.handleSubmit}>
            <FormFields formik={formik} />

            <IngredientsSection
                ingredients={formik.values.ingredients}
                formik={formik}
                handleAddIngredient={handleAddIngredient}
            />

            <StepsSection
                steps={formik.values.steps}
                formik={formik}
                handleAddStep={handleAddStep}
            />

            <button type="submit" className={styles.submitButton}>Tarifi Paylaş</button>
        </form>
    );
};

export default RecipeForm;