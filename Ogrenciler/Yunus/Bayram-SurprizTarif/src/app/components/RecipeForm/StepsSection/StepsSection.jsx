'use client'
import styles from "./StepSection.module.css";

const StepsSection = ({ steps, formik, handleAddStep }) => {
    return (
        <div>
            <h3 className="text-xl font-bold my-4">Tarif Hazırlaması</h3>
            {steps.map((step, index) => (
                <div key={index} className={styles.stepRow}>
                    <div className={styles.stepNumber}>{index + 1}</div>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="Adım açıklaması"
                            value={step.description}
                            onChange={(e) => {
                                const newSteps = [...steps];
                                newSteps[index].description = e.target.value;
                                formik.setFieldValue("steps", newSteps);
                            }}
                            onBlur={formik.handleBlur}
                            name={`steps[${index}].description`}
                            className={
                                formik.touched.steps?.[index]?.description &&
                                    formik.errors.steps?.[index]?.description
                                    ? styles.inputError
                                    : ""
                            }
                        />
                        {formik.touched.steps?.[index]?.description &&
                            formik.errors.steps?.[index]?.description && (
                                <div className={styles.errorText}>
                                    {formik.errors.steps[index].description}
                                </div>
                            )}
                    </div>
                </div>
            ))}
            {formik.touched.steps && formik.errors.steps &&
                typeof formik.errors.steps === 'string' && (
                    <div className={styles.errorText}>{formik.errors.steps}</div>
                )}
            <button type="button" onClick={handleAddStep} className={styles.addButton}>
                Aşama Ekle
            </button>
        </div>
    );
};

export default StepsSection;