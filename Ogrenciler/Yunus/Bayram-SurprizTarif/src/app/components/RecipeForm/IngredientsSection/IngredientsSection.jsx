'use client'
import styles from "./../RecipeForm.module.css"; // You would need to create this CSS module

const IngredientsSection = ({ ingredients, formik, handleAddIngredient }) => {
    return (
        <div>
            <h3 className="text-xl font-bold my-4">İçindekiler</h3>
            {ingredients.map((ingredient, index) => (
                <div key={index} className={styles.ingredientRow}>
                    <p className="font-bold">{index + 1}. Malzeme</p>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="Malzeme"
                            value={ingredient.name}
                            onChange={(e) => {
                                const newIngredients = [...ingredients];
                                newIngredients[index].name = e.target.value;
                                formik.setFieldValue("ingredients", newIngredients);
                            }}
                            onBlur={formik.handleBlur}
                            name={`ingredients[${index}].name`}
                            className={
                                formik.touched.ingredients?.[index]?.name &&
                                    formik.errors.ingredients?.[index]?.name
                                    ? styles.inputError
                                    : ""
                            }
                        />
                        {formik.touched.ingredients?.[index]?.name &&
                            formik.errors.ingredients?.[index]?.name && (
                                <div className={styles.errorText}>
                                    {formik.errors.ingredients[index].name}
                                </div>
                            )}
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="Miktar"
                            value={ingredient.quantity}
                            onChange={(e) => {
                                const newIngredients = [...ingredients];
                                newIngredients[index].quantity = e.target.value;
                                formik.setFieldValue("ingredients", newIngredients);
                            }}
                            onBlur={formik.handleBlur}
                            name={`ingredients[${index}].quantity`}
                            className={
                                formik.touched.ingredients?.[index]?.quantity &&
                                    formik.errors.ingredients?.[index]?.quantity
                                    ? styles.inputError
                                    : ""
                            }
                        />
                        {formik.touched.ingredients?.[index]?.quantity &&
                            formik.errors.ingredients?.[index]?.quantity && (
                                <div className={styles.errorText}>
                                    {formik.errors.ingredients[index].quantity}
                                </div>
                            )}
                    </div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="Birim"
                            value={ingredient.unit}
                            onChange={(e) => {
                                const newIngredients = [...ingredients];
                                newIngredients[index].unit = e.target.value;
                                formik.setFieldValue("ingredients", newIngredients);
                            }}
                            onBlur={formik.handleBlur}
                            name={`ingredients[${index}].unit`}
                            className={
                                formik.touched.ingredients?.[index]?.unit &&
                                    formik.errors.ingredients?.[index]?.unit
                                    ? styles.inputError
                                    : ""
                            }
                        />
                        {formik.touched.ingredients?.[index]?.unit &&
                            formik.errors.ingredients?.[index]?.unit && (
                                <div className={styles.errorText}>
                                    {formik.errors.ingredients[index].unit}
                                </div>
                            )}
                    </div>
                </div>
            ))}
            {formik.touched.ingredients && formik.errors.ingredients &&
                typeof formik.errors.ingredients === 'string' && (
                    <div className={styles.errorText}>{formik.errors.ingredients}</div>
                )}
            <button type="button" onClick={handleAddIngredient} className={styles.addButton}>
                Malzemeyi Ekle
            </button>
        </div>
    );
};

export default IngredientsSection;