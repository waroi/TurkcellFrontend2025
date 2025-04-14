'use client'
import styles from "./../RecipeForm.module.css"; // You would need to create this CSS module

const FormFields = ({ formik }) => {
    return (
        <>
            <div className={styles.formGroup}>
                <input
                    type="text"
                    placeholder="Başlık"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.touched.title && formik.errors.title ? styles.inputError : ""}
                />
                {formik.touched.title && formik.errors.title && (
                    <div className={styles.errorText}>{formik.errors.title}</div>
                )}
            </div>

            <div className={styles.formGroup}>
                <textarea
                    placeholder="Açıklama"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={formik.touched.description && formik.errors.description ? styles.inputError : ""}
                ></textarea>
                {formik.touched.description && formik.errors.description && (
                    <div className={styles.errorText}>{formik.errors.description}</div>
                )}
            </div>
        </>
    );
};

export default FormFields;